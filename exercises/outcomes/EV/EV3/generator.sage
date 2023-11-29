load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        x,y,z,w,a,b,c,k = var("x y z w a b c k")

        subspacePredicate = CheckIt.shuffled_equation(
            choice([-1,1])*randrange(1,8)*x,
            choice([-1,1])*randrange(1,8)*y,
            choice([-1,1])*randrange(1,8)*z,
            choice([-1,1])*randrange(1,8)*w
        )
        notsubspacePredicate = choice([ 
            (x^randrange(2,4) +randrange(1,8)*y + randrange(2,6)*z==randrange(2,6)*w),
            (y^randrange(2,4) +randrange(1,8)*x == randrange(2,6)*z),
            (randrange(1,8)*x == randrange(2,6)*y+z^randrange(2,4)-randrange(2,6)*w ),
            (x^randrange(2,4)*randrange(1,8)*y + randrange(2,6)*z*w==0),
            (y^2-randrange(2,8)*z^2 == randrange(1,7)*x)
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
        terms = [coeffs[i]*[x,y,z,w][i] for i in range(3)]
        bad_i = randrange(3)
        if choice([True,False]):
            # squared term
            terms[bad_i] = coeffs[bad_i]*[x,y,z,w][bad_i]^2
            Q_valid = [0,0,0]
            Q_valid[bad_i] = coeffs[(bad_i+1)%3]
            Q_valid[(bad_i+1)%3] = -coeffs[bad_i]*coeffs[(bad_i+1)%3]
            Q_invalid = [2*t for t in Q_valid]
        else:
            # product of terms
            terms[bad_i] = coeffs[bad_i]*[x,y,z,w][bad_i]*[x,y,z,w][(bad_i+1)%3]
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
        terms = [coeffs[i]*[x,y,z,w][i] for i in range(3)]
        R_eq = CheckIt.shuffled_equation(*terms)
        R_eq_alt = R_eq.subs({x:a,y:b,z:c})
        R_eq_sum = R_eq.subs({x:x+a,y:y+b,z:z+c})
        R_eq_mul = R_eq.subs({x:k*x,y:k*y,z:k*z})

        return {
            "U_eq": U_eq,
            "W_eq": W_eq,
            "U_space": U_space,
            "W_space": W_space,
            "R_eq": R_eq,
            "R_eq_alt": R_eq_alt,
            "R_eq_sum": R_eq_sum,
            "R_eq_mul": R_eq_mul,
            "v": column_matrix(vector([x,y,z])),
            "valt": column_matrix(vector([a,b,c])),
            "Q_eq": Q_eq,
            "Q_valid": column_matrix(vector(Q_valid)),
            "Q_invalid": column_matrix(vector(Q_invalid)),
        }
