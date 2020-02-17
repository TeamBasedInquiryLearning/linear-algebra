class V05(MastrExercise):
  @classmethod
  def title(self):
    return "V5 - Linear Independence"

  def generate(self):
    latex.matrix_delimiters("[", "]")
    # create a 4x4 or 5x3 matrix
    rows = randrange(4,6)
    columns = 8-rows
    # 50% independent, 50% dependent
    num_pivots = columns-choice([0,1])

    #start with nice RREF
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=num_pivots,upper_bound=9)

    # check if independent
    set_is_independent = (num_pivots == columns)

    # describe set
    vector_set = ",".join([latex(column_matrix(A.column(j))) for j in range(0,columns)])
    vector_set = "\\left\\{"+vector_set+"\\right\\}"


    return {
      "matrix": latex(A),
      "rref": latex(A.echelon_form()),
      "set_is_independent": set_is_independent,
      "vector_set": vector_set,
      "dimension": rows,
    }
