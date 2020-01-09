class G4(MastrExercise):
  @classmethod
  def title(self):
    return "G4 - Eigenspaces"

  def generate(self):
    l1 = choice([-1,1])*randrange(1,5)
    l2 = l1
    while l2 == l1:
      l2 = choice([-1,1])*randrange(1,5)
    dim = randrange(1,4)
    A = random_matrix(QQ,4,algorithm="diagonalizable",eigenvalues=[l1,l2],dimensions=[dim,4-dim])

    #Find kernel basis
    basis = "\\left\\{" +\
      ",".join([latex(column_matrix(v)) for v in (A-l1*identity_matrix(4)).right_kernel(basis='pivot').basis()]) +\
      "\\right\\}"

    latex.matrix_delimiters("[", "]")
    return {
      "matrix": latex(A),
      "eigenvalue": latex(l1),
      "basis": basis, 
    }

