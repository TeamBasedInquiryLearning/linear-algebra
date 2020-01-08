class M3(MastrExercise):
  @classmethod
  def title(self):
    return "M3-  Computing matrix inverses"

  def generate(self):
    matrix = random_matrix(QQ,3,3,algorithm='echelonizable',rank=3,upper_bound=7)

    latex.matrix_delimiters("[", "]")
    return {
      "matrix": latex(matrix),
      "inverse": latex(matrix.inverse())
    }

