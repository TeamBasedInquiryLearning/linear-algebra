class E2(MastrExercise):
  @classmethod
  def title(self):
    return "E2 - Row Reduction"

  def generate(self):
    # create a 3x5,4x4,5x3 matrix
    rows = randrange(3,6)
    columns = 8-rows

    #start with nice RREF
    max_number_of_pivots = min(rows,columns)-1
    number_of_pivots = randrange(2,max_number_of_pivots+1)
    A = random_matrix(ZZ,rows,columns,algorithm='echelonizable',rank=number_of_pivots,upper_bound=13)
    
    latex.matrix_delimiters("[", "]")    
    return {
      "a": latex(A),
      "rref": latex(A.rref()),
    }
