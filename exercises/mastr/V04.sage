class V04(MastrExercise):
  @classmethod
  def title(self):
    return "V4 - Subspaces"

  def generate(self):
	latex.matrix_delimiters("[", "]")    
	
	dim = choice([2,3,4])
	vectorspace="\mathbb{R}^" + str(dim)
	v = vector([var("x"),var("y"),var("z"),var("w")][0:dim])
	leftstring="\left\{"+latex(column_matrix(v))+"\hspace{0.2em}\middle|\hspace{0.2em}"

	if( dim == 2):
		subspacestring = latex(choice([
			(randrange(1,8)*v[0]+randrange(1,8)*v[1] == 0),
			(randrange(2,8)*v[0]==randrange(1,7)*v[1])
		]))
		notsubspacestring = latex(choice([
			(v[0]^randrange(2,4)+randrange(1,8)*v[1] == 0),
			(v[0]^randrange(2,4)==randrange(1,8)*v[1]),
			(randrange(2,8)*v[0]*v[1]^randrange(2,4) == 0),
			(randrange(2,8)*v[0]==v[1]^randrange(2,4)),
		]))
	if( dim==3):
		subspacestring = latex(choice([
			(randrange(1,8)*v[0] +randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
			(randrange(1,8)*v[0] +randrange(1,8)*v[1] == randrange(2,6)*v[2]),
			(randrange(1,8)*v[0] ==randrange(1,8)*v[1] + randrange(2,6)*v[2]),
			(randrange(1,8)*v[1] ==randrange(1,8)*v[0] - randrange(2,6)*v[2]),
		]))
		notsubspacestring = latex(choice([ 
			(v[0]^randrange(2,4) +randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
			(v[1]^randrange(2,4) +randrange(1,8)*v[0] == randrange(2,6)*v[2]),
			(randrange(1,8)*v[0] == randrange(2,6)*v[1]+v[2]^randrange(2,4) ),
			(v[0]^randrange(2,4)*randrange(1,8)*v[1] + randrange(2,6)*v[2]==0),
		]))
	if( dim==4):
		subspacestring = latex(choice([
			(randrange(1,8)*v[0] +randrange(1,8)*v[1] + randrange(2,6)*v[2]==randrange(2,7)*v[3]),
			(randrange(1,8)*v[0] +randrange(1,8)*v[3] == randrange(2,6)*v[2]),
			(randrange(2,8)*v[0]+randrange(1,7)*v[3] ==randrange(1,8)*v[1] + randrange(2,6)*v[2]),
			(randrange(1,8)*v[1]-randrange(-6,7)*v[3] ==randrange(1,8)*v[0] - randrange(2,6)*v[2]),
		]))
		notsubspacestring = latex(choice([ 
			(v[0]^randrange(2,4) +randrange(1,8)*v[1] + randrange(2,6)*v[2]==randrange(2,6)*v[3]),
			(v[1]^randrange(2,4) +randrange(1,8)*v[0] == randrange(2,6)*v[2]),
			(randrange(1,8)*v[0] == randrange(2,6)*v[1]+v[2]^randrange(2,4)-randrange(2,6)*v[3] ),
			(v[0]^randrange(2,4)*randrange(1,8)*v[1] + randrange(2,6)*v[2]*v[3]==0),
		]))
	
	subspacestring = leftstring+subspacestring+ " \\right\}"
	notsubspacestring = leftstring+notsubspacestring+ " \\right\}"

	#Write sets in order subspace, not subspace
	vsets=[subspacestring,notsubspacestring]
	#Randomly swap order so 2nd is subspace
	swapped = choice([True,False])
	if(swapped):
		vsets.reverse()

	return {
	  "vsets": vsets,
	  "vectorspace": vectorspace,
	  "swapped": swapped
    }
