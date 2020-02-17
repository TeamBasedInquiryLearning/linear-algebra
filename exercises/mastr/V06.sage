class V06(MastrExercise):
  @classmethod
  def title(self):
    return "V6 - Basis verification"

  def generate(self):
    latex.matrix_delimiters("[", "]")
    # create a 4x4 matrix
    rows = 4
    columns = 8-rows
    # 50% basis, 50% not
    num_pivots = columns-choice([0,1])

    #start with nice RREF
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=num_pivots,upper_bound=9)

    # check if basis
    set_is_basis = (num_pivots == columns)

    # describe set
    vector_set = ",".join([latex(column_matrix(A.column(j))) for j in range(0,columns)])
    vector_set = "\\left\\{"+vector_set+"\\right\\}"


    return {
      "matrix": latex(A),
      "rref": latex(A.echelon_form()),
      "set_is_basis": set_is_basis,
      "vector_set": vector_set,
    }
