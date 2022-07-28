load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        # create a 3x5,4x4,5x3 matrix
        rows = randrange(3,6)
        columns = 8-rows

        #start with nice RREF
        max_number_of_pivots = min(rows,columns-1)
        number_of_pivots = randrange(2,max_number_of_pivots+1)
        A=CheckIt.simple_random_matrix_of_rank(number_of_pivots,rows=rows,columns=columns)

        basis=A.right_kernel(basis='pivot').basis()
        A=A.augment(zero_vector(QQ, len(A.rows())),subdivide=true)

        return {
            "system": CheckIt.latex_system_from_matrix(A),
            "basis": vectorSet(basis),
            'solutions': CheckIt.latex_solution_set_from_matrix(A),
            "matrix": A,
            "rref": A.rref(),
        }
