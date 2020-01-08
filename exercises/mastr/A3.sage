class A3(MastrExercise):
  @classmethod
  def title(self):
    return "A3 - Kernel and Image"

  def generate(self):
    latex.matrix_delimiters("[", "]")    
    # create a 3x4,4x3,or4x4 matrix
    sum_of_dims = randrange(7,9)
    if sum_of_dims == 8:
      rows=4
      columns=4
    else:
      rows=randrange(3,5)
      columns=sum_of_dims-rows

    #start with nice RREF
    number_of_pivots = randrange(2,min(rows,columns))
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=number_of_pivots,upper_bound=9)

    # construct variables
    xs=vector([var("x_"+str(i+1)) for i in range(0,columns)])

    # construct transformation
    transformation = "T\\left("+latex(column_matrix(xs))+"\\right)="+latex(column_matrix(A*xs))

    # give transformation domain,range
    domain_range = "T:\\mathbb R^{"+str(columns)+"}\\to\\mathbb R^{"+str(rows)+"}"

    #Find kernel basis
    k_basis = "\\left\\{" +\
      ",".join([latex(column_matrix(v)) for v in A.right_kernel(basis='pivot').basis()]) +\
      "\\right\\}"

    #Find image basis
    i_basis = "\\left\\{" +\
      ",".join([latex(column_matrix(v)) for v in A.delete_columns(A.nonpivots()).columns()])+\
      "\\right\\}"
    
    return {
      "transformation": transformation,
      "matrix": latex(A),
      "domain_range": domain_range,
      "k_basis": k_basis,
      "i_basis": i_basis,
    }
