load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        result =  {}

        x,y = var("x y")
        a,b,c = sample([-6,-5,-4,-3,-2,2,3,4,5,6],3)
        equation = CheckIt.shuffled_equation(a*x,b*y,c)
        sets = [
            setBuilder((x,y),CheckIt.shuffled_equation(a*x,b*y,c)),
            setBuilder((a*x,b*y),CheckIt.shuffled_equation(a*x,b*y,c)),
            setBuilder((x,y,c)),
            setBuilder((a*x,b*y)),
        ]

        result["lineset"] = {
            "equation": equation,
            "choices": choices_from_list(sets),
        }
