class V04(MastrExercise):
  @classmethod
  def title(self):
    return "V4 - Subspaces"

  def generate(self):
    latex.matrix_delimiters("[", "]")    
    
    v = vector([var("x"),var("y")])
    leftstring="\left\{"+latex(column_matrix(v))+"\hspace{0.2em}\middle|\hspace{0.2em}"
  
    subspacestring = latex(choice([
      (choice([-1,1])*randrange(1,8)*v[0]+choice([-1,1])*randrange(1,8)*v[1] == 0),
      (choice([-1,1])*randrange(2,8)*v[0]==choice([-1,1])*randrange(1,7)*v[1])
    ]))
    notsubspacestring = latex(choice([
      (v[0]^randrange(2,4)+choice([-1,1])*randrange(1,8)*v[1] == 0),
      (v[0]^randrange(2,4)==choice([-1,1])*randrange(1,8)*v[1]),
      (randrange(2,8)*v[0]*v[1]^randrange(2,4) == 0),
      (randrange(2,8)*v[0]==v[1]^randrange(2,4)),
      (randrange(1,8)*abs(v[0])==v[1]),
      (randrange(1,8)*abs(v[1])==v[0]),
    ]))
    
    subspacestring = leftstring+subspacestring+ " \\right\}"
    notsubspacestring = leftstring+notsubspacestring+ " \\right\}"
  
    #Write sets in order subspace, not subspace
    vsets=[subspacestring,notsubspacestring]
    #Randomly swap order so 2nd is subspace
    swapped = choice([True,False])
    if(swapped):
      vsets.reverse()
  
    return {
      "vsets": vsets,
      "swapped": swapped
    }
