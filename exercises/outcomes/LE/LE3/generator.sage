load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        # single solution
        # create a 3x3 invertible matrix
        A = CheckIt.simple_random_matrix_of_rank(3,rows=3,columns=3)
        # add linear combination of rows for fourth row
        combo = sum([randrange(1,4)*vector(r) for r in A.rows()])
        A = A.stack(matrix(QQ,1,combo))
        solution = column_matrix(
            vector(QQ, [randrange(1,4)*choice([-1,1]) for _ in range(3)])
        )
        constants = A*solution
        m = A.augment(constants, subdivide=True)
        if choice([True,False]):
            system = CheckIt.latex_system_from_matrix(m)
        else:
            system = vectorEquation(m)
        simplified_system = CheckIt.latex_system_from_matrix(m.rref())
        systems = [{
            "count": "one solution",
            "system": system,
            "simplified_system": simplified_system,
            "solset": "\\left\\{"+latex(solution)+"\\right\\}",
        }]

        # infinitely-many solutions
        # create a 3x3 non-invertible matrix
        A = CheckIt.simple_random_matrix_of_rank(2,rows=3,columns=3)
        # add linear combination of rows for fourth row
        combo = sum([randrange(1,4)*vector(r) for r in A.rows()])
        A = A.stack(matrix(QQ,1,combo))
        image_basis = [A.column(p) for p in A.pivots()]
        coeffs = [
            randrange(1,4)*choice([-1,1])
            for _ in range(2)
        ]
        lin_combo = column_matrix(sum([
            coeffs[p]*image_basis[p]
            for p in range(2)
        ]))
        m = A.augment(lin_combo, subdivide=True)
        if choice([True,False]):
            system = CheckIt.latex_system_from_matrix(m)
        else:
            system = vectorEquation(m)
        simplified_system = CheckIt.latex_system_from_matrix(m.rref())
        systems += [{
            "count": "infinitely-many solutions",
            "system": system,
            "simplified_system": simplified_system,
        }]

        # no solutions
        # create a 4x4 non-invertible matrix
        A = CheckIt.simple_random_matrix_of_rank(2,rows=3,columns=3)
        # add linear combination of rows for fourth row
        combo = sum([randrange(1,4)*vector(r) for r in A.rows()])
        A = A.stack(matrix(QQ,1,combo))
        image_basis = [A.column(p) for p in A.pivots()]
        coeffs = [
            randrange(1,4)*choice([-1,1])
            for _ in range(2)
        ]
        lin_combo = sum([
            coeffs[p]*image_basis[p]
            for p in range(2)
        ])
        non_lin_combo = lin_combo + vector(QQ, [
            choice([-1,1])
            for _ in range(4)
        ])
        while non_lin_combo in A.column_space():
            non_lin_combo += vector(QQ, [
                choice([-1,1])
                for _ in range(4)
            ])
        m = A.augment(column_matrix(non_lin_combo), subdivide=True)
        if choice([True,False]):
            system = CheckIt.latex_system_from_matrix(m)
        else:
            system = vectorEquation(m)
        simplified_system = CheckIt.latex_system_from_matrix(m.rref())
        systems += [{
            "count": "no solutions",
            "system": system,
            "simplified_system": simplified_system,
            "solset": "\\emptyset"
        }]

        shuffle(systems)
        
        return {
            "systems": systems,
        }