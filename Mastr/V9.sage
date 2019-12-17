class V9(MastrExercise):
  @classmethod
  def title(self):
    return "V9 - Polynomial Computation"

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
	
	poly = choice([false, true])
	if poly==true:
		R=PolynomialRing(QQ,'x')
		vspace="\mathcal{P}^3"
		v1 = latex(vec1[0]+vec1[1]*x+vec1[2]*x^2+vec1[3]*x^3)
		v2 = vec2[0]+vec2[1]*x+vec2[2]*x^2+vec2[3]*x^3
		v3 = vec3[0]+vec3[1]*x+vec3[2]*x^2+vec3[3]*x^3
		v4 = vec4[0]+vec4[1]*x+vec4[2]*x^2+vec4[3]*x^3
		v5 = vec5[0]+vec5[1]*x+vec5[2]*x^2+vec5[3]*x^3
		v6 = vec6[0]+vec6[1]*x+vec6[2]*x^2+vec6[3]*x^3
	else:
		vspace="M_{2,2}"
		v1="\\begin{bmatrix}"+ latex(vec1[0])+" & "+ latex(vec1[1]) +" \\\\ "+ latex(vec1[2]) +" & "+latex(vec1[3]) +"\\end{bmatrix}"
		v2=matrix([[vec2[0],vec2[1]],[vec2[2],vec2[3]]])
		v3=matrix([[vec3[0],vec3[1]],[vec3[2],vec3[3]]])
		v4=matrix([[vec4[0],vec4[1]],[vec4[2],vec4[3]]])
		v5=matrix([[vec5[0],vec5[1]],[vec5[2],vec5[3]]])
		v6=matrix([[vec6[0],vec6[1]],[vec6[2],vec6[3]]])

	A = column_matrix([vec1,vec2,vec3,vec4,vec5,vec6])
	basis=""
	latex.matrix_delimiters("[", "]")	
	latex.matrix_column_alignment("c")	
	for i in A.pivots():
		if poly == true:
			basis+=latex(A.column(i)[0]+ A.column(i)[1]*x+A.column(i)[2]*x^2+A.column(i)[3]*x^3)
		else:
			basis+=latex(matrix([[A.column(i)[0], A.column(i)[1]],[A.column(i)[2],A.column(i)[3]]]))
		if i<len(A.pivots())-1:
			basis+=", "

	
	return {
	  "vlist": v1+", "+latex(v2)+", "+latex(v3)+", "+latex(v4)+", "+latex(v5)+", "+latex(v6),
      "basis": basis,
	  "vecspace": vspace
    }
