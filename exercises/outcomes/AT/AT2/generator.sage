load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        # create a mxn standard matrix
        Scolumns = randrange(2,5)
        Srows = min(randrange(5,8)-Scolumns,4)
        A = random_matrix(QQ,Srows,Scolumns,algorithm='echelonizable',rank=min(Srows,Scolumns),upper_bound=9)

        Tcolumns = randrange(2,5)
        Trows = min(randrange(5,8)-Tcolumns,4)
        B = random_matrix(QQ,Trows,Tcolumns,algorithm='echelonizable',rank=min(Trows,Tcolumns),upper_bound=9)

        # construct variables
        xs=choice([
            column_matrix(vector([var("x_"+str(i+1)) for i in range(0,Scolumns)])),
            column_matrix(vector([var("x"),var("y"),var("z"),var("zw",latex_name="w")][0:Scolumns])),
        ])

        # give vector to transform
        v = column_matrix([randrange(-8,9) for _ in range(0,Tcolumns)])


        return {
            "Srows": Srows,
            "Scols": Scolumns,
            "varmap": A*xs,
            "varvector": xs,
            "Sstandardmatrix": A,
            "Trows": Trows,
            "Tcols": Tcolumns,
            "Tstandardmatrix": B,
            "vector": v,
            "Tvector": B*v
        }

