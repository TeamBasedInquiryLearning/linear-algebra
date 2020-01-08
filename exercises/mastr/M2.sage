class M2(MastrExercise):
  @classmethod
  def title(self):
    return "M2-  Invertable matrices"

  def generate(self):
    pivots = randrange(3,5)
    invertible = (pivots==3)
    matrix = random_matrix(QQ,4,4,algorithm='echelonizable',rank=pivots,upper_bound=13)

    latex.matrix_delimiters("[", "]")    
    return {
      "matrix": latex(matrix),
      "invertible": invertible
    }

