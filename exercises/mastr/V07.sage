class V07(MastrExercise):
  @classmethod
  def title(self):
    return "V7 - Basis Computation"

  def generate(self):
	
	#Pick some  vectors in R4
	n=choice([4,5,6])
	vec=[]
	for i in range(0,n):
		vec.append( vector([ randrange(-4,4), randrange(-4,4), randrange(-4,4), randrange(-4,4)]))

	#Build some vectors as linear combos
	if choice([false,true]):
		vec[2] = randrange(-5,5)*vec[0]+randrange(-5,5)*vec[1]
	if choice([false,true]):
		vec[3] = randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]
	if n>4 and choice([false,true]):
		vec[4] = randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]+randrange(-3,3)*vec[3]
	if n>5 and choice([false,true]):
		vec[5] = randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]+randrange(-3,3)*vec[3]



	A = matrix(vec).transpose()
	latex.matrix_delimiters("[", "]")	
	veclist = ""
	for i in range(0,n):
		veclist+=latex(column_matrix(vec[i]))
		if i<n-1:
			veclist+=", "

	basis=""
	for i in A.pivots():
		basis+=latex(column_matrix(A.column(i)))
		if i<len(A.pivots())-1:
			basis+=", "

	
	return {
	  "vlist": veclist,
      "basis": basis
    }
