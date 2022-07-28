load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        l1,l2 = sample( list(range(-6,-1))+list(range(1,7)),2)
        S=matrix([[1,0],[randint(1,3),1]])
        A=S.inverse()*matrix([[l1,randint(1,2)],[0,l2]])*S

        return {
            "matrix": A,
            "e1": l1,
            "e2": l2,
            "charpoly": A.charpoly('lambda_'),
        }
