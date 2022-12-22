load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        var('x1 x2 x3 y1 y2 y3 c d x y')
        oplus=r"(x_1,y_1)\oplus (x_2,y_2)="
        otimes=r"c \odot (x,y) ="
        trueproperties=["vector addition is associative", 
                        "vector addition is commutative",
                        "there exists an additive identity element",
                        "additive inverses exist",
                        "scalar multiplication is associative",
                        "1 is a scalar multiplication identity",
                        "scalar multiplication distributes over vector addition",
                        "scalar multiplication distributes over scalar addition"
                    ]
        truepropertiessymb=[r"\left((x_1,y_1)\oplus(x_2,y_2)\right)\oplus(x_3,y_3)=(x_1,y_1)\oplus\left((x_2,y_2)\oplus(x_3,y_3)\right)",
                        r"(x_1,y_1)\oplus(x_2,y_2)=(x_2,y_2)\oplus(x_1,y_1)",
                        r"\text{There exists }(w,z)\in V\text{ such that }(x,y)\oplus(w,z)=(x,y)",
                        "additive inverses exist",
                        r"a\odot(b\odot (x,y))=(ab)\odot(x,y)",
                        r"1\odot(x,y)=(x,y)",
                        r"c\odot \left((x_1,y_1)\oplus(x_2,y_2)\right)=c\odot(x_1,y_1)\oplus c\odot(x_2,y_2)",
                        r"(c+d)\odot(x,y)=c\odot(x,y)\oplus d\odot (x,y)"
                    ]
        falseproperties=["vector addition is not associative",#0
                        "vector addition is not commutative",#1
                        "there is no additive identity element",#2
                        "additive inverses do not always exist",#3
                        "scalar multiplication is not associative",#4
                        "1 is not a scalar multiplication identity",#5
                        "scalar multiplication does not distribute over vector addition",#6
                        "scalar multiplication does not distribute over scalar addition"#7
                    ]
        vectorsimplify = lambda v : vector([simplify(expand(x)) for x in v])

        n = randrange(1,7)
        if n==1:
            plus = lambda v1,v2 : vector([randrange(2,5)*v1[0]+v2[0], v1[1]+randrange(1,4)*v2[1]])
            times = lambda c,v : vector([c*v[0],c*v[1]])
            a=randrange(1,8)
            b=randrange(1,8)
            theta = lambda v,a=a : vector([v[0]+a,v[1]+b])
            untheta = lambda v,a=a : vector([v[0]+a,v[1]-b])

            trueproperty= trueproperties[6]
            truetex=truepropertiessymb[6]
            falseproperty=[ falseproperties[0],falseproperties[1],falseproperties[7]]

        elif n==2:
            plus = lambda v1,v2 : vector([v1[0]+v2[0], v1[1]+v2[1]])
            times= lambda c,v : vector([c*v[0]+randrange(1,9)*c*v[1],randrange(1,9)*c*v[1]])
            a=randrange(1,8)
            theta = lambda v,a=a : vector([v[0],v[1]+a])
            untheta = lambda v,a=a : vector([v[0],v[1]-a])

            t=choice([6,7])
            trueproperty= trueproperties[t]
            truetex=truepropertiessymb[t]
            falseproperty=[falseproperties[4], falseproperties[5]]

        elif n==3:            
            plus = lambda v1,v2 : vector([v1[0]+v2[0], v1[1]+v2[1]])
            times= lambda c,v : vector([c^(randrange(2,4))*v[0],c^(randrange(2,5))*v[1]])
            a=randrange(1,8)
            b=randrange(2,8)
            theta = lambda v,a=a : vector([v[0]+b*v[1],v[1]+a])
            untheta = lambda v,a=a : vector([v[0]-b*(v[1]-a),v[1]-a])

            t=choice([4,5,6])
            trueproperty= trueproperties[t]
            truetex=truepropertiessymb[t]
            falseproperty=[falseproperties[7]]

        elif n==4:            
            plus = lambda v1,v2 : vector([v1[0]+v2[0], v1[1]+v2[1]-randrange(2,7)])
            times= lambda c,v : vector([c*v[0],c*v[1]])
            a=randrange(1,5)
            theta = lambda v,a=a : vector([v[0],v[1]+a*v[0]^2])
            untheta = lambda v,a=a : vector([v[0],v[1]-a*v[0]^2])

            trueproperty= trueproperties[0]
            truetex=truepropertiessymb[0]
            falseproperty=[falseproperties[6], falseproperties[7]]
        elif n==5:
            r=randrange(3,8)
            plus = lambda v1,v2 : vector([v1[0]+v2[0], v1[1]+v2[1]])
            times= lambda c,v,r=r : vector([c*v[0],c*v[1]-r*c+r])            
            a=randrange(1,5)
            b=randrange(1,5)
            theta = lambda v,a=a,b=b : vector([v[0]+b,v[1]+a*v[0]])
            untheta = lambda v,a=a,b=b : vector([v[0]-b,v[1]-a*(v[0]-b)])

            trueproperty= trueproperties[4]
            truetex=truepropertiessymb[4]
            falseproperty=[falseproperties[6],falseproperties[7]]
        elif n==6:
            r=randrange(1,6)
            plus = lambda v1,v2,r=r : vector([v1[0]+v2[0]+r, v1[1]+v2[1]])
            times= lambda c,v,r=r : vector([c*v[0]+randrange(1,6)*c*v[1]-r,randrange(1,6)*c*v[1]])
            a=randrange(1,5)
            theta = lambda v,a=a : vector([v[0],v[1]+a*v[0]])
            untheta = lambda v,a=a : vector([v[0],v[1]-a*v[0]])

            t=choice([0,6,7])
            trueproperty= trueproperties[t]
            truetex=truepropertiessymb[t]
            falseproperty=[falseproperties[4], falseproperties[5]]


        return {
            #"oplus": [oplus,oplusop(vector([x1,y1]),vector([x2,y2]))],
            "oplus": [oplus,vectorsimplify(theta(plus(untheta([x1,y1]),untheta([x2,y2]))))],
            #"otimes": [otimes,otimesop(c,vector([x,y]))],
            "otimes": [otimes,vectorsimplify(theta(times(c,untheta([x,y]))))],
            "trueproperty": trueproperty,
            "truetex": truetex,
            "falseproperties": falseproperty,
        }
