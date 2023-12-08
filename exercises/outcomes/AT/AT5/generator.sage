load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        var('x1 x2 x3 y1 y2 y3 c d x y')
        v1 = vector([x1,y1])
        v2 = vector([x2,y2])
        v3 = vector([x3,y3])
        v = vector([x,y])
        vectorsimplify = lambda v : vector([simplify(expand(x)) for x in v])

        true_property_options = ["add_assoc","add_comm","mul_assoc","dist_v","dist_s","mul_id"]
        false_only_property_options = ["add_id","add_inv"]

        def verify(plus,times,hardfalseproperties=[]):
            trueproperties={}
            falseproperties=hardfalseproperties
            for prop in true_property_options:
                    if prop == "add_assoc":
                        LHS = plus(v1,plus(v2,v3))
                        RHS = plus(plus(v1,v2),v3)
                    elif prop == "add_comm":
                        LHS = plus(v1,v2)
                        RHS = plus(v2,v1)
                    elif prop == "mul_assoc":
                        LHS = times(c*d,v)
                        RHS = times(c,times(d,v))
                    elif prop == "mul_id":
                        LHS = times(1,v)
                        RHS = v
                    elif prop == "dist_v":
                        LHS = times(c,plus(v1,v2))
                        RHS = plus(times(c,v1),times(c,v2))
                    elif prop == "dist_s":
                        LHS = times(c+d,v)
                        RHS = plus(times(c,v),times(d,v))
                    LHS = vectorsimplify(LHS)
                    RHS = vectorsimplify(RHS)
                    if LHS == RHS:
                        trueproperties[prop]=vectorsimplify(LHS)
                    else:
                        falseproperties.append(prop)
            for prop in false_only_property_options:
                if "dist_s" in trueproperties and "mul_id" in trueproperties:
                    if prop == "add_id":
                        LHS = plus(times(0,v),v)
                        RHS = v
                        if vectorsimplify(LHS) != vectorsimplify(RHS):
                            falseproperties.append(prop)
                        else:
                            LHS = plus(times(-1,v),v)
                            RHS = times(0,v)
                            if vectorsimplify(LHS) != vectorsimplify(RHS):
                                falseproperties.append("add_inv")
            return (trueproperties, falseproperties)
        
        #Use this to code in false properties that cannot be checked automatically ("add_id" and "add_inv")
        hardfalseproperties=[]

        #Use this to list a property that is true, but you don't want students to check
        #because it is too easy (usually "add_comm")
        truebuteasy_properties=[]
        
        n = randrange(6)
        n=2 #Debugging, delete later
        if n==0:
            m1=randrange(2,5)
            m2=randrange(1,4)
            plus = lambda v1,v2: vector([m1*v1[0]+v2[0], v1[1]+m2*v2[1]])
            times = lambda c,v : vector([c*v[0],c*v[1]])
            a=randrange(1,8)
            b=randrange(1,8)
            theta = lambda v : vector([v[0]+a,v[1]+b])
            untheta = lambda v : vector([v[0]-a,v[1]-b])

            hardfalseproperties += ["add_id","add_inv"]

        elif n==1:
            plus = lambda v1,v2 : vector([v1[0]+v2[0], v1[1]+v2[1]])
            r1 = randrange(1,9)
            r2 = randrange(1,9)
            times= lambda c,v : vector([c*v[0]+r1*c*v[1],r2*c*v[1]])
            a=randrange(1,8)
            theta = lambda v : vector([v[0],v[1]+a])
            untheta = lambda v : vector([v[0],v[1]-a])
            truebuteasy_properties.append("add_comm")

        elif n==2:            
            plus = lambda v1,v2 : vector([v1[0]+v2[0], v1[1]+v2[1]])
            r2 = randrange(2,4)
            times= lambda c,v : vector([c*v[0],c^(r2)*v[1]])
            a=randrange(1,8)
            b=randrange(2,8)
            theta = lambda v: vector([v[0]+b*v[1],v[1]+a])
            untheta = lambda v : vector([v[0]-b*(v[1]-a),v[1]-a])
            truebuteasy_properties.append("add_comm")

        elif n==3:
            r1 = randrange(1,9)
            plus = lambda v1,v2 : vector([v1[0]+v2[0], v1[1]+v2[1]-r1])
            times= lambda c,v : vector([c*v[0],c*v[1]])
            a=randrange(1,5)
            theta = lambda v: vector([v[0],v[1]+a*v[0]^2])
            untheta = lambda v : vector([v[0],v[1]-a*v[0]^2])

        elif n==4:
            r=randrange(3,8)
            plus = lambda v1,v2 : vector([v1[0]+v2[0], v1[1]+v2[1]])
            times= lambda c,v : vector([c*v[0],c*v[1]-r*c+r])            
            a=randrange(1,5)
            b=randrange(1,5)
            theta = lambda v : vector([v[0]+b,v[1]+a*v[0]])
            untheta = lambda v : vector([v[0]-b,v[1]-a*(v[0]-b)])

        elif n==5:
            r=randrange(1,6)
            plus = lambda v1,v2 : vector([v1[0]+v2[0]+r, v1[1]+v2[1]])
            r1 = randrange(1,6)
            r2 = randrange(1,6)
            times= lambda c,v,: vector([c*v[0]+r1*c*v[1]-r,r2*c*v[1]])
            a=randrange(1,5)
            theta = lambda v: vector([v[0],v[1]+a*v[0]])
            untheta = lambda v : vector([v[0],v[1]-a*v[0]])

        oplus = lambda v1,v2 : theta(plus(untheta(v1),untheta(v2)))
        otimes = lambda c,v : theta(times(c,untheta(v)))

        trueproperties, falseproperties = verify(oplus,otimes,hardfalseproperties)
        for prop in truebuteasy_properties:
            if prop in trueproperties.keys():
                trueproperties.pop(prop)
            else:
                print("WARNING:  Property "+prop + " was false.")
        trueproperty, verification = choice(list(trueproperties.items()))

        return {
            "oplus": vectorsimplify(oplus(v1,v2)),
            "otimes": vectorsimplify(otimes(c,v)),
            "trueproperty": {
                trueproperty: verification
            },
            "falseproperties": {f: True for f in falseproperties},
        }
