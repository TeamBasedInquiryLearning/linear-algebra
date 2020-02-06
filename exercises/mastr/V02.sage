class V02(MastrExercise):
  @classmethod
  def title(self):
    return "V2 - Linear Combinations"

  def generate(self):
	
	#Pick how many vectors in R4
	n = choice([3,4,5])
	vec=[]
	for i in range(0,n):
		vec.append(vector([ randrange(-5,5), randrange(-3,3), randrange(-5,5), randrange(-3,3)]))

	#Flip a coin on phrasing question as linear combination or span
	lcphrase = choice([false,true])

	#Pick if yes a linear combination or no
	lincombo = choice([false,true])

	combovector=[]

	#Generate additional vecor
	if lincombo==1:
		combovector=randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]
	else:
		combovector = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])
		#Sometimes make 3rd column a dependency
		if choice([false,true]):
			vec[2]=randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]
		#Make sure at columns 4 and 5 are dependencies
		if n>3:
			vec[3]=randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]
		if n>4:
			vec[4]=randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]

		A=column_matrix([vec[0],vec[1],vec[2]])
		while 3 not in A.augment(combovector).pivots():
			combovector = vector([ randrange(-10,10), randrange(-10,10), randrange(-10,10), randrange(-10,10)])

	latex.matrix_delimiters("[", "]")	
	latex.matrix_column_alignment("c")	
	veclist=""
	for i in range(0,n):
		veclist+=latex(column_matrix(vec[i]))
		if i<n-1:
			veclist+=", "
		if i==n-2 and lcphrase:
			veclist+="\\text{ and }"
	
	return {
      "lc": lincombo,
	  "lcphrasing": lcphrase,
	  "veclist": veclist,
	  "combovector": latex(column_matrix(combovector))
    }
