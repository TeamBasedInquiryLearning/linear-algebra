class G4(MastrExercise):
  @classmethod
  def title(self):
    return "G4 - Eigenspaces"

  def generate(self):
    l = choice([-1,1])*randrange(1,5)
    dim = randrange(1,4)
    A = random_matrix(QQ,4,algorithm="echelonizable",rank=4-dim,upper_bound=9)
    B = A+l*identity_matrix(4)

    #Find kernel basis
    basis = "\\left\\{" +\
      ",".join([latex(column_matrix(v)) for v in A.right_kernel(basis='pivot').basis()]) +\
      "\\right\\}"

    latex.matrix_delimiters("[", "]")
    return {
      "matrix": latex(B),
      "eigenvalue": latex(l),
      "basis": basis, 
    }

