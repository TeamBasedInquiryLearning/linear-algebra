load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        # start with simple 2x2 matrix with non-zero determinant
        while True:
            A = matrix(QQ,2,lambda *_:randrange(1,6)*choice([-1,1]))
            if 0 < abs(A.determinant()) < 16:
                break
        # expand to 3x3
        A = A.augment(matrix(QQ,2,1,[0,0])).stack(
            matrix(1,3,[
                randrange(1,6)*choice([-1,1]),
                randrange(1,6)*choice([-1,1]),
                1
            ])
        )
        A.add_multiple_of_row(0,2,randrange(1,4)*choice([-1,1]))
        A.add_multiple_of_row(1,2,randrange(1,4)*choice([-1,1]))
        if choice([True,False]):
            A = A.transpose()
        # expand to 4x4
        A = A.augment(matrix(QQ,3,1,[0,0,0])).stack(
            matrix(1,4,[
                randrange(1,6)*choice([-1,1]),
                randrange(1,6)*choice([-1,1]),
                randrange(1,6)*choice([-1,1]),
                1
            ])
        )
        A.add_multiple_of_row(randrange(3),3,randrange(2,4)*choice([-1,1]))
        for i in range(4):
            for j in range(i):
                if choice([True,False]):
                    A.swap_rows(i,j)
        A = A.transpose()
        for i in range(4):
            for j in range(i):
                if choice([True,False]):
                    A.swap_rows(i,j)
        if choice([True,False]):
            A = A.transpose()


        return {
            "matrix": A,
            "determinant": A.determinant()
        }
