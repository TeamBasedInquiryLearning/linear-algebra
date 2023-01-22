load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        #Pick if yes a linear combination or no
        independent = choice([False,True])
        
        n = choice([3,4])
        if independent:
            A=CheckIt.simple_random_matrix_of_rank(n,rows=4,columns=n)
        else:
            A=CheckIt.simple_random_matrix_of_rank(n-1,rows=4,columns=n)


        xs=[var("x_"+str(i+1)) for i in range(4)]


        tasks = [{
            "independent": independent,
            "vecset": vectorSet(A.columns()),
            #   "veceq": vectorEquation(A.augment(zero_vector(ZZ,5),subdivide=true)),
            "matrix": A,
            "rref":A.rref(),
        }]

        # #Pick if yes a linear combination or no
        # independent = not independent
        
        # n = choice([3,4])
        # if independent:
        #     A=CheckIt.simple_random_matrix_of_rank(n,rows=4,columns=n)
        # else:
        #     A=CheckIt.simple_random_matrix_of_rank(n-1,rows=4,columns=n)


        # xs=[var("x_"+str(i+1)) for i in range(4)]


        # tasks += [{
        #     "independent": independent,
        #     "vecset": vectorSet(A.columns()),
        #     #   "veceq": vectorEquation(A.augment(zero_vector(ZZ,5),subdivide=true)),
        #     "matrix": A,
        #     "rref":A.rref(),
        # }]

        return {"tasks": tasks}
