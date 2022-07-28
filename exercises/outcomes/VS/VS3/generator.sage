load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        #Pick if a spanning set or no
        span = choice([False,True])

        if span:
            A=CheckIt.simple_random_matrix_of_rank(4,rows=4,columns=choice([4,5]))
        else:
            A=CheckIt.simple_random_matrix_of_rank(choice([2,3]),rows=4,columns=choice([4,5]))
        
        tasks =  [{
            "spans": span,
            "vecset": vectorSet(A.columns()),
            "matrix": A,
            "rref": A.rref(),
        }]

        # span = not span

        # if span:
        #     A=CheckIt.simple_random_matrix_of_rank(4,rows=4,columns=choice([4,5]))
        # else:
        #     A=CheckIt.simple_random_matrix_of_rank(choice([2,3]),rows=4,columns=choice([4,5]))
        
        # tasks +=  [{
        #     "spans": span,
        #     "vecset": vectorSet(A.columns()),
        #     "matrix": A,
        #     "rref": A.rref(),
        # }]

        return {"tasks": tasks}
