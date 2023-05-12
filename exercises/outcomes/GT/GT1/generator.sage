load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        tasks = [
            {"name": n}
            for n in sample(["B","C","M","N","P","Q"],3)
        ]
        det = randrange(2,8)*choice([-1,1])

        # random row scaling
        row = randrange(0,4)
        scale = randrange(2,6)*choice([-1,1])
        tasks[0]["row_op"] = rowOp("diagonal",row+1,row+1,scale)
        tasks[0]["det"] = det*scale
        # random row swapping
        rows = sample([0,1,2,3],2)
        tasks[1]["row_op"] = rowOp("permutation",rows[0]+1, rows[1]+1)
        tasks[1]["det"] = det*-1
        # random row adding 
        rows = sample([0,1,2,3],2)
        scale = randrange(2,6)*choice([-1,1])
        tasks[2]["row_op"] = rowOp("elementary",rows[0]+1,rows[1]+1,scale)
        tasks[2]["det"] = det

        shuffle(tasks)

        return {
            "determinant": det,
            "tasks": tasks,
        }
