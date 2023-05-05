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
        S_valid_in = column_matrix(vector([1,1]))
        S_valid_out_before = Smap(x=2,y=2)
        S_valid_out_after = 2*Smap(x=1,y=1)

        # make a linear map
        D = matrix(QQ,2,[choice([-1,1])*randrange(2,7) for _ in range(4)])
        Tmap = D*w
        a,b,k = var("a b k")
        w_prime = column_matrix(vector([a,b]))


        return {
            PQlinear: True,
            "Pmap": Pmap,
            "Qmap": Qmap,
            "Smap": Smap,
            "S_valid_in": S_valid_in,
            "S_valid_out_before": S_valid_out_before,
            "S_valid_out_after": S_valid_out_after,
            "Tmap": Tmap,
            "xy": w,
            "ab": w_prime,
            "Tplus": D*(w+w_prime),
            "Ttimes": D*(k*w),
        }
