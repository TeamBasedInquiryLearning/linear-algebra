class V04(MastrExercise):
  @classmethod
  def title(self):
    return "V4 - Subspaces"

  def generate(self):
	

	dim = choice([2,3,4])
	vectorspace="\mathbb{R}^" + str(dim)
	leftstring="""=\left\{ \left\[\\begin{array}{c} x \\\\ y \\\\"""
	if( dim > 2 ):
		leftstring+= "z \\\\ "
	if( dim > 3 ):
		leftstring+= "w \\\\ "
	leftstring+= """\end{array}\\right\] \,\middle|\,"""

	whichsub = choice([1,2])
	subspace="W_"+str(whichsub)
	notsubspace="W_"+str(3-whichsub)

	if( dim == 2):
		subspacestring = choice([ str(randrange(1,8))+"x + " + str(randrange(1,8))+"y = 0",
								  str(randrange(2,8))+"x="+str(randrange(1,7))+"y"])
		notsubspacestring = choice([ "x^"+str(randrange(2,4))+str(randrange(1,8))+"y=0",
									str(randrange(2,8))+"x+y^"+str(randrange(2,4))+"=0",
									str(randrange(2,8))+"x=y^"+str(randrange(2,4)),
									"x^"+str(randrange(2,3))+"="+str(randrange(1,5))+"y"])
	if( dim==3):
		subspacestring = choice([ str(randrange(1,8))+"x + " + str(randrange(1,8))+"y + "+str(randrange(2,6))+"z= 0",
								  str(randrange(2,8))+"x+"+str(randrange(1,7))+"y="+str(randrange(1,6))+"z",
								  str(randrange(2,8))+"x="+str(randrange(1,7))+"y+"+str(randrange(1,6))+"z",
								  str(randrange(2,8))+"y="+str(randrange(1,7))+"x-"+str(randrange(2,6))+"z",
								  ])
		notsubspacestring = choice([ "x^"+str(randrange(2,4))+str(randrange(2,8))+"y + "+str(randrange(2,6))+"z=0",
									str(randrange(2,8))+"x+y^"+str(randrange(2,4))+"=" +str(randrange(2,6))+"z",
									str(randrange(2,8))+"x=y^"+str(randrange(2,4))+"+z^"+str(randrange(2,4)),
									"x^"+str(randrange(2,3))+"="+str(randrange(1,5))+"y-"+str(randrange(1,6))+"z"])
	if( dim==4):
		subspacestring = choice([ str(randrange(1,8))+"x + " + str(randrange(1,8))+"y + "+str(randrange(2,6))+"z+"+str(randrange(2,6))+"w= 0",
								  str(randrange(2,8))+"x+"+str(randrange(1,7))+"y="+str(randrange(1,6))+"z-"+str(randrange(2,6))+"w",
								  str(randrange(2,8))+"x+"+str(randrange(1,7))+"y="+str(randrange(1,6))+"z",
								  str(randrange(2,8))+"x-"+str(randrange(2,7))+"w="+str(randrange(1,7))+"y+"+str(randrange(1,6))+"z",
								  str(randrange(2,8))+"y+"+str(randrange(2,5))+"w="+str(randrange(1,7))+"x-"+str(randrange(2,6))+"z",
								  ])
		notsubspacestring = choice([ "x^"+str(randrange(2,4))+str(randrange(1,8))+"y + "+str(randrange(2,6))+"z=w^"+str(randrange(2,4)),
									str(randrange(2,8))+"x+y^"+str(randrange(2,4))+"=" +str(randrange(2,6))+"z+"+str(randrange(2,7))+"w",
									str(randrange(2,8))+"x=y^"+str(randrange(2,4))+"+z^"+str(randrange(2,4))+"+"+str(randrange(2,5))+"w",
									str(randrange(2,8))+"x+"+str(randrange(2,7))+"w=y^"+str(randrange(2,4))+"+z^"+str(randrange(2,4)),
									"x^"+str(randrange(2,3))+"="+str(randrange(1,5))+"y-"+str(randrange(1,6))+"z"]) 
	
	subspacestring += """ \\right\}"""
	notsubspacestring += """ \\right\}"""

		
	#Write sets in order subspace, not subspace
	vsets=[subspace+leftstring+subspacestring, notsubspace+leftstring+notsubspacestring]
	#Swap order if W2 is the subspace
	if(whichsub==2):
		vsets.reverse()

	return {
      "vsets": vsets,
	  "vectorspace": vectorspace,
	  "subspace": subspace,
	  "notsubspace": notsubspace
    }
