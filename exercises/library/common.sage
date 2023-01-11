# globally set display of matrices
latex.matrix_delimiters("[", "]")
latex.matrix_column_alignment("c")

class rowOp(SageObject):
    def __init__(self,optype,row1, row2, scalar=1):
        pm = "+"
        if scalar < 0:
            pm = "-"
        if optype == "elementary":
            self.string = f"R_{row1} {pm} {abs(scalar)} R_{row2} \\to R_{row1}"
        if optype=="diagonal":
            self.string = f"{scalar} R_{row1} \\to R_{row1}"
        if optype=="permutation":
            self.string = f"R_{row1} \\leftrightarrow R_{row2}"
        
    def _latex_(self):
        return self.string

#Used for constructing things like solution sets of systems of equations
class setBuilder(SageObject):
    def __init__(self, element=None, predicate=None):
        self.element=element
        self.predicate=predicate
        
    def _latex_(self):
        if self.element==None:
            return r"\left\{\right\}"
        string=r"\left\{"+latex(self.element)
        if self.predicate==None:
            string+=r"\right\}"
        else:
            try:
                iter(self.predicate)
            except TypeError:
                pred = [self.predicate]
            else:
                pred = self.predicate
            string+=r"\middle|\,"+"".join([latex(p) for p in pred])+r"\right\}"
        return string

#Used to force Sage to use {} around a set -- sometimes Sage is dumb about this with vectors and matrices
class bracedSet(SageObject):
    def __init__(self,list):
        self.list=list

    def _latex_(self):
        string=r"\left\{"
        for i in range(0,len(self.list)-1):
            string+= latex(self.list[i])+","
        string+= latex(self.list[-1])+r"\right\}"
        return string

#Special case of bracedSet for vectors -- forces them into our standard clumn vectors
class vectorSet(bracedSet):
    def __init__(self,vectors):
        self.list=[column_matrix(v) for v in vectors]

#Similar to vectorSet, but for typesetting in prose, e.g. "The vectors v1,v2, and v3..."
class vectorList(SageObject):
    def __init__(self,vectors):
        self.vecList=[column_matrix(v) for v in vectors]

    def _latex_(self):
        string=""
        for i in range(0,len(self.vecList)-1):
            string+= latex(self.vecList[i])+","
        string+= r"\text{ and }" + latex(self.vecList[-1])
        return string

#Typeset a linear combination without simplifying, as Sage likes to do automatically
class linearCombination(SageObject):    
    def __init__(self,coeffs,vecs,parentheses=false):
        self.coefficients=[]
        self.vectors=[]
        self.length=min(len(coeffs),len(vecs))
        for i in range(0,self.length):
            self.coefficients.append(coeffs[i])
            self.vectors.append(vecs[i])
        self.parentheses=parentheses
 
    def _latex_(self):
        string=""
        for i in range(0,self.length-1):
            string+= latex(self.coefficients[i])
            if self.parentheses:
                string+= r"\left("+latex(self.vectors[i])+r"\right)"
            else: 
                string+=latex(self.vectors[i])
            string+="+"
        string+= latex(self.coefficients[-1])
        if self.parentheses:
            string+= r"\left("+latex(self.vectors[-1])+r"\right)"
        else: 
            string+=latex(self.vectors[-1])
        return string

#Generic equation, which could be used with polynomial or matrix equations. Often used with a linearCombination passed as leftside
class Equation(SageObject):
    def __init__(self,leftside,rightside):
        self.lhs = leftside
        self.rhs = rightside
    def _latex_(self):
        return latex(self.lhs)+"="+latex(self.rhs)

#Vector equation class
class vectorEquation(Equation):
    def __init__(self,A,vars=None):
        self.matrix=A
        #Check if column subdivision exists
        if not self.matrix.subdivisions()[1]:
            self.matrix=self.matrix.augment(zero_vector(ZZ, len(self.matrix.columns())), subdivide=true)

        #if vars were not supplied, create them
        if not vars:
            vars = vector([var("x_"+str(i+1)) for i in range(0,len(self.matrix.subdivision(0,0).columns()))])
        
        super().__init__(linearCombination(vars,[column_matrix(c) for c in self.matrix.subdivision(0,0).columns()]), column_matrix(A.column(-1)))


