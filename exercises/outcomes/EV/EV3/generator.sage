load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        v=[var("x"),var("y"),var("z"),var("w")]

        subspacePredicate = choice([
            (randrange(1,8)*v[0] +randrange(1,8)*v[1] + randrange(2,6)*v[2]==randrange(2,7)*v[3]),
            (randrange(1,8)*v[0] +randrange(1,8)*v[3] == randrange(2,6)*v[2]),
            (randrange(2,8)*v[0]+randrange(1,7)*v[3] ==randrange(1,8)*v[1] + randrange(2,6)*v[2]),
            (randrange(1,8)*v[1]-randrange(-6,7)*v[3] ==randrange(1,8)*v[0] - randrange(2,6)*v[2]),
        ])
        notsubspacePredicate = choice([ 
            (v[0]^randrange(2,4) +randrange(1,8)*v[1] + randrange(2,6)*v[2]==randrange(2,6)*v[3]),
            (v[1]^randrange(2,4) +randrange(1,8)*v[0] == randrange(2,6)*v[2]),
            (randrange(1,8)*v[0] == randrange(2,6)*v[1]+v[2]^randrange(2,4)-randrange(2,6)*v[3] ),
            (v[0]^randrange(2,4)*randrange(1,8)*v[1] + randrange(2,6)*v[2]*v[3]==0),
            (v[1]^2-randrange(2,8)*v[2]^2 == randrange(1,7)*v[0])
        ])
        if choice([True,False]):
            U_eq = subspacePredicate
            W_eq = notsubspacePredicate
            U_space = True
            W_space = False
        else:
            W_eq = subspacePredicate
            U_eq = notsubspacePredicate
            W_space = True
            U_space = False

        Q_eq = choice([ 
            (v[0]^randrange(2,4) +randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
            (v[1]^randrange(2,4) +randrange(1,8)*v[0] == randrange(2,6)*v[2]),
            (randrange(1,8)*v[0] == randrange(2,6)*v[1]+v[2]^randrange(2,4) ),
            (v[0]^randrange(2,4)*randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
            (v[1]^2-randrange(2,8)*v[2]^2 == randrange(1,7)*v[0])
        ])

        R_eq = choice([
            (randrange(1,8)*v[0] +randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
            (randrange(1,8)*v[0] +randrange(1,8)*v[1] == randrange(2,6)*v[2]),
            (randrange(1,8)*v[0] ==randrange(1,8)*v[1] + randrange(2,6)*v[2]),
            (randrange(1,8)*v[1] ==randrange(1,8)*v[0] - randrange(2,6)*v[2]),
        ])

        return {
            "U_eq": U_eq,
            "W_eq": W_eq,
            "U_space": U_space,
            "W_space": W_space,
            "R_eq": R_eq,
            "Q_eq": Q_eq,
        }
