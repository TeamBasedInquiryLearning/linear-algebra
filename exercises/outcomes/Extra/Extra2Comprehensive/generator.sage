load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        # create a 4x5 matrix
        rows = 4
        columns = 5

        #start with nice RREF
        max_number_of_pivots = min(rows,columns-1)
        number_of_pivots = randrange(2,max_number_of_pivots+1)
        A=CheckIt.simple_random_matrix_of_rank(number_of_pivots,rows=rows,columns=columns)


        det = randrange(2,8)*choice([-1,1])
        roll = randrange(3)
        if roll == 0:
            # random row scaling
            row = randrange(0,4)
            scale = randrange(2,6)*choice([-1,1])
            op = rowOp("diagonal",row+1,row+1,scale)
            newdet = det*scale
        elif roll == 1:
            # random row swapping
            rows = sample([0,1,2,3],2)
            shuffle(rows)
            op = rowOp("permutation",rows[0]+1, rows[1]+1)
            newdet = det*(-1)
        else:
            # random row adding 
            rows = sample([0,1,2,3],2)
            shuffle(rows)
            scale = randrange(2,6)*choice([-1,1])
            op = rowOp("elementary",rows[0]+1,rows[1]+1,scale)
            newdet = det

        l = choice([-1,1])*randrange(1,5)
        E = CheckIt.simple_random_matrix_of_rank(4-randrange(2,4),rows=4,columns=4)
        EPlusLambda = E+l*identity_matrix(4)

        
        l1,l2 = sample( list(range(-6,-1))+list(range(1,7)),2)
        S=matrix([[1,0],[randint(1,3),1]])
        S=S.inverse()*matrix([[l1,randint(1,2)],[0,l2]])*S

        return {
            "matrix": A,
            "rref": A.rref(),
            "system": CheckIt.latex_system_from_matrix(A),
            "columns": vectorSet(A.columns()),
            "kernel": CheckIt.latex_solution_set_from_matrix(A),
            "surj": len(A.pivots())==rows,
            "image_basis": vectorSet([A.column(n) for n in A.pivots()]),
            "kernel_basis": vectorSet(A.right_kernel(basis='pivot').basis()),
            "polys": bracedSet(
                [ sum([v[i]*x^(len(v)-i-1) for i in range(len(v))]) for v in A.columns() ]
            ),
            "det": det,
            "op": op,
            "newdet": newdet,
            "eigenmatrix": EPlusLambda,
            "lambda": l,
            "E": E,
            "S": S,
            "charpoly": S.charpoly('lambda_'),
        }
