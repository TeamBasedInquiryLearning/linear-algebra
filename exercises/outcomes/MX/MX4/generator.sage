load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        #Choose omitted op
        omitted_op = choice([0,1,2])
        if omitted_op==0: #Omit diagonal
            rows=sample([0,1,2,3],3)
            mat1 = identity_matrix(4).with_swapped_rows(rows[0],rows[1])
            row_op1 = rowOp("permutation",rows[0]+1, rows[1]+1)
            
            scale = randrange(2,6)*choice([-1,1])
            mat2 = identity_matrix(4).with_added_multiple_of_row(rows[1],rows[2],scale)
            row_op2 = rowOp("elementary",rows[1]+1,rows[2]+1,scale)

        if omitted_op==1: #Omit permutation
            rows=sample([0,1,2,3],2)
            scale = randrange(2,6)*choice([-1,1])
            mat1 = identity_matrix(4).with_rescaled_row(rows[0],scale)
            row_op1 = rowOp("diagonal",rows[0]+1,rows[0]+1,scale)
            
            scale = randrange(2,6)*choice([-1,1])
            mat2 = identity_matrix(4).with_added_multiple_of_row(rows[0],rows[1],scale)
            row_op2 = rowOp("elementary",rows[0]+1,rows[1]+1,scale)
            
        if omitted_op==2: #Omit elementary
            rows=sample([0,1,2,3],2)
            scale = randrange(2,6)*choice([-1,1])
            mat1 = identity_matrix(4).with_rescaled_row(rows[0],scale)
            row_op1 = rowOp("diagonal",rows[0]+1,rows[0]+1,scale)
            
            mat2 = identity_matrix(4).with_swapped_rows(rows[0],rows[1])
            row_op2 = rowOp("permutation",rows[0]+1, rows[1]+1)
                
        #Swap presentation order half the time
        if choice([True,False]):
            row_op1,row_op2 = row_op2,row_op1
            mat1,mat2 = mat2,mat1


        name1, name2 = sample(["B","C","M","N","P","Q"],2)

        #randomly swap order of ops
        swapped = choice([True,False])


        return {
            "row_op1": row_op1,
            "row_op2": row_op2,
            "mat1": mat1,
            "mat2": mat2,
            "name1": name1,
            "name2": name2,
            "swapped": swapped
        }
