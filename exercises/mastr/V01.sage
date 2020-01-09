class V01(MastrExercise):
  @classmethod
  def title(self):
    return "V1 - Vector Spaces"

  def generate(self):
	
	#Pick how many vectors in R4
	#n = choice(range(0,10))
	#if n==0:
	set="the set of all pairs of numbers <m>(x_1,y_1)\in\mathbb{R}^2</m>"

	n = randrange(1,4)
	if n==1:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (" + str(randrange(2,5))+"x_1+x_2, y_1+"+str(randrange(1,4))+"y_2)"
		otimes = "c \odot (x_1,y_1) &= (cx_1,cy_1)"
		trueproperty="""scalar multiplication distributes over vector addition, i.e. 
						<me>c\odot \left((x_1,y_1)\oplus(x_2,y_2)\\right)=c\odot(x_1,y_1)\oplus c\odot(x_2,y_2).</me>"""
		falseproperty=",".join(["vector addition is not commutative", 
							  "vector addition is not associative",
							  "an additive identity element does not exist",
							  "scalar multiplication does not distribute over scalar addition"])
	elif n==2:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (" + str(randrange(1,5))+"x_1x_2, y_1+"+str(randrange(2,5))+"y_2)"
		otimes = "c \odot (x_1,y_1) &= (cx_1,0)"
		trueproperty="""an additive identity element exists, i.e. there exists an element <m>(z,w)</m> satisfying 
						<me>\left((x_1,y_1)\oplus(z,w)\\right)=(x_1,y_1).</me>"""
		falseproperty=",".join(["vector addition is not commutative", 
							  "vector addition is not associative",
							  "additive inverses do not exist",
							  "1 is not a scalar multiplicative identity element",
							  "scalar multiplication does not distribute over vector addition",
							  "scalar multiplication does not distribute over scalar addition"])
	elif n==3:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (x_1+x_2+randrange(1,5), y_1+y_2)"
		otimes = "c \odot (x_1,y_1) &= (cx_1,y_1^c)"
		trueproperty=choice(["""vector addition is associative, i.e.
						<me>\left((x_1,y_1)\oplus(x_2,y_2)\\right)\oplus(x_3,y_3)=(x_1,y_1)\oplus\left((x_2,y_2)\oplus(x_3,y_3)\\right).</me>""",
						"""an additive identity element exists, i.e. there exists an element <m>(z,w)</m> satisfying 
						<me>\left((x_1,y_1)\oplus(z,w)\\right)=(x_1,y_1).</me>"""])
		falseproperty=",".join(["scalar multiplication does not distribute over vector addition",
							  "scalar multiplication does not distribute over scalar addition"])
	elif n==4:
		oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (x_1+x_2, y_1+y_2)"
		otimes = "c \odot (x_1,y_1) &= ("+str(randrange(2,6))+"x_1,"+str(randrange(2,6))+"y_1)"
		trueproperty="""scalar multiplication distributes over scalar addition, i.e.
						<me>(c+d)\odot(x_1,y_1)=c\odot(x_1,y_1)\oplus d\odot (x_2,y_2).</me>""",
		falseproperty=",".join(["scalar multiplication does not distribute over vector addition",
							  "1 is not a scalar multiplicative identity element",
							  "scalar multiplication is not associative"])

	return {
      "set": set,
	  "oplus": oplus,
	  "otimes": otimes,
	  "trueproperty": trueproperty,
	  "falseproperties": falseproperty
    }
