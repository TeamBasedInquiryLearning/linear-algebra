class A2(MastrExercise):
  @classmethod
  def title(self):
    return "A2 - Linear maps and matrices"

  def generate(self):
    # create a mxn standard matrix
    columns = randrange(2,5)
    rows = min(randrange(5,8)-columns,4)
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=min(rows,columns),upper_bound=9)

    # construct variables
    xs=vector([var("x_"+str(i+1)) for i in range(0,columns)])

    # construct transformation
    transformation = "T\\left("+latex(column_matrix(xs))+"\\right)="+latex(column_matrix(A*xs))

    # give transformation domain,range
    domain_range = "T:\\mathbb R^{"+str(columns)+"}\\to\\mathbb R^{"+str(rows)+"}"

    # give vector to transform
    v = column_matrix([randrange(-8,9) for _ in range(0,columns)])
    trans_of_v = "T\\left("+latex(v)+"\\right)"
    trans_of_v_eval = A*v
    

    latex.matrix_delimiters("[", "]")    
    return {
      "transformation": transformation,
      "matrix": latex(A),
      "domain_range": domain_range,
      "trans_of_v": trans_of_v,
      "trans_of_v_eval": latex(trans_of_v_eval),
    }

