load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        # create a 3x5 or 4x4 matrix
        rows = randrange(3,5)
        columns = 8-rows

        #start with nice RREF
        max_number_of_pivots = min(rows,columns-1)
        number_of_pivots = randrange(2,max_number_of_pivots+1)
        A = CheckIt.simple_random_matrix_of_rank(number_of_pivots,rows=rows,columns=columns)
        A.subdivide([],[columns-1]) 

        # construct variables
        xs=choice([
            [var("x_"+str(i+1)) for i in range(0,columns-1)],
            [var("x"),var("y"),var("z"),var("zw",latex_name="w")][0:columns-1],
        ])

        # construct system
        system=[A.delete_columns([columns-1]).row(r)*vector(xs)==A.column(-1)[r] for r in range(0,rows)]

        #randomly swap exercise query
        prompt = choice([{"sys":True},{"mat":True},{"vec":True}])

        return {
            "system": CheckIt.latex_system_from_matrix(A,variable_list=xs),
            "alignCols": A.ncols(),
            "matrix": A, 
            "vectorequation": vectorEquation(A),
            "prompt": prompt
        }