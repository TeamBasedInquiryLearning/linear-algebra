class G2(MastrExercise):
  @classmethod
  def title(self):
    return "G2 -  Computing matrix determinants"

  def generate(self):
    matrix = random_matrix(ZZ,4,4,x=-5,y=6)
    line = randrange(0,4)
    indices = choice(([(line,0),(line,1),(line,2),(line,3)],[(0,line),(1,line),(2,line),(3,line)]))
    shuffle(indices)
    matrix[indices[0]]=0
    matrix[indices[1]]=0
    matrix[indices[2]]=choice([-1,1])*randrange(2,6)
    matrix[indices[3]]=choice([-1,1])*randrange(2,6)

    latex.matrix_delimiters("[", "]")
    return {
      "matrix": latex(matrix),
      "determinant": latex(matrix.determinant()),
    }

