class A4(MastrExercise):
  @classmethod
  def title(self):
    return "A4 - Surjective and Injective Transformations"

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
    rank = min(rows,columns)-randrange(0,2)
    A = random_matrix(QQ,rows,columns,algorithm='echelonizable',rank=rank,upper_bound=9)

    #determine injective/surjective
    surjective = (rank==rows)
    injective = (rank==columns)

    # give transformation domain,range
    domain_range = "T:\\mathbb R^{"+str(columns)+"}\\to\\mathbb R^{"+str(rows)+"}"
    
    return {
      "matrix": latex(A),
      "rref": latex(A.rref()),
      "domain_range": domain_range,
      "injective": injective,
      "surjective": surjective,
    }
