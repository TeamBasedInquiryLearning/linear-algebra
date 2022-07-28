load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):

        #Pick if yes a basis combination or not
        basis = choice([False,True])
        
        if basis:
            A=CheckIt.simple_random_matrix_of_rank(4,columns=4,rows=4)
        else:
            A=CheckIt.simple_random_matrix_of_rank(choice(range(2,4)),columns=4,rows=4)

        tasks = [{
            "basis": basis,
            "vecset": vectorSet(A.columns()),
            "prompt": choice([True,False]),
            "matrix": A,
            "rref": A.rref(),
        }]

        # basis = not basis
        
        # if basis:
        #     A=CheckIt.simple_random_matrix_of_rank(4,columns=4,rows=4)
        # else:
        #     A=CheckIt.simple_random_matrix_of_rank(choice(range(2,4)),columns=4,rows=4)

        # tasks += [{
        #     "basis": basis,
        #     "vecset": vectorSet(A.columns()),
        #     "prompt": choice([True,False]),
        #     "matrix": A,
        #     "rref": A.rref(),
        # }]

        return {"tasks": tasks}