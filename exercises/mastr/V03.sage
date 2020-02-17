class V03(MastrExercise):
  @classmethod
  def title(self):
    return "V3 - Spanning sets"

  def generate(self):
    latex.matrix_delimiters("[", "]")
    # create a 4x4 or 3x5 matrix
    rows = randrange(3,5)
    columns = 8-rows
    # 50% spans, 50% fails to span
    num_pivots = rows-choice([0,1])

    #start with nice RREF
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=num_pivots,upper_bound=9)

    # check if last column is linear combo of others
    set_spans = (num_pivots == rows)

    # describe set
    vector_set = ",".join([latex(column_matrix(A.column(j))) for j in range(0,columns)])
    vector_set = "\\left\\{"+vector_set+"\\right\\}"


    return {
      "matrix": latex(A),
      "rref": latex(A.echelon_form()),
      "set_spans": set_spans,
      "vector_set": vector_set,
      "dimension": rows,
    }
