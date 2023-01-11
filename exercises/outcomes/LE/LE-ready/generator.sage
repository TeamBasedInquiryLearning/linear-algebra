load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        questions = []

        x,y = var("x y")
        a,b,c = sample([-6,-5,-4,-3,-2,2,3,4,5,6],3)
        equation = CheckIt.shuffled_equation(a*x,b*y,c)
        sets = [
            setBuilder((x,y),CheckIt.shuffled_equation(a*x,b*y,c)),
            setBuilder((a*x,b*y),CheckIt.shuffled_equation(a*x,b*y,c)),
            setBuilder((x,y,c)),
            setBuilder((a*x,b*y)),
        ]

        questions.append({
            "lineset": True,
            "equation": equation,
            "choices": choices_from_list(sets),
        })


        random_point = (
            randrange(1,6)*choice([-1,1]),
            randrange(1,6)*choice([-1,1])
        )
        questions.append({
            "int_once_a": True,
            "random_point": random_point,
        })


        a,b = sample([-6,-5,-4,-3,-2,2,3,4,5,6],2)
        questions.append({
            "int_once_b": True,
            "slope1": a,
            "slope2": b,
        })

        a,b,c = sample([-6,-5,-4,-3,-2,2,3,4,5,6],3)
        questions.append({
            "int_never": True,
            "slope": a,
            "yint1": b,
            "yint2": c,
        })

        a,b,c,d = sample([-6,-5,-4,-3,-2,2,3,4,5,6],4)
        questions.append({
            "int_inf": True,
            "point1": (a,b),
            "point2": (c,d),
        })


        a,b = sample([-6,-5,-4,-3,-2,2,3,4,5,6],2)
        distract_x = choice([-1,1])
        distract_y = choice([-1,1])
        points = [
            (a,b),
            (a+distract_x,b),
            (a,b+distract_y),
            (a+distract_y,b+distract_y),
        ]
        # distractor can be slope +1 or -1 from correct...
        # make sure slope is different
        c = choice([3,4,-3,-4])
        d = (c+choice([-1,1]))*choice([-1,1])
        questions.append({
            "point_in_set": True,
            "set": setBuilder((x,y),c*x+d*y==c*a+d*b),
            "choices": choices_from_list(points),
        })



        for _ in range(2):
            # single solution (two examples)
            # create a 2x2 invertible matrix
            A = CheckIt.simple_random_matrix_of_rank(2,rows=2,columns=2)
            solution = (
                randrange(2,5)*choice([-1,1]),
                randrange(2,5)*choice([-1,1]),
            )
            if choice([True,False]):
                distractor = (solution[0],solution[1]+choice([-1,1]))
            else:
                distractor = (solution[0]+choice([-1,1]),solution[1])
            constants = A*column_matrix(vector(QQ, list(solution)))
            m = A.augment(constants, subdivide=True)
            system = CheckIt.latex_system_from_matrix(m,variable_list=[x,y])
            choices = [
                {"point": solution},
                {"point": distractor},
                {"text": "There are infinitely-many solutions."},
                {"text": "There are no solutions."},
            ]
            questions.append({
                "solve_system": True,
                "system": system,
                "choices": choices_from_list(choices),
            })


            
        # inf solutions
        a,b,c = [randrange(2,7)*choice([-1,1]) for _ in range(3)]
        scale = randrange(2,5)
        d,e,f = a*scale,b*scale,c*scale
        A = matrix(QQ, [[a,b],[d,e]]).augment(matrix(QQ,[[c],[f]]), subdivide=True)
        system = CheckIt.latex_system_from_matrix(A,variable_list=[x,y])
        distractor1 = tuple(sample([-5,-4,-3,-2,2,3,4,5],2))
        if choice([True,False]):
            distractor2 = (distractor1[0],distractor1[1]+choice([-1,1]))
        else:
            distractor2 = (distractor1[0]+choice([-1,1]),distractor1[1])
        choices = [
            {"text": "There are infinitely-many solutions."},
            {"point": distractor1},
            {"point": distractor2},
            {"text": "There are no solutions."},
        ]
        questions.append({
            "solve_system": True,
            "system": system,
            "choices": choices_from_list(choices),
        })


        # no solutions
        a,b,c = [randrange(2,7)*choice([-1,1]) for _ in range(3)]
        scale = randrange(2,5)
        d,e,f = a*scale,b*scale,c*scale+choice([-1,1])
        A = matrix(QQ, [[a,b],[d,e]]).augment(matrix(QQ,[[c],[f]]), subdivide=True)
        system = CheckIt.latex_system_from_matrix(A,variable_list=[x,y])
        distractor1 = tuple(sample([-5,-4,-3,-2,2,3,4,5],2))
        if choice([True,False]):
            distractor2 = (distractor1[0],distractor1[1]+choice([-1,1]))
        else:
            distractor2 = (distractor1[0]+choice([-1,1]),distractor1[1])
        choices = [
            {"text": "There are no solutions."},
            {"text": "There are infinitely-many solutions."},
            {"point": distractor1},
            {"point": distractor2},
        ]
        questions.append({
            "solve_system": True,
            "system": system,
            "choices": choices_from_list(choices),
        })

        
        shuffle(questions)
        return {
            "questions": questions,
        }
