class V04(MastrExercise):
  @classmethod
  def title(self):
    return "V4 - Subspaces"

  def generate(self):
    latex.matrix_delimiters("[", "]")    
    
    x=var("x")
    y=var("y")
    z=var("z")
    v=vector([x,y,z])
    leftstring="\left\{"+latex(column_matrix(v))+"\hspace{0.2em}\middle|\hspace{0.2em}"
    a=choice([-1,1])*randrange(1,6)
    b=choice([-1,1])*randrange(1,6)
    c=choice([-1,1])*randrange(1,6)
    p=randrange(2,4)
  
    xs=[x,y,z]
    shuffle(xs)
    subspacestring = latex(choice([
      (a*xs[0]+b*xs[1]==c*xs[2]),
      (a*xs[0]==b*xs[1]+c*xs[2]),
      (a*xs[1]+b*xs[0]+c*xs[2]==0),
    ]))
    notsubspacestring = latex(choice([
      (xs[0]^p+a*xs[1]==b*xs[2]),
      (xs[0]^p+a*xs[1]+b*xs[2]==0),
      (a*xs[0]*xs[1]+b*xs[2]==0),
      (a*xs[0]*xs[2]==b*xs[1]),
      (a*abs(xs[2])==b*xs[0]+c*xs[1]),
      (a*xs[0]+b*abs(xs[1])+c*xs[2]==0),
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
