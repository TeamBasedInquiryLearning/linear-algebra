class V9(MastrExercise):
  @classmethod
  def title(self):
    return "V9 - Polynomial Computation"

  def generate(self):
	
        vec=[]
	#Pick 6 vectors in R4
        for _ in range(0,5):
		vec.append( vector([ randrange(-6,6), randrange(-6,6), randrange(-6,6), randrange(-6,6)]) )

	#Build some vectors as linear combos
	if choice([false,true]):
		vec[2] = randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]

	if choice([false,true]):
		vec[3] = randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]

	if choice([false,true]):
		vec[4] = randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]

        shuffle(vec)
	
	poly = choice([false, true])
	if poly==true:
		R=PolynomialRing(QQ,'x')
		vspace="\mathcal{P}^3"
		v1 = vec[0][0]+vec[0][1]*x+vec[0][2]*x^2+vec[0][3]*x^3
		v2 = vec[1][0]+vec[1][1]*x+vec[1][2]*x^2+vec[1][3]*x^3
		v3 = vec[2][0]+vec[2][1]*x+vec[2][2]*x^2+vec[2][3]*x^3
		v4 = vec[3][0]+vec[3][1]*x+vec[3][2]*x^2+vec[3][3]*x^3
		v5 = vec[4][0]+vec[4][1]*x+vec[4][2]*x^2+vec[4][3]*x^3
	else:
		vspace="M_{2,2}"
		v1=matrix([[vec[0][0],vec[0][1]],[vec[0][2],vec[0][3]]])
		v2=matrix([[vec[1][0],vec[1][1]],[vec[1][2],vec[1][3]]])
		v3=matrix([[vec[2][0],vec[2][1]],[vec[2][2],vec[2][3]]])
		v4=matrix([[vec[3][0],vec[3][1]],[vec[3][2],vec[3][3]]])
		v5=matrix([[vec[4][0],vec[4][1]],[vec[4][2],vec[4][3]]])

	A = column_matrix([vec[0],vec[1],vec[2],vec[3],vec[4]])
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
	  "vlist": latex(v1)+", "+latex(v2)+", "+latex(v3)+", "+latex(v4)+", "+latex(v5),
	  "basis": basis,
	  "vecspace": vspace
    }
