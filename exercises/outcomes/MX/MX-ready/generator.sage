load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        questions = []
        x,y,z,x1,x2,x3 = var("x y z x_1 x_2 x_3")


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

        # create a 3x5,4x4,5x3 matrix
        rows = 4
        columns = 4

        #start with nice RREF
        number_of_pivots = choice([2,3])
        A=CheckIt.simple_random_matrix_of_rank(number_of_pivots,rows=rows,columns=columns)
        basisA=A.right_kernel(basis='pivot').basis()
        B=CheckIt.simple_random_matrix_of_rank(5-number_of_pivots,rows=rows,columns=columns)
        basisB=B.right_kernel(basis='pivot').basis()
        C=CheckIt.simple_random_matrix_of_rank(1,rows=rows,columns=columns)
        basisC=C.right_kernel(basis='pivot').basis()

        questions.append({
            "EV7": True,
            "system": CheckIt.latex_system_from_matrix(A),
            "choices": choices_from_list([
                vectorSet(basisA),
                vectorSet(basisB),
                vectorSet(basisC),
            ]),
        })


        #Obviously fails to span
        A=CheckIt.simple_random_matrix_of_rank(2,columns=2,rows=3)

        questions.append({
            "EVstuff": True,
            "independent": True,
            "vecset": vectorSet(A.columns()),
        })

        #Obviously dependent
        A=CheckIt.simple_random_matrix_of_rank(3,columns=4,rows=3)

        questions.append({
            "EVstuff": True,
            "spans": True,
            "vecset": vectorSet(A.columns()),
        })

        #Basis
        A=CheckIt.simple_random_matrix_of_rank(3,columns=3,rows=3)

        questions.append({
            "EVstuff": True,
            "basis": True,
            "vecset": vectorSet(A.columns()),
        })

        #Neither
        A=CheckIt.simple_random_matrix_of_rank(2,columns=3,rows=3)

        questions.append({
            "EVstuff": True,
            "neither": True,
            "vecset": vectorSet(A.columns()),
        })

        dims = sample(range(4,10),4)

        questions.append({
            "word": True,
            "count": True,
            "quality": False,
            "spans": True,
            "independent": True,
            "dim": dims[0],
        })

        questions.append({
            "word": True,
            "count": False,
            "quality": True,
            "spans": True,
            "independent": True,
            "dim": dims[1],
        })

        flip = choice([True,False])

        questions.append({
            "word": True,
            "count": flip,
            "quality": not flip,
            "spans": True,
            "independent": False,
            "dim": dims[2],
        })

        questions.append({
            "word": True,
            "count": not flip,
            "quality": flip,
            "spans": False,
            "independent": True,
            "dim": dims[3],
        })




        
        shuffle(questions)
        # questions = questions[-1:]
        return {
            "questions": questions,
        }
