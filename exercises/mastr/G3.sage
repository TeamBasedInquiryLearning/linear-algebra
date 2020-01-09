class G3(MastrExercise):
  @classmethod
  def title(self):
    return "G3 - Eigenvalues"

  def generate(self):
    l1 = choice([-1,1])*randrange(1,5)
    l2 = l1
    while l2 == l1:
      l2 = choice([-1,1])*randrange(1,5)
    A = random_matrix(QQ,2,algorithm="diagonalizable",eigenvalues=[l1,l2],dimensions=[1,1])

    latex.matrix_delimiters("[", "]")
    return {
      "matrix": latex(A),
      "eigenvalues": "\\{"+latex(l1)+","+latex(l2)+"\\}",
    }

