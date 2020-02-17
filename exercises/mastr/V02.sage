class V02(MastrExercise):
  @classmethod
  def title(self):
    return "V2 - Linear Combinations"

  def generate(self):
    latex.matrix_delimiters("[", "]")
    # create a 4x4 or 3x5 matrix
    rows = randrange(3,5)
    columns = 8-rows

    #start with nice RREF
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=rows-1,upper_bound=9)
    #half the time, adjust one term of the last column to make it unlikely to be
    #a linear combo of previous columns
    if choice([True,False]):
      row = randrange(0,rows)
      A[row,-1] = A[row,-1]+choice([-1,1])
    combo_vector = A.column(-1)

    # check if last column is linear combo of others
    is_linear_combo = (columns-1 not in A.pivots())

    # two ways to describe other columns
    vector_set = ",".join([latex(column_matrix(A.column(j))) for j in range(0,columns-1)])
    vector_set = "\\left\\{"+vector_set+"\\right\\}"
    vector_list = ",".join([latex(column_matrix(A.column(j))) for j in range(0,columns-2)])
    vector_list = vector_list + ",\\text{ and }"+latex(column_matrix(A.column(columns-2)))

    # flip coin for span notation or not
    span_notation = choice([True,False])


    A.subdivide([],[columns-1])
    return {
      "matrix": latex(A),
      "rref": latex(A.echelon_form()),
      "is_linear_combo": is_linear_combo,
      "span_notation": span_notation,
      "vector_list": vector_list,
      "vector_set": vector_set,
      "combo_vector": latex(column_matrix(combo_vector))
    }
