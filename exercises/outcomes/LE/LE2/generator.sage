load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        # create a 3x5,4x4,5x3 matrix
        rows = randrange(3,6)
        columns = 8-rows

        #start with nice RREF
        max_number_of_pivots = min(rows,columns)-1
        number_of_pivots = randrange(2,max_number_of_pivots+1)
        A = CheckIt.simple_random_matrix_of_rank(number_of_pivots,rows=rows,columns=columns)

        #Create an almost-RREF matrix by doing one row op to an RREF
        s=ZZ(choice([randrange(2,8)])*int(choice([-1,1])))
        # elementry
        r=randrange(0,number_of_pivots)
        rr=choice(list(range(0,r))+list(range(r+1,number_of_pivots)))
        E=elementary_matrix(rows, row1=r, row2=rr, scale=s)
        e_matrix=E*random_matrix(ZZ,rows,columns,algorithm='echelonizable',rank=number_of_pivots,upper_bound=13).rref()
        # diagonal
        E=elementary_matrix(rows, row1=randrange(0,number_of_pivots), scale=s)
        d_matrix=E*random_matrix(ZZ,rows,columns,algorithm='echelonizable',rank=number_of_pivots,upper_bound=13).rref()
        # permutation
        r=randrange(0,number_of_pivots)
        rr=choice(list(range(0,r))+list(range(r+1,number_of_pivots)))
        E=elementary_matrix(rows, row1=r, row2=rr)
        p_matrix=E*random_matrix(ZZ,rows,columns,algorithm='echelonizable',rank=number_of_pivots,upper_bound=13).rref()

        non_rrefs = [
            {"elementary":True,"matrix":e_matrix,},
            {"diagonal":True,"matrix":d_matrix,},
            {"permutation":True,"matrix":p_matrix},
        ]

        shuffle(non_rrefs)

        non_rrefs[0]["label"]="A"
        non_rrefs[1]["label"]="B"
        non_rrefs[2]["label"]="C"

        return {
            "A": A,
            "rref": A.rref(),
            "non_rrefs": non_rrefs,
        }

