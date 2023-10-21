load("library/common.sage")

class Generator(BaseGenerator):
    def data(self):
        questions = []
        x,y,z = var("x y z")

        # area_comp
        base,height,slant = sample(range(3,10),3)
        swvert = (randrange(3,10),randrange(3,10))
        severt = (swvert[0]+base,swvert[1])
        nwvert = (swvert[0]+slant,swvert[1]+height)
        nevert = (swvert[0]+slant+base,swvert[1]+height)
        verts = ",".join([latex(p) for p in [swvert,severt,nwvert,nevert]])

        questions.append({
            "area_comp": True,
            "verts": verts,
            "choices": choices_from_list([
                base*height,
                base*slant,
                slant*height,
                base*height+slant,
            ]),
        })

        # area_comp
        base,height,slant = sample(range(3,10),3)
        swvert = (randrange(3,10),randrange(3,10))
        nwvert = (swvert[0],swvert[1]+base)
        severt = (swvert[0]+height,swvert[1]+slant)
        nevert = (swvert[0]+height,swvert[1]+slant+base)
        verts = ",".join([latex(p) for p in [swvert,severt,nwvert,nevert]])

        questions.append({
            "area_comp": True,
            "verts": verts,
            "choices": choices_from_list([
                base*height,
                base*slant,
                slant*height,
                base*height+slant,
            ]),
        })

        # area_adj
        area = randrange(2,10)*6
        side = choice(["base","height"])
        if choice([True,False]):
            adjustment = "triple"
            choices = [area*3,area*2,area*9,area/3]
        else:
            adjustment = "double"
            choices = [area*2,area*3,area/2,area*4]
        questions.append({
            "area_adj": True,
            "area": area,
            "adjustment": adjustment,
            side: True,
            "choices": choices_from_list(choices),
        })

        # area_adj
        area = randrange(2,7)*12
        if side == "base":
            side = "height"
        else:
            side = "base"
        if choice([True,False]):
            adjustment = "one-third"
            choices = [area/3,area/9,area/2,area*3]
        else:
            adjustment = "one-half"
            choices = [area/2,area/4,area*2,area/3]
        questions.append({
            "area_adj": True,
            "area": area,
            "adjustment": adjustment,
            side: True,
            "choices": choices_from_list(choices),
        })


        # linearity
        v=column_matrix(vector([
            randrange(1,5)*choice([-1,1])*x+
            randrange(1,5)*choice([-1,1])*y,
            randrange(1,5)*choice([-1,1])*x+
            randrange(1,5)*choice([-1,1])*y,
        ]))
        w=column_matrix(vector([
            randrange(1,5)*choice([-1,1])*x+
            randrange(1,5)*choice([-1,1])*y,
            randrange(1,5)*choice([-1,1])*x+
            randrange(1,5)*choice([-1,1])*y,
        ]))
        questions.append({
            "linearity": True,
            "v": v,
            "w": w,
            "choices": choices_from_list([
                v+2*w,
                w+2*v,
                2*v+2*w,
                v+w+column_matrix(vector([2,2]))
            ]),
        })

        # inv_def
        versions = sample(range(1,5),4)
        questions.append({
            "inv_def": True,
            "choices": choices_from_list([
                {f"inv{versions[0]}":True},
                {f"dst{versions[1]}":True},
                {f"sur{versions[2]}":True},
                {f"inj{versions[3]}":True},
            ]),
        })
        
        # shuffle(questions)
        questions.reverse()
        return {
            "questions": questions,
        }
