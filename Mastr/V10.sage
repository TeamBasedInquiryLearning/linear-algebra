class V10(MastrExercise):
  @classmethod
  def title(self):
    return "V10 - Basis of Solution Space"

  def generate(self):
	
	#Pick how many vectors vectors in R4
	n= choice([3,4,5])
	vec=[]
	for i in range(0,n):
		if i>1 and choice([false,true]):
			vec.append(randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1])
		else:
			vec.append( vector([ randrange(-6,6), randrange(-6,6), randrange(-6,6), randrange(-6,6)]) )

	shuffle(vec)
	
	#Constructor uses vecs as rows
	A= matrix(QQ,vec).transpose()

	latex.matrix_delimiters("[", "]")	
	latex.matrix_column_alignment("c")	

	#Find basis
	basis=""
	for v in A.right_kernel(basis='pivot').basis():
		basis+= latex(column_matrix(v))
		basis+= ", "
	
	system="<md>"
	for r in A.rows():
		system+="<mrow>"
		for i in range(0,len(r)):
			if r[i] >0 and i>0:
				system+= " + "
			if r[i] !=0:
				system += latex(r[i])+"x_"+(i+1)
		system+=" &= 0  </mrow>"
	system+="</md>"

	
	return {
	  "system": system,
	  "basis": basis.strip(', ')
    }
