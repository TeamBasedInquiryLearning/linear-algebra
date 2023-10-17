load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        labels = list("ABCDLMNPQ")
        shuffle(labels)
        # invertible matrix
        A=CheckIt.simple_random_matrix_of_rank(4,rows=4,columns=4)
        matrices = [{
            "matrix": A,
            "rref": A.rref(),
            "invertible": True,
            "inverse": A^(-1),
            "label": labels[0],
        }]
        # non-invertible matrix
        A=CheckIt.simple_random_matrix_of_rank(choice([2,3]),rows=4,columns=4)
        matrices += [{
            "matrix": A,
            "rref": A.rref(),
            "invertible": False,
            "label": labels[1],
        }]

        shuffle(matrices)

        return {
            "matrices": matrices,
        }

