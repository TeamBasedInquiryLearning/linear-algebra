class V3(MastrExercise):
  @classmethod
  def title(self):
    return "V3 - Spanning sets"

  def generate(self):
	
	#Pick How many vectors in R4
	n=choice([4,5,6])
	vec=[]
	for i in range(0,n):
		vec.append(vector([ randrange(-5,5),randrange(-5,5), randrange(-5,5),randrange(-5,5)]))

	#Pick if yes a spanning set or no
	span = choice([false,true])

	#If they should not span, generate columns 3 or 4 through n.
	if span==false:
		if choice([false,true]):
			vec[2] = randrange(-3,3)*vec[0]+randrange(-4,4)*vec[1]
		for i in range (3,n):
			vec[3] = randrange(-3,3)*vec[0]+randrange(-3,3)*vec[1]+randrange(-3,3)*vec[2]
	
	#Constructor uses vecs as rows
	A=matrix(vec).transpose()
	if rank(A)<4:
		span = false
	else:
		span = true
	
	latex.matrix_delimiters("[", "]")	
	veclist = ""
	for i in range(0,n):
		veclist+=latex(column_matrix(vec[i]))
		if i<n-1:
			veclist+=", "
		if i==n-2:
			veclist+="\\text{ and }"
	return {
      "spans": span,
	  "vlist": veclist
	}
