load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        A = matrix([[choice([-1,1])*randrange(1,6) for _ in range(0,4)] for _ in range(0,4)])
        line = randint(1,3)
        indices = choice(([(line,0),(line,1),(line,2),(line,3)],[(0,line),(1,line),(2,line),(3,line)]))
        shuffle(indices)
        A[indices[0]]=0
        A[indices[1]]=0
        A[indices[2]]=choice([-1,1])
        A[indices[3]]=choice([-1,1])*randrange(2,4)
        A[randint(0,3),randint(0,3)]=0

        return {
            "matrix": A,
            "determinant": A.determinant()
        }
