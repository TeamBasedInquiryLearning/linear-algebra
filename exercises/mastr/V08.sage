class V08(MastrExercise):
  @classmethod
  def title(self):
    return "V8 - Dimension"

  def generate(self):
    latex.matrix_delimiters("[", "]")
    # create a 3x5 or 4x4 or 5x3 matrix
    rows = randrange(3,6)
    columns = 8-rows
    num_pivots = choice([2,3])
    if rows==4 and choice([True,False]):
      num_pivots += 1

    #start with nice RREF
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=num_pivots,upper_bound=9)

    # describe set
    vector_set = ",".join([latex(column_matrix(A.column(j))) for j in range(0,columns)])
    vector_set = "\\left\\{"+vector_set+"\\right\\}"

    return {
      "matrix": latex(A),
      "rref": latex(A.echelon_form()),
      "vector_set": vector_set,
      "dimension": latex(num_pivots),
    }
