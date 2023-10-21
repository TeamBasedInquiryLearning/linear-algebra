load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        questions = []
        x,y,z = var("x y z")

        # comp_real

        # use 4 random nonzero numbers between -9 and 9
        values = sample(range(1,10),5)
        values = [choice([-1,1])*v for v in values]
        f = {
            values[0]: values[1],
            values[3]: values[4],
            values[2]: values[0],
        }
        g = {
            values[0]: values[3],
            values[1]: values[2],
            values[4]: values[0],
        }
        comp_input = values[0]
        if choice([True,False]):
            # ask for gof
            comp_output = values[2]
            distractor = values[4]
            comp_string = f"(g\\circ f)({comp_input})"
        else:
            # ask for fog
            comp_output = values[4]
            distractor = values[2]
            comp_string = f"(f\\circ g)({comp_input})"
        
        f_ins = list(f.keys())
        f_ins.sort()
        eq_list = [f"f({i})={f[i]}" for i in f_ins]
        
        g_ins = list(g.keys())
        g_ins.sort()
        eq_list += [f"g({i})={g[i]}" for i in g_ins]

        eqs_latex = " \\hspace{1.5em} ".join(eq_list)

        questions.append({
            "comp_real": True,
            "eqs_latex": eqs_latex,
            "comp_string": comp_string,
            "choices": choices_from_list([
                comp_output,
                distractor,
                values[1],
                values[3],
            ]),
        })


        # comp_func
        values = sample(range(2,10),2)
        values = [choice([-1,1])*v for v in values]
        f = x^2+values[0]
        g = x^2+values[1]
        if choice([True,False]):
            version = "gof"
            comp_exp = g(x=f)
            distractor = f(x=g)
        else:
            version = "fog"
            comp_exp = g(x=f)
            distractor = f(x=g)
        choices = [
            comp_exp,
            distractor,
            x^4+values[0]+values[1],
            f*g,
        ]
        choices = [c.expand() for c in choices]

        questions.append({
            "comp_func": True,
            version: True,
            "f": f,
            "g": g,
            "choices": choices_from_list(choices),
        })


        
        # shuffle(questions)
        questions.reverse()
        return {
            "questions": questions,
        }
