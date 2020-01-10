class V01(MastrExercise):
  @classmethod
  def title(self):
    return "V1 - Vector Spaces"

  def generate(self):
	
	n = randrange(0,10)
	if n==1:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (" + str(randrange(2,5))+"x_1+x_2, y_1+"+str(randrange(1,4))+"y_2)"
		otimes = "c \odot (x,y) &= (cx,cy)"
		trueproperty="scalar multiplication distributes over vector addition"
		truetex="c\odot \left((x_1,y_1)\oplus(x_2,y_2)\\right)=c\odot(x_1,y_1)\oplus c\odot(x_2,y_2)"
		falseproperties=["vector addition is not commutative", 
							  "vector addition is not associative",
							  "scalar multiplication does not distribute over scalar addition"]
	elif n==2:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (" + str(randrange(1,5))+"x_1x_2, y_1+"+str(randrange(2,5))+"y_2)"
		otimes = "c \odot (x,y) &= (cx,0)"
		trueproperty="there exists an additive identity element"
		truetex="\\text{there exists }(w,z)\in V\\text{ such that }(x,y)\oplus(w,z)=(x,y)"
		falseproperties=["vector addition is not commutative", 
							  "vector addition is not associative",
							  "additive inverses do not exist",
							  "1 is not a scalar multiplicative identity element",
							  "scalar multiplication does not distribute over vector addition",
							  "scalar multiplication does not distribute over scalar addition"]
	elif n==3:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (x_1+x_2+"+str(randrange(1,5))+", y_1+y_2)"
		otimes = "c \odot (x,y) &= (cx,y^c)"
		trueproperty="vector addition is associative"
		truetex="\left((x_1,y_1)\oplus(x_2,y_2)\\right)\oplus(x_3,y_3)=(x_1,y_1)\oplus\left((x_2,y_2)\oplus(x_3,y_3)\\right)"
#						"""an additive identity element exists, i.e. there exists an element <m>(z,w)</m> satisfying 
#						<me>\left((x_1,y_1)\oplus(z,w)\\right)=(x_1,y_1).</me>"""])
		falseproperties=["scalar multiplication does not distribute over vector addition",
							  "scalar multiplication does not distribute over scalar addition"]
	elif n==4:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (x_1+x_2, y_1+y_2)"
		otimes = "c \odot (x,y) &= ("+str(randrange(2,6))+"cx,"+str(randrange(2,6))+"cy)"
		trueproperty="scalar multiplication distributes over scalar addition"
		truetex="(c+d)\odot(x,y)=c\odot(x,y)\oplus d\odot (x,y)"
		falseproperties=["scalar multiplication does not distribute over vector addition",
							  "1 is not a scalar multiplicative identity element",
							  "scalar multiplication is not associative"]
	elif n==5:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (x_1+x_2, y_1+y_2)"
		otimes = "c \odot (x,y) &= (c^"+str(randrange(2,4))+"x, c^"+str(randrange(2,4))+"y)"
		trueproperty="scalar multiplication distributes over vector addition"
		truetex="c\odot \left((x_1,y_1)\oplus(x_2,y_2)\\right)=c\odot(x_1,y_1)\oplus c\odot(x_2,y_2)"
		falseproperties=["scalar multiplication does not distribute over scalar addition"]
	elif n==6:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (x_1+x_2, y_1+y_2+"+str(randrange(2,5))+"x_1x_2)"
		otimes = "c \odot (x,y) &= (cx,cy)"
		trueproperty="vector addition is associative"
		truetex="\\left((x_1,y_1)\oplus(x_2,y_2)\\right)\oplus(x_3,y_3)=(x_1,y_1)\oplus\left((x_2,y_2)\oplus(x_3,y_3)\\right)"
#						"""additive inverse elements exist, i.e. for each vector <m>(x_1,y_1)</m> there exists an element <m>(a,b)</m> satisfying 
#						<me>\left((x_1,y_1)\oplus(a,b)\\right)=\\vec{0}.</me>"""])
		falseproperties=["scalar multiplication does not distribute over vector addition",
							  "scalar multiplication does not distribute over scalar addition"]
	elif n==7:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (x_1+x_2, y_1+y_2)"
		randnum = randrange(2,5)
		otimes = "c \odot (x,y) &= (cx,cy-"+str(randnum)+"c+"+str(randnum)+")"
		trueproperty="scalar multiplication is associative"
		truetex="a\odot(b\odot (x,y))=(ab)\odot(x,y)"
		falseproperties=["scalar multiplication does not distribute over vector addition",
							  "scalar multiplication does not distribute over scalar addition"]
	elif n==8:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (x_1+x_2+"+str(randrange(2,7))+", \sqrt{y_1^2+y_2^2})"
		otimes = "c \odot (x,y) &= (cx,cy)"
		trueproperty="vector addition is associative"
		truetex="\\left((x_1,y_1)\oplus(x_2,y_2)\\right)\oplus(x_3,y_3)=(x_1,y_1)\oplus\left((x_2,y_2)\oplus(x_3,y_3)\\right)"
		falseproperties=["no additive identity element exists", 
								"scalar multiplication does not distribute over vector addition",
								"scalar multiplication does not distribute over scalar addition"]
	elif n==9:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= ("+str(randrange(2,6))+"(x_1+x_2), "+str(randrange(2,7))+"(y_1+y_2))"
		otimes = "c \odot (x,y) &= (cx,cy)"
		trueproperty="scalar multiplication distributes over vector addition"
		truetex="c\odot \left((x_1,y_1)\oplus(x_2,y_2)\\right)=c\odot(x_1,y_1)\oplus c\odot(x_2,y_2)"
		falseproperties=["vector addition is not associative",
							  	"scalar multiplication does not distribute over scalar addition"]
	else: #n==0
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (x_1x_2,y_1y_2)"
		otimes = "c \odot (x,y) &= (x^c,y^c)"
		trueproperty="there exists an additive identity element"
		truetex="\\text{there exists }(w,z)\in V\\text{ such that }(x,y)\oplus(w,z)=(x,y)"
		falseproperties=["additive inverse elements do not always exist"]


	return {
		"oplus": oplus,
		"otimes": otimes,
		"trueproperty": trueproperty,
		"truetex": truetex,
		"falseproperties": falseproperties,
		"n":n
    }
