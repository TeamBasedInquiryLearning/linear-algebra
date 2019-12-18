class V1(MastrExercise):
  @classmethod
  def title(self):
    return "V1 - Vector Spaces"

  def generate(self):
	
	#Pick how many vectors in R4
	#n = choice(range(0,10))
	#if n==0:
	set="the set of all pairs of numbers <m>(x_1,y_1)\in\mathbb{R}^2</m>"
	oplus = "(x_1,y_1)\oplus (x_2,y_2)&= (" + str(randrange(2,5))+"x_1+x_2, y_1+"+str(randrange(1,4))+"y_2)"
	otimes = "c \odot (x_1,y_1) &= (cx_1,cy_1)"
	trueproperty="""scalar multiplication distributes over vector addition, i.e. 
					<me>c\odot \left((x_1,y_1)\oplus(x_2,y_2)\\right)=c\odot(x_1,y_1)\oplus c\odot(x_2,y_2).</me>"""
	falseproperty=choice(["vector addition is not commutative", 
						  "vector addition is not associative",
						  "an additive identity element does not exist",
						  "Scalar multiplication does not distribute over scalar addition"])
		
	
	return {
      "set": set,
	  "oplus": oplus,
	  "otimes": otimes,
	  "trueproperty": trueproperty,
	  "falseproperty": falseproperty
    }
