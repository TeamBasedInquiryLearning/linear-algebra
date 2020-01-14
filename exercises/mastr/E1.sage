class E1(MastrExercise):
  @classmethod
  def title(self):
    return "E1 - Augmented Matrices"

  def generate(self):
    # create a 3x5 or 4x4 matrix
    rows = randrange(3,5)
    columns = 8-rows

    #start with nice RREF
    max_number_of_pivots = min(rows,columns-1)
    number_of_pivots = randrange(2,max_number_of_pivots+1)
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=number_of_pivots,upper_bound=9)

    # construct variables
    xs=choice([
      vector([var("x_"+str(i+1)) for i in range(0,columns-1)]),
      vector([var("x"),var("y"),var("z"),var("zw",latex_name="w")][0:columns-1]),
    ])

    # construct system
    system="<md>"
    for r in range(0,rows):
      row = A.delete_columns([columns-1]).row(r)
      system+="<mrow>"+latex(row*xs)+"&="+latex(A.column(-1)[r])+"</mrow>"
    system+="</md>"
   
    A.subdivide([],[columns-1]) 

    #randomly swap exercise query
    swapped = choice([True,False])
    
    latex.matrix_delimiters("[", "]")    
    return {
      "system": system,
      "matrix": latex(A),
      "swapped": swapped,
    }

