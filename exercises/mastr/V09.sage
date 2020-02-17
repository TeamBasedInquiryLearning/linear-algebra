class V09(MastrExercise):
  @classmethod
  def title(self):
    return "V9 - Polynomial Computation"

  def generate(self):
    latex.matrix_delimiters("[", "]")
    x = var("x")
    # create a 3x5 or 4x4 or 5x3 matrix
    rows = 4
    columns = 4
    num_pivots = choice([2,3])

    #start with nice RREF
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=num_pivots,upper_bound=9)

    #transform to matrices or polynomials
    uses_polynomials = choice([True,False])
    if uses_polynomials:
      vectors = [v[0]*x^3+v[1]*x^2+v[2]*x+v[3] for v in A.columns()]
    else:
      vectors = [Matrix([[v[0],v[1]],[v[2],v[3]]]) for v in A.columns()]

    # describe set
    vector_set = ",".join([latex(vectors[j]) for j in range(0,columns)])
    vector_set = "\\left\\{"+vector_set+"\\right\\}"
    basis_set = ",".join([latex(vectors[j]) for j in A.pivots()])
    basis_set = "\\left\\{"+basis_set+"\\right\\}"


    return {
      "matrix": latex(A),
      "rref": latex(A.echelon_form()),
      "vector_set": vector_set,
      "basis_set": basis_set,
      "uses_polynomials": uses_polynomials,
    }
