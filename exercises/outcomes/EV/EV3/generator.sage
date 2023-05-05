load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        v=[var("x"),var("y"),var("z"),var("w")]

        subspacePredicate = CheckIt.shuffled_equation(
            choice([-1,1])*randrange(1,8)*v[0],
            choice([-1,1])*randrange(1,8)*v[1],
            choice([-1,1])*randrange(1,8)*v[2],
            choice([-1,1])*randrange(1,8)*v[3]
        )
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

        coeffs = [
            choice([-1,1])*randrange(1,6),
            choice([-1,1])*randrange(1,6),
            choice([-1,1])*randrange(1,6)
        ]
        terms = [coeffs[i]*v[i] for i in range(3)]
        bad_i = randrange(3)
        if choice([True,False]):
            # squared term
            terms[bad_i] = coeffs[bad_i]*v[bad_i]^2
            Q_valid = [0,0,0]
            Q_valid[bad_i] = coeffs[(bad_i+1)%3]
            Q_valid[(bad_i+1)%3] = -coeffs[bad_i]*coeffs[(bad_i+1)%3]
            Q_invalid = [2*t for t in Q_valid]
        else:
            # product of terms
            terms[bad_i] = coeffs[bad_i]*v[bad_i]*v[(bad_i+1)%3]
            Q_valid = [0,0,0]
            Q_valid[bad_i] = -coeffs[(bad_i+1)%3]/coeffs[bad_i]
            Q_valid[(bad_i+1)%3] = 1
            Q_invalid = [2*t for t in Q_valid]
        Q_eq = CheckIt.shuffled_equation(*terms)

        coeffs = [
            choice([-1,1])*randrange(1,6),
            choice([-1,1])*randrange(1,6),
            choice([-1,1])*randrange(1,6)
        ]
        terms = [coeffs[i]*v[i] for i in range(3)]
        R_eq = CheckIt.shuffled_equation(*terms)

        return {
            "U_eq": U_eq,
            "W_eq": W_eq,
            "U_space": U_space,
            "W_space": W_space,
            "R_eq": R_eq,
            "Q_eq": Q_eq,
            "Q_valid": column_matrix(vector(Q_valid)),
            "Q_invalid": column_matrix(vector(Q_invalid)),
        }
