load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        # create a 3x3 invertible matrix
        A = CheckIt.simple_random_matrix_of_rank(3,rows=3,columns=3)
        solution = column_matrix(
            vector(QQ, [randrange(1,5)*choice([-1,1]) for _ in range(3)])
        )
        vars = column_matrix(var("x_1 x_2 x_3"))
        constants = A*solution
        result = {
            "vars": vars,
            "solution": solution,
            "matrix": A,
            "inverse": A^(-1),
            "constant_vector": constants,
        }
        m = A.augment(constants, subdivide=True)
        if choice([True,False]):
            result["system"] = CheckIt.latex_system_from_matrix(m)
        else:
            result["vector_eq"] = vectorEquation(m)
        return result

