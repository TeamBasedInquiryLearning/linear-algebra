load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        surjective = choice([True,False])
        if surjective:
            rank = 4
        else:
            rank = choice([2,3])
        A=CheckIt.simple_random_matrix_of_rank(rank,rows=4,columns=5)
 
        tasks =  [{
            "injective": False,
            "surjective": surjective,
            "vecset": vectorSet(A.columns()),
            "matrix": A,
            "rref": A.rref(),
        }]

        injective = choice([True,False])
        if injective:
            rank = 3
        else:
            rank = 2
        A=CheckIt.simple_random_matrix_of_rank(rank,rows=4,columns=3)
 
        tasks +=  [{
            "injective": False,
            "surjective": surjective,
            "vecset": vectorSet(A.columns()),
            "matrix": A,
            "rref": A.rref(),
        }]

        rank = choice([2,3])
        A=CheckIt.simple_random_matrix_of_rank(rank,rows=4,columns=4)
 
        tasks +=  [{
            "injective": False,
            "surjective": False,
            "vecset": vectorSet(A.columns()),
            "matrix": A,
            "rref": A.rref(),
        }]

        rank = 4
        A=CheckIt.simple_random_matrix_of_rank(rank,rows=4,columns=4)
 
        tasks +=  [{
            "injective": True,
            "surjective": True,
            "vecset": vectorSet(A.columns()),
            "matrix": A,
            "rref": A.rref(),
        }]

        shuffle(tasks)

        return {"tasks": tasks}
