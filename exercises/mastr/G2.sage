class G2(MastrExercise):
  @classmethod
  def title(self):
    return "G2 -  Computing matrix determinants"

  def generate(self):
    A = matrix([[choice([-1,1])*randrange(2,7) for _ in range(0,4)] for _ in range(0,4)])
    line = randrange(1,4)
    indices = choice(([(line,0),(line,1),(line,2),(line,3)],[(0,line),(1,line),(2,line),(3,line)]))
    shuffle(indices)
    A[indices[0]]=0
    A[indices[1]]=0
    A[indices[2]]=1
    A[indices[3]]=choice([-1,1])*randrange(2,4)

    latex.matrix_delimiters("[", "]")
    return {
      "matrix": latex(A),
      "determinant": latex(A.determinant()),
    }

