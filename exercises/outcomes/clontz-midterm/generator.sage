load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        questions = []
        x,y,z,x1,x2,x3 = var("x y z x_1 x_2 x_3")


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

        
        # create a 4x3 or 3x4 matrix
        rows = randrange(3,5)
        columns = 7-rows

        #start with nice RREF
        number_of_pivots = 2
        A = CheckIt.simple_random_matrix_of_rank(number_of_pivots,rows=rows,columns=columns)

        #linear combo
        coeffs = [
            randrange(1,4)*choice([-1,1])
            for _ in range(columns)
        ]
        v = sum([
            coeffs[p]*A.column(p)
            for p in A.pivots()
        ])
        lin_combo = True
        if choice([True,False]):
            # non-linear combo
            v = v + vector(ZZ, [
                choice([-1,1])
                for _ in range(rows)
            ])
            while v in A.column_space():
                v += vector(ZZ, [
                    choice([-1,1])
                    for _ in range(rows)
                ])
            lin_combo = False
        m = A.augment(column_matrix(v), subdivide=True)

        questions.append({
            "EV1": True,
            "veclist": vectorList(A.columns()),
            "v": column_matrix(v),
            "lin_combo": lin_combo,
            "A": m,
            "rref": m.rref(),
        })


        #Pick if a spanning set or no
        span = choice([False,True])

        if span:
            A=CheckIt.simple_random_matrix_of_rank(4,rows=4,columns=choice([4,5]))
        else:
            A=CheckIt.simple_random_matrix_of_rank(choice([2,3]),rows=4,columns=choice([4,5]))
        
        questions.append({
            "EV2": True,
            "spans": span,
            "vecset": vectorSet(A.columns()),
            "matrix": A,
            "rref": A.rref(),
        })

        
        v=vector([var("x"),var("y"),var("z")])
        subspacePredicate = choice([
            (randrange(1,8)*v[0] +randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
            (randrange(1,8)*v[0] +randrange(1,8)*v[1] == randrange(2,6)*v[2]),
            (randrange(1,8)*v[0] ==randrange(1,8)*v[1] + randrange(2,6)*v[2]),
            (randrange(1,8)*v[1] ==randrange(1,8)*v[0] - randrange(2,6)*v[2]),
        ])
        notsubspacePredicate = choice([ 
            (v[0]^randrange(2,4) +randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
            (v[1]^randrange(2,4) +randrange(1,8)*v[0] == randrange(2,6)*v[2]),
            (randrange(1,8)*v[0] == randrange(2,6)*v[1]+v[2]^randrange(2,4) ),
            (v[0]^randrange(2,4)*randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
            (v[1]^2-randrange(2,8)*v[2]^2 == randrange(1,7)*v[0])
            ])
        #Write sets in order subspace, not subspace
        predicates=[subspacePredicate,notsubspacePredicate]
        #Randomly swap order so 2nd is subspace
        X_is_subspace = "U_is_subspace"
        swapped = choice([True,False])
        if(swapped):
            predicates.reverse()
            X_is_subspace = "W_is_subspace"

        questions.append({
            "EV3": True,
            "U": setBuilder(column_matrix(v),[predicates[0]]),
            "W": setBuilder(column_matrix(v),[predicates[1]]),
            X_is_subspace: True,
        })



        #Pick if yes a linear combination or no
        independent = choice([False,True])
        
        n = choice([3,4])
        if independent:
            A=CheckIt.simple_random_matrix_of_rank(n,rows=4,columns=n)
        else:
            A=CheckIt.simple_random_matrix_of_rank(n-1,rows=4,columns=n)

        xs=[var("x_"+str(i+1)) for i in range(4)]

        questions.append({
            "EV4": True,
            "independent": independent,
            "vecset": vectorSet(A.columns()),
            #   "veceq": vectorEquation(A.augment(zero_vector(ZZ,5),subdivide=true)),
            "matrix": A,
            "rref":A.rref(),
        })

        
        shuffle(questions)
        # questions = questions[-1:]
        return {
            "questions": questions,
        }
