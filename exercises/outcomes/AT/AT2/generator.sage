load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        # create a mxn standard matrix
        Scolumns = randrange(2,5)
        Srows = min(randrange(6,8)-Scolumns,4)
        entries = [randrange(1,7)*choice([-1,1]) for _ in range(Scolumns*Srows)]
        entries[randrange(Scolumns*Srows)] = 0
        A = matrix(QQ,Srows,entries)
        
        Tcolumns = randrange(2,5)
        Trows = min(randrange(6,8)-Tcolumns,4)
        entries = [randrange(1,7)*choice([-1,1]) for _ in range(Tcolumns*Trows)]
        entries[randrange(Tcolumns*Trows)] = 0
        B = matrix(QQ,Trows,entries)
    
        # construct variables
        xs=choice([
            column_matrix(vector([var("x_"+str(i+1)) for i in range(0,Scolumns)])),
            column_matrix(vector([var("x"),var("y"),var("z"),var("zw",latex_name="w")][0:Scolumns])),
        ])

        # give vector to transform
        entries = [randrange(1,7)*choice([-1,1]) for _ in range(Tcolumns)]
        if Tcolumns > 2:
            entries[randrange(Tcolumns)] = 0
        v = column_matrix(entries)


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

