load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        det = randrange(2,8)*choice([-1,1])
        rowOps=[]
        dets=[]
        # random row scaling
        row = randrange(0,4)
        scale = randrange(2,6)*choice([-1,1])
        rowOps.append(rowOp("diagonal",row+1,row+1,scale))
        dets.append(det*scale)
        # random row swapping
        rows = sample([0,1,2,3],2)
        shuffle(rows)
        rowOps.append(rowOp("permutation",rows[0]+1, rows[1]+1))
        dets.append(det*(-1))
        # random row adding 
        rows = sample([0,1,2,3],2)
        shuffle(rows)
        scale = randrange(2,6)*choice([-1,1])
        rowOps.append(rowOp("elementary",rows[0]+1,rows[1]+1,scale))
        dets.append(det)

        #choose two random ops
        ops = sample([0,1,2],3)
        shuffle(ops)
        row_op1 = rowOps[ops[0]]
        det1 = dets[ops[0]]
        row_op2 = rowOps[ops[1]]
        det2 = dets[ops[1]]
        row_op3 = rowOps[ops[2]]
        det3 = dets[ops[2]]


        name1, name2, name3 = sample(["B","C","M","N","P","Q"],3)

        #randomly swap order of ops
        swapped = choice([True,False])


        return {
            "determinant": det,
            "row_op1": row_op1,
            "row_op2": row_op2,
            "row_op3": row_op3,
            "name1": name1,
            "name2": name2,
            "name3": name3,
            "det1": det1,
            "det2": det2,
            "det3": det3
        }
