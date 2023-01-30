load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        questions = []
        x,y,z,x1,x2,x3 = var("x y z x_1 x_2 x_3")

        nums = [n for n in range(-9,10) if abs(n)>1]
        shuffle(nums)
        a,b = nums[:2]
        v = column_matrix(vector(QQ,nums[2:4]))
        w = column_matrix(vector(QQ,nums[4:6]))
        offsets = [
            column_matrix(vector(QQ,[choice([-3,-2,-1,1,2,3]),0])),
            column_matrix(vector(QQ,[0,choice([-3,-2,-1,1,2,3])])),
        ]
        shuffle(offsets)

        questions.append({
            "simp_lin_combo": True,
            "a": a,
            "b": b,
            "v": v,
            "w": w,
            "choices": choices_from_list([
                a*v+b*w,
                a*v+b*w+offsets[0],
                a*v+b*w+offsets[1],
                a*v+b*w+offsets[0]+offsets[1],
            ]),
        })

        nums = [n for n in range(-9,10) if abs(n)>1]
        shuffle(nums)
        a,b = nums[:2]
        v = column_matrix(vector(QQ,nums[2:4]))
        w = column_matrix(vector(QQ,nums[4:6]))
        offsets = [
            column_matrix(vector(QQ,[choice([-3,-2,-1,1,2,3]),0])),
            column_matrix(vector(QQ,[0,choice([-3,-2,-1,1,2,3])])),
        ]
        shuffle(offsets)

        questions.append({
            "dist_lin_combo": True,
            "a": a,
            "v": v,
            "w": w,
            "choices": choices_from_list([
                a*v+a*w,
                a*v+a*w+offsets[0],
                a*v+a*w+offsets[1],
                a*v+a*w+offsets[0]+offsets[1],
            ]),
        })

        nums = [n for n in range(-6,7) if abs(n)>1]
        shuffle(nums)
        v = column_matrix([x,y])
        xterm = nums[6]*x
        yterm = nums[7]*y
        equation = CheckIt.shuffled_equation(
            xterm,
            yterm,
            -xterm(x=nums[0])-yterm(y=nums[1])
        )
        invalids = [
            column_matrix(nums[i:i+2])
            for i in range(1,8)
            if xterm(x=nums[0])+yterm(y=nums[1])!=xterm(x=nums[i])+yterm(y=nums[i+1])
        ][:3]
        candidates = [
            column_matrix(nums[:2])
        ]+invalids


        questions.append({
            "vec_in_set": True,
            "vec": v,
            "equation": equation,
            "choices": choices_from_list(candidates),
        })
        nums = [n for n in range(-6,7) if abs(n)>1]
        shuffle(nums)
        v = column_matrix([x1,x2])
        xterm = nums[6]*x
        yterm = nums[7]*y
        equation = CheckIt.shuffled_equation(
            xterm(x=x1),
            yterm(y=x2),
            -xterm(x=nums[0])-yterm(y=nums[1])
        )
        invalids = [
            column_matrix(nums[i:i+2])
            for i in range(1,8)
            if xterm(x=nums[0])+yterm(y=nums[1])!=xterm(x=nums[i])+yterm(y=nums[i+1])
        ][:3]
        candidates = [
            column_matrix(nums[:2])
        ]+invalids

        questions.append({
            "vec_in_set": True,
            "vec": v,
            "equation": equation,
            "choices": choices_from_list(candidates),
        })


        nums = [n for n in range(-9,10) if abs(n)>1]
        vals = sample(nums,10)
        first_zero = choice([0,1,2,3])
        second_zero = choice([n for n in range(5,9) if n-5!=first_zero])
        vals[first_zero] = 0
        vals[second_zero] = 0
        A = matrix(QQ, 2, vals)
        B = A.transpose()
        C = matrix(QQ, 2, [v for v in vals if v!=0])
        D = C.transpose()
        A.subdivide(None,[4]) 
        B.subdivide(None,[1]) 
        C.subdivide(None,[3]) 
        D.subdivide(None,[1]) 

        questions.append({
            "LE1": True,
            "system": CheckIt.latex_system_from_matrix(A),
            "choices": choices_from_list([A,B,C,D]),
        })


        A = CheckIt.simple_random_matrix_of_rank(3,rows=3,columns=3)
        solution = column_matrix(
            vector(QQ, [randrange(1,4)*choice([-1,1]) for _ in range(3)])
        )
        constants = A*solution
        A = A.augment(constants, subdivide=True)

        def get_matrix():
            C = CheckIt.simple_random_matrix_of_rank(2,rows=3,columns=3)
            image_basis = [C.column(p) for p in A.pivots()]
            coeffs = [
                randrange(1,4)*choice([-1,1])
                for _ in range(2)
            ]
            lin_combo = column_matrix(sum([
                coeffs[p]*image_basis[p]
                for p in range(2)
            ]))
            C = C.augment(lin_combo, subdivide=True)
            return C
        B = get_matrix()
        C = get_matrix()
        D = get_matrix()

        questions.append({
            "equivalent_matrix": True,
            "A": A,
            "choices": choices_from_list([A.rref(),B.rref(),C.rref(),D.rref()]),
        })


        A = CheckIt.simple_random_matrix_of_rank(3,rows=3,columns=4)
        B = CheckIt.simple_random_matrix_of_rank(2,rows=3,columns=4)
        C = CheckIt.simple_random_matrix_of_rank(2,rows=3,columns=4)
        D = CheckIt.simple_random_matrix_of_rank(2,rows=3,columns=4)

        questions.append({
            "LE2": True,
            "A": A,
            "choices": choices_from_list([A.rref(),B.rref(),C.rref(),D.rref()]),
        })

        # single solution
        # create a 3x3 invertible matrix
        A = CheckIt.simple_random_matrix_of_rank(3,rows=3,columns=3)
        # add linear combination of rows for fourth row
        combo = sum([randrange(1,4)*vector(r) for r in A.rows()])
        A = A.stack(matrix(QQ,1,combo))
        solution = column_matrix(
            vector(QQ, [randrange(1,4)*choice([-1,1]) for _ in range(3)])
        )
        constants = A*solution
        A = A.augment(constants, subdivide=True)
        system = CheckIt.latex_system_from_matrix(A)
        nums = [x for x in range(-9,10) if abs(x)>1]
        shuffle(nums)
        distrctor1 = solution + column_matrix(nums[:3])
        distrctor2 = solution + column_matrix(nums[3:6])

        questions.append({
            "LE3-4": True,
            "system": system,
            "choices": choices_from_list([
                "\\left\\{"+latex(solution)+"\\right\\}",
                "\\left\\{"+latex(distrctor1)+"\\right\\}",
                "\\left\\{"+latex(distrctor2)+"\\right\\}",
            ]),
        })


                # no solutions
        # create a 4x4 non-invertible matrix
        A = CheckIt.simple_random_matrix_of_rank(2,rows=3,columns=3)
        # add linear combination of rows for fourth row
        combo = sum([randrange(1,4)*vector(r) for r in A.rows()])
        A = A.stack(matrix(QQ,1,combo))
        image_basis = [A.column(p) for p in A.pivots()]
        coeffs = [
            randrange(1,4)*choice([-1,1])
            for _ in range(2)
        ]
        lin_combo = sum([
            coeffs[p]*image_basis[p]
            for p in range(2)
        ])
        non_lin_combo = lin_combo + vector(QQ, [
            choice([-1,1])
            for _ in range(4)
        ])
        while non_lin_combo in A.column_space():
            non_lin_combo += vector(QQ, [
                choice([-1,1])
                for _ in range(4)
            ])
        m = A.augment(column_matrix(non_lin_combo), subdivide=True)
        system = CheckIt.latex_system_from_matrix(m)

        questions.append({
            "LE3empty": True,
            "system": system,
            "choices": choices_from_list([
                "\\left\\{"+latex(solution)+"\\right\\}",
                "\\left\\{"+latex(distrctor1)+"\\right\\}",
                "\\left\\{"+latex(distrctor2)+"\\right\\}",
            ]),
        })




        # infinitely-many solutions
        rows = 3
        columns = 4
        rank = 2
        A = CheckIt.simple_random_matrix_of_rank(rank,rows=rows,columns=columns)
        image_basis = [A.column(p) for p in A.pivots()]
        coeffs = [
            randrange(1,4)*choice([-1,1])
            for _ in range(rank)
        ]
        lin_combo = column_matrix(sum([
            coeffs[p]*image_basis[p]
            for p in range(rank)
        ]))
        A = A.augment(lin_combo, subdivide=True)
        system = CheckIt.latex_system_from_matrix(A)
        solset1 = CheckIt.latex_solution_set_from_matrix(A)
        
        rank = 3
        A = CheckIt.simple_random_matrix_of_rank(rank,rows=rows,columns=columns)
        image_basis = [A.column(p) for p in A.pivots()]
        coeffs = [
            randrange(1,4)*choice([-1,1])
            for _ in range(rank)
        ]
        lin_combo = column_matrix(sum([
            coeffs[p]*image_basis[p]
            for p in range(rank)
        ]))
        A = A.augment(lin_combo, subdivide=True)
        solset2 = CheckIt.latex_solution_set_from_matrix(A)
        
        rank = 3
        A = CheckIt.simple_random_matrix_of_rank(rank,rows=rows,columns=columns)
        image_basis = [A.column(p) for p in A.pivots()]
        coeffs = [
            randrange(1,4)*choice([-1,1])
            for _ in range(rank)
        ]
        lin_combo = column_matrix(sum([
            coeffs[p]*image_basis[p]
            for p in range(rank)
        ]))
        solset3 = CheckIt.latex_solution_set_from_matrix(A)

        questions.append({
            "LE3-4": True,
            "system": system,
            "choices": choices_from_list([
                solset1,
                solset2,
                solset3,
            ]),
        })

        
        shuffle(questions)
        # questions = questions[-1:]
        return {
            "questions": questions,
        }
