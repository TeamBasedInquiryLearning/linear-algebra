class V7(MastrExercise):
  @classmethod
  def title(self):
    return "V7 - Basis Computation"

  def generate(self):
	
	#Pick 6 vectors in R4
	vec1 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
	vec2 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
	vec3 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
	vec4 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
	vec5 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
	vec6 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])

	#Build some vectors as linear combos
	if choice([false,true]):
		vec3 = randrange(-5,5)*vec1+randrange(-5,5)*vec2

	if choice([false,true]):
		vec4 = randrange(-5,5)*vec1+randrange(-5,5)*vec2+randrange(-5,5)*vec3

	if choice([false,true]):
		vec5 = randrange(-5,5)*vec1+randrange(-5,5)*vec2+randrange(-5,5)*vec3

	if choice([false,true]):
		vec6 = randrange(-5,5)*vec1+randrange(-5,5)*vec2+randrange(-5,5)*vec4

	A = column_matrix([vec1,vec2,vec3,vec4,vec5,vec6])
	basis=""
	latex.matrix_delimiters("[", "]")	
	for i in A.pivots():
		basis+=latex(column_matrix(A.column(i)))
		if i<len(A.pivots())-1:
			basis+=", "

	
	return {
	  "vlist": latex(column_matrix(vec1))+", "+latex(column_matrix(vec2))+", "+latex(column_matrix(vec3))+", "+latex(column_matrix(vec4))+", "+latex(column_matrix(vec5))+", "+latex(column_matrix(vec6)),
      "basis": basis
    }
