load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        context=choice(["context_pol","context_mat"])
        task=choice(["task_ind","task_spa"])

        if task=="task_ind":
            #Pick if yes a linear combination or no
            independent = choice([False,True])
            n = choice([3,4])
            if independent:
                A=CheckIt.simple_random_matrix_of_rank(n,rows=4,columns=n)
            else:
                A=CheckIt.simple_random_matrix_of_rank(n-1,rows=4,columns=n)
            result=independent

        if task=="task_spa":
            #Pick if yes a spanning set or no
            span = choice([False,True])
            if span:
                A=CheckIt.simple_random_matrix_of_rank(4,rows=4,columns=choice([4,5]))
            else:
                A=CheckIt.simple_random_matrix_of_rank(choice([2,3]),rows=4,columns=choice([4,5]))
            result=span

        #Create equation
        if context=="context_pol":
            polys=[ sum([v[i]*x^i for i in range(0,len(v))]) for v in A.columns() ]
            vset=polys
            vars=[var("y_"+str(i+1)) for i in range(0,A.ncols())]
            lc=linearCombination(vars,polys,parentheses=true)
            if task=="independent":
                eq=Equation(lc,"0")
            else:
                eq=lc

        if context=="context_mat":
            matrices = [ matrix(ZZ,2,v) for v in A.columns()]
            vset=matrices
            vars=[var("y_"+str(i+1)) for i in range(0,A.ncols())]
            lc=linearCombination(vars,matrices)
            if task=="independent":
                eq=Equation(lc,matrix(ZZ,2)) #matrix() defaults to zero matrix
            else:
                eq=lc

        return {
            task: True,
            context: True,
            "set": bracedSet(vset),
            "equation": eq,
            "result": result,
            "matrix": A,
            "rref": A.rref(),
        }
