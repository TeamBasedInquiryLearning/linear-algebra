class G1(MastrExercise):
  @classmethod
  def title(self):
    return "G1 - Row operations and matrices"

  def generate(self):
    rs = [
      var("r1",latex_name="R_1"),
      var("r2",latex_name="R_2"),
      var("r3",latex_name="R_3")
    ]
    # random row scaling
    row = randrange(0,3)
    scale = randrange(2,6)*choice([-1,1])
    scale_matrix = identity_matrix(3).with_rescaled_row(row,scale)
    scale_op = latex(rs[row])+"\\to "+latex(scale*rs[row])
    # random row swapping
    rows = sample([0,1,2],2)
    shuffle(rows)
    swap_matrix = identity_matrix(3).with_swapped_rows(rows[0],rows[1])
    swap_op = latex(rs[rows[0]])+"\\leftrightarrow "+latex(rs[rows[1]])
    # random row adding 
    rows = sample([0,1,2],2)
    shuffle(rows)
    scale = randrange(2,6)*choice([-1,1])
    add_matrix = identity_matrix(3).with_added_multiple_of_row(rows[0],rows[1],scale)
    add_op = latex(rs[rows[0]])+"\\to "+latex(rs[rows[0]]+scale*rs[rows[1]])

    #choose two random ops
    ops = sample([0,1,2],2)
    shuffle(ops)
    row_op1 = [scale_op,swap_op,add_op][ops[0]]
    mat1    = [scale_matrix,swap_matrix,add_matrix][ops[0]]
    row_op2 = [scale_op,swap_op,add_op][ops[1]]
    mat2    = [scale_matrix,swap_matrix,add_matrix][ops[1]]

    #determinant
    orig_det = randrange(2,6)*choice([-1,1])
    new_det = orig_det*mat1.determinant()*mat2.determinant()

    

    latex.matrix_delimiters("[", "]")    
    return {
      "row_op1": row_op1,
      "row_op2": row_op2,
      "mat1": latex(mat1),
      "mat2": latex(mat2),
      "orig_det": latex(orig_det),
      "new_det": latex(new_det),
    }

