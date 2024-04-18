load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        tasks = []
        rows=sample(range(4),3)
        names = sample(["B","C","M","N","P","Q"],3)

        tasks.append({
            "permutation": True,
            "row_op": rowOp("permutation",rows[0]+1, rows[1]+1),
            "mat": identity_matrix(4).with_swapped_rows(rows[0],rows[1]),
            "name": names[0]
        })
        
        scale = randrange(2,6)*choice([-1,1])
        tasks.append({
            "elementary": True,
            "row_op": rowOp("elementary",rows[1]+1,rows[2]+1,scale),
            "mat": identity_matrix(4).with_added_multiple_of_row(rows[1],rows[2],scale),
            "name": names[1]
        })

        scale = randrange(2,6)*choice([-1,1])
        tasks.append({
            "diagonal": True,
            "row_op": rowOp("diagonal",rows[0]+1,rows[0]+1,scale),
            "mat": identity_matrix(4).with_rescaled_row(rows[0],scale),
            "name": names[2]
        })

        shuffle(tasks)

        tasks_reordered = sample(tasks,3)


        return {
            "tasks": tasks,
            "first_op": tasks_reordered[0]["row_op"],
            "second_op": tasks_reordered[1]["row_op"],
            "third_op": tasks_reordered[2]["row_op"],
            "matrix_product": 
                tasks_reordered[2]["name"] +
                tasks_reordered[1]["name"] +
                tasks_reordered[0]["name"]
        }
