load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        x,y = var("x y")
        a,b,c = sample([-6,-5,-4,-3,-2,2,3,4,5,6],3)
        equation = CheckIt.shuffled_equation(a*x,b*y,c)
        sets = [
            setBuilder((x,y),CheckIt.shuffled_equation(a*x,b*y,c)),
            setBuilder((a*x,b*y),CheckIt.shuffled_equation(a*x,b*y,c)),
            setBuilder((x,y,c)),
            setBuilder((a*x,b*y)),
        ]
        choices = [
            {"set": sets[i],"correct":(i==0)} 
            for i in range(4)
        ]
        shuffle(choices)
        for i in range(4):
            choices[i]["letter"] = "ABCD"[i]
        print(choices)
        return {
            "lineset": {
                "equation": equation,
                "choices": choices,
            }
        }
