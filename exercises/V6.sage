class V6(MastrExercise):
  @classmethod
  def title(self):
    return "V6 - Basis verification"

  def generate(self):
	
	#Pick n vectors in Rn
	n=choice([3,4,5])
	vec=[]
	for i in range(0,n):
		v=[]
		for _ in range(0,n):
			v.append(randrange(-5,5))
		vec.append(vector(v))

	#Pick if yes a basis combination or not
	basis = choice([false,true])

	#If dependent, Generate the 3, 4, 5th vector sometimes 
	if basis==0:
		if choice([false,true]):
			vec[2] = randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]
		if n>3 and choice([false,true]):
			vec[3] = randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]
		if n>4 and choice([false,true]):
			vec[4] = randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[3]

	A=matrix(vec).transpose()
	if rank(A)<n:
		basis=false
	else:
		basis=true
	
	latex.matrix_delimiters("[", "]")	
	veclist = ""
	for i in range(0,n):
		veclist+=latex(column_matrix(vec[i]))
		if i<n-1:
			veclist+=", "
		if i==n-2:
			veclist+="\\text{ and }"	

	return {
      "basis": basis,
	  "vlist": veclist,
	  "dim": str(n)
	}
