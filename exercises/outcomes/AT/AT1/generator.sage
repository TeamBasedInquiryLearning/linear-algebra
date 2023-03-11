load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        x,y,z = var("x y z")
        v = column_matrix([x,y,z])
        w = column_matrix([x,y])

        # make a linear map
        A = CheckIt.simple_random_matrix_of_rank(3,rows=3,columns=3)
        Pmap = A*v

        # make a nonlinear map
        B = CheckIt.simple_random_matrix_of_rank(2,rows=2,columns=3)
        insert_at = choice(range(3))
        preQmap = B*v
        terms = [x,y,z]
        shuffle(terms)
        Qmap = matrix(preQmap.rows()[:insert_at]+ \
            [(randrange(2,10)*choice([-1,1])*terms[0]*terms[1]+\
            randrange(2,10)*choice([-1,1])*terms[2]^2,)] + \
            preQmap.rows()[insert_at:])

        # choose which is linear randomly
        PQlinear = choice(["Plinear","Qlinear"])
        if PQlinear == "Qlinear":
            Pmap, Qmap = Qmap, Pmap

        # make a nonlinear map
        C = CheckIt.simple_random_matrix_of_rank(1,rows=1,columns=2)
        insert_at = choice(range(2))
        preSmap = C*w
        terms = [x,y]
        shuffle(terms)
        Smap = matrix(preSmap.rows()[:insert_at]+ \
            [choice([
                (randrange(2,10)*choice([-1,1])*terms[0]*terms[1],),
                (randrange(2,10)*choice([-1,1])*terms[0]^2,)
            ])] + \
            preSmap.rows()[insert_at:])

        # make a linear map
        D = CheckIt.simple_random_matrix_of_rank(2,rows=2,columns=2)
        Tmap = 2*D*w


        return {
            PQlinear: True,
            "Pmap": Pmap,
            "Qmap": Qmap,
            "Smap": Smap,
            "Tmap": Tmap,
        }
