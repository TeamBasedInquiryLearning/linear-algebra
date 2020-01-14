class V05(MastrExercise):
  @classmethod
  def title(self):
    return "V5 - Linear Independence"

  def generate(self):
	
	#Pick 3 vectors in R5
	n=choice([4,5])
	vec=[]
	for i in range(0,n):
		vec.append(vector([ randrange(-6,6), randrange(-6,6), randrange(-6,6), randrange(-6,6), randrange(-6,6)]))

	#Pick if yes a linear combination or no
	independent = choice([false,true])

	#If dependent, Generate the 4th vector and sometimes the 3rd vector
	if independent==0:
		d = choice( range(3,n))
		vec[d]=randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]
		if choice([false,true]):
			d = choice( range(2,n))
			vec[d]=randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]

	A=matrix(vec).transpose()
	if rank(A)<n:
		independent = false
	else:
		independent = true
	
	latex.matrix_delimiters("[", "]")	
	veclist = ""
	for i in range(0,n):
		veclist+=latex(column_matrix(vec[i]))
		if i<n-1:
			veclist+=", "
	return {
      "independent": independent,
	  "vlist": veclist
	}
