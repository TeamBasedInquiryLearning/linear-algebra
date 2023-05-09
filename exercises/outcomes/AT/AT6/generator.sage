load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        rows = 4
        columns = 4
        a,b,c,d = var("a b c d")
        ls = [a,b,c,d]

        #start with nice RREF
        number_of_pivots = choice([2,3])
        A = CheckIt.simple_random_matrix_of_rank(
            number_of_pivots,
            rows=rows,
            columns=columns
        )

        #linear combo
        coeffs = [
            randrange(1,5)*choice([-1,1])
            for _ in range(number_of_pivots)
        ]
        pivot_columns = [
            A.column(A.pivots()[i])
            for i in range(number_of_pivots)
        ]
        e_vector = sum([
            coeffs[i]*pivot_columns[i]
            for i in range(number_of_pivots)
        ])
        e_combo = linearCombination(
            [
                coeffs[i]
                for i in range(number_of_pivots)
            ],
            [
                column_matrix(A.column(A.pivots()[i]))
                for i in range(number_of_pivots)
            ],
        )
        e_set = bracedSet(
            [column_matrix(c) for c in A.columns()]
        )
        aug_matrix = A.augment(column_matrix(e_vector), subdivide=True)

        result = {
            "e_vector": column_matrix(e_vector),
            "e_set": e_set,
            "e_combo": e_combo,
            "aug_matrix": aug_matrix,
            "rref": aug_matrix.rref(),
        }

        #polynomial or matrix?
        if choice([True,False]):
            # polynomial
            x = var('x')
            result["polynomial"] = sum(
                x^i*e_vector[i]
                for i in range(rows)
            )
            result["set"] = bracedSet([
                sum(
                    x^i*v[i]
                    for i in range(rows)
                )
                for v in A.columns()
            ])
            result["combo"] = linearCombination(
                [
                    coeffs[i]
                    for i in range(number_of_pivots)
                ],
                [
                    sum(
                        x^i*e_vector[i]
                        for i in range(rows)
                    )
                    for i in range(number_of_pivots)
                ],
                parentheses=True
            )
        else:
            # matrix
            result["matrix"] = matrix(QQ,2,e_vector)
            result["set"] = bracedSet([
                matrix(QQ,2,v)
                for v in A.columns()
            ])
            result["combo"] = linearCombination(
                [
                    coeffs[i]
                    for i in range(number_of_pivots)
                ],
                [
                    matrix(QQ,2,A.columns()[A.pivots()[i]])
                    for i in range(number_of_pivots)
                ],
                parentheses=False
            )

        return result
