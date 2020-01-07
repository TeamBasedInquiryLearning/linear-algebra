class E3(MastrExercise):
  @classmethod
  def title(self):
    return "E3 - Solving systems"

  def generate(self):
    # create a 4x4 or 5x3 matrix
    rows = randrange(3,5)
    columns = 8-rows

    #start with nice RREF
    max_number_of_pivots = min(rows,columns) 
    number_of_pivots = randrange(2,max_number_of_pivots+1)
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=number_of_pivots,upper_bound=9)

    # construct variables
    xs=vector([var("x_"+str(i+1)) for i in range(0,columns-1)])

    # construct system
    system="<md>"
    for r in range(0,rows):
      row = A.delete_columns([columns-1]).row(r)
      system+="<mrow>"+latex(row*xs)+"&="+latex(A.column(-1)[r])+"</mrow>"
    system+="</md>"

    # Get RREF
    rref = copy(A.echelon_form())
    constants = rref.column(-1)
    free_vars = [var("a"), var("b"), var("c"), var("d")]

    # TODO
    solution = []
    for c in range(0,columns-1):
      if c in rref.pivots():
        solution.append(1)
      else:
        solution.append(0)
    solution_tex = latex(vector(solution))



    A.subdivide([],[columns-1])
    rref.subdivide([],[columns-1])
    latex.matrix_delimiters("[", "]")    
    return {
      "solution": solution_tex,
      "system": system,
      "matrix": latex(A),
      "rref": latex(rref)
    }

