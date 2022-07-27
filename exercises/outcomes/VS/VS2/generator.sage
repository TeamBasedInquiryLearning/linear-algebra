load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        # create a 4x3 or 3x4 matrix
        rows = randrange(3,5)
        columns = 7-rows
        a,b,c,d = var("a b c d")
        ls = [a,b,c,d][:rows]

        #start with nice RREF
        number_of_pivots = 2
        A = CheckIt.simple_random_matrix_of_rank(number_of_pivots,rows=rows,columns=columns)

        #linear combo
        coeffs = [
            randrange(1,4)*choice([-1,1])
            for _ in range(columns)
        ]
        lin_combo = sum([
            coeffs[p]*A.column(p)
            for p in A.pivots()
        ])
        lin_combo_exp = linearCombination(
            [
                coeffs[A.pivots()[i]]
                for i in range(number_of_pivots)
            ],
            [
                column_matrix(A.column(A.pivots()[i]))
                for i in range(number_of_pivots)
            ],
        )
        matrix = A.augment(column_matrix(lin_combo), subdivide=True)
        vectors = [
            {
                "v": column_matrix(lin_combo),
                "lin_combo": True,
                "lin_combo_exp": lin_combo_exp,
                "A": matrix,
                "rref": matrix.rref(),
            }
        ]

        # non-linear combo
        non_lin_combo = lin_combo + vector(ZZ, [
            choice([-1,1])
            for _ in range(rows)
        ])
        while non_lin_combo in A.column_space():
            non_lin_combo += vector(ZZ, [
                choice([-1,1])
                for _ in range(rows)
            ])
        matrix = A.augment(column_matrix(non_lin_combo), subdivide=True)
        vectors += [
            {
                "v": column_matrix(non_lin_combo),
                "lin_combo": False,
                "A": matrix,
                "rref": matrix.rref(),
            }
        ]

        shuffle(vectors)

        return {
            "ls": ls,
            "veclist": vectorList(A.columns()),
            "vectors": vectors,
            # "combovector": column_matrix(A.column(-1)),
            # "statement": choice([True,False]),
            # "veceq": vectorEquation(A),
            # "matrix": A,
            # "rref": A.rref(),
            # "pivots": A.pivots(),
        }
