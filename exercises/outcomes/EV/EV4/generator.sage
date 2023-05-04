load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        A=CheckIt.simple_random_matrix_of_rank(choice([3,4]),rows=4,columns=5)
 
        tasks =  [{
            "independent": False,
            "vecset": vectorSet(A.columns()),
            "matrix": A,
            "rref": A.rref(),
        }]

        independent = choice([True,False])
        if independent:
            rank = 4
        else:
            rank = choice([2,3])
        A=CheckIt.simple_random_matrix_of_rank(rank,rows=4,columns=4)
 
        tasks +=  [{
            "independent": independent,
            "vecset": vectorSet(A.columns()),
            "matrix": A,
            "rref": A.rref(),
        }]

        independent = not independent
        if independent:
            rank = 3
        else:
            rank = 2
        A=CheckIt.simple_random_matrix_of_rank(rank,rows=4,columns=3)
 
        tasks +=  [{
            "independent": independent,
            "vecset": vectorSet(A.columns()),
            "matrix": A,
            "rref": A.rref(),
        }]

        shuffle(tasks)

        return {"tasks": tasks}
