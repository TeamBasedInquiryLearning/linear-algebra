class M1(MastrExercise):
  @classmethod
  def title(self):
    return "M1-  Multiplying matrices"

  def generate(self):
    # shuffle 2,3,4,5 to get dimensions
    dims = [2,3,4]
    shuffle(dims)

    # create matrices. only first two are multiply-able
    matrices = [
      random_matrix(QQ,dims[0],dims[1],algorithm='echelonizable',rank=min(dims[0],dims[1]),upper_bound=7),
      random_matrix(QQ,dims[1],dims[2],algorithm='echelonizable',rank=min(dims[1],dims[2]),upper_bound=7),
      random_matrix(QQ,dims[0],dims[2],algorithm='echelonizable',rank=min(dims[0],dims[2]),upper_bound=7),
    ]

    # capture correct matrices
    A = matrices[0]
    B = matrices[1]

    # shuffle matrices
    shuffle(matrices)
    matrices_tex = " \\hspace{2em} ".join([latex(m) for m in matrices])
    product_tex = latex(A)+latex(B)+"="+latex(A*B)


    latex.matrix_delimiters("[", "]")    
    return {
      "matrices": matrices_tex,
      "product": product_tex
    }

