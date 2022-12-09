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
        n = randrange(0,10)
        if n==1:
            def oplusop(v1,v2):
                return vector([randrange(2,5)*v1[0]+v2[0], v1[1]+randrange(1,4)*v2[1]])

            def otimesop(c,v):
                return vector([c*v[0],c*v[1]])

            trueproperty= trueproperties[6]
            truetex=truepropertiessymb[6]
            falseproperty=[ falseproperties[0],falseproperties[1],falseproperties[7]]

        elif n==2:
            def oplusop(v1,v2):
                return vector([randrange(1,5)*v1[0]*v2[0], v1[1]+randrange(2,5)*v2[1]])

            def otimesop(c,v):
                return vector([c*v[0],0])

            trueproperty= trueproperties[2]
            truetex=truepropertiessymb[2]
            falseproperty=[ falseproperties[0], falseproperties[1], falseproperties[3], falseproperties[5], falseproperties[6], falseproperties[7]]
        elif n==3:
            def oplusop(v1,v2):
                return vector([v1[0]+v2[0]+randrange(1,5), v1[1]+v2[1]])

            def otimesop(c,v):
                return vector([c*v[0],v[1]^abs(c)])

            trueproperty= trueproperties[0]
            truetex=truepropertiessymb[0]
            falseproperty=[falseproperties[6], falseproperties[7]]
        elif n==4:
            def oplusop(v1,v2):
                return vector([v1[0]+v2[0], v1[1]+v2[1]])

            def otimesop(c,v):
                return vector([randrange(2,6)*c*v[0],randrange(2,6)*c*v[1]])

            trueproperty= trueproperties[7]
            truetex=truepropertiessymb[7]
            falseproperty=[falseproperties[4], falseproperties[5],falseproperties[6]]
        elif n==5:
            def oplusop(v1,v2):
                return vector([v1[0]+v2[0], v1[1]+v2[1]])

            def otimesop(c,v):
                return vector([c^(randrange(2,4))*v[0],c^(randrange(2,5))*v[1]])

            trueproperty= trueproperties[6]
            truetex=truepropertiessymb[6]
            falseproperty=[falseproperties[7]]
        elif n==6:
            def oplusop(v1,v2):
                return vector([v1[0]+v2[0], v1[1]+v2[1]-randrange(2,7)])

            def otimesop(c,v):
                return vector([c*v[0],c*v[1]])

            trueproperty= trueproperties[0]
            truetex=truepropertiessymb[0]
            falseproperty=[falseproperties[6], falseproperties[7]]
        elif n==7:
            def oplusop(v1,v2):
                return vector([v1[0]+v2[0], v1[1]+v2[1]])

            def otimesop(c,v):
                r=randrange(3,8)
                return vector([c*v[0],c*v[1]-r*c+r])

            trueproperty= trueproperties[4]
            truetex=truepropertiessymb[4]
            falseproperty=[falseproperties[6],falseproperties[7]]
        elif n==8:
            def oplusop(v1,v2):
                return vector([v1[0]+v2[0]+randrange(2,7), sqrt(v1[1]^2+v2[1]^2)])

            def otimesop(c,v):
                return vector([c*v[0],c*v[1]])

            trueproperty= trueproperties[0]
            truetex=truepropertiessymb[0]
            falseproperty=[falseproperties[2], falseproperties[6],falseproperties[7]]
        elif n==9:
            def oplusop(v1,v2):
                return vector([randrange(2,7)*(v1[0]+v2[0]), randrange(2,7)*(v1[1]+v2[1])])

            def otimesop(c,v):
                return vector([c*v[0],c*v[1]])

            trueproperty= trueproperties[6]
            truetex=truepropertiessymb[6]
            falseproperty=[falseproperties[0], falseproperties[7]]
        else: #n==0
            def oplusop(v1,v2):
                return vector([v1[0]*v2[0], v1[1]*v2[1]])

            def otimesop(c,v):
                return vector([v[0]^c,v[1]^c])

            trueproperty= trueproperties[2]
            truetex=truepropertiessymb[2]
            falseproperty=[falseproperties[3]]


        return {
            "oplus": [oplus,oplusop(vector([x1,y1]),vector([x2,y2]))],
            "otimes": [otimes,otimesop(c,vector([x,y]))],
            "trueproperty": trueproperty,
            "truetex": truetex,
            "falseproperties": falseproperty,
        }
