load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        dim = choice([2,3,4])
        v=vector([var("x"),var("y"),var("z"),var("w")][0:dim])

        if( dim == 2):
            subspacePredicate = choice([
                (randrange(1,8)*v[0]+randrange(1,8)*v[1] == 0),
                (randrange(2,8)*v[0]==randrange(1,7)*v[1])
            ])
            notsubspacePredicate = choice([
                (v[0]^randrange(2,4)+randrange(1,8)*v[1] == 0),
                (v[0]^randrange(2,4)==randrange(1,8)*v[1]),
                (randrange(2,8)*v[0]*v[1]^randrange(2,4) == 0),
                (randrange(2,8)*v[0]==v[1]^randrange(2,4)),
            ])
        if( dim==3):
            subspacePredicate = choice([
                (randrange(1,8)*v[0] +randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
                (randrange(1,8)*v[0] +randrange(1,8)*v[1] == randrange(2,6)*v[2]),
                (randrange(1,8)*v[0] ==randrange(1,8)*v[1] + randrange(2,6)*v[2]),
                (randrange(1,8)*v[1] ==randrange(1,8)*v[0] - randrange(2,6)*v[2]),
            ])
            notsubspacePredicate = choice([ 
                (v[0]^randrange(2,4) +randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
                (v[1]^randrange(2,4) +randrange(1,8)*v[0] == randrange(2,6)*v[2]),
                (randrange(1,8)*v[0] == randrange(2,6)*v[1]+v[2]^randrange(2,4) ),
                (v[0]^randrange(2,4)*randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
                (v[1]^2-randrange(2,8)*v[2]^2 == randrange(1,7)*v[0])
            ])
        if( dim==4):
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



        #Write sets in order subspace, not subspace
        predicates=[subspacePredicate,notsubspacePredicate]
        #Randomly swap order so 2nd is subspace
        labels = ["U","W"]
        swapped = choice([True,False])
        if(swapped):
            predicates.reverse()
            labels.reverse()

        return {
        "U": setBuilder(column_matrix(v),[predicates[0]]),
        "W": setBuilder(column_matrix(v),[predicates[1]]),
        "subspace": labels[0],
        "nonsubspace": labels[1],
        "dim": dim
        }
