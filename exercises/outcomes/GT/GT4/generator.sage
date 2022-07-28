load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        l = choice([-1,1])*randrange(1,5)
        dim = randrange(1,4)
        A=CheckIt.simple_random_matrix_of_rank(4-dim,rows=4,columns=4)
        B = A+l*identity_matrix(4)

        #Find kernel basis
        basis = A.right_kernel(basis='pivot').basis()

        return {
            "matrix": B,
            "eigenvalue": l,
            "basis": vectorSet(basis), 
            "matrix_minus_lambda":A,
            "rref": A.rref(),
        }
