class V5(MastrExercise):
  @classmethod
  def title(self):
    return "V5 - Linear Independence"

  def generate(self):
	
	#Pick 4 vectors in R5
	vec1 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
	vec2 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
	vec3 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
	vec4 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])

	#Pick if yes a linear combination or no
	independent = choice([false,true])

	#If dependent, Generate the 4th vector and sometimes the 3rd vector
	if independent==0:
		if choice([false,true]):
			vec3 = randrange(-5,5)*vec1+randrange(-5,5)*vec2
		else:
			if choice([false,true]):
				vec3 = randrange(-5,5)*vec1+randrange(-5,5)*vec2
			vec4 = randrange(-5,5)*vec1+randrange(-5,5)*vec2+randrange(-5,5)*vec3

	A=column_matrix([vec1, vec2, vec3, vec4])
	if rank(A)<4:
		independent = false
	else:
		independent = true
	
	latex.matrix_delimiters("[", "]")	
	return {
      "independent": independent,
	  "vlist": latex(column_matrix(vec1))+", "+latex(column_matrix(vec2))+", "+latex(column_matrix(vec3))+", \\text{and }"+latex(column_matrix(vec4))
    }
