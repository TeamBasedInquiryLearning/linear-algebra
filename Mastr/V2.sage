class V2(MastrExercise):
  @classmethod
  def title(self):
    return "V2 - Linear Combinations"

  def generate(self):
	
	#Pick 3 vectors in R4
	vec1 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
	vec2 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
	vec3 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])

	#Pick if yes a linear combination or no
	lincombo = choice([false,true])

	coefficients = vector([0,0,0])
	vec4 = vector([0,0,0,0])

	#Generate the 4th vector
	if lincombo==1:
		coefficients = vector([ randrange(-6,6), randrange(-6,6), randrange(-6,6)])
		vec4 = coefficients[0]*vec1+coefficients[1]*vec2+coefficients[2]*vec3
	else:
		vec4 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
		A=column_matrix([vec1, vec2, vec3, vec4])
		while rank(A)<4:
			vec4 = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
			A=column_matrix([vec1, vec2, vec3, vec4])
	
	latex.matrix_delimiters("[", "]")	
	return {
      "lc": lincombo,
	  "v1": latex(column_matrix(vec1)),
	  "v2": latex(column_matrix(vec2)),
	  "v3": latex(column_matrix(vec3)),
	  "v4": latex(column_matrix(vec4))
    }
