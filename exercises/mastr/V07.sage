class V07(MastrExercise):
  @classmethod
  def title(self):
    return "V7 - Basis Computation"

  def generate(self):
    latex.matrix_delimiters("[", "]")
    # create a 3x5 or 4x4 or 5x3 matrix
    rows = randrange(3,6)
    columns = 8-rows
    num_pivots = 2
    if rows==4 and choice([True,False]):
      num_pivots += 1

    #start with nice RREF
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=num_pivots,upper_bound=9)

    # describe set
    vector_set = ",".join([latex(column_matrix(A.column(j))) for j in range(0,columns)])
    vector_set = "\\left\\{"+vector_set+"\\right\\}"
    basis_set = ",".join([latex(column_matrix(A.column(j))) for j in A.pivots()])
    basis_set = "\\left\\{"+basis_set+"\\right\\}"


    return {
      "matrix": latex(A),
      "rref": latex(A.echelon_form()),
      "vector_set": vector_set,
      "basis_set": basis_set,
    }
