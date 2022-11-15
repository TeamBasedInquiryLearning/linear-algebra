var ptx_lunr_docs = [
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "\n         \n            Linear Algebra for Team-Based Inquiry Learning\n             teambasedinquirylearning.github.io\/linear-algebra\/ \n         \n         https:\/\/teambasedinquirylearning.github.io\/linear-algebra\/ \n     copyright \nThis work includes materials used under license from the following works:\n       \n               Understanding Linear Algebra \n               \n                       \n                   \n                       CC BY 4.0 \n                   \n           "
},
{
  "id": "tbil-rl",
  "level": "1",
  "url": "tbil-rl.html",
  "type": "Preface",
  "number": "",
  "title": "TBIL Resource Library",
  "body": "TBIL Resource Library \nThis work is made available as part of the\n TBIL Resource Library ,\na product of  NSF DUE Award #2011807 .\n       "
},
{
  "id": "instructor-notes",
  "level": "1",
  "url": "instructor-notes.html",
  "type": "Preface",
  "number": "",
  "title": "For Instructors",
  "body": "For Instructors If you are adopting this text in your class, please fill out this  short form  so we can track usage, let you know about updates, etc. "
},
{
  "id": "video-resources",
  "level": "1",
  "url": "video-resources.html",
  "type": "Preface",
  "number": "",
  "title": "Video Resources",
  "body": "Video Resources \nVideos are available at the end of each section. A complete playlist of videos \naligned with this text is \n \n  available on YouTube\n .\n     "
},
{
  "id": "slideshows",
  "level": "1",
  "url": "slideshows.html",
  "type": "Preface",
  "number": "",
  "title": "Slideshows",
  "body": "Slideshows \n        Slides for each section are available in HTML format.\n     \n             LE \n             \n                     \n LE1 slides \n                     \n                 \n                     \n LE2 slides \n                     \n                 \n                     \n LE3 slides \n                     \n                 \n                     \n LE4 slides \n                     \n                 \n         \n             VS \n             \n                     \n VS1 slides \n                     \n                 \n                     \n VS2 slides \n                     \n                 \n                     \n VS3 slides \n                     \n                 \n                     \n VS4 slides \n                     \n                 \n                     \n VS5 slides \n                     \n                 \n                     \n VS6 slides \n                     \n                 \n                     \n VS7 slides \n                     \n                 \n                     \n VS8 slides \n                     \n                 \n                     \n VS9 slides \n                     \n                 \n         \n             AT \n             \n                     \n AT1 slides \n                     \n                 \n                     \n AT2 slides \n                     \n                 \n                     \n AT3 slides \n                     \n                 \n                     \n AT4 slides \n                     \n                 \n         \n             MX \n             \n                     \n MX1 slides \n                     \n                 \n                     \n MX2 slides \n                     \n                 \n                     \n MX3 slides \n                     \n                 \n         \n             GT \n             \n                     \n GT1 slides \n                     \n                 \n                     \n GT2 slides \n                     \n                 \n                     \n GT3 slides \n                     \n                 \n                     \n GT4 slides \n                     \n                 \n         \n             Applications \n             \n                     \n Civil Engineering slides \n                     \n                 \n                     \n Computer Science slides \n                     \n                 \n                     \n Geology slides \n                     \n                 \n         "
},
{
  "id": "LE1",
  "level": "1",
  "url": "LE1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Linear Systems, Vector Equations, and Augmented Matrices (LE1)",
  "body": "Linear Systems, Vector Equations, and Augmented Matrices (LE1) \n                 \nTranslate back and forth between a system of linear equations, a vector equation, and the corresponding augmented matrix.\n \n             Class Activities linear equation solution linear equation solution \nIn previous classes you likely used the variables   in equations.\nHowever, since this course often deals with equations of four or more\nvariables, we will often write our variables as  , and assume\n  when convenient.\n         system of linear equations linear system solution set system of linear equations linear system \n  When variables in a large linear system are missing, we prefer to\n  write the system in one of the following standard forms:\n     \n    Original linear system:\n             \n         \n    Verbose standard form:\n             \n         \n    Concise standard form:\n             \n         \nIt will often be convenient to think of a system of equations as a vector equation. vector equation \n         \nBy applying vector operations and equating components, it is straightforward to see that the vector equation\n \nis equivalent to the system of equations\n             \n         consistent inconsistent \n  All linear systems are one of the following:\n             Consistent with one solution: \n          its solution set contains a single vector, e.g.\n           \n                 \n                     Consistent with infinitely-many solutions :\n          its solution set contains infinitely many vectors, e.g.\n           \n                 Inconsistent :\n          its solution set is the empty set, denoted by either   or  .\n                 contradiction \n  Consider the following consistent linear system.\n             \n  Find three different solutions\n  for this system.\n             \n  Let   where   is an arbitrary real number, then find an\n  expression for   in terms of  . Use this to write\n  the solution set\n   \n  for the linear system.\n             \n  Consider the following linear system.\n             \n  Describe the solution set\n   \n  to the linear system\n  by setting   and  , and then solving for   and\n   .\n             \n  Solving linear systems of two variables by graphing or substitution is\n  reasonable for two-variable systems, but these simple techniques\n  won't usually cut it for equations with\n  more than two variables or more than two equations. For example,\n             \n  has the exact same solution set as the system in the previous\n  activity, but we'll want to learn new techniques\n  to compute these solutions efficiently.\n         \n  The only important information in a linear system are its coefficients and\n  constants.\n         \n    Original linear system:\n             \n         \n    Verbose standard form:\n             \n         \n    Coefficients\/constants:\n             \n         augmented matrix \n  The corresponding augmented matrix for this system is obtained by\n  simply writing the coefficients and constants in matrix form.\n         \n    Linear system:\n             \n         \n    Augmented matrix:\n     \n         \n    Vector equation:\n \n         Videos \n\t\t\t \n\t\t Video: Converting between systems, vector equations, and augmented matrices Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations Choose a value for the real constant   such that the following system has one, many, or no solutions. In each case, write the solution set.\n \n    Consider the linear system:\n             \n         \n                     \n    Consider the linear system:\n             \n         \n                    Assume   and   are arbitrary real numbers.\n                      Choose values for  , and  , such that  . Show that this system is inconsistent.  Prove that, if  , the system is consistent with exactly one solution.\n                         \n Given a set  , we can define a relation between two arbitrary elements  . If the two elements are related, we denote this  .\n                    \n                  equivalence relation Reflexive Symmetric Transitive:  For each of the following relations, show that it is or is not an equivalence relation.\n                     For  ,   if an only if  . For  ,   if an only if  . Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-2",
  "level": "2",
  "url": "LE1.html#objectives-2",
  "type": "Learning Outcomes",
  "number": "1.1",
  "title": "",
  "body": "\n                 \nTranslate back and forth between a system of linear equations, a vector equation, and the corresponding augmented matrix.\n \n             "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "LE1.html#definition-1",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "linear equation solution linear equation solution "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "LE1.html#remark-1",
  "type": "Remark",
  "number": "1.1.2",
  "title": "",
  "body": "\nIn previous classes you likely used the variables   in equations.\nHowever, since this course often deals with equations of four or more\nvariables, we will often write our variables as  , and assume\n  when convenient.\n         "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "LE1.html#definition-2",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "system of linear equations linear system solution set system of linear equations linear system "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "LE1.html#remark-2",
  "type": "Remark",
  "number": "1.1.4",
  "title": "",
  "body": "\n  When variables in a large linear system are missing, we prefer to\n  write the system in one of the following standard forms:\n     \n    Original linear system:\n             \n         \n    Verbose standard form:\n             \n         \n    Concise standard form:\n             \n         "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "LE1.html#remark-3",
  "type": "Remark",
  "number": "1.1.5",
  "title": "",
  "body": "\nIt will often be convenient to think of a system of equations as a vector equation. vector equation \n         \nBy applying vector operations and equating components, it is straightforward to see that the vector equation\n \nis equivalent to the system of equations\n             \n         "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "LE1.html#definition-3",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "consistent inconsistent "
},
{
  "id": "fact-1",
  "level": "2",
  "url": "LE1.html#fact-1",
  "type": "Fact",
  "number": "1.1.7",
  "title": "",
  "body": "\n  All linear systems are one of the following:\n             Consistent with one solution: \n          its solution set contains a single vector, e.g.\n           \n                 \n                     Consistent with infinitely-many solutions :\n          its solution set contains infinitely many vectors, e.g.\n           \n                 Inconsistent :\n          its solution set is the empty set, denoted by either   or  .\n                 "
},
{
  "id": "activity-1",
  "level": "2",
  "url": "LE1.html#activity-1",
  "type": "Activity",
  "number": "1.1.8",
  "title": "",
  "body": "contradiction "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "LE1.html#activity-2",
  "type": "Activity",
  "number": "1.1.9",
  "title": "",
  "body": "\n  Consider the following consistent linear system.\n             \n  Find three different solutions\n  for this system.\n             \n  Let   where   is an arbitrary real number, then find an\n  expression for   in terms of  . Use this to write\n  the solution set\n   \n  for the linear system.\n             "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "LE1.html#activity-3",
  "type": "Activity",
  "number": "1.1.10",
  "title": "",
  "body": "\n  Consider the following linear system.\n             \n  Describe the solution set\n   \n  to the linear system\n  by setting   and  , and then solving for   and\n   .\n             "
},
{
  "id": "observation-1",
  "level": "2",
  "url": "LE1.html#observation-1",
  "type": "Observation",
  "number": "1.1.11",
  "title": "",
  "body": "\n  Solving linear systems of two variables by graphing or substitution is\n  reasonable for two-variable systems, but these simple techniques\n  won't usually cut it for equations with\n  more than two variables or more than two equations. For example,\n             \n  has the exact same solution set as the system in the previous\n  activity, but we'll want to learn new techniques\n  to compute these solutions efficiently.\n         "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "LE1.html#remark-4",
  "type": "Remark",
  "number": "1.1.12",
  "title": "",
  "body": "\n  The only important information in a linear system are its coefficients and\n  constants.\n         \n    Original linear system:\n             \n         \n    Verbose standard form:\n             \n         \n    Coefficients\/constants:\n             \n         "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "LE1.html#definition-4",
  "type": "Definition",
  "number": "1.1.13",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "example-1",
  "level": "2",
  "url": "LE1.html#example-1",
  "type": "Example",
  "number": "1.1.14",
  "title": "",
  "body": "\n  The corresponding augmented matrix for this system is obtained by\n  simply writing the coefficients and constants in matrix form.\n         \n    Linear system:\n             \n         \n    Augmented matrix:\n     \n         \n    Vector equation:\n \n         "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "LE1.html#figure-1",
  "type": "Figure",
  "number": "1",
  "title": "",
  "body": "\n\t\t\t \n\t\t Video: Converting between systems, vector equations, and augmented matrices "
},
{
  "id": "exploration-1",
  "level": "2",
  "url": "LE1.html#exploration-1",
  "type": "Exploration",
  "number": "1.1.15",
  "title": "",
  "body": "Choose a value for the real constant   such that the following system has one, many, or no solutions. In each case, write the solution set.\n \n    Consider the linear system:\n             \n         "
},
{
  "id": "exploration-2",
  "level": "2",
  "url": "LE1.html#exploration-2",
  "type": "Exploration",
  "number": "1.1.16",
  "title": "",
  "body": "\n                     \n    Consider the linear system:\n             \n         \n                    Assume   and   are arbitrary real numbers.\n                      Choose values for  , and  , such that  . Show that this system is inconsistent.  Prove that, if  , the system is consistent with exactly one solution.\n                         \n "
},
{
  "id": "equiv_relation",
  "level": "2",
  "url": "LE1.html#equiv_relation",
  "type": "Exploration",
  "number": "1.1.17",
  "title": "",
  "body": "Given a set  , we can define a relation between two arbitrary elements  . If the two elements are related, we denote this  .\n                    \n                  equivalence relation Reflexive Symmetric Transitive:  For each of the following relations, show that it is or is not an equivalence relation.\n                     For  ,   if an only if  . For  ,   if an only if  . "
},
{
  "id": "LE2",
  "level": "1",
  "url": "LE2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Row Reduction of Matrices (LE2)",
  "body": "Row Reduction of Matrices (LE2) \n                 \nExplain why a matrix isn’t in reduced row echelon form, and put a matrix in reduced row echelon form.\n \n             Class Activities equivalent \n  For example, both of these systems share the same solution set\n   .\n         \n     \n       \n     \n       \n  Therefore these augmented matrices are equivalent\n            (even though they're not  equal ),\n  which we denote with  :\n         \n  Following are seven procedures used to manipulate an augmented matrix.\n  Label the procedures that would result in an equivalent augmented\n  matrix as  valid , and label the procedures that might\n  change the solution set of the corresponding linear system as\n   invalid .\n          Swap two rows.\n        Swap two columns.\n        Add a constant to every term in a row.\n        Multiply a row by a nonzero constant.\n        Add a constant multiple of one row to another row.\n        Replace a column with zeros.\n        Replace a row with zeros.\n       row operations \n    Swap two rows, for example,  :\n     \n     \n     \n      Multiply a row by a nonzero constant, for example,  :\n     \n     \n      Add a constant multiple of one row to another row,\n          for example,  :\n     \n     \n     \n  Consider the following (equivalent) linear systems.\n          A)\n         \n            B)\n         \n            C)\n         \n            D)\n         \n            E)\n         \n            F)\n         \n           \n   Rank the six linear systems from most complicated to simplest.\n         \nWe can rewrite the previous in terms of  equivalences of augmented matrices\n     \n        Determine the row operation(s) necessary in each step to transform the most complicated\n    system's augmented matrix into the simplest.\n         reduced row echelon form RREF  The leading term (first nonzero term) of each nonzero row is a 1.\n      Call these terms  pivots . pivot \n  Each pivot is to the right of every higher pivot.\n  Each term above or below a pivot is zero.\n  All rows of zeroes are at the bottom of the matrix.\n \nEvery matrix has a unique reduced row echelon form. If   is a matrix, we write   for the reduced row echelon form of that matrix.\n     reduced row echelon form RREF  The leading term (first nonzero term) of each nonzero row is a 1.\n      Call these terms  pivots .\n  Each pivot is to the right of every higher pivot.\n  Each term above or below a pivot is zero.\n  All rows of zeroes are at the bottom of the matrix.\n \nFor each matrix, circle the leading terms, and label it as RREF or not RREF.\nFor the ones not in RREF, find their RREF.\n     reduced row echelon form RREF  The leading term (first nonzero term) of each nonzero row is a 1.\n      Call these terms  pivots .\n  Each pivot is to the right of every higher pivot.\n  Each term above or below a pivot is zero.\n  All rows of zeroes are at the bottom of the matrix.\n \nFor each matrix, circle the leading terms, and label it as RREF or not RREF.\nFor the ones not in RREF, find their RREF.\n     \nIn practice, if we simply need to convert a matrix into reduced row echelon form, \nwe use technology to do so.\n     Gauss-Jordan elimination \nConsider the matrix\n \nWhich row operation is the best choice for the first move in converting to RREF?\n          Add row 3 to row 2 ( )\n  Add row 2 to row 3 ( )\n  Swap row 1 to row 2 ( )\n  Add -2 row 2 to row 1 ( )\n \nConsider the matrix\n \nWhich row operation is the best choice for the next move in converting to RREF?\n          Add row 1 to  row 3 ( )\n  Add -2 row 1 to  row 2 ( )\n  Add 2 row 2 to row 3 ( )\n  Add 2 row 3 to row 2 ( )\n \nConsider the matrix\n \nWhich row operation is the best choice for the next move in converting to RREF?\n          Add row 1 to row 2 ( )\n  Add -1 row 3 to  row 2 ( )\n  Add -1 row 2 to  row 3 ( )\n  Add row 2 to row 1 ( )\n \nConsider the matrix\n \n         \nPerform three row operations to produce a matrix closer to RREF.\n     \nFinish putting it in RREF.\n     \nConsider the matrix\n \n         \nCompute  .\n         \nConsider the matrix\n \n         \nCompute  .\n         Videos \n\t\t\t \n\t\t Video: Row reduction Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations Prove that Gauss-Jordan Elimination preserves the solution set of a system of linear equations in\n                      variables. Make sure your proof includes each of the following. Just because I've used\n                    bullet points here does not mean you should use bullet points in your proof.\n              Write an arbitrary system of linear equations in   variables. Your notation should be unambiguous.  Label an element of your solution set. You won't know what it is exactly, so you'll have to use a variable. Remember what it means (by definition!) to be in the solution set.  Describe the three operations used in Gauss-Jordan Elimination.  Consider all three operations in Gauss-Jordan Elimination. After each one is used, show that the elemnent of the solution set you picked still satisfies the definition. \n \n            Let   indicate the set of all   matrices with real entries. Show that equivalence of matrices as defined in this section is an equivalence relation, as in exploration  Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-3",
  "level": "2",
  "url": "LE2.html#objectives-3",
  "type": "Learning Outcomes",
  "number": "1.2",
  "title": "",
  "body": "\n                 \nExplain why a matrix isn’t in reduced row echelon form, and put a matrix in reduced row echelon form.\n \n             "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "LE2.html#definition-5",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "equivalent \n  For example, both of these systems share the same solution set\n   .\n         \n     \n       \n     \n       \n  Therefore these augmented matrices are equivalent\n            (even though they're not  equal ),\n  which we denote with  :\n         "
},
{
  "id": "activity-4",
  "level": "2",
  "url": "LE2.html#activity-4",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "\n  Following are seven procedures used to manipulate an augmented matrix.\n  Label the procedures that would result in an equivalent augmented\n  matrix as  valid , and label the procedures that might\n  change the solution set of the corresponding linear system as\n   invalid .\n          Swap two rows.\n        Swap two columns.\n        Add a constant to every term in a row.\n        Multiply a row by a nonzero constant.\n        Add a constant multiple of one row to another row.\n        Replace a column with zeros.\n        Replace a row with zeros.\n       "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "LE2.html#definition-6",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "row operations \n    Swap two rows, for example,  :\n     \n     \n     \n      Multiply a row by a nonzero constant, for example,  :\n     \n     \n      Add a constant multiple of one row to another row,\n          for example,  :\n     \n     \n     "
},
{
  "id": "activity-5",
  "level": "2",
  "url": "LE2.html#activity-5",
  "type": "Activity",
  "number": "1.2.4",
  "title": "",
  "body": "\n  Consider the following (equivalent) linear systems.\n          A)\n         \n            B)\n         \n            C)\n         \n            D)\n         \n            E)\n         \n            F)\n         \n           \n   Rank the six linear systems from most complicated to simplest.\n         "
},
{
  "id": "activity-6",
  "level": "2",
  "url": "LE2.html#activity-6",
  "type": "Activity",
  "number": "1.2.5",
  "title": "",
  "body": "\nWe can rewrite the previous in terms of  equivalences of augmented matrices\n     \n        Determine the row operation(s) necessary in each step to transform the most complicated\n    system's augmented matrix into the simplest.\n         "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "LE2.html#definition-7",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "reduced row echelon form RREF  The leading term (first nonzero term) of each nonzero row is a 1.\n      Call these terms  pivots . pivot \n  Each pivot is to the right of every higher pivot.\n  Each term above or below a pivot is zero.\n  All rows of zeroes are at the bottom of the matrix.\n \nEvery matrix has a unique reduced row echelon form. If   is a matrix, we write   for the reduced row echelon form of that matrix.\n     "
},
{
  "id": "activity-7",
  "level": "2",
  "url": "LE2.html#activity-7",
  "type": "Activity",
  "number": "1.2.7",
  "title": "",
  "body": "reduced row echelon form RREF  The leading term (first nonzero term) of each nonzero row is a 1.\n      Call these terms  pivots .\n  Each pivot is to the right of every higher pivot.\n  Each term above or below a pivot is zero.\n  All rows of zeroes are at the bottom of the matrix.\n \nFor each matrix, circle the leading terms, and label it as RREF or not RREF.\nFor the ones not in RREF, find their RREF.\n     "
},
{
  "id": "activity-8",
  "level": "2",
  "url": "LE2.html#activity-8",
  "type": "Activity",
  "number": "1.2.8",
  "title": "",
  "body": "reduced row echelon form RREF  The leading term (first nonzero term) of each nonzero row is a 1.\n      Call these terms  pivots .\n  Each pivot is to the right of every higher pivot.\n  Each term above or below a pivot is zero.\n  All rows of zeroes are at the bottom of the matrix.\n \nFor each matrix, circle the leading terms, and label it as RREF or not RREF.\nFor the ones not in RREF, find their RREF.\n     "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "LE2.html#remark-5",
  "type": "Remark",
  "number": "1.2.9",
  "title": "",
  "body": "\nIn practice, if we simply need to convert a matrix into reduced row echelon form, \nwe use technology to do so.\n     Gauss-Jordan elimination "
},
{
  "id": "activity-9",
  "level": "2",
  "url": "LE2.html#activity-9",
  "type": "Activity",
  "number": "1.2.10",
  "title": "",
  "body": "\nConsider the matrix\n \nWhich row operation is the best choice for the first move in converting to RREF?\n          Add row 3 to row 2 ( )\n  Add row 2 to row 3 ( )\n  Swap row 1 to row 2 ( )\n  Add -2 row 2 to row 1 ( )\n "
},
{
  "id": "activity-10",
  "level": "2",
  "url": "LE2.html#activity-10",
  "type": "Activity",
  "number": "1.2.11",
  "title": "",
  "body": "\nConsider the matrix\n \nWhich row operation is the best choice for the next move in converting to RREF?\n          Add row 1 to  row 3 ( )\n  Add -2 row 1 to  row 2 ( )\n  Add 2 row 2 to row 3 ( )\n  Add 2 row 3 to row 2 ( )\n "
},
{
  "id": "activity-11",
  "level": "2",
  "url": "LE2.html#activity-11",
  "type": "Activity",
  "number": "1.2.12",
  "title": "",
  "body": "\nConsider the matrix\n \nWhich row operation is the best choice for the next move in converting to RREF?\n          Add row 1 to row 2 ( )\n  Add -1 row 3 to  row 2 ( )\n  Add -1 row 2 to  row 3 ( )\n  Add row 2 to row 1 ( )\n "
},
{
  "id": "activity-12",
  "level": "2",
  "url": "LE2.html#activity-12",
  "type": "Activity",
  "number": "1.2.13",
  "title": "",
  "body": "\nConsider the matrix\n \n         \nPerform three row operations to produce a matrix closer to RREF.\n     \nFinish putting it in RREF.\n     "
},
{
  "id": "activity-13",
  "level": "2",
  "url": "LE2.html#activity-13",
  "type": "Activity",
  "number": "1.2.14",
  "title": "",
  "body": "\nConsider the matrix\n \n         \nCompute  .\n         "
},
{
  "id": "activity-14",
  "level": "2",
  "url": "LE2.html#activity-14",
  "type": "Activity",
  "number": "1.2.15",
  "title": "",
  "body": "\nConsider the matrix\n \n         \nCompute  .\n         "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "LE2.html#figure-2",
  "type": "Figure",
  "number": "2",
  "title": "",
  "body": "\n\t\t\t \n\t\t Video: Row reduction "
},
{
  "id": "exploration-4",
  "level": "2",
  "url": "LE2.html#exploration-4",
  "type": "Exploration",
  "number": "1.2.16",
  "title": "",
  "body": "Prove that Gauss-Jordan Elimination preserves the solution set of a system of linear equations in\n                      variables. Make sure your proof includes each of the following. Just because I've used\n                    bullet points here does not mean you should use bullet points in your proof.\n              Write an arbitrary system of linear equations in   variables. Your notation should be unambiguous.  Label an element of your solution set. You won't know what it is exactly, so you'll have to use a variable. Remember what it means (by definition!) to be in the solution set.  Describe the three operations used in Gauss-Jordan Elimination.  Consider all three operations in Gauss-Jordan Elimination. After each one is used, show that the elemnent of the solution set you picked still satisfies the definition. \n "
},
{
  "id": "exploration-5",
  "level": "2",
  "url": "LE2.html#exploration-5",
  "type": "Exploration",
  "number": "1.2.17",
  "title": "",
  "body": "\n            Let   indicate the set of all   matrices with real entries. Show that equivalence of matrices as defined in this section is an equivalence relation, as in exploration  "
},
{
  "id": "LE3",
  "level": "1",
  "url": "LE3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Counting Solutions for Linear Systems (LE3)",
  "body": "Counting Solutions for Linear Systems (LE3) \n                 \nDetermine the number of solutions for a system of linear equations or a vector equation.\n \n             Class Activities \nFree browser-based technologies for mathematical computation\nare available online.\n         \n     Go to  .\n     \n \n    In the dropdown on the right, you can select a number of different languages.\n    Select \"Octave\" for the Matlab-compatible syntax used by this text.\n \n     Type  rref([1,3,2;2,5,7])  and then press the  Evaluate  button to compute the   of \n       .\n     \n \n     Since the vertical bar in an augmented matrix does not affect\n          row operations, the   of\n       \n          may be computed in the same way.\n     \nIn the HTML version of this text, code cells are often embedded for your convenience\nwhen RREFs need to be computed.\n     \nTry this out to compute\n .\n         \nConsider the following system of equations.\n         .\n     \nConvert this to an augmented matrix and use technology to compute its\nreduced row echelon form:\n \n     \nUse the   matrix to write a linear system equivalent\nto the original system.\n     \nHow many solutions must this system have?\n     \n               Zero \n           \n               Only one \n           \n               Infinitely-many \n           \nConsider the vector equation\n     \nConvert this to an augmented matrix and use technology to compute its\nreduced row echelon form:\n     \nUse the   matrix to write a linear system equivalent\nto the original system.\n     \nHow many solutions must this system have?\n     \n               Zero \n           \n               Only one \n           \n               Infinitely-many \n           \nIs   the only possible logical contradiction obtained from\nthe RREF of an augmented matrix?\n         Yes,   is the only possible contradiction from an RREF matrix. No,   is another possible contradiction from an RREF matrix. No,   is another possible contradiction from an RREF matrix. No,   is another possible contradiction from an RREF matrix. \n  Consider the following linear system.\n         \n    Find its corresponding augmented matrix   and\n    find  .\n       \nUse the   matrix to write a linear system equivalent\nto the original system.\n     \nHow many solutions must this system have?\n     \n               Zero \n           \n               One \n           \n               Infinitely-many \n           \nBy finding   from a linear system's corresponding augmented matrix  ,\nwe can immediately tell how many solutions the system has.\n       \n               \nIf the linear system given by   includes the contradiction\n , that is, the row\n ,\nthen the system is  inconsistent , which means it has  zero  solutions\nand its solution set is written as   or  .\n               \n           \n               \nIf the linear system given by   sets each variable of the system\nto a single value; that is,  ,  , and so on;\nthen the system is  consistent  with exactly  one  solution\n ,\nand its solution set is\n .\n               \n           \n               \nOtherwise, the system must be  consistent  with  infinitely-many \ndifferent solutions. We'll learn how to find such solution sets in \n . \n               \n           \nFor each vector equation, write an explanation for\nwhether each solution set\nhas no solutions, one solution, or infinitely-many solutions.\nIf the set is finite, describe it using set notation.\n         \n             \n           \n             \n           \n             \n           Videos \n\t\t\t \n\t\t Video: Finding the number of solutions for a system Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations  homogeneous Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-4",
  "level": "2",
  "url": "LE3.html#objectives-4",
  "type": "Learning Outcomes",
  "number": "1.3",
  "title": "",
  "body": "\n                 \nDetermine the number of solutions for a system of linear equations or a vector equation.\n \n             "
},
{
  "id": "activity-15",
  "level": "2",
  "url": "LE3.html#activity-15",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": "\nFree browser-based technologies for mathematical computation\nare available online.\n         \n     Go to  .\n     \n \n    In the dropdown on the right, you can select a number of different languages.\n    Select \"Octave\" for the Matlab-compatible syntax used by this text.\n \n     Type  rref([1,3,2;2,5,7])  and then press the  Evaluate  button to compute the   of \n       .\n     \n \n     Since the vertical bar in an augmented matrix does not affect\n          row operations, the   of\n       \n          may be computed in the same way.\n     "
},
{
  "id": "activity-16",
  "level": "2",
  "url": "LE3.html#activity-16",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "\nIn the HTML version of this text, code cells are often embedded for your convenience\nwhen RREFs need to be computed.\n     \nTry this out to compute\n .\n         "
},
{
  "id": "activity-17",
  "level": "2",
  "url": "LE3.html#activity-17",
  "type": "Activity",
  "number": "1.3.3",
  "title": "",
  "body": "\nConsider the following system of equations.\n         .\n     \nConvert this to an augmented matrix and use technology to compute its\nreduced row echelon form:\n \n     \nUse the   matrix to write a linear system equivalent\nto the original system.\n     \nHow many solutions must this system have?\n     \n               Zero \n           \n               Only one \n           \n               Infinitely-many \n           "
},
{
  "id": "activity-18",
  "level": "2",
  "url": "LE3.html#activity-18",
  "type": "Activity",
  "number": "1.3.4",
  "title": "",
  "body": "\nConsider the vector equation\n     \nConvert this to an augmented matrix and use technology to compute its\nreduced row echelon form:\n     \nUse the   matrix to write a linear system equivalent\nto the original system.\n     \nHow many solutions must this system have?\n     \n               Zero \n           \n               Only one \n           \n               Infinitely-many \n           "
},
{
  "id": "activity-19",
  "level": "2",
  "url": "LE3.html#activity-19",
  "type": "Activity",
  "number": "1.3.5",
  "title": "",
  "body": "\nIs   the only possible logical contradiction obtained from\nthe RREF of an augmented matrix?\n         Yes,   is the only possible contradiction from an RREF matrix. No,   is another possible contradiction from an RREF matrix. No,   is another possible contradiction from an RREF matrix. No,   is another possible contradiction from an RREF matrix. "
},
{
  "id": "LE3-inf",
  "level": "2",
  "url": "LE3.html#LE3-inf",
  "type": "Activity",
  "number": "1.3.6",
  "title": "",
  "body": "\n  Consider the following linear system.\n         \n    Find its corresponding augmented matrix   and\n    find  .\n       \nUse the   matrix to write a linear system equivalent\nto the original system.\n     \nHow many solutions must this system have?\n     \n               Zero \n           \n               One \n           \n               Infinitely-many \n           "
},
{
  "id": "fact-2",
  "level": "2",
  "url": "LE3.html#fact-2",
  "type": "Fact",
  "number": "1.3.7",
  "title": "",
  "body": "\nBy finding   from a linear system's corresponding augmented matrix  ,\nwe can immediately tell how many solutions the system has.\n       \n               \nIf the linear system given by   includes the contradiction\n , that is, the row\n ,\nthen the system is  inconsistent , which means it has  zero  solutions\nand its solution set is written as   or  .\n               \n           \n               \nIf the linear system given by   sets each variable of the system\nto a single value; that is,  ,  , and so on;\nthen the system is  consistent  with exactly  one  solution\n ,\nand its solution set is\n .\n               \n           \n               \nOtherwise, the system must be  consistent  with  infinitely-many \ndifferent solutions. We'll learn how to find such solution sets in \n . \n               \n           "
},
{
  "id": "activity-21",
  "level": "2",
  "url": "LE3.html#activity-21",
  "type": "Activity",
  "number": "1.3.8",
  "title": "",
  "body": "\nFor each vector equation, write an explanation for\nwhether each solution set\nhas no solutions, one solution, or infinitely-many solutions.\nIf the set is finite, describe it using set notation.\n         \n             \n           \n             \n           \n             \n           "
},
{
  "id": "figure-3",
  "level": "2",
  "url": "LE3.html#figure-3",
  "type": "Figure",
  "number": "3",
  "title": "",
  "body": "\n\t\t\t \n\t\t Video: Finding the number of solutions for a system "
},
{
  "id": "exploration-6",
  "level": "2",
  "url": "LE3.html#exploration-6",
  "type": "Exploration",
  "number": "1.3.9",
  "title": "",
  "body": " homogeneous "
},
{
  "id": "LE4",
  "level": "1",
  "url": "LE4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Linear Systems with Infinitely-Many Solutions (LE4)",
  "body": "Linear Systems with Infinitely-Many Solutions (LE4) \n                 \nCompute the solution set for a system of linear equations or a vector equation with infinitly many solutions.\n \n             Class Activities \nConsider this simplified linear system found to be equivalent to the system\nfrom  :\n         \nEarlier, we determined this system has infinitely-many solutions.\n         \nLet   and write the solution set in the form\n .\n     \nLet   and write the solution set in the form\n .\n     \nWhich of these was easier?  What features of the RREF matrix\n  caused this?\n     \nRecall that the pivots of a matrix in   form are the leading\n s in each non-zero row.\n         bound variables free variables \nTo efficiently solve a system in RREF form, assign letters to the free\nvariables, and then solve for the bound variables.\n         \nFind the solution set for the system\n \nby doing the following.\n         \nRow-reduce its augmented matrix.\n         \nAssign letters to the free variables (given by the non-pivot columns):\n  and  . \n         \nSolve for the bound variables (given by the pivot columns) to show that\n ,   ,   and\n . \n         \nReplace   through   with the appropriate expressions of  \nin the following set-builder notation.\n         \n \n             \nDon't forget to correctly express the solution set of a linear system.\nSystems with zero or one solutions may be written by listing their elements,\n        while systems with infinitely-many solutions may be written using\n        set-builder notation.\n       Inconsistent :   or   (not  ).\n     \n     Consistent  with  one solution : e.g.\n         \n          (not just\n         ).\n     \n     \n     Consistent  with  infinitely-many solutions : e.g.\n         \n    (not just\n         \n    ).\n     \n   Show how to find the solution set for the\n        vector equation  .\n      \nConsider the following\nsystem of linear equations.\n       \n       \nExplain how to find a simpler system or vector equation\nthat has the same solution set.\n         \nExplain how to describe this solution set using set notation.\n         Videos \n\t\t\t \n\t\t Video: Solving a system of linear equations with infinitely-many solutions Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations Construct a system of 3 equations in 3 variables having:\n  0 free variables  1 free variable 2 free variables \n                    In each case, solve the system you have created. Conjecture a relationship between the number of free variables and the type of solution set that can be obtained from a given system.\n                 For each of the following, decide if it's true or false. If you think it's true, can we construct a proof? If you think it's false, can we find a counterexample?\n     If the coefficient matrix of a system of linear equations has a pivot in the rightmost column, then the system is inconsistent. If a system of equations has two equations and four unknowns, then it must be consistent.  If a system of equations having four equations and three unknowns is consistent, then the solution is unique.  Suppose that a linear system has four equations and four unknowns and that the coefficient matrix has four pivots. Then the linear system is consistent and has a unique solution.  Suppose that a linear system has five equations and three unknowns and that the coefficient matrix has a pivot in every column. Then the linear system is consistent and has a unique solution. Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-5",
  "level": "2",
  "url": "LE4.html#objectives-5",
  "type": "Learning Outcomes",
  "number": "1.4",
  "title": "",
  "body": "\n                 \nCompute the solution set for a system of linear equations or a vector equation with infinitly many solutions.\n \n             "
},
{
  "id": "activity-22",
  "level": "2",
  "url": "LE4.html#activity-22",
  "type": "Activity",
  "number": "1.4.1",
  "title": "",
  "body": "\nConsider this simplified linear system found to be equivalent to the system\nfrom  :\n         \nEarlier, we determined this system has infinitely-many solutions.\n         \nLet   and write the solution set in the form\n .\n     \nLet   and write the solution set in the form\n .\n     \nWhich of these was easier?  What features of the RREF matrix\n  caused this?\n     "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "LE4.html#definition-8",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": "\nRecall that the pivots of a matrix in   form are the leading\n s in each non-zero row.\n         bound variables free variables \nTo efficiently solve a system in RREF form, assign letters to the free\nvariables, and then solve for the bound variables.\n         "
},
{
  "id": "activity-23",
  "level": "2",
  "url": "LE4.html#activity-23",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "\nFind the solution set for the system\n \nby doing the following.\n         \nRow-reduce its augmented matrix.\n         \nAssign letters to the free variables (given by the non-pivot columns):\n  and  . \n         \nSolve for the bound variables (given by the pivot columns) to show that\n ,   ,   and\n . \n         \nReplace   through   with the appropriate expressions of  \nin the following set-builder notation.\n         \n \n             "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "LE4.html#remark-6",
  "type": "Remark",
  "number": "1.4.4",
  "title": "",
  "body": "\nDon't forget to correctly express the solution set of a linear system.\nSystems with zero or one solutions may be written by listing their elements,\n        while systems with infinitely-many solutions may be written using\n        set-builder notation.\n       Inconsistent :   or   (not  ).\n     \n     Consistent  with  one solution : e.g.\n         \n          (not just\n         ).\n     \n     \n     Consistent  with  infinitely-many solutions : e.g.\n         \n    (not just\n         \n    ).\n     \n   "
},
{
  "id": "activity-24",
  "level": "2",
  "url": "LE4.html#activity-24",
  "type": "Activity",
  "number": "1.4.5",
  "title": "",
  "body": "Show how to find the solution set for the\n        vector equation  .\n      "
},
{
  "id": "activity-25",
  "level": "2",
  "url": "LE4.html#activity-25",
  "type": "Activity",
  "number": "1.4.6",
  "title": "",
  "body": "\nConsider the following\nsystem of linear equations.\n       \n       \nExplain how to find a simpler system or vector equation\nthat has the same solution set.\n         \nExplain how to describe this solution set using set notation.\n         "
},
{
  "id": "figure-4",
  "level": "2",
  "url": "LE4.html#figure-4",
  "type": "Figure",
  "number": "4",
  "title": "",
  "body": "\n\t\t\t \n\t\t Video: Solving a system of linear equations with infinitely-many solutions "
},
{
  "id": "exploration-7",
  "level": "2",
  "url": "LE4.html#exploration-7",
  "type": "Exploration",
  "number": "1.4.7",
  "title": "",
  "body": "Construct a system of 3 equations in 3 variables having:\n  0 free variables  1 free variable 2 free variables \n                    In each case, solve the system you have created. Conjecture a relationship between the number of free variables and the type of solution set that can be obtained from a given system.\n                 "
},
{
  "id": "exploration-8",
  "level": "2",
  "url": "LE4.html#exploration-8",
  "type": "Exploration",
  "number": "1.4.8",
  "title": "",
  "body": "For each of the following, decide if it's true or false. If you think it's true, can we construct a proof? If you think it's false, can we find a counterexample?\n     If the coefficient matrix of a system of linear equations has a pivot in the rightmost column, then the system is inconsistent. If a system of equations has two equations and four unknowns, then it must be consistent.  If a system of equations having four equations and three unknowns is consistent, then the solution is unique.  Suppose that a linear system has four equations and four unknowns and that the coefficient matrix has four pivots. Then the linear system is consistent and has a unique solution.  Suppose that a linear system has five equations and three unknowns and that the coefficient matrix has a pivot in every column. Then the linear system is consistent and has a unique solution. "
},
{
  "id": "VS1",
  "level": "1",
  "url": "VS1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vector Spaces (VS1)",
  "body": "Vector Spaces (VS1) \n                 \nExplain why a given set with defined addition and scalar multiplication does satisfy a\ngiven vector space property, but nonetheless isn't a vector space.\n \n             Class Activities \nSeveral properties of the real numbers, such as commutivity:\n \nalso hold for Euclidean vectors with multiple components:\n .\n         \nConsider each of the following properties of the real numbers\n . Label each property as  valid  if the property also\nholds for two-dimensional Euclidean vectors \n  and numbers  ,\nand  invalid  if it does not.\n       .\n     \n   \n     \n     .\n     \n   \n     \n    There exists some  \n        where  .\n     \n   \n     \n    There exists some  \n        where  .\n     \n   \n     \n        If  , then  \n        is the only vector equally distant from both   and  \n     \n   \n     \n     .\n     \n   \n     \n     .\n     \n   \n     \n    If  , then there exists some number   \n        such that  .\n     \n   \n     \n     .\n     \n   \n     \n     .\n     \n   vector space vectors scalars  Vector addition is associative:  .\n     \n   \n      Vector addition is commutative:\n     .\n     \n   \n      An additive identity exists:\n    There exists some  \n        where  . additive identity \n     \n   \n      Additive inverses exist: \n    There exists some  \n        where  . additive inverse \n     \n   \n      Scalar multiplication is associative: \n     .\n     \n   \n     1 is a multiplicative identity:\n     .\n     \n   \n     Scalar multiplication distributes over vector addition:\n     .\n     \n   \n     Scalar multiplication distributes over scalar addition:\n     .\n     \n   Euclidean vector space matrices \n  Every Euclidean space   is a vector space, but there are other\n  examples of vector spaces as well. \n     \n  For example, consider the\n  set   of complex numbers with the usual defintions of\n  addition and scalar multiplication, and let \n   ,  , and  . Then\n     \n  All eight properties can be verified in this way.\n     \n  The following sets are just a few examples of vector spaces, with the usual\/natural\n  operations for addition and scalar multiplication.\n     \n     \n     : Euclidean vectors with   components.\n     \n     \n     \n     : Complex numbers.\n     \n     \n    \n     : Matrices of real numbers with   rows and\n            columns.\n     \n     \n     \n     : Polynomials of degree   or less.\n     \n     \n     \n     : Polynomials of any degree.\n     \n     \n     \n     : Real-valued continuous functions.\n     \n     \n  Consider the set  .\n     Which of the following vectors is not in  ?                \n             \n             \n             \n         \n             \n             \n             \n         \n             \n             \n             \n         \n             \n             \n             \n         \n  Consider the set   with\n  the operation   defined by\n   .\n     \nLet   be in   with\n  and  .\nUsing the operations defined for  , which of the\nfollowing is  ? \n             \n             \n             \n         \n             \n             \n             \n         \n             \n             \n             \n         \n             \n             \n             \n         \nConsider the set   with\noperations   defined by\n         .\n       \nLet   be scalars and\n .\n       \nVerify that\n .\n       \nCompute the value of\n         .\n       \nConsider the set   with\noperations   defined by\n         .\n       \nLet   be unspecified \nscalars in   and   be an\nunspecified vector in  .\n     \nShow that both sides of the equation\n         \nsimplify to the expression  .\n       \nWhich of the properties from  \ndid we verify in the previous task?\n     Vector addition is associative  is a multiplicative identity Scalar multiplication distributes over scalar addition \nShow that   contains an additive identity element\n  satisfying\n \nfor all  \nby choosing appropriate values for\n  and using those to \nsimplify  \nto  .\n       \n  It turns out   with\noperations   defined by\n         \nsatisifes all eight properties from  .\n     \n  Thus,   is a vector space.\n     \n  Let  \n  have operations defined by\n   \n   .\n         \n    Show that   is the scalar multiplication identity element\n\tby simplifying   to  .\n       \n    Show that   does not have an additive identity element\n      by showing that \n\t  for any possible values \n  of  .\n       \n  Is   a vector space according to  ?\n       \n  Let   have operations defined by\n   \n         \nShow that scalar multiplication distributes over vector addition, i.e.\n \nfor  all   . \n       \n    Show that vector addition is not associative, i.e. \n   \n  for  some  vectors  .\n       \n    Is   a vector space?\n       Videos \n               \n             Video: Verifying that a vector space property holds \n               \n             Video: Showing something is not a vector space Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations \n                     Show that  , the set of positive real numbers, is a vector space, but where   really means the product (so  ), and where scalar multiplication   really means  . Yes, you really do need to check all of the properties, but this is the only time I'll make you do so. Remember, examples aren't proofs, so you should start with arbitrary elements of   for your vectors. Make sure you're careful about telling the reader what   means.  Prove that the additive identity   in an arbitrary vector space is unique.    Prove that additive inverses are unique. Assume you have a vector space   and  some  . Further, assume   with  . Prove that  .   Consider the vector space of polynomials,  . Suppose further that  , where   are each positive integers. Conjecture a relationship between   and  . We will investigate this further in section  \n                     Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-7",
  "level": "2",
  "url": "VS1.html#objectives-7",
  "type": "Learning Outcomes",
  "number": "2.1",
  "title": "",
  "body": "\n                 \nExplain why a given set with defined addition and scalar multiplication does satisfy a\ngiven vector space property, but nonetheless isn't a vector space.\n \n             "
},
{
  "id": "observation-2",
  "level": "2",
  "url": "VS1.html#observation-2",
  "type": "Observation",
  "number": "2.1.1",
  "title": "",
  "body": "\nSeveral properties of the real numbers, such as commutivity:\n \nalso hold for Euclidean vectors with multiple components:\n .\n         "
},
{
  "id": "activity-26",
  "level": "2",
  "url": "VS1.html#activity-26",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "\nConsider each of the following properties of the real numbers\n . Label each property as  valid  if the property also\nholds for two-dimensional Euclidean vectors \n  and numbers  ,\nand  invalid  if it does not.\n       .\n     \n   \n     \n     .\n     \n   \n     \n    There exists some  \n        where  .\n     \n   \n     \n    There exists some  \n        where  .\n     \n   \n     \n        If  , then  \n        is the only vector equally distant from both   and  \n     \n   \n     \n     .\n     \n   \n     \n     .\n     \n   \n     \n    If  , then there exists some number   \n        such that  .\n     \n   \n     \n     .\n     \n   \n     \n     .\n     \n   "
},
{
  "id": "VS1-properties",
  "level": "2",
  "url": "VS1.html#VS1-properties",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "vector space vectors scalars  Vector addition is associative:  .\n     \n   \n      Vector addition is commutative:\n     .\n     \n   \n      An additive identity exists:\n    There exists some  \n        where  . additive identity \n     \n   \n      Additive inverses exist: \n    There exists some  \n        where  . additive inverse \n     \n   \n      Scalar multiplication is associative: \n     .\n     \n   \n     1 is a multiplicative identity:\n     .\n     \n   \n     Scalar multiplication distributes over vector addition:\n     .\n     \n   \n     Scalar multiplication distributes over scalar addition:\n     .\n     \n   "
},
{
  "id": "observation-3",
  "level": "2",
  "url": "VS1.html#observation-3",
  "type": "Observation",
  "number": "2.1.4",
  "title": "",
  "body": "Euclidean vector space "
},
{
  "id": "observation-4",
  "level": "2",
  "url": "VS1.html#observation-4",
  "type": "Observation",
  "number": "2.1.5",
  "title": "",
  "body": "matrices "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "VS1.html#remark-7",
  "type": "Remark",
  "number": "2.1.6",
  "title": "",
  "body": "\n  Every Euclidean space   is a vector space, but there are other\n  examples of vector spaces as well. \n     \n  For example, consider the\n  set   of complex numbers with the usual defintions of\n  addition and scalar multiplication, and let \n   ,  , and  . Then\n     \n  All eight properties can be verified in this way.\n     "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "VS1.html#remark-8",
  "type": "Remark",
  "number": "2.1.7",
  "title": "",
  "body": "\n  The following sets are just a few examples of vector spaces, with the usual\/natural\n  operations for addition and scalar multiplication.\n     \n     \n     : Euclidean vectors with   components.\n     \n     \n     \n     : Complex numbers.\n     \n     \n    \n     : Matrices of real numbers with   rows and\n            columns.\n     \n     \n     \n     : Polynomials of degree   or less.\n     \n     \n     \n     : Polynomials of any degree.\n     \n     \n     \n     : Real-valued continuous functions.\n     \n     "
},
{
  "id": "activity-27",
  "level": "2",
  "url": "VS1.html#activity-27",
  "type": "Activity",
  "number": "2.1.8",
  "title": "",
  "body": "\n  Consider the set  .\n     Which of the following vectors is not in  ?                \n             \n             \n             \n         \n             \n             \n             \n         \n             \n             \n             \n         \n             \n             \n             \n         "
},
{
  "id": "activity-28",
  "level": "2",
  "url": "VS1.html#activity-28",
  "type": "Activity",
  "number": "2.1.9",
  "title": "",
  "body": "\n  Consider the set   with\n  the operation   defined by\n   .\n     \nLet   be in   with\n  and  .\nUsing the operations defined for  , which of the\nfollowing is  ? \n             \n             \n             \n         \n             \n             \n             \n         \n             \n             \n             \n         \n             \n             \n             \n         "
},
{
  "id": "activity-29",
  "level": "2",
  "url": "VS1.html#activity-29",
  "type": "Activity",
  "number": "2.1.10",
  "title": "",
  "body": "\nConsider the set   with\noperations   defined by\n         .\n       \nLet   be scalars and\n .\n       \nVerify that\n .\n       \nCompute the value of\n         .\n       "
},
{
  "id": "activity-30",
  "level": "2",
  "url": "VS1.html#activity-30",
  "type": "Activity",
  "number": "2.1.11",
  "title": "",
  "body": "\nConsider the set   with\noperations   defined by\n         .\n       \nLet   be unspecified \nscalars in   and   be an\nunspecified vector in  .\n     \nShow that both sides of the equation\n         \nsimplify to the expression  .\n       \nWhich of the properties from  \ndid we verify in the previous task?\n     Vector addition is associative  is a multiplicative identity Scalar multiplication distributes over scalar addition \nShow that   contains an additive identity element\n  satisfying\n \nfor all  \nby choosing appropriate values for\n  and using those to \nsimplify  \nto  .\n       "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "VS1.html#remark-9",
  "type": "Remark",
  "number": "2.1.12",
  "title": "",
  "body": "\n  It turns out   with\noperations   defined by\n         \nsatisifes all eight properties from  .\n     \n  Thus,   is a vector space.\n     "
},
{
  "id": "activity-31",
  "level": "2",
  "url": "VS1.html#activity-31",
  "type": "Activity",
  "number": "2.1.13",
  "title": "",
  "body": "\n  Let  \n  have operations defined by\n   \n   .\n         \n    Show that   is the scalar multiplication identity element\n\tby simplifying   to  .\n       \n    Show that   does not have an additive identity element\n      by showing that \n\t  for any possible values \n  of  .\n       \n  Is   a vector space according to  ?\n       "
},
{
  "id": "activity-32",
  "level": "2",
  "url": "VS1.html#activity-32",
  "type": "Activity",
  "number": "2.1.14",
  "title": "",
  "body": "\n  Let   have operations defined by\n   \n         \nShow that scalar multiplication distributes over vector addition, i.e.\n \nfor  all   . \n       \n    Show that vector addition is not associative, i.e. \n   \n  for  some  vectors  .\n       \n    Is   a vector space?\n       "
},
{
  "id": "figure-5",
  "level": "2",
  "url": "VS1.html#figure-5",
  "type": "Figure",
  "number": "5",
  "title": "",
  "body": "\n               \n             Video: Verifying that a vector space property holds "
},
{
  "id": "figure-6",
  "level": "2",
  "url": "VS1.html#figure-6",
  "type": "Figure",
  "number": "6",
  "title": "",
  "body": "\n               \n             Video: Showing something is not a vector space "
},
{
  "id": "exploration-9",
  "level": "2",
  "url": "VS1.html#exploration-9",
  "type": "Exploration",
  "number": "2.1.15",
  "title": "",
  "body": "\n                     Show that  , the set of positive real numbers, is a vector space, but where   really means the product (so  ), and where scalar multiplication   really means  . Yes, you really do need to check all of the properties, but this is the only time I'll make you do so. Remember, examples aren't proofs, so you should start with arbitrary elements of   for your vectors. Make sure you're careful about telling the reader what   means.  Prove that the additive identity   in an arbitrary vector space is unique.    Prove that additive inverses are unique. Assume you have a vector space   and  some  . Further, assume   with  . Prove that  .   "
},
{
  "id": "exploration-10",
  "level": "2",
  "url": "VS1.html#exploration-10",
  "type": "Exploration",
  "number": "2.1.16",
  "title": "",
  "body": "Consider the vector space of polynomials,  . Suppose further that  , where   are each positive integers. Conjecture a relationship between   and  . We will investigate this further in section  \n                     "
},
{
  "id": "VS2",
  "level": "1",
  "url": "VS2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Linear Combinations (VS2)",
  "body": "Linear Combinations (VS2) \n                 \nDetermine if a Euclidean vector can be written as a linear combination of a given set of Euclidean vectors by solving an appropriate vector equation.\n \n             Class Activities linear combination \n  For example, we can say   \n  is a linear combination of the vectors   \n  and   since \n   .\n         span \n  For example:\n   .\n         \n  Consider  .\n         \n    Sketch\n     ,\n     ,\n     ,\n    and   \n    in the   plane.\n       \n    Sketch a representation of all the vectors belonging to\n     \n    in the   plane.\n       \n  Consider  .\n         \n    Sketch the following linear combinations in the   plane.\n     \n     \n       \n    Sketch a representation of all the vectors belonging to\n     \n    in the   plane.\n       \n    Sketch a representation of all the vectors belonging to\n     \n    in the   plane.\n         \n  The vector\n    belongs to\n    exactly when\n  there exists a solution to the vector equation\n   .\n         \n    Reinterpret this vector equation as a system of linear equations.\n       \n    Find its solution set, using technology to find   of its\n    corresponding augmented matrix.\n       \n    Given this solution set, does\n      belong to\n     ?\n       \n  A vector   belongs to\n    if and only if\n\tthe vector equation   is consistent.\n         \nThe following are all equivalent statements:\n             \n     \n    The vector   belongs to  .\n     \n \n     \n        The vector equation   is consistent.\n     \n \n     \n    The linear system corresponding to\n   \n  is consistent.\n     \n \n    \n     \n  doesn't have a row  \n  representing the contradiction  .\n     \n \n  Determine if\n    belongs to\n   \n  by solving an appropriate vector equation.\n         \n  Determine if\n    belongs to\n   \n  by solving an appropriate vector equation.\n         \n  Does the third-degree polynomial   in   belong to\n   ?\n         \n  \tReinterpret this question as a question about the solution(s) of a polynomial equation:\n       \n  \tWrite a Euclidean vector equation that has the same solution set:\n       \n  \tAnswer this equivalent question, and use its solution to answer the original\n    question.\n       \n  Does the polynomial    belong to\n   ?\n         \n  Does the matrix   belong to\n   ?\n         \n  \tReinterpret this question as a question about the solution(s) of a matrix equation.\n       \n  \tAnswer this equivalent question, and use its solution to answer the original\n    question.\n       Videos \n               \n             Video: Linear combinations Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations  Suppose   is a set of vectors. Show that   is a linear combination of members of  , if an only if there are a set of scalars   such that  \n\nWe can do this in a few parts. I've used bullets here to indicate all that needs to be done. This is an \"if and only if\" proof, so it needs two parts. \n First, assume that   has a solution, with  . Show that   is a linear combination of elements of  . Next, assume that   is a linear combination of elements of  . Can you find the appropriate   to make the equation   true? In either of your proofs above, does the case when   change your thinking? Explain why or why not. \n                     Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-8",
  "level": "2",
  "url": "VS2.html#objectives-8",
  "type": "Learning Outcomes",
  "number": "2.2",
  "title": "",
  "body": "\n                 \nDetermine if a Euclidean vector can be written as a linear combination of a given set of Euclidean vectors by solving an appropriate vector equation.\n \n             "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "VS2.html#definition-10",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "linear combination \n  For example, we can say   \n  is a linear combination of the vectors   \n  and   since \n   .\n         "
},
{
  "id": "definition-11",
  "level": "2",
  "url": "VS2.html#definition-11",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "span \n  For example:\n   .\n         "
},
{
  "id": "activity-33",
  "level": "2",
  "url": "VS2.html#activity-33",
  "type": "Activity",
  "number": "2.2.3",
  "title": "",
  "body": "\n  Consider  .\n         \n    Sketch\n     ,\n     ,\n     ,\n    and   \n    in the   plane.\n       \n    Sketch a representation of all the vectors belonging to\n     \n    in the   plane.\n       "
},
{
  "id": "activity-34",
  "level": "2",
  "url": "VS2.html#activity-34",
  "type": "Activity",
  "number": "2.2.4",
  "title": "",
  "body": "\n  Consider  .\n         \n    Sketch the following linear combinations in the   plane.\n     \n     \n       \n    Sketch a representation of all the vectors belonging to\n     \n    in the   plane.\n       "
},
{
  "id": "activity-35",
  "level": "2",
  "url": "VS2.html#activity-35",
  "type": "Activity",
  "number": "2.2.5",
  "title": "",
  "body": "\n    Sketch a representation of all the vectors belonging to\n     \n    in the   plane.\n         "
},
{
  "id": "activity-36",
  "level": "2",
  "url": "VS2.html#activity-36",
  "type": "Activity",
  "number": "2.2.6",
  "title": "",
  "body": "\n  The vector\n    belongs to\n    exactly when\n  there exists a solution to the vector equation\n   .\n         \n    Reinterpret this vector equation as a system of linear equations.\n       \n    Find its solution set, using technology to find   of its\n    corresponding augmented matrix.\n       \n    Given this solution set, does\n      belong to\n     ?\n       "
},
{
  "id": "fact-3",
  "level": "2",
  "url": "VS2.html#fact-3",
  "type": "Fact",
  "number": "2.2.7",
  "title": "",
  "body": "\n  A vector   belongs to\n    if and only if\n\tthe vector equation   is consistent.\n         "
},
{
  "id": "observation-5",
  "level": "2",
  "url": "VS2.html#observation-5",
  "type": "Observation",
  "number": "2.2.8",
  "title": "",
  "body": "\nThe following are all equivalent statements:\n             \n     \n    The vector   belongs to  .\n     \n \n     \n        The vector equation   is consistent.\n     \n \n     \n    The linear system corresponding to\n   \n  is consistent.\n     \n \n    \n     \n  doesn't have a row  \n  representing the contradiction  .\n     \n "
},
{
  "id": "activity-37",
  "level": "2",
  "url": "VS2.html#activity-37",
  "type": "Activity",
  "number": "2.2.9",
  "title": "",
  "body": "\n  Determine if\n    belongs to\n   \n  by solving an appropriate vector equation.\n         "
},
{
  "id": "activity-38",
  "level": "2",
  "url": "VS2.html#activity-38",
  "type": "Activity",
  "number": "2.2.10",
  "title": "",
  "body": "\n  Determine if\n    belongs to\n   \n  by solving an appropriate vector equation.\n         "
},
{
  "id": "activity-39",
  "level": "2",
  "url": "VS2.html#activity-39",
  "type": "Activity",
  "number": "2.2.11",
  "title": "",
  "body": "\n  Does the third-degree polynomial   in   belong to\n   ?\n         \n  \tReinterpret this question as a question about the solution(s) of a polynomial equation:\n       \n  \tWrite a Euclidean vector equation that has the same solution set:\n       \n  \tAnswer this equivalent question, and use its solution to answer the original\n    question.\n       "
},
{
  "id": "activity-40",
  "level": "2",
  "url": "VS2.html#activity-40",
  "type": "Activity",
  "number": "2.2.12",
  "title": "",
  "body": "\n  Does the polynomial    belong to\n   ?\n         "
},
{
  "id": "activity-41",
  "level": "2",
  "url": "VS2.html#activity-41",
  "type": "Activity",
  "number": "2.2.13",
  "title": "",
  "body": "\n  Does the matrix   belong to\n   ?\n         \n  \tReinterpret this question as a question about the solution(s) of a matrix equation.\n       \n  \tAnswer this equivalent question, and use its solution to answer the original\n    question.\n       "
},
{
  "id": "figure-7",
  "level": "2",
  "url": "VS2.html#figure-7",
  "type": "Figure",
  "number": "7",
  "title": "",
  "body": "\n               \n             Video: Linear combinations "
},
{
  "id": "exploration-11",
  "level": "2",
  "url": "VS2.html#exploration-11",
  "type": "Exploration",
  "number": "2.2.14",
  "title": "",
  "body": " Suppose   is a set of vectors. Show that   is a linear combination of members of  , if an only if there are a set of scalars   such that  \n\nWe can do this in a few parts. I've used bullets here to indicate all that needs to be done. This is an \"if and only if\" proof, so it needs two parts. \n First, assume that   has a solution, with  . Show that   is a linear combination of elements of  . Next, assume that   is a linear combination of elements of  . Can you find the appropriate   to make the equation   true? In either of your proofs above, does the case when   change your thinking? Explain why or why not. \n                     "
},
{
  "id": "VS3",
  "level": "1",
  "url": "VS3.html",
  "type": "Section",
  "number": "2.3",
  "title": "Spanning Sets (VS3)",
  "body": "Spanning Sets (VS3) \n                 \nDetermine if a set of Euclidean vectors spans   by solving appropriate vector equations.\n \n             Class Activities \nAny single non-zero vector\/number   in   spans  ,\nsince  .\n         An   vector \n  How many vectors are required to span  ?\n  Sketch a drawing in the   plane to support your answer.\n         The   plane  \n     \n     \n     \n   \n     \n     \n     \n   \n     \n     \n     \n   \n     \n     \n     \n   \n     \n    Infinitely Many\n     \n   \n  How many vectors are required to span  ?\n          space \n     \n     \n     \n   \n     \n     \n     \n   \n     \n     \n     \n   \n     \n     \n     \n   \n     \n    Infinitely Many\n     \n   \n  At least   vectors are required to span  .\n         Failed attempts to span   by   vectors \n  Choose any vector  \n  in   that is not in\n    by using technology to verify that\n   .\n  (Why does this work?)\n         \n  The set   fails to span all of  \n  exactly when the vector equation\n   \n  is inconsistent for  some  vector  .\n         \n  Note that this happens exactly when   has a non-pivot row of zeros.\n   \n   .\n         \n  Consider the set of vectors   and the question\n   Does\n   ? \n         \n        Rewrite this question in terms of the solutions to a vector equation.\n         \n        Answer your new question, and use this to answer the original question.\n         \n  Consider the set of third-degree polynomials \n             \n            and the question\n             \n  Does\n   ?\n             \n         Rewrite this question to be about the solutions to a polynomial equation.\n       \n      Answer your new question, and use this to answer the original question.\n       \nConsider the set of matrices\n \nand the question  Does  ? \n     \n      Rewrite this as a question about the solutions to a matrix equation.\n       \n      Answer your new question, and use this to answer the original question.\n       \nLet   be three vectors,\nand suppose   is another vector with\n .\nWhat can you conclude about\n ?\n            is larger than  .\n   .\n    is smaller than  .\n Videos \n               \n             Video: Determining if a set spans a Euclidean space Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations \n                    Construct each of the following, or show that it is impossible:\n A set of 2 vectors that spans  A set of 3 vectors that spans  A set of 3 vectors that does not span  A set of 4 vectors that spans  \n                    For any of the sets you constructed that did span the required space, are any of the vectors a linear combination of the others in your set? \n                 \n                    Based on these results, generalize this a conjecture about how a set of   and   vectors would or would not span  .\n         Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-9",
  "level": "2",
  "url": "VS3.html#objectives-9",
  "type": "Learning Outcomes",
  "number": "2.3",
  "title": "",
  "body": "\n                 \nDetermine if a set of Euclidean vectors spans   by solving appropriate vector equations.\n \n             "
},
{
  "id": "observation-6",
  "level": "2",
  "url": "VS3.html#observation-6",
  "type": "Observation",
  "number": "2.3.1",
  "title": "",
  "body": "\nAny single non-zero vector\/number   in   spans  ,\nsince  .\n         An   vector "
},
{
  "id": "activity-42",
  "level": "2",
  "url": "VS3.html#activity-42",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": "\n  How many vectors are required to span  ?\n  Sketch a drawing in the   plane to support your answer.\n         The   plane  \n     \n     \n     \n   \n     \n     \n     \n   \n     \n     \n     \n   \n     \n     \n     \n   \n     \n    Infinitely Many\n     \n   "
},
{
  "id": "activity-43",
  "level": "2",
  "url": "VS3.html#activity-43",
  "type": "Activity",
  "number": "2.3.3",
  "title": "",
  "body": "\n  How many vectors are required to span  ?\n          space \n     \n     \n     \n   \n     \n     \n     \n   \n     \n     \n     \n   \n     \n     \n     \n   \n     \n    Infinitely Many\n     \n   "
},
{
  "id": "fact-4",
  "level": "2",
  "url": "VS3.html#fact-4",
  "type": "Fact",
  "number": "2.3.4",
  "title": "",
  "body": "\n  At least   vectors are required to span  .\n         Failed attempts to span   by   vectors "
},
{
  "id": "activity-44",
  "level": "2",
  "url": "VS3.html#activity-44",
  "type": "Activity",
  "number": "2.3.5",
  "title": "",
  "body": "\n  Choose any vector  \n  in   that is not in\n    by using technology to verify that\n   .\n  (Why does this work?)\n         "
},
{
  "id": "fact-5",
  "level": "2",
  "url": "VS3.html#fact-5",
  "type": "Fact",
  "number": "2.3.6",
  "title": "",
  "body": "\n  The set   fails to span all of  \n  exactly when the vector equation\n   \n  is inconsistent for  some  vector  .\n         \n  Note that this happens exactly when   has a non-pivot row of zeros.\n   \n   .\n         "
},
{
  "id": "activity-45",
  "level": "2",
  "url": "VS3.html#activity-45",
  "type": "Activity",
  "number": "2.3.7",
  "title": "",
  "body": "\n  Consider the set of vectors   and the question\n   Does\n   ? \n         \n        Rewrite this question in terms of the solutions to a vector equation.\n         \n        Answer your new question, and use this to answer the original question.\n         "
},
{
  "id": "activity-46",
  "level": "2",
  "url": "VS3.html#activity-46",
  "type": "Activity",
  "number": "2.3.8",
  "title": "",
  "body": "\n  Consider the set of third-degree polynomials \n             \n            and the question\n             \n  Does\n   ?\n             \n         Rewrite this question to be about the solutions to a polynomial equation.\n       \n      Answer your new question, and use this to answer the original question.\n       "
},
{
  "id": "activity-47",
  "level": "2",
  "url": "VS3.html#activity-47",
  "type": "Activity",
  "number": "2.3.9",
  "title": "",
  "body": "\nConsider the set of matrices\n \nand the question  Does  ? \n     \n      Rewrite this as a question about the solutions to a matrix equation.\n       \n      Answer your new question, and use this to answer the original question.\n       "
},
{
  "id": "activity-48",
  "level": "2",
  "url": "VS3.html#activity-48",
  "type": "Activity",
  "number": "2.3.10",
  "title": "",
  "body": "\nLet   be three vectors,\nand suppose   is another vector with\n .\nWhat can you conclude about\n ?\n            is larger than  .\n   .\n    is smaller than  .\n "
},
{
  "id": "figure-12",
  "level": "2",
  "url": "VS3.html#figure-12",
  "type": "Figure",
  "number": "12",
  "title": "",
  "body": "\n               \n             Video: Determining if a set spans a Euclidean space "
},
{
  "id": "exploration-12",
  "level": "2",
  "url": "VS3.html#exploration-12",
  "type": "Exploration",
  "number": "2.3.11",
  "title": "",
  "body": "\n                    Construct each of the following, or show that it is impossible:\n A set of 2 vectors that spans  A set of 3 vectors that spans  A set of 3 vectors that does not span  A set of 4 vectors that spans  \n                    For any of the sets you constructed that did span the required space, are any of the vectors a linear combination of the others in your set? \n                 "
},
{
  "id": "exploration-13",
  "level": "2",
  "url": "VS3.html#exploration-13",
  "type": "Exploration",
  "number": "2.3.12",
  "title": "",
  "body": "\n                    Based on these results, generalize this a conjecture about how a set of   and   vectors would or would not span  .\n         "
},
{
  "id": "VS4",
  "level": "1",
  "url": "VS4.html",
  "type": "Section",
  "number": "2.4",
  "title": "Subspaces (VS4)",
  "body": "Subspaces (VS4) \n                 \nDetermine if a subset of   is a subspace or not.\n \n             Class Activities \n            Consider two non-colinear vectors in  . If we look at all linear combinations of those two vectors\n            (that is, their  span ), we end up with a plane within  . Call this plane  . \n\t\t\t \n          Are all of the vectors in   also in  ?  Let   be the additive identity in  . Is  ?  For any unspecified  , is it the case that  ?  For any unspecified   and  , is it the case that  ? subspace parent vector space isomorphic A planar subset of   compared with the plane  . A planar subset of   compared with the plane  . \n  Any sub set    of a vector space   that contains\n  the additive identity   satisfies the eight\n  vector space properties in   automatically, since\n  the operations were well-defined for the parent vector space.\n         \n  However, to verify that it's a sub space , we still need to check that\n  addition and multiplication still make sense using when only vectors from  \n  are allowed to be used. So we need to check two things:\n         \n     closed under addition \n   \n     closed under scalar multiplication \n   \nLet  .\n         \n  Let   and\n    be vectors in  ,\n  so   and  . Show that\n   \n  also belongs to   by verifying that  .\n     \n  Let  , so\n   . Show that   \n  also belongs to   for any   by verifying\n  an appropriate equation.\n     \n  Is   is a subspace of  ?\n     \nLet  .\nChoose a vector\n  in  \nand a real number  , and show that   isn't in  .\nIs   a subspace of  ?\n         \nSince   is a scalar and   for any vector  , a\nnonempty set that is closed under scalar multiplication must contain the zero vector\n  for that vector space.\n     \nPut another way, you can check any of the following to show that a\nnonempty subset   isn't a subspace:\n     \n     \n    Show that  . \n     \n   \n     \n    Find   such that  .\n     \n   \n     \n    Find   such that  .\n     \n   \nIf you cannot do any of these, then   can be proven to be a subspace\nby doing the following:\n     \n     \n    Prove that   whenever  .\n     \n   \n     \n    Prove that   whenever  .\n     \n   \n  Consider these subsets of  :\n   .\n         \n  Show   isn't a subspace by showing that  .\n       \n  Show   isn't a subspace by finding two vectors  \n  such that  .\n       \n  Show   isn't a subspace by finding a vector  \n  such that  .\n       \n  Consider these subsets of  , the vector space of all   matrices with real entries. Show that each of these sets is or is not a subspace of  .\n   \n            \n           .\n\n       \n           .\n\n       \n           .\n\n       \n           .\n\n       \nLet   be a subspace of a vector space  .  How are   and   related?\n         \n     \n      may include vectors that aren't in  \n     \n \n     \n      may include vectors that aren't in  \n     \n \n     \n      and   always contain the same vectors\n     \n \n  If   is any subset of a vector space  , then\n  since   collects all possible linear combinations,\n    is automatically a subspace of  .\n         \n  In fact,   is always the smallest\n  subspace of   that contains all the vectors in  .\n         Videos \n               \n             Video: Showing that a subset of a vector space is a subspace \n               \n             Video: Showing that a subset of a vector space is not a subspace Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations \n                    A square matrix   is  symmetric symmetric matrix  if, for each index  , the entries  . That is, the matrix is itself when reflected over the diagonal from upper left to lower right.\n \nProve that the set of   symmetric matrices is a subspace of  .\n                 s\n     \n        The space of all real-valued function of one real variable is a vector space. First, define   and   for this vector space. Check that you have closure (both kinds!) and show what the zero vector is under your chosen addition.\n\nDecide if each of the following is a subspace. If so, prove it. If not, provide the counterexample.\n The set of even functions,  . The set of odd functions,  . \nGive an example of each of these, or explain why it's not possible that such a thing would exist.\n A nonempty subset of   that is not a subspace.  A set of two vectors in   that is not a spanning set. \nLet   be a vector space and   a subset of  . Show that the span of   is a subspace. \n\nIs it possible that there is a subset of   containing fewer vectors than  , but whose span contains all of the vectors in the span of  ?\n Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-10",
  "level": "2",
  "url": "VS4.html#objectives-10",
  "type": "Learning Outcomes",
  "number": "2.4",
  "title": "",
  "body": "\n                 \nDetermine if a subset of   is a subspace or not.\n \n             "
},
{
  "id": "activity-49",
  "level": "2",
  "url": "VS4.html#activity-49",
  "type": "Activity",
  "number": "2.4.1",
  "title": "",
  "body": "\n            Consider two non-colinear vectors in  . If we look at all linear combinations of those two vectors\n            (that is, their  span ), we end up with a plane within  . Call this plane  . \n\t\t\t \n          Are all of the vectors in   also in  ?  Let   be the additive identity in  . Is  ?  For any unspecified  , is it the case that  ?  For any unspecified   and  , is it the case that  ? "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "VS4.html#definition-12",
  "type": "Definition",
  "number": "2.4.2",
  "title": "",
  "body": "subspace parent vector space "
},
{
  "id": "observation-7",
  "level": "2",
  "url": "VS4.html#observation-7",
  "type": "Observation",
  "number": "2.4.3",
  "title": "",
  "body": "isomorphic A planar subset of   compared with the plane  . A planar subset of   compared with the plane  . "
},
{
  "id": "fact-6",
  "level": "2",
  "url": "VS4.html#fact-6",
  "type": "Fact",
  "number": "2.4.4",
  "title": "",
  "body": "\n  Any sub set    of a vector space   that contains\n  the additive identity   satisfies the eight\n  vector space properties in   automatically, since\n  the operations were well-defined for the parent vector space.\n         \n  However, to verify that it's a sub space , we still need to check that\n  addition and multiplication still make sense using when only vectors from  \n  are allowed to be used. So we need to check two things:\n         \n     closed under addition \n   \n     closed under scalar multiplication \n   "
},
{
  "id": "activity-50",
  "level": "2",
  "url": "VS4.html#activity-50",
  "type": "Activity",
  "number": "2.4.5",
  "title": "",
  "body": "\nLet  .\n         \n  Let   and\n    be vectors in  ,\n  so   and  . Show that\n   \n  also belongs to   by verifying that  .\n     \n  Let  , so\n   . Show that   \n  also belongs to   for any   by verifying\n  an appropriate equation.\n     \n  Is   is a subspace of  ?\n     "
},
{
  "id": "activity-51",
  "level": "2",
  "url": "VS4.html#activity-51",
  "type": "Activity",
  "number": "2.4.6",
  "title": "",
  "body": "\nLet  .\nChoose a vector\n  in  \nand a real number  , and show that   isn't in  .\nIs   a subspace of  ?\n         "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "VS4.html#remark-10",
  "type": "Remark",
  "number": "2.4.7",
  "title": "",
  "body": "\nSince   is a scalar and   for any vector  , a\nnonempty set that is closed under scalar multiplication must contain the zero vector\n  for that vector space.\n     \nPut another way, you can check any of the following to show that a\nnonempty subset   isn't a subspace:\n     \n     \n    Show that  . \n     \n   \n     \n    Find   such that  .\n     \n   \n     \n    Find   such that  .\n     \n   \nIf you cannot do any of these, then   can be proven to be a subspace\nby doing the following:\n     \n     \n    Prove that   whenever  .\n     \n   \n     \n    Prove that   whenever  .\n     \n   "
},
{
  "id": "activity-52",
  "level": "2",
  "url": "VS4.html#activity-52",
  "type": "Activity",
  "number": "2.4.8",
  "title": "",
  "body": "\n  Consider these subsets of  :\n   .\n         \n  Show   isn't a subspace by showing that  .\n       \n  Show   isn't a subspace by finding two vectors  \n  such that  .\n       \n  Show   isn't a subspace by finding a vector  \n  such that  .\n       "
},
{
  "id": "activity-53",
  "level": "2",
  "url": "VS4.html#activity-53",
  "type": "Activity",
  "number": "2.4.9",
  "title": "",
  "body": "\n  Consider these subsets of  , the vector space of all   matrices with real entries. Show that each of these sets is or is not a subspace of  .\n   \n            \n           .\n\n       \n           .\n\n       \n           .\n\n       \n           .\n\n       "
},
{
  "id": "activity-54",
  "level": "2",
  "url": "VS4.html#activity-54",
  "type": "Activity",
  "number": "2.4.10",
  "title": "",
  "body": "\nLet   be a subspace of a vector space  .  How are   and   related?\n         \n     \n      may include vectors that aren't in  \n     \n \n     \n      may include vectors that aren't in  \n     \n \n     \n      and   always contain the same vectors\n     \n "
},
{
  "id": "fact-7",
  "level": "2",
  "url": "VS4.html#fact-7",
  "type": "Fact",
  "number": "2.4.11",
  "title": "",
  "body": "\n  If   is any subset of a vector space  , then\n  since   collects all possible linear combinations,\n    is automatically a subspace of  .\n         \n  In fact,   is always the smallest\n  subspace of   that contains all the vectors in  .\n         "
},
{
  "id": "figure-14",
  "level": "2",
  "url": "VS4.html#figure-14",
  "type": "Figure",
  "number": "14",
  "title": "",
  "body": "\n               \n             Video: Showing that a subset of a vector space is a subspace "
},
{
  "id": "figure-15",
  "level": "2",
  "url": "VS4.html#figure-15",
  "type": "Figure",
  "number": "15",
  "title": "",
  "body": "\n               \n             Video: Showing that a subset of a vector space is not a subspace "
},
{
  "id": "exploration-14",
  "level": "2",
  "url": "VS4.html#exploration-14",
  "type": "Exploration",
  "number": "2.4.12",
  "title": "",
  "body": "\n                    A square matrix   is  symmetric symmetric matrix  if, for each index  , the entries  . That is, the matrix is itself when reflected over the diagonal from upper left to lower right.\n \nProve that the set of   symmetric matrices is a subspace of  .\n                 s\n     "
},
{
  "id": "exploration-15",
  "level": "2",
  "url": "VS4.html#exploration-15",
  "type": "Exploration",
  "number": "2.4.13",
  "title": "",
  "body": "\n        The space of all real-valued function of one real variable is a vector space. First, define   and   for this vector space. Check that you have closure (both kinds!) and show what the zero vector is under your chosen addition.\n\nDecide if each of the following is a subspace. If so, prove it. If not, provide the counterexample.\n The set of even functions,  . The set of odd functions,  . "
},
{
  "id": "exploration-16",
  "level": "2",
  "url": "VS4.html#exploration-16",
  "type": "Exploration",
  "number": "2.4.14",
  "title": "",
  "body": "\nGive an example of each of these, or explain why it's not possible that such a thing would exist.\n A nonempty subset of   that is not a subspace.  A set of two vectors in   that is not a spanning set. "
},
{
  "id": "exploration-17",
  "level": "2",
  "url": "VS4.html#exploration-17",
  "type": "Exploration",
  "number": "2.4.15",
  "title": "",
  "body": "\nLet   be a vector space and   a subset of  . Show that the span of   is a subspace. \n\nIs it possible that there is a subset of   containing fewer vectors than  , but whose span contains all of the vectors in the span of  ?\n "
},
{
  "id": "VS5",
  "level": "1",
  "url": "VS5.html",
  "type": "Section",
  "number": "2.5",
  "title": "Linear Independence (VS5)",
  "body": "Linear Independence (VS5) \n                 \nDetermine if a set of Euclidean vectors is linearly dependent or independent by solving an appropriate vector equation.\n \n             Class Activities \n  Consider the two sets\n             .\n  Which of the following is true?\n            is bigger than  .\n        and   are the same size.\n        is smaller than  .\n     linearly dependent linearly independent A linearly dependent set of three vectors \n  You can think of linearly dependent sets as containing a redundant vector,\n  in the sense that you can drop a vector out without reducing the span of the set. In the above image, all three vectors lay in the same planar subspace,\n  but only two vectors are needed to span the plane, so the set is\n  linearly dependent.\n         Begin with 3 vectors in  \n         .\n         Choose three non-zero scalars,  , and  . Let  . Is the set   linearly dependent? \n       Find     \n        What does this tell you about solution set for the vector equation \n         ?\n         \n  Let   be vectors in  .\n  Suppose  , so the set\n    is linearly dependent.\n  Which of the following is true of the vector equation  ?\n\t \n     \n    It is consistent with one solution.\n     \n   \n     \n    It is consistent with infinitely many solutions.\n     \n   \n     \n    It is inconsistent.\n     \n   \n  For any vector space,\n  the set   is linearly dependent if and only\n  if the vector equation   is consistent with\n  infinitely many solutions.\n         \n  Find\n   \n  and mark the part of the matrix that demonstrates that\n   \n  is linearly dependent (the part that shows its linear system has\n  infinitely many solutions).\n         \n  A set of Euclidean vectors\n    is linearly dependent if and only\n  if  \n  has a column without a pivot position.\n             \n  Compare the following results:\n         \n     \n    A set of   vectors\n    is linearly independent if and only\n  if  \n  has all pivot columns.\n     \n   \n     \n    A set of   vectors\n    spans   if and only\n  if  \n  has all pivot rows.\n     \n    A set of   vectors\n    is linearly independent if and only the vector equation   has exactly one solution, with  .\n       \n       \n  Consider whether the set of Euclidean vectors   is linearly dependent or linearly independent.\n         \nReinterpret this question as an appropriate question about solutions to a vector equation.\n     \nUse the solution to this question to answer the original question.\n     \n  Consider whether the set of polynomials   is linearly dependent or linearly independent.\n         \nReinterpret this question as an appropriate question about solutions to a polynomial equation.\n     \nUse the solution to this question to answer the original question.\n     \nWhat is the largest number of   vectors that can form a linearly independent set?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \n     \n    You can have infinitely many vectors and still be linearly independent.\n     \n \nWhat is the largest number of \n \nvectors that can form a linearly independent set?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \n     \n    You can have infinitely many vectors and still be linearly independent.\n     \n \nWhat is the largest number of \n \nvectors that can form a linearly independent set?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \n     \n    You can have infinitely many vectors and still be linearly independent.\n     \n \n    Is is possible for the set of vectors   in a vector space   to be linearly independent? Recall that   represents the additive identity.\n         Videos \n               \n             Video: Linear independence Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations \n                    Prove the result of  , by showing that, given a set   of vectors,   is linearly independent iff the equation   is only true when  . \n                 Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-11",
  "level": "2",
  "url": "VS5.html#objectives-11",
  "type": "Learning Outcomes",
  "number": "2.5",
  "title": "",
  "body": "\n                 \nDetermine if a set of Euclidean vectors is linearly dependent or independent by solving an appropriate vector equation.\n \n             "
},
{
  "id": "activity-55",
  "level": "2",
  "url": "VS5.html#activity-55",
  "type": "Activity",
  "number": "2.5.1",
  "title": "",
  "body": "\n  Consider the two sets\n             .\n  Which of the following is true?\n            is bigger than  .\n        and   are the same size.\n        is smaller than  .\n     "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "VS5.html#definition-13",
  "type": "Definition",
  "number": "2.5.2",
  "title": "",
  "body": "linearly dependent linearly independent A linearly dependent set of three vectors \n  You can think of linearly dependent sets as containing a redundant vector,\n  in the sense that you can drop a vector out without reducing the span of the set. In the above image, all three vectors lay in the same planar subspace,\n  but only two vectors are needed to span the plane, so the set is\n  linearly dependent.\n         "
},
{
  "id": "activity-56",
  "level": "2",
  "url": "VS5.html#activity-56",
  "type": "Activity",
  "number": "2.5.3",
  "title": "",
  "body": "Begin with 3 vectors in  \n         .\n         Choose three non-zero scalars,  , and  . Let  . Is the set   linearly dependent? \n       Find     \n        What does this tell you about solution set for the vector equation \n         ?\n         "
},
{
  "id": "activity-57",
  "level": "2",
  "url": "VS5.html#activity-57",
  "type": "Activity",
  "number": "2.5.4",
  "title": "",
  "body": "\n  Let   be vectors in  .\n  Suppose  , so the set\n    is linearly dependent.\n  Which of the following is true of the vector equation  ?\n\t \n     \n    It is consistent with one solution.\n     \n   \n     \n    It is consistent with infinitely many solutions.\n     \n   \n     \n    It is inconsistent.\n     \n   "
},
{
  "id": "fact-8",
  "level": "2",
  "url": "VS5.html#fact-8",
  "type": "Fact",
  "number": "2.5.5",
  "title": "",
  "body": "\n  For any vector space,\n  the set   is linearly dependent if and only\n  if the vector equation   is consistent with\n  infinitely many solutions.\n         "
},
{
  "id": "activity-58",
  "level": "2",
  "url": "VS5.html#activity-58",
  "type": "Activity",
  "number": "2.5.6",
  "title": "",
  "body": "\n  Find\n   \n  and mark the part of the matrix that demonstrates that\n   \n  is linearly dependent (the part that shows its linear system has\n  infinitely many solutions).\n         "
},
{
  "id": "observation-8",
  "level": "2",
  "url": "VS5.html#observation-8",
  "type": "Observation",
  "number": "2.5.7",
  "title": "",
  "body": "\n  A set of Euclidean vectors\n    is linearly dependent if and only\n  if  \n  has a column without a pivot position.\n             "
},
{
  "id": "def_of_LI",
  "level": "2",
  "url": "VS5.html#def_of_LI",
  "type": "Observation",
  "number": "2.5.8",
  "title": "",
  "body": "\n  Compare the following results:\n         \n     \n    A set of   vectors\n    is linearly independent if and only\n  if  \n  has all pivot columns.\n     \n   \n     \n    A set of   vectors\n    spans   if and only\n  if  \n  has all pivot rows.\n     \n    A set of   vectors\n    is linearly independent if and only the vector equation   has exactly one solution, with  .\n       \n       "
},
{
  "id": "activity-59",
  "level": "2",
  "url": "VS5.html#activity-59",
  "type": "Activity",
  "number": "2.5.9",
  "title": "",
  "body": "\n  Consider whether the set of Euclidean vectors   is linearly dependent or linearly independent.\n         \nReinterpret this question as an appropriate question about solutions to a vector equation.\n     \nUse the solution to this question to answer the original question.\n     "
},
{
  "id": "activity-60",
  "level": "2",
  "url": "VS5.html#activity-60",
  "type": "Activity",
  "number": "2.5.10",
  "title": "",
  "body": "\n  Consider whether the set of polynomials   is linearly dependent or linearly independent.\n         \nReinterpret this question as an appropriate question about solutions to a polynomial equation.\n     \nUse the solution to this question to answer the original question.\n     "
},
{
  "id": "activity-61",
  "level": "2",
  "url": "VS5.html#activity-61",
  "type": "Activity",
  "number": "2.5.11",
  "title": "",
  "body": "\nWhat is the largest number of   vectors that can form a linearly independent set?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \n     \n    You can have infinitely many vectors and still be linearly independent.\n     \n "
},
{
  "id": "activity-62",
  "level": "2",
  "url": "VS5.html#activity-62",
  "type": "Activity",
  "number": "2.5.12",
  "title": "",
  "body": "\nWhat is the largest number of \n \nvectors that can form a linearly independent set?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \n     \n    You can have infinitely many vectors and still be linearly independent.\n     \n "
},
{
  "id": "activity-63",
  "level": "2",
  "url": "VS5.html#activity-63",
  "type": "Activity",
  "number": "2.5.13",
  "title": "",
  "body": "\nWhat is the largest number of \n \nvectors that can form a linearly independent set?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \n     \n    You can have infinitely many vectors and still be linearly independent.\n     \n "
},
{
  "id": "activity-64",
  "level": "2",
  "url": "VS5.html#activity-64",
  "type": "Activity",
  "number": "2.5.14",
  "title": "",
  "body": "\n    Is is possible for the set of vectors   in a vector space   to be linearly independent? Recall that   represents the additive identity.\n         "
},
{
  "id": "figure-17",
  "level": "2",
  "url": "VS5.html#figure-17",
  "type": "Figure",
  "number": "17",
  "title": "",
  "body": "\n               \n             Video: Linear independence "
},
{
  "id": "exploration-18",
  "level": "2",
  "url": "VS5.html#exploration-18",
  "type": "Exploration",
  "number": "2.5.15",
  "title": "",
  "body": "\n                    Prove the result of  , by showing that, given a set   of vectors,   is linearly independent iff the equation   is only true when  . \n                 "
},
{
  "id": "VS6",
  "level": "1",
  "url": "VS6.html",
  "type": "Section",
  "number": "2.6",
  "title": "Identifying a Basis (VS6)",
  "body": "Identifying a Basis (VS6) \n                 \nExplain why a set of Euclidean vectors is or is not a basis of  .\n \n             Class Activities \n    Suppose you are building a starship, which is for some reason in the shape of a cube. Due to some clever engineering, each part of the ship can be made out of a finite set of components. In fact, there are only 5 basic components. Assemble them in different ways, and you make every part of the cube! However, at the last minute, the design is changed from a cube to an octahedron. Would it make more sense to take all of the parts you were planning to build, build them anyway and modify them later, or to just modify the 5 basic components?\n        \n        Start with three vectors  .\n         Let   be an unspecified vector in  . Show that   can be expressed as a linear combination of  , and  .\n         Let  . Show that   cannot be expressed as a linear combination of  , and  .\n         Does this imply that all vectors in   can be written as a linear combination of  , and  ? If you think so, explain what makes these vectors special. If not, explain why not.\n         basis standard basis \n  A basis may be thought of as a collection of building blocks for a vector\n  space,  since every vector in the space can be expressed as a unique linear\n  combination of basis vectors.\n         \n  For example, in many calculus courses, vectors in  \n  are often expressed in their component form\n   \n  or in their standard basic vector form\n   \n  Since every vector in   can be uniquely described as a linear\n  combination of the vectors in  ,\n  this set is indeed a basis.\n         \n  Label each of the sets   as\n   \n     \n    SPANS   or DOES NOT SPAN  \n     \n      \n     \n    LINEARLY INDEPENDENT or LINEARLY DEPENDENT\n     \n      \n     \n    BASIS FOR   or NOT A BASIS FOR  \n     \n      \n  by finding   for their corresponding matrices.\n         \n  If   is a basis for\n   , that means  \n  doesn't have a non-pivot column, and doesn't have a\n  row of zeros. What is  ?\n         \n  The set   is a basis for   if and\n  only if   and\n   .\n             identity matrix Videos \n               \n             Video: Verifying that a set of vectors is a basis of a vector space Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations What is a basis for  ? What about  ? Could we write each of these in a way that looks like the standard basis vectors in   for some  ? Make a conjecture about the relationship between these spaces of matrices and standard Eulidean space. \nRecall our earlier definition of symmetric matrices. Find a basis for each of the following:\n The space of   symmetric matrices. The space of   symmetric matrices. The space of   symmetric matrices. \nMust a basis for the space  , the space of all quadratic polynomials, contain a polynomial of each degree less than or equal to 2? Generalize your result to polynomials of arbitrary degree.\n                 Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-12",
  "level": "2",
  "url": "VS6.html#objectives-12",
  "type": "Learning Outcomes",
  "number": "2.6",
  "title": "",
  "body": "\n                 \nExplain why a set of Euclidean vectors is or is not a basis of  .\n \n             "
},
{
  "id": "observation-10",
  "level": "2",
  "url": "VS6.html#observation-10",
  "type": "Observation",
  "number": "2.6.1",
  "title": "",
  "body": "\n    Suppose you are building a starship, which is for some reason in the shape of a cube. Due to some clever engineering, each part of the ship can be made out of a finite set of components. In fact, there are only 5 basic components. Assemble them in different ways, and you make every part of the cube! However, at the last minute, the design is changed from a cube to an octahedron. Would it make more sense to take all of the parts you were planning to build, build them anyway and modify them later, or to just modify the 5 basic components?\n        "
},
{
  "id": "activity-65",
  "level": "2",
  "url": "VS6.html#activity-65",
  "type": "Activity",
  "number": "2.6.2",
  "title": "",
  "body": "\n        Start with three vectors  .\n         Let   be an unspecified vector in  . Show that   can be expressed as a linear combination of  , and  .\n         Let  . Show that   cannot be expressed as a linear combination of  , and  .\n         Does this imply that all vectors in   can be written as a linear combination of  , and  ? If you think so, explain what makes these vectors special. If not, explain why not.\n         "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "VS6.html#definition-14",
  "type": "Definition",
  "number": "2.6.3",
  "title": "",
  "body": "basis standard basis "
},
{
  "id": "observation-11",
  "level": "2",
  "url": "VS6.html#observation-11",
  "type": "Observation",
  "number": "2.6.4",
  "title": "",
  "body": "\n  A basis may be thought of as a collection of building blocks for a vector\n  space,  since every vector in the space can be expressed as a unique linear\n  combination of basis vectors.\n         \n  For example, in many calculus courses, vectors in  \n  are often expressed in their component form\n   \n  or in their standard basic vector form\n   \n  Since every vector in   can be uniquely described as a linear\n  combination of the vectors in  ,\n  this set is indeed a basis.\n         "
},
{
  "id": "activity-66",
  "level": "2",
  "url": "VS6.html#activity-66",
  "type": "Activity",
  "number": "2.6.5",
  "title": "",
  "body": "\n  Label each of the sets   as\n   \n     \n    SPANS   or DOES NOT SPAN  \n     \n      \n     \n    LINEARLY INDEPENDENT or LINEARLY DEPENDENT\n     \n      \n     \n    BASIS FOR   or NOT A BASIS FOR  \n     \n      \n  by finding   for their corresponding matrices.\n         "
},
{
  "id": "activity-67",
  "level": "2",
  "url": "VS6.html#activity-67",
  "type": "Activity",
  "number": "2.6.6",
  "title": "",
  "body": "\n  If   is a basis for\n   , that means  \n  doesn't have a non-pivot column, and doesn't have a\n  row of zeros. What is  ?\n         "
},
{
  "id": "fact-9",
  "level": "2",
  "url": "VS6.html#fact-9",
  "type": "Fact",
  "number": "2.6.7",
  "title": "",
  "body": "\n  The set   is a basis for   if and\n  only if   and\n   .\n             identity matrix "
},
{
  "id": "figure-18",
  "level": "2",
  "url": "VS6.html#figure-18",
  "type": "Figure",
  "number": "18",
  "title": "",
  "body": "\n               \n             Video: Verifying that a set of vectors is a basis of a vector space "
},
{
  "id": "exploration-19",
  "level": "2",
  "url": "VS6.html#exploration-19",
  "type": "Exploration",
  "number": "2.6.8",
  "title": "",
  "body": "What is a basis for  ? What about  ? Could we write each of these in a way that looks like the standard basis vectors in   for some  ? Make a conjecture about the relationship between these spaces of matrices and standard Eulidean space. "
},
{
  "id": "exploration-20",
  "level": "2",
  "url": "VS6.html#exploration-20",
  "type": "Exploration",
  "number": "2.6.9",
  "title": "",
  "body": "\nRecall our earlier definition of symmetric matrices. Find a basis for each of the following:\n The space of   symmetric matrices. The space of   symmetric matrices. The space of   symmetric matrices. "
},
{
  "id": "exploration-21",
  "level": "2",
  "url": "VS6.html#exploration-21",
  "type": "Exploration",
  "number": "2.6.10",
  "title": "",
  "body": "\nMust a basis for the space  , the space of all quadratic polynomials, contain a polynomial of each degree less than or equal to 2? Generalize your result to polynomials of arbitrary degree.\n                 "
},
{
  "id": "VS7",
  "level": "1",
  "url": "VS7.html",
  "type": "Section",
  "number": "2.7",
  "title": "Subspace Basis and Dimension (VS7)",
  "body": "Subspace Basis and Dimension (VS7) \n                 \nCompute a basis for the subspace spanned by a given set of Euclidean vectors, and determine the dimension of the subspace.\n \n             Class Activities subspace \nOne easy way to construct a subspace is to take the span of set,\nbut a linearly dependent set contains  redundant  vectors. For example,\nonly two of the three vectors in the following image are needed to span\nthe planar subspace.\n         A linearly dependent set of three vectors \n  Consider the subspace of   given by  .\n         \n    Mark the part of   that shows that  's spanning set\n    is linearly dependent.\n       \n    Find a basis for   by removing a vector from its spanning set\n    to make it linearly independent.\n       \n  Let  . The easiest basis describing\n    is the set of vectors in   given by the pivot columns\n  of  .\n         \n  Put another way, to compute a basis for the subspace  ,\n  simply remove the vectors corresponding to the non-pivot columns of\n   .\n  For example, since\n   \n  the subspace\n   \n  has\n   \n  as a basis.\n         \nLet   be the subspace of   given by\n  .\n Find a basis for  .\n         \nLet   be the subspace of   given by\n  \n Find a basis for  .\n         \nLet   be the subspace of   given by\n  \n Find a basis for  .\n         \n  Let\n             \n            and\n             .\n         \n  Find a basis for  .\n       \n  Find a basis for  .\n       \n  Even though we found different bases for them,\n    and   are exactly the same subspace of  ,\n  since\n   .\n         \n  Any non-trivial real vector space has infinitely-many different bases, but all\n  the bases for a given vector space are exactly the same size.\n         \n  For example,\n   \n  are all valid bases for  , and they all contain three vectors.\n         dimension \n  As you'd expect,   has dimension  .\n  For example,   has dimension   because any basis for  \n  such as\n   \n  contains exactly three vectors.\n         \n  Find the dimension of each subspace of   by finding\n    for each corresponding matrix.\n               Videos \n               \n             Video: Finding a basis of a subspace and computing the dimension of a subspace Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations \n                    Prove each of the following statements is true.\n  If   and   are each a basis for a vector space  , then  If   is linearly independent, then so is  .  Let   be a vector space of dimension  , and  . Then there exists a basis for   which contains  . \n        Suppose we have the set of all function  . We claim that this is a vector space under the usual operation of function addition and scalar multiplication. What is the dimension of this space for each choice of   below:\n\n       \n        Suppose you have the vector space   with the operations   Find a basis for   and determine it's dimension.\n         Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-13",
  "level": "2",
  "url": "VS7.html#objectives-13",
  "type": "Learning Outcomes",
  "number": "2.7",
  "title": "",
  "body": "\n                 \nCompute a basis for the subspace spanned by a given set of Euclidean vectors, and determine the dimension of the subspace.\n \n             "
},
{
  "id": "observation-12",
  "level": "2",
  "url": "VS7.html#observation-12",
  "type": "Observation",
  "number": "2.7.1",
  "title": "",
  "body": "subspace \nOne easy way to construct a subspace is to take the span of set,\nbut a linearly dependent set contains  redundant  vectors. For example,\nonly two of the three vectors in the following image are needed to span\nthe planar subspace.\n         A linearly dependent set of three vectors "
},
{
  "id": "activity-68",
  "level": "2",
  "url": "VS7.html#activity-68",
  "type": "Activity",
  "number": "2.7.2",
  "title": "",
  "body": "\n  Consider the subspace of   given by  .\n         \n    Mark the part of   that shows that  's spanning set\n    is linearly dependent.\n       \n    Find a basis for   by removing a vector from its spanning set\n    to make it linearly independent.\n       "
},
{
  "id": "fact-10",
  "level": "2",
  "url": "VS7.html#fact-10",
  "type": "Fact",
  "number": "2.7.3",
  "title": "",
  "body": "\n  Let  . The easiest basis describing\n    is the set of vectors in   given by the pivot columns\n  of  .\n         \n  Put another way, to compute a basis for the subspace  ,\n  simply remove the vectors corresponding to the non-pivot columns of\n   .\n  For example, since\n   \n  the subspace\n   \n  has\n   \n  as a basis.\n         "
},
{
  "id": "activity-69",
  "level": "2",
  "url": "VS7.html#activity-69",
  "type": "Activity",
  "number": "2.7.4",
  "title": "",
  "body": "\nLet   be the subspace of   given by\n  .\n Find a basis for  .\n         "
},
{
  "id": "activity-70",
  "level": "2",
  "url": "VS7.html#activity-70",
  "type": "Activity",
  "number": "2.7.5",
  "title": "",
  "body": "\nLet   be the subspace of   given by\n  \n Find a basis for  .\n         "
},
{
  "id": "activity-71",
  "level": "2",
  "url": "VS7.html#activity-71",
  "type": "Activity",
  "number": "2.7.6",
  "title": "",
  "body": "\nLet   be the subspace of   given by\n  \n Find a basis for  .\n         "
},
{
  "id": "activity-72",
  "level": "2",
  "url": "VS7.html#activity-72",
  "type": "Activity",
  "number": "2.7.7",
  "title": "",
  "body": "\n  Let\n             \n            and\n             .\n         \n  Find a basis for  .\n       \n  Find a basis for  .\n       "
},
{
  "id": "observation-13",
  "level": "2",
  "url": "VS7.html#observation-13",
  "type": "Observation",
  "number": "2.7.8",
  "title": "",
  "body": "\n  Even though we found different bases for them,\n    and   are exactly the same subspace of  ,\n  since\n   .\n         "
},
{
  "id": "fact-11",
  "level": "2",
  "url": "VS7.html#fact-11",
  "type": "Fact",
  "number": "2.7.9",
  "title": "",
  "body": "\n  Any non-trivial real vector space has infinitely-many different bases, but all\n  the bases for a given vector space are exactly the same size.\n         \n  For example,\n   \n  are all valid bases for  , and they all contain three vectors.\n         "
},
{
  "id": "definition-15",
  "level": "2",
  "url": "VS7.html#definition-15",
  "type": "Definition",
  "number": "2.7.10",
  "title": "",
  "body": "dimension \n  As you'd expect,   has dimension  .\n  For example,   has dimension   because any basis for  \n  such as\n   \n  contains exactly three vectors.\n         "
},
{
  "id": "activity-73",
  "level": "2",
  "url": "VS7.html#activity-73",
  "type": "Activity",
  "number": "2.7.11",
  "title": "",
  "body": "\n  Find the dimension of each subspace of   by finding\n    for each corresponding matrix.\n               "
},
{
  "id": "figure-20",
  "level": "2",
  "url": "VS7.html#figure-20",
  "type": "Figure",
  "number": "20",
  "title": "",
  "body": "\n               \n             Video: Finding a basis of a subspace and computing the dimension of a subspace "
},
{
  "id": "exploration-22",
  "level": "2",
  "url": "VS7.html#exploration-22",
  "type": "Exploration",
  "number": "2.7.12",
  "title": "",
  "body": "\n                    Prove each of the following statements is true.\n  If   and   are each a basis for a vector space  , then  If   is linearly independent, then so is  .  Let   be a vector space of dimension  , and  . Then there exists a basis for   which contains  . "
},
{
  "id": "exploration-23",
  "level": "2",
  "url": "VS7.html#exploration-23",
  "type": "Exploration",
  "number": "2.7.13",
  "title": "",
  "body": "\n        Suppose we have the set of all function  . We claim that this is a vector space under the usual operation of function addition and scalar multiplication. What is the dimension of this space for each choice of   below:\n\n       "
},
{
  "id": "exploration-24",
  "level": "2",
  "url": "VS7.html#exploration-24",
  "type": "Exploration",
  "number": "2.7.14",
  "title": "",
  "body": "\n        Suppose you have the vector space   with the operations   Find a basis for   and determine it's dimension.\n         "
},
{
  "id": "VS8",
  "level": "1",
  "url": "VS8.html",
  "type": "Section",
  "number": "2.8",
  "title": "Polynomial and Matrix Spaces (VS8)",
  "body": "Polynomial and Matrix Spaces (VS8) \n                 \nAnswer questions about vector spaces of polynomials or matrices.\n \n             Class Activities isomorphic \n  We've already been taking advantage of the previous fact by converting\n  polynomials and matrices into Euclidean vectors. Since  \n  and   are both four-dimensional:\n         \nSuppose   is a subspace of  , and you know that\n the set   is a linearly independent subset of  .\nWhat can you conclude about  ?\n         \n     \n    The dimension of   is 3 or less.\n     \n \n     \n    The dimension of   is exactly 3.\n     \n \n     \n    The dimension of   is 3 or more.\n     \n \nSuppose   is a subspace of  , and you know that\n   is spanned by the six vectors  \nWhat can you conclude about  ?\n         \n     \n    The dimension of   is 6 or less.\n     \n \n     \n    The dimension of   is exactly 6.\n     \n \n     \n    The dimension of   is 6 or more.\n     \n \n  The space of polynomials   (of  any  degree)\n  has the basis  ,\n  so it is a natural example of an infinite-dimensional vector space.\n         \n  Since   and other infinite-dimensional spaces cannot be treated as\n  an isomorphic finite-dimensional Euclidean space  , vectors in\n  such spaces cannot be studied by converting them into Euclidean vectors.\n  Fortunately, most of the examples we will be\n  interested in for this course will be finite-dimensional.\n         Videos \n               \n             Video: Polynomial and matrix calculations Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations \n                    Given a matrix  the span of the set of all columns is the  column space column space the span of the set of all rows is the  row space row space the  rank rank  of a matrix is the dimension of the column space. \n\n\n    \nCalculate the rank of these matrices.\n         \n\nCalculate a basis for the row space and a basis for the column space of the matrix\n             .\n         \nIf you are given the values of   and  , what value of   will cause the matrix   to have rank 1?\n\n      Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-14",
  "level": "2",
  "url": "VS8.html#objectives-14",
  "type": "Learning Outcomes",
  "number": "2.8",
  "title": "",
  "body": "\n                 \nAnswer questions about vector spaces of polynomials or matrices.\n \n             "
},
{
  "id": "fact-12",
  "level": "2",
  "url": "VS8.html#fact-12",
  "type": "Fact",
  "number": "2.8.1",
  "title": "",
  "body": "isomorphic "
},
{
  "id": "observation-14",
  "level": "2",
  "url": "VS8.html#observation-14",
  "type": "Observation",
  "number": "2.8.2",
  "title": "",
  "body": "\n  We've already been taking advantage of the previous fact by converting\n  polynomials and matrices into Euclidean vectors. Since  \n  and   are both four-dimensional:\n         "
},
{
  "id": "activity-74",
  "level": "2",
  "url": "VS8.html#activity-74",
  "type": "Activity",
  "number": "2.8.3",
  "title": "",
  "body": "\nSuppose   is a subspace of  , and you know that\n the set   is a linearly independent subset of  .\nWhat can you conclude about  ?\n         \n     \n    The dimension of   is 3 or less.\n     \n \n     \n    The dimension of   is exactly 3.\n     \n \n     \n    The dimension of   is 3 or more.\n     \n "
},
{
  "id": "activity-75",
  "level": "2",
  "url": "VS8.html#activity-75",
  "type": "Activity",
  "number": "2.8.4",
  "title": "",
  "body": "\nSuppose   is a subspace of  , and you know that\n   is spanned by the six vectors  \nWhat can you conclude about  ?\n         \n     \n    The dimension of   is 6 or less.\n     \n \n     \n    The dimension of   is exactly 6.\n     \n \n     \n    The dimension of   is 6 or more.\n     \n "
},
{
  "id": "observation-15",
  "level": "2",
  "url": "VS8.html#observation-15",
  "type": "Observation",
  "number": "2.8.5",
  "title": "",
  "body": "\n  The space of polynomials   (of  any  degree)\n  has the basis  ,\n  so it is a natural example of an infinite-dimensional vector space.\n         \n  Since   and other infinite-dimensional spaces cannot be treated as\n  an isomorphic finite-dimensional Euclidean space  , vectors in\n  such spaces cannot be studied by converting them into Euclidean vectors.\n  Fortunately, most of the examples we will be\n  interested in for this course will be finite-dimensional.\n         "
},
{
  "id": "figure-21",
  "level": "2",
  "url": "VS8.html#figure-21",
  "type": "Figure",
  "number": "21",
  "title": "",
  "body": "\n               \n             Video: Polynomial and matrix calculations "
},
{
  "id": "exploration-25",
  "level": "2",
  "url": "VS8.html#exploration-25",
  "type": "Exploration",
  "number": "2.8.6",
  "title": "",
  "body": "\n                    Given a matrix  the span of the set of all columns is the  column space column space the span of the set of all rows is the  row space row space the  rank rank  of a matrix is the dimension of the column space. \n\n\n    \nCalculate the rank of these matrices.\n         "
},
{
  "id": "exploration-26",
  "level": "2",
  "url": "VS8.html#exploration-26",
  "type": "Exploration",
  "number": "2.8.7",
  "title": "",
  "body": "\n\nCalculate a basis for the row space and a basis for the column space of the matrix\n             .\n         "
},
{
  "id": "exploration-27",
  "level": "2",
  "url": "VS8.html#exploration-27",
  "type": "Exploration",
  "number": "2.8.8",
  "title": "",
  "body": "\nIf you are given the values of   and  , what value of   will cause the matrix   to have rank 1?\n\n      "
},
{
  "id": "VS9",
  "level": "1",
  "url": "VS9.html",
  "type": "Section",
  "number": "2.9",
  "title": "Homogeneous Linear Systems (VS9)",
  "body": "Homogeneous Linear Systems (VS9) \n                 \nFind a basis for the solution set of a homogeneous system of equations.\n \n             Class Activities homogeneous \n  This system is equivalent to the vector equation:\n   \n  and the augmented matrix:\n   \n     \nNote that if   and\n  are solutions to\n \nso is   , since\n \nimplies\n \n         \nSimilarly, if  ,   is a solution.\nThus the solution set of a homogeneous system is...\n     \n     \n    A basis for  .\n     \n   \n     \n    A subspace of  .\n     \n   \n     \n    The empty set.\n     \n   \nConsider the homogeneous system of equations\n \n         \nFind its solution set (a subspace of  ).\n     \nRewrite this solution space in the form  \n     \nRewrite this solution space in the form  \n     \n  The coefficients of the free variables in the solution set of a linear system\n  always yield linearly independent vectors.\n     \n  Thus if\n   \n  is the solution space for a homogeneous system, then\n   \n  is a basis for the solution space.\n     \nConsider the homogeneous system of equations\n \n         \nFind a basis for its solution space.\n         \nConsider the homogeneous vector equation\n \n         \nFind a basis for its solution space.\n         \nConsider the homogeneous system of equations\n \n         \nFind a basis for its solution space.\n         \nThe basis of the trivial vector space is the empty set.  You can denote this as either   or  .\n     \nThus, if   is the only solution of a homogeneous system, the basis of the solution space is   .\n     Videos \n               \n             Video: Polynomial and matrix calculations Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations non-singular Prove that the reduced row echelon form of   is the identity matrix.\n \nProve that, for any column vector  , the system of equations given by   has a unique solution.\n \n    Prove that the columns of   form a basis for  . \n    Prove that the rank of   is  . Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-15",
  "level": "2",
  "url": "VS9.html#objectives-15",
  "type": "Learning Outcomes",
  "number": "2.9",
  "title": "",
  "body": "\n                 \nFind a basis for the solution set of a homogeneous system of equations.\n \n             "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "VS9.html#definition-16",
  "type": "Definition",
  "number": "2.9.1",
  "title": "",
  "body": "homogeneous \n  This system is equivalent to the vector equation:\n   \n  and the augmented matrix:\n   \n     "
},
{
  "id": "activity-76",
  "level": "2",
  "url": "VS9.html#activity-76",
  "type": "Activity",
  "number": "2.9.2",
  "title": "",
  "body": "\nNote that if   and\n  are solutions to\n \nso is   , since\n \nimplies\n \n         \nSimilarly, if  ,   is a solution.\nThus the solution set of a homogeneous system is...\n     \n     \n    A basis for  .\n     \n   \n     \n    A subspace of  .\n     \n   \n     \n    The empty set.\n     \n   "
},
{
  "id": "activity-77",
  "level": "2",
  "url": "VS9.html#activity-77",
  "type": "Activity",
  "number": "2.9.3",
  "title": "",
  "body": "\nConsider the homogeneous system of equations\n \n         \nFind its solution set (a subspace of  ).\n     \nRewrite this solution space in the form  \n     \nRewrite this solution space in the form  \n     "
},
{
  "id": "fact-13",
  "level": "2",
  "url": "VS9.html#fact-13",
  "type": "Fact",
  "number": "2.9.4",
  "title": "",
  "body": "\n  The coefficients of the free variables in the solution set of a linear system\n  always yield linearly independent vectors.\n     \n  Thus if\n   \n  is the solution space for a homogeneous system, then\n   \n  is a basis for the solution space.\n     "
},
{
  "id": "activity-78",
  "level": "2",
  "url": "VS9.html#activity-78",
  "type": "Activity",
  "number": "2.9.5",
  "title": "",
  "body": "\nConsider the homogeneous system of equations\n \n         \nFind a basis for its solution space.\n         "
},
{
  "id": "activity-79",
  "level": "2",
  "url": "VS9.html#activity-79",
  "type": "Activity",
  "number": "2.9.6",
  "title": "",
  "body": "\nConsider the homogeneous vector equation\n \n         \nFind a basis for its solution space.\n         "
},
{
  "id": "activity-80",
  "level": "2",
  "url": "VS9.html#activity-80",
  "type": "Activity",
  "number": "2.9.7",
  "title": "",
  "body": "\nConsider the homogeneous system of equations\n \n         \nFind a basis for its solution space.\n         "
},
{
  "id": "observation-16",
  "level": "2",
  "url": "VS9.html#observation-16",
  "type": "Observation",
  "number": "2.9.8",
  "title": "",
  "body": "\nThe basis of the trivial vector space is the empty set.  You can denote this as either   or  .\n     \nThus, if   is the only solution of a homogeneous system, the basis of the solution space is   .\n     "
},
{
  "id": "figure-22",
  "level": "2",
  "url": "VS9.html#figure-22",
  "type": "Figure",
  "number": "22",
  "title": "",
  "body": "\n               \n             Video: Polynomial and matrix calculations "
},
{
  "id": "non-singular",
  "level": "2",
  "url": "VS9.html#non-singular",
  "type": "Exploration",
  "number": "2.9.9",
  "title": "",
  "body": "non-singular Prove that the reduced row echelon form of   is the identity matrix.\n \nProve that, for any column vector  , the system of equations given by   has a unique solution.\n \n    Prove that the columns of   form a basis for  . \n    Prove that the rank of   is  . "
},
{
  "id": "AT1",
  "level": "1",
  "url": "AT1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Linear Transformations (AT1)",
  "body": "Linear Transformations (AT1) \n                 \nDetermine if a map between vector spaces of polynomials is linear or not.\n \n             Class Activities linear transformation linear map domain co-domain A linear transformation with a domain of   and a co-domain of  \nLet   be given by\n \n     \nTo show that   is a linear transformation, we must verify that   by computing \n \n        and \n , \nand we must verify that   by computing\n .\n     \nTherefore   is a linear transformation.\n     \nLet   be given by\n \n     \nTo show that   is  not  linear, we only need to find one\ncounterexample.\n \n \n     \nSince the resulting vectors are different,\n  is not a linear transformation.\n     \nA map between Euclidean spaces   is linear\nexactly when every component of the output is a linear combination\nof the variables of  .\n         \nFor example, the following map is definitely linear\nbecause   and   are linear combinations of  :\n .\n         \nBut the map below is not linear because  ,  , and  \nare not linear combinations (even though   is):\n .\n         \n  Let  \n  be the derivative map defined by   for each\n  polynomial  . We recall from calculus that\n         , and\n   .\n         \n  Which of the following can we conclude from these calculus rules?\n         \n     \n      is not a vector space\n     \n     \n     \n      is a linear map\n     \n     \n     \n      is not a linear map\n     \n     \nLet the polynomial maps  \nand   be defined by\n .\n         \nCompute  ,  ,  , and  . Based on these computations, can you conclude that either   or   is definitely  not  a linear transformation? \n         \nIf   is a linear transformation, then  \nwhere   is the additive identity of the vector spaces  .\n         \nPut another way, an easy way to prove that a map like\n  can not be linear is to check that \n \n         \nShowing   is  not  a linear transformation can be done by finding an example\nfor any one of the following.\n         \n     \n    Show   (where   is the additive identity of   and  ).\n     \n \n     \n    Find   such that  .\n     \n \n     \n    Find   and   such that  .\n     \n \nOtherwise,   can be shown to be linear by proving the following  in general .\n         \n     \n    For all  ,  .\n     \n \n     \n    For all   and  ,  .\n     \n \nNote the similarities between this process and showing that a subset of a vector\nspace is or is not a subspace.\n         \nContinue to consider   defined by\n .\n         \n  Verify that\n   \n  is equal to   for all polynomials  .\n     \n  Verify that   is equal to   for all real numbers  \n  and polynomials  . \n     \n  Is   linear?\n     \nLet polynomial maps  \nand   be defined by\n \n         \nNote that   and  . So instead,\nshow that   to verify that   is not linear.\n     \nProve that   is linear by verifying that  \nand  .\n     Videos \n               \n             Video: Showing a transformation is linear \n               \n             Video: Showing a transformation is not linear Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations If   are vectors spaces, with associated zero vectors   and  , and   is a linear transformation, does  ? Prove this is true, or find a counterexample. Assume   is a linear transformation between vector spaces. Let   with additive inverse  . Prove that  . Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-17",
  "level": "2",
  "url": "AT1.html#objectives-17",
  "type": "Learning Outcomes",
  "number": "3.1",
  "title": "",
  "body": "\n                 \nDetermine if a map between vector spaces of polynomials is linear or not.\n \n             "
},
{
  "id": "definition-17",
  "level": "2",
  "url": "AT1.html#definition-17",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "linear transformation linear map "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "AT1.html#definition-18",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "domain co-domain A linear transformation with a domain of   and a co-domain of  "
},
{
  "id": "example-2",
  "level": "2",
  "url": "AT1.html#example-2",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "\nLet   be given by\n \n     \nTo show that   is a linear transformation, we must verify that   by computing \n \n        and \n , \nand we must verify that   by computing\n .\n     \nTherefore   is a linear transformation.\n     "
},
{
  "id": "example-3",
  "level": "2",
  "url": "AT1.html#example-3",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "\nLet   be given by\n \n     \nTo show that   is  not  linear, we only need to find one\ncounterexample.\n \n \n     \nSince the resulting vectors are different,\n  is not a linear transformation.\n     "
},
{
  "id": "fact-14",
  "level": "2",
  "url": "AT1.html#fact-14",
  "type": "Fact",
  "number": "3.1.5",
  "title": "",
  "body": "\nA map between Euclidean spaces   is linear\nexactly when every component of the output is a linear combination\nof the variables of  .\n         \nFor example, the following map is definitely linear\nbecause   and   are linear combinations of  :\n .\n         \nBut the map below is not linear because  ,  , and  \nare not linear combinations (even though   is):\n .\n         "
},
{
  "id": "activity-81",
  "level": "2",
  "url": "AT1.html#activity-81",
  "type": "Activity",
  "number": "3.1.6",
  "title": "",
  "body": "\n  Let  \n  be the derivative map defined by   for each\n  polynomial  . We recall from calculus that\n         , and\n   .\n         \n  Which of the following can we conclude from these calculus rules?\n         \n     \n      is not a vector space\n     \n     \n     \n      is a linear map\n     \n     \n     \n      is not a linear map\n     \n     "
},
{
  "id": "activity-82",
  "level": "2",
  "url": "AT1.html#activity-82",
  "type": "Activity",
  "number": "3.1.7",
  "title": "",
  "body": "\nLet the polynomial maps  \nand   be defined by\n .\n         \nCompute  ,  ,  , and  . Based on these computations, can you conclude that either   or   is definitely  not  a linear transformation? \n         "
},
{
  "id": "fact-15",
  "level": "2",
  "url": "AT1.html#fact-15",
  "type": "Fact",
  "number": "3.1.8",
  "title": "",
  "body": "\nIf   is a linear transformation, then  \nwhere   is the additive identity of the vector spaces  .\n         \nPut another way, an easy way to prove that a map like\n  can not be linear is to check that \n \n         "
},
{
  "id": "observation-17",
  "level": "2",
  "url": "AT1.html#observation-17",
  "type": "Observation",
  "number": "3.1.9",
  "title": "",
  "body": "\nShowing   is  not  a linear transformation can be done by finding an example\nfor any one of the following.\n         \n     \n    Show   (where   is the additive identity of   and  ).\n     \n \n     \n    Find   such that  .\n     \n \n     \n    Find   and   such that  .\n     \n \nOtherwise,   can be shown to be linear by proving the following  in general .\n         \n     \n    For all  ,  .\n     \n \n     \n    For all   and  ,  .\n     \n \nNote the similarities between this process and showing that a subset of a vector\nspace is or is not a subspace.\n         "
},
{
  "id": "activity-83",
  "level": "2",
  "url": "AT1.html#activity-83",
  "type": "Activity",
  "number": "3.1.10",
  "title": "",
  "body": "\nContinue to consider   defined by\n .\n         \n  Verify that\n   \n  is equal to   for all polynomials  .\n     \n  Verify that   is equal to   for all real numbers  \n  and polynomials  . \n     \n  Is   linear?\n     "
},
{
  "id": "activity-84",
  "level": "2",
  "url": "AT1.html#activity-84",
  "type": "Activity",
  "number": "3.1.11",
  "title": "",
  "body": "\nLet polynomial maps  \nand   be defined by\n \n         \nNote that   and  . So instead,\nshow that   to verify that   is not linear.\n     \nProve that   is linear by verifying that  \nand  .\n     "
},
{
  "id": "figure-24",
  "level": "2",
  "url": "AT1.html#figure-24",
  "type": "Figure",
  "number": "24",
  "title": "",
  "body": "\n               \n             Video: Showing a transformation is linear "
},
{
  "id": "figure-25",
  "level": "2",
  "url": "AT1.html#figure-25",
  "type": "Figure",
  "number": "25",
  "title": "",
  "body": "\n               \n             Video: Showing a transformation is not linear "
},
{
  "id": "exploration-29",
  "level": "2",
  "url": "AT1.html#exploration-29",
  "type": "Exploration",
  "number": "3.1.12",
  "title": "",
  "body": "If   are vectors spaces, with associated zero vectors   and  , and   is a linear transformation, does  ? Prove this is true, or find a counterexample. "
},
{
  "id": "exploration-30",
  "level": "2",
  "url": "AT1.html#exploration-30",
  "type": "Exploration",
  "number": "3.1.13",
  "title": "",
  "body": "Assume   is a linear transformation between vector spaces. Let   with additive inverse  . Prove that  . "
},
{
  "id": "AT2",
  "level": "1",
  "url": "AT2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Standard Matrices (AT2)",
  "body": "Standard Matrices (AT2) \n                 \nTranslate back and forth between a\n    linear transformation of Euclidean spaces and its standard matrix, and\n    perform related computations.\n \n             Class Activities \nRecall that a linear map  \nsatisfies\n     \n     \n     \n      for any  .\n     \n \n     \n     \n      for any  .\n     \n \nIn other words, a map is linear when vector space operations\ncan be applied before or after the transformation without affecting the result.\n     \nSuppose   is a linear map, and you know\n \nand\n .\nWhat is  ?\n           \n   \n   \n   \n \nSuppose   is a linear map, and you know\n \nand\n .\nWhat is  ?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \nSuppose   is a linear map, and you know\n \nand\n .\nWhat is  ?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \nSuppose   is a linear map, and you know\n \nand\n .\nWhat piece of information would help you compute  ?\n         \n     \n    The value of  .\n     \n \n     \n    The value of  .\n     \n \n     \n    The value of  .\n     \n \n     \n    Any of the above.\n     \n \nConsider any basis   for  .  Since every\nvector   can be written as a linear combination of\nbasis vectors,   , we may compute\n  as follows:\n         \nTherefore any linear transformation   can be defined\nby just describing the values of  .\n         determine standard matrix \nFor example,\nlet   be the linear map determined by\nthe following values for   applied to the standard basis of  .\n         \nThen the standard matrix corresponding to   is\n \n         \n  Let   be the linear transformation given by\n   \nWrite the standard matrix   for  .\n         \n  Let   be the linear transformation given by\n \n         \nCompute  ,  , and  .\n     \nFind the standard matrix for  .\n     \n  Because every linear map   has a linear combination\n  of the variables in each component, and thus\n    yields exactly the coefficients of  ,\n  the standard matrix for   is simply an ordered list of\n  the coefficients of the  :\n   \n         \n  Let   be the linear transformation given by the standard matrix\n   \n         \nCompute  .\n     \nCompute  .\n     Compute the following linear transformations of vectors given their\n  standard matrices.   Videos \n               \n             Video: Using the standard matrix to compute the image of a vector Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations We can represent images in the plane   using vectors, and manipulate those images with linear transformations. We introduce some notation in these explorations that is needed for their completion, but is not essential to the rest of the text. These have a geometric flair to them, and can be understood by thinking of geometric transformations in terms of standard matrices.  dot product  \n    For each of the following properties, determine if it is held by the dot product. Either provide a proof it the property holds, or provide a counter-example if it does not.\n\n Distributive over addition (e.g., (  Associative?  Commutative? \n         Given the properties you proved in the last exploration, could the dot product take the place of   as a vector space operation on  ? Is the dot product a linear operator? That is, given vectors  , and  , is it true that\n  Prove or provide a counter-example.\n Assume   and define the length of a vector by  . Prove that   if an only if   and   are perpendicular. You may use the fact (try and prove it!) that two vectors are perpendicular if and only if their dot product is zero.\n              A  dilation  is given by by mapping a vector   to some scalar multiple of  . A  rotation  is given by  A  reflection  of   over a line   can be found by first finding a vector   along  , then  \nRepresent each of the following transformations with respect to the standard basis in  .\n Rotation through an angle  . Reflection over a line   passing through the origin. Dilation by some scalar  . \nProve that each transformation is linear, and that your matrix representations are correct.\n                 Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-18",
  "level": "2",
  "url": "AT2.html#objectives-18",
  "type": "Learning Outcomes",
  "number": "3.2",
  "title": "",
  "body": "\n                 \nTranslate back and forth between a\n    linear transformation of Euclidean spaces and its standard matrix, and\n    perform related computations.\n \n             "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "AT2.html#remark-11",
  "type": "Remark",
  "number": "3.2.1",
  "title": "",
  "body": "\nRecall that a linear map  \nsatisfies\n     \n     \n     \n      for any  .\n     \n \n     \n     \n      for any  .\n     \n \nIn other words, a map is linear when vector space operations\ncan be applied before or after the transformation without affecting the result.\n     "
},
{
  "id": "activity-85",
  "level": "2",
  "url": "AT2.html#activity-85",
  "type": "Activity",
  "number": "3.2.2",
  "title": "",
  "body": "\nSuppose   is a linear map, and you know\n \nand\n .\nWhat is  ?\n           \n   \n   \n   \n "
},
{
  "id": "activity-86",
  "level": "2",
  "url": "AT2.html#activity-86",
  "type": "Activity",
  "number": "3.2.3",
  "title": "",
  "body": "\nSuppose   is a linear map, and you know\n \nand\n .\nWhat is  ?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n "
},
{
  "id": "activity-87",
  "level": "2",
  "url": "AT2.html#activity-87",
  "type": "Activity",
  "number": "3.2.4",
  "title": "",
  "body": "\nSuppose   is a linear map, and you know\n \nand\n .\nWhat is  ?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n "
},
{
  "id": "activity-88",
  "level": "2",
  "url": "AT2.html#activity-88",
  "type": "Activity",
  "number": "3.2.5",
  "title": "",
  "body": "\nSuppose   is a linear map, and you know\n \nand\n .\nWhat piece of information would help you compute  ?\n         \n     \n    The value of  .\n     \n \n     \n    The value of  .\n     \n \n     \n    The value of  .\n     \n \n     \n    Any of the above.\n     \n "
},
{
  "id": "fact-16",
  "level": "2",
  "url": "AT2.html#fact-16",
  "type": "Fact",
  "number": "3.2.6",
  "title": "",
  "body": "\nConsider any basis   for  .  Since every\nvector   can be written as a linear combination of\nbasis vectors,   , we may compute\n  as follows:\n         \nTherefore any linear transformation   can be defined\nby just describing the values of  .\n         determine "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "AT2.html#definition-19",
  "type": "Definition",
  "number": "3.2.7",
  "title": "",
  "body": "standard matrix \nFor example,\nlet   be the linear map determined by\nthe following values for   applied to the standard basis of  .\n         \nThen the standard matrix corresponding to   is\n \n         "
},
{
  "id": "activity-89",
  "level": "2",
  "url": "AT2.html#activity-89",
  "type": "Activity",
  "number": "3.2.8",
  "title": "",
  "body": "\n  Let   be the linear transformation given by\n   \nWrite the standard matrix   for  .\n         "
},
{
  "id": "activity-90",
  "level": "2",
  "url": "AT2.html#activity-90",
  "type": "Activity",
  "number": "3.2.9",
  "title": "",
  "body": "\n  Let   be the linear transformation given by\n \n         \nCompute  ,  , and  .\n     \nFind the standard matrix for  .\n     "
},
{
  "id": "fact-17",
  "level": "2",
  "url": "AT2.html#fact-17",
  "type": "Fact",
  "number": "3.2.10",
  "title": "",
  "body": "\n  Because every linear map   has a linear combination\n  of the variables in each component, and thus\n    yields exactly the coefficients of  ,\n  the standard matrix for   is simply an ordered list of\n  the coefficients of the  :\n   \n         "
},
{
  "id": "activity-91",
  "level": "2",
  "url": "AT2.html#activity-91",
  "type": "Activity",
  "number": "3.2.11",
  "title": "",
  "body": "\n  Let   be the linear transformation given by the standard matrix\n   \n         \nCompute  .\n     \nCompute  .\n     "
},
{
  "id": "activity-92",
  "level": "2",
  "url": "AT2.html#activity-92",
  "type": "Activity",
  "number": "3.2.12",
  "title": "",
  "body": "Compute the following linear transformations of vectors given their\n  standard matrices.   "
},
{
  "id": "figure-26",
  "level": "2",
  "url": "AT2.html#figure-26",
  "type": "Figure",
  "number": "26",
  "title": "",
  "body": "\n               \n             Video: Using the standard matrix to compute the image of a vector "
},
{
  "id": "p-663",
  "level": "2",
  "url": "AT2.html#p-663",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": " dot product  "
},
{
  "id": "exploration-31",
  "level": "2",
  "url": "AT2.html#exploration-31",
  "type": "Exploration",
  "number": "3.2.13",
  "title": "",
  "body": "\n    For each of the following properties, determine if it is held by the dot product. Either provide a proof it the property holds, or provide a counter-example if it does not.\n\n Distributive over addition (e.g., (  Associative?  Commutative? "
},
{
  "id": "exploration-32",
  "level": "2",
  "url": "AT2.html#exploration-32",
  "type": "Exploration",
  "number": "3.2.14",
  "title": "",
  "body": "\n         Given the properties you proved in the last exploration, could the dot product take the place of   as a vector space operation on  ? "
},
{
  "id": "exploration-33",
  "level": "2",
  "url": "AT2.html#exploration-33",
  "type": "Exploration",
  "number": "3.2.15",
  "title": "",
  "body": "Is the dot product a linear operator? That is, given vectors  , and  , is it true that\n  Prove or provide a counter-example.\n "
},
{
  "id": "exploration-34",
  "level": "2",
  "url": "AT2.html#exploration-34",
  "type": "Exploration",
  "number": "3.2.16",
  "title": "",
  "body": "Assume   and define the length of a vector by  . Prove that   if an only if   and   are perpendicular. You may use the fact (try and prove it!) that two vectors are perpendicular if and only if their dot product is zero.\n              "
},
{
  "id": "exploration-35",
  "level": "2",
  "url": "AT2.html#exploration-35",
  "type": "Exploration",
  "number": "3.2.17",
  "title": "",
  "body": "A  dilation  is given by by mapping a vector   to some scalar multiple of  . A  rotation  is given by  A  reflection  of   over a line   can be found by first finding a vector   along  , then  \nRepresent each of the following transformations with respect to the standard basis in  .\n Rotation through an angle  . Reflection over a line   passing through the origin. Dilation by some scalar  . \nProve that each transformation is linear, and that your matrix representations are correct.\n                 "
},
{
  "id": "AT3",
  "level": "1",
  "url": "AT3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Image and Kernel (AT3)",
  "body": "Image and Kernel (AT3) \n                 \nCompute a basis for the kernel and a basis for the image of a linear map, and verify that the rank-nullity theorem holds for a given linear map.\n \n             Class Activities \nLet   be given by\n \nWhich of these subspaces of   describes\nthe set of all vectors that transform into  ?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n kernel The kernel of a linear transformation \nLet   be given by\n \nWhich of these subspaces of   describes  ,\nthe set of all vectors that transform into  ?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n         \n     \n     \n     \n     \n     \n \nLet   be the linear transformation given by the\nstandard matrix\n \n         \nSet\n  to find a linear system of equations whose solution set is the kernel.\n     \nUse   to solve this homogeneous system of equations and find a basis\nfor the kernel of  .\n     \nLet   be the linear transformation given by \n \n         \nFind a basis for the kernel of  .\n         \nLet   be given by\n \nWhich of these subspaces of   describes the set of all vectors that are the result of using   to transform\n  vectors?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n         \n     \n \n     \n     \n     \n image \nIn the examples below, the left example's image is all of  , but the\nright example's image is a planar subspace of  .\n         The image of a linear transformation \nLet   be given by\n \nWhich of these subspaces of   describes  ,\nthe set of all vectors that are the result of using   to transform\n  vectors?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n \nLet   be the linear transformation given by the\nstandard matrix\n \n         \nSince for a vector  ,  ,\nwhich of the following best describes the set of vectors\n ?\n         \n     \n    The set of vectors spans   but is not linearly independent.\n     \n \n     \n    The set of vectors is a linearly independent subset of   but does not span  .\n     \n \n     \n    The set of vectors is linearly independent  and  spans  ; that is, the set of vectors is a basis for  .\n     \n \nLet   be the linear transformation given by the\nstandard matrix\n \n         \nSince the set\n \nspans  , we can obtain a basis for   by finding\n \nand only using the vectors corresponding to pivot columns:\n \n         \nLet    be a linear transformation with standard matrix  .\n     \n     \n    The kernel of   is the solution set of the homogeneous system given\nby the augmented matrix  .\nUse the coefficients of its free variables to get a basis for the kernel.\n     \n \n     \n    The image of   is the span of the columns of  . Remove\nthe vectors creating non-pivot columns in   to get a basis\nfor the image.\n     \n \nLet   be the linear transformation given by the\nstandard matrix\n \n         \nFind a basis for the kernel and a basis for the image of  .\n         \nLet   be a linear transformation with standard matrix  .\nWhich of the following is equal to the dimension of the kernel of  ?\n         \n     \n    The number of pivot columns\n     \n \n     \n    The number of non-pivot columns\n     \n \n     \n    The number of pivot rows\n     \n \n     \n    The number of non-pivot rows\n     \n \nLet   be a linear transformation with standard matrix  .\nWhich of the following is equal to the dimension of the image of  ?\n         \n     \n    The number of pivot columns\n     \n \n     \n    The number of non-pivot columns\n     \n \n     \n    The number of pivot rows\n     \n \n     \n    The number of non-pivot rows\n     \n rank-nullity theorem \nThe dimension of the domain of   equals  .\n         rank nullity \nLet   be the linear transformation given by the\nstandard matrix\n \nVerify that the rank-nullity theorem holds for  .\n         Videos \n               \n             Video: The kernel and image of a linear transformation \n               \n             Video: Finding a basis of the image of a linear transformation \n               \n             Video: Finding a basis of the kernel of a linear transformation \n               \n             Video: The rank-nullity theorem Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations \n                Assume   is a linear map. \nLet   be a set of vectors in  , and set  .\n If the set   is linearly independent, must the set   also be linearly independent?  If the set   is linearly independent, must the set   also be linearly independent?  If the set   spans  , must the set   also span  ?  If the set   spans  , must the set   also span  ?  In light of this, is the image of the basis of a vector space always a basis for the codomain?  \n                    Prove the Rank-Nullity Theorem. Use the steps below to help you.\n The theorem states that, given a linear map  , with   and   vector spaces, the rank of  , plus the nullity of  , equals the dimension of the domain  . Assume that the dimension of   is  . For simplicity, denote the rank of   by  , and the nullity by  . Recall that   is the dimension of the range space of  . State the precise definition. Recall that   is the dimension of the null space of  . State the precise definition. Begin with a basis for the null space, denoted  . Show how this can be extended to a basis   for  , with \n  In this portion, you should assume  , and construct additional vectors which are not linear combinations of vectors in  . Prove that you can always do this until you have   total linearly independent vectors. Show that   is a basis for the range space. Start by showing that it is linearly independent, and be sure you prove that each element of the range space can be written as a linear combination of  . Show that   spans the range space. State your conclusion.  Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-19",
  "level": "2",
  "url": "AT3.html#objectives-19",
  "type": "Learning Outcomes",
  "number": "3.3",
  "title": "",
  "body": "\n                 \nCompute a basis for the kernel and a basis for the image of a linear map, and verify that the rank-nullity theorem holds for a given linear map.\n \n             "
},
{
  "id": "activity-93",
  "level": "2",
  "url": "AT3.html#activity-93",
  "type": "Activity",
  "number": "3.3.1",
  "title": "",
  "body": "\nLet   be given by\n \nWhich of these subspaces of   describes\nthe set of all vectors that transform into  ?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "AT3.html#definition-20",
  "type": "Definition",
  "number": "3.3.2",
  "title": "",
  "body": "kernel The kernel of a linear transformation "
},
{
  "id": "activity-94",
  "level": "2",
  "url": "AT3.html#activity-94",
  "type": "Activity",
  "number": "3.3.3",
  "title": "",
  "body": "\nLet   be given by\n \nWhich of these subspaces of   describes  ,\nthe set of all vectors that transform into  ?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n         \n     \n     \n     \n     \n     \n "
},
{
  "id": "activity-95",
  "level": "2",
  "url": "AT3.html#activity-95",
  "type": "Activity",
  "number": "3.3.4",
  "title": "",
  "body": "\nLet   be the linear transformation given by the\nstandard matrix\n \n         \nSet\n  to find a linear system of equations whose solution set is the kernel.\n     \nUse   to solve this homogeneous system of equations and find a basis\nfor the kernel of  .\n     "
},
{
  "id": "activity-96",
  "level": "2",
  "url": "AT3.html#activity-96",
  "type": "Activity",
  "number": "3.3.5",
  "title": "",
  "body": "\nLet   be the linear transformation given by \n \n         \nFind a basis for the kernel of  .\n         "
},
{
  "id": "activity-97",
  "level": "2",
  "url": "AT3.html#activity-97",
  "type": "Activity",
  "number": "3.3.6",
  "title": "",
  "body": "\nLet   be given by\n \nWhich of these subspaces of   describes the set of all vectors that are the result of using   to transform\n  vectors?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n         \n     \n \n     \n     \n     \n "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "AT3.html#definition-21",
  "type": "Definition",
  "number": "3.3.7",
  "title": "",
  "body": "image \nIn the examples below, the left example's image is all of  , but the\nright example's image is a planar subspace of  .\n         The image of a linear transformation "
},
{
  "id": "activity-98",
  "level": "2",
  "url": "AT3.html#activity-98",
  "type": "Activity",
  "number": "3.3.8",
  "title": "",
  "body": "\nLet   be given by\n \nWhich of these subspaces of   describes  ,\nthe set of all vectors that are the result of using   to transform\n  vectors?\n         \n     \n     \n     \n \n     \n     \n     \n \n     \n     \n     \n "
},
{
  "id": "activity-99",
  "level": "2",
  "url": "AT3.html#activity-99",
  "type": "Activity",
  "number": "3.3.9",
  "title": "",
  "body": "\nLet   be the linear transformation given by the\nstandard matrix\n \n         \nSince for a vector  ,  ,\nwhich of the following best describes the set of vectors\n ?\n         \n     \n    The set of vectors spans   but is not linearly independent.\n     \n \n     \n    The set of vectors is a linearly independent subset of   but does not span  .\n     \n \n     \n    The set of vectors is linearly independent  and  spans  ; that is, the set of vectors is a basis for  .\n     \n "
},
{
  "id": "observation-18",
  "level": "2",
  "url": "AT3.html#observation-18",
  "type": "Observation",
  "number": "3.3.10",
  "title": "",
  "body": "\nLet   be the linear transformation given by the\nstandard matrix\n \n         \nSince the set\n \nspans  , we can obtain a basis for   by finding\n \nand only using the vectors corresponding to pivot columns:\n \n         "
},
{
  "id": "fact-18",
  "level": "2",
  "url": "AT3.html#fact-18",
  "type": "Fact",
  "number": "3.3.11",
  "title": "",
  "body": "\nLet    be a linear transformation with standard matrix  .\n     \n     \n    The kernel of   is the solution set of the homogeneous system given\nby the augmented matrix  .\nUse the coefficients of its free variables to get a basis for the kernel.\n     \n \n     \n    The image of   is the span of the columns of  . Remove\nthe vectors creating non-pivot columns in   to get a basis\nfor the image.\n     \n "
},
{
  "id": "activity-100",
  "level": "2",
  "url": "AT3.html#activity-100",
  "type": "Activity",
  "number": "3.3.12",
  "title": "",
  "body": "\nLet   be the linear transformation given by the\nstandard matrix\n \n         \nFind a basis for the kernel and a basis for the image of  .\n         "
},
{
  "id": "activity-101",
  "level": "2",
  "url": "AT3.html#activity-101",
  "type": "Activity",
  "number": "3.3.13",
  "title": "",
  "body": "\nLet   be a linear transformation with standard matrix  .\nWhich of the following is equal to the dimension of the kernel of  ?\n         \n     \n    The number of pivot columns\n     \n \n     \n    The number of non-pivot columns\n     \n \n     \n    The number of pivot rows\n     \n \n     \n    The number of non-pivot rows\n     \n "
},
{
  "id": "activity-102",
  "level": "2",
  "url": "AT3.html#activity-102",
  "type": "Activity",
  "number": "3.3.14",
  "title": "",
  "body": "\nLet   be a linear transformation with standard matrix  .\nWhich of the following is equal to the dimension of the image of  ?\n         \n     \n    The number of pivot columns\n     \n \n     \n    The number of non-pivot columns\n     \n \n     \n    The number of pivot rows\n     \n \n     \n    The number of non-pivot rows\n     \n "
},
{
  "id": "observation-19",
  "level": "2",
  "url": "AT3.html#observation-19",
  "type": "Observation",
  "number": "3.3.15",
  "title": "",
  "body": "rank-nullity theorem \nThe dimension of the domain of   equals  .\n         rank nullity "
},
{
  "id": "activity-103",
  "level": "2",
  "url": "AT3.html#activity-103",
  "type": "Activity",
  "number": "3.3.16",
  "title": "",
  "body": "\nLet   be the linear transformation given by the\nstandard matrix\n \nVerify that the rank-nullity theorem holds for  .\n         "
},
{
  "id": "figure-29",
  "level": "2",
  "url": "AT3.html#figure-29",
  "type": "Figure",
  "number": "29",
  "title": "",
  "body": "\n               \n             Video: The kernel and image of a linear transformation "
},
{
  "id": "figure-30",
  "level": "2",
  "url": "AT3.html#figure-30",
  "type": "Figure",
  "number": "30",
  "title": "",
  "body": "\n               \n             Video: Finding a basis of the image of a linear transformation "
},
{
  "id": "figure-31",
  "level": "2",
  "url": "AT3.html#figure-31",
  "type": "Figure",
  "number": "31",
  "title": "",
  "body": "\n               \n             Video: Finding a basis of the kernel of a linear transformation "
},
{
  "id": "figure-32",
  "level": "2",
  "url": "AT3.html#figure-32",
  "type": "Figure",
  "number": "32",
  "title": "",
  "body": "\n               \n             Video: The rank-nullity theorem "
},
{
  "id": "exploration-36",
  "level": "2",
  "url": "AT3.html#exploration-36",
  "type": "Exploration",
  "number": "3.3.17",
  "title": "",
  "body": "\n                Assume   is a linear map. \nLet   be a set of vectors in  , and set  .\n If the set   is linearly independent, must the set   also be linearly independent?  If the set   is linearly independent, must the set   also be linearly independent?  If the set   spans  , must the set   also span  ?  If the set   spans  , must the set   also span  ?  In light of this, is the image of the basis of a vector space always a basis for the codomain?  "
},
{
  "id": "exploration-37",
  "level": "2",
  "url": "AT3.html#exploration-37",
  "type": "Exploration",
  "number": "3.3.18",
  "title": "",
  "body": "\n                    Prove the Rank-Nullity Theorem. Use the steps below to help you.\n The theorem states that, given a linear map  , with   and   vector spaces, the rank of  , plus the nullity of  , equals the dimension of the domain  . Assume that the dimension of   is  . For simplicity, denote the rank of   by  , and the nullity by  . Recall that   is the dimension of the range space of  . State the precise definition. Recall that   is the dimension of the null space of  . State the precise definition. Begin with a basis for the null space, denoted  . Show how this can be extended to a basis   for  , with \n  In this portion, you should assume  , and construct additional vectors which are not linear combinations of vectors in  . Prove that you can always do this until you have   total linearly independent vectors. Show that   is a basis for the range space. Start by showing that it is linearly independent, and be sure you prove that each element of the range space can be written as a linear combination of  . Show that   spans the range space. State your conclusion.  "
},
{
  "id": "AT4",
  "level": "1",
  "url": "AT4.html",
  "type": "Section",
  "number": "3.4",
  "title": "Injective and Surjective Linear Maps (AT4)",
  "body": "Injective and Surjective Linear Maps (AT4) \n                 \nDetermine if a given linear map is injective and\/or surjective.\n \n             Class Activities injective one-to-one An injective transformation and a non-injective transformation \nLet   be given by\n \nIs   injective?\n         \n     \n    Yes, because   whenever  .\n     \n \n     \n    Yes, because   whenever  .\n     \n \n     \n    No, because \n   .\n     \n \n     \n    No, because \n   .\n     \n \nLet   be given by\n \nIs   injective?\n         \n     \n    Yes, because   whenever  .\n     \n \n     \n    Yes, because   whenever  .\n     \n \n     \n    No, because \n   .\n     \n \n     \n    No, because \n   .\n     \n surjective onto A surjective transformation and a non-surjective transformation \nLet   be given by\n \nIs   surjective?\n         \n     \n    Yes, because for every  ,\nthere exists   such that\n .\n     \n \n     \n    No, because \n   \ncan never equal\n   .\n     \n \n     \n    No, because \n   \ncan never equal\n   .\n     \n \nLet   be given by\n \nIs   surjective?\n         \n     \n    Yes, because for every  ,\nthere exists   such that\n .\n     \n \n     \n    Yes, because for every  ,\nthere exists   such that\n .\n     \n \n     \n    No, because \n   \ncan never equal\n   .\n     \n \nAs we will see, it's no coincidence that the   of the\ninjective map's standard matrix\n \nhas all pivot columns. Similarly, the   of the surjective map's\nstandard matrix\n \nhas a pivot in each row.\n         \nLet   be a linear transformation where\n  contains multiple vectors. What can you conclude?\n         \n     \n      is injective\n     \n \n     \n      is not injective\n     \n \n     \n      is surjective\n     \n \n     \n      is not surjective\n     \n trivial A linear transformation with trivial kernel, which is therefore injective \nLet   be a linear transformation where\n  is spanned by four vectors.\nWhat can you conclude?\n         \n     \n      is injective\n     \n \n     \n      is not injective\n     \n \n     \n      is surjective\n     \n \n     \n      is not surjective\n     \n \nA linear transformation   is surjective  if and only if \n . Put another way, a surjective linear transformation may be\nrecognized by its identical codomain and image.\n         A linear transformation with identical codomain and image, which is therefore surjective; and a linear transformation with an image smaller than the codomain  , which is therefore not surjective. \nLet   be a linear map with standard matrix  .\n            Sort the following claims into two groups of  equivalent  statements:\none group that means   is  injective , and one group that means\n  is  surjective .\n          The kernel of   is trivial, i.e.  .\n  The columns of   span  .\n  The columns of   are linearly independent.\n  Every column of   has a pivot.\n  Every row of   has a pivot.\n  The image of   equals its codomain, i.e.  .\n  The system of linear equations given by the augmented matrix   has a solution for all  .\n  The system of linear equations given by the augmented matrix   has exactly one solution.\n \n  The easiest way to determine if the linear map with standard matrix  \n  is injective is to see if   has a pivot in each column.\n         \n  The easiest way to determine if the linear map with standard matrix  \n  is surjective is to see if   has a pivot in each row.\n         \n  What can you conclude about the linear map \n    with standard matrix \n   ?\n          Its standard matrix has more columns than rows, so   is not\n    injective.\n      Its standard matrix has more columns than rows, so   is\n    injective.\n      Its standard matrix has more rows than columns, so   is not\n    surjective.\n      Its standard matrix has more rows than columns, so   is\n    surjective.\n     \n  What can you conclude about the linear map   with standard matrix \n   ?\n          Its standard matrix has more columns than rows, so   is not\n    injective.\n      Its standard matrix has more columns than rows, so   is\n    injective.\n      Its standard matrix has more rows than columns, so   is not\n    surjective.\n      Its standard matrix has more rows than columns, so   is\n    surjective.\n     The following are true for any linear map  :  If  , then   is not injective.\n      If  , then   is not surjective.\n     \n  Basically, a linear transformation cannot reduce dimension without collapsing\n  vectors into each other, and a linear transformation cannot\n  increase dimension from its domain to its image.\n     A linear transformation whose domain has a larger dimension than its codomain, and is therefore not injective; and a linear transformation whose domain has a smaller dimension than its codomain, and is therefore not surjective. \n  But dimension arguments  cannot  be used to prove a map  is \n  injective or surjective.\n     bijective \nHow many pivot rows must   have?\n     \n How many pivot columns must   have?\n     \nWhat is  ?\n     \nLet   be a bijective linear map with\nstandard matrix  . Label each of the following as true or false.\n            is the identity matrix.\n  The columns of   form a basis for  \n  The system of linear equations given by the augmented matrix   has exactly one solution\nfor each  .\n \n  The easiest way to show that the linear map with standard matrix  \n  is bijective is to show that   is the identity matrix.\n     \nLet   be given by the standard matrix\n \nWhich of the following must be true?\n            is neither injective nor surjective\n    is injective but not surjective\n    is surjective but not injective\n    is bijective.\n \nLet   be given by\n \nWhich of the following must be true?\n            is neither injective nor surjective\n    is injective but not surjective\n    is surjective but not injective\n    is bijective.\n \nLet   be given by\n \nWhich of the following must be true?\n            is neither injective nor surjective\n    is injective but not surjective\n    is surjective but not injective\n    is bijective.\n \nLet   be given by\n \nWhich of the following must be true?\n            is neither injective nor surjective\n    is injective but not surjective\n    is surjective but not injective\n    is bijective.\n Videos \n               \n             Video: The kernel and image of a linear transformation \n               \n             Video: Finding a basis of the image of a linear transformation Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations \n                    Suppose that   is a linear transformation between two vector spaces   and  . State carefully what conditions   must satisfy. Let   and   be the zero vectors in   and   respectively.\n                     Prove that   is one-to-one if and only if  , and that   is the unique element of   which is mapped to  . Remember that this needs to be done in both directions. First prove the if and only if statement, and then show the uniqueness. Do not use subtraction in your proof. The only vector space operation we have is addition, and a structure preserving function only preserves addition. If you are writing  , what you really mean is that  , where   is the additive inverse of  .  dual Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-20",
  "level": "2",
  "url": "AT4.html#objectives-20",
  "type": "Learning Outcomes",
  "number": "3.4",
  "title": "",
  "body": "\n                 \nDetermine if a given linear map is injective and\/or surjective.\n \n             "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "AT4.html#definition-22",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "injective one-to-one An injective transformation and a non-injective transformation "
},
{
  "id": "activity-104",
  "level": "2",
  "url": "AT4.html#activity-104",
  "type": "Activity",
  "number": "3.4.2",
  "title": "",
  "body": "\nLet   be given by\n \nIs   injective?\n         \n     \n    Yes, because   whenever  .\n     \n \n     \n    Yes, because   whenever  .\n     \n \n     \n    No, because \n   .\n     \n \n     \n    No, because \n   .\n     \n "
},
{
  "id": "activity-105",
  "level": "2",
  "url": "AT4.html#activity-105",
  "type": "Activity",
  "number": "3.4.3",
  "title": "",
  "body": "\nLet   be given by\n \nIs   injective?\n         \n     \n    Yes, because   whenever  .\n     \n \n     \n    Yes, because   whenever  .\n     \n \n     \n    No, because \n   .\n     \n \n     \n    No, because \n   .\n     \n "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "AT4.html#definition-23",
  "type": "Definition",
  "number": "3.4.4",
  "title": "",
  "body": "surjective onto A surjective transformation and a non-surjective transformation "
},
{
  "id": "activity-106",
  "level": "2",
  "url": "AT4.html#activity-106",
  "type": "Activity",
  "number": "3.4.5",
  "title": "",
  "body": "\nLet   be given by\n \nIs   surjective?\n         \n     \n    Yes, because for every  ,\nthere exists   such that\n .\n     \n \n     \n    No, because \n   \ncan never equal\n   .\n     \n \n     \n    No, because \n   \ncan never equal\n   .\n     \n "
},
{
  "id": "activity-107",
  "level": "2",
  "url": "AT4.html#activity-107",
  "type": "Activity",
  "number": "3.4.6",
  "title": "",
  "body": "\nLet   be given by\n \nIs   surjective?\n         \n     \n    Yes, because for every  ,\nthere exists   such that\n .\n     \n \n     \n    Yes, because for every  ,\nthere exists   such that\n .\n     \n \n     \n    No, because \n   \ncan never equal\n   .\n     \n "
},
{
  "id": "observation-20",
  "level": "2",
  "url": "AT4.html#observation-20",
  "type": "Observation",
  "number": "3.4.7",
  "title": "",
  "body": "\nAs we will see, it's no coincidence that the   of the\ninjective map's standard matrix\n \nhas all pivot columns. Similarly, the   of the surjective map's\nstandard matrix\n \nhas a pivot in each row.\n         "
},
{
  "id": "activity-108",
  "level": "2",
  "url": "AT4.html#activity-108",
  "type": "Activity",
  "number": "3.4.8",
  "title": "",
  "body": "\nLet   be a linear transformation where\n  contains multiple vectors. What can you conclude?\n         \n     \n      is injective\n     \n \n     \n      is not injective\n     \n \n     \n      is surjective\n     \n \n     \n      is not surjective\n     \n "
},
{
  "id": "fact-19",
  "level": "2",
  "url": "AT4.html#fact-19",
  "type": "Fact",
  "number": "3.4.9",
  "title": "",
  "body": "trivial A linear transformation with trivial kernel, which is therefore injective "
},
{
  "id": "activity-109",
  "level": "2",
  "url": "AT4.html#activity-109",
  "type": "Activity",
  "number": "3.4.10",
  "title": "",
  "body": "\nLet   be a linear transformation where\n  is spanned by four vectors.\nWhat can you conclude?\n         \n     \n      is injective\n     \n \n     \n      is not injective\n     \n \n     \n      is surjective\n     \n \n     \n      is not surjective\n     \n "
},
{
  "id": "fact-20",
  "level": "2",
  "url": "AT4.html#fact-20",
  "type": "Fact",
  "number": "3.4.11",
  "title": "",
  "body": "\nA linear transformation   is surjective  if and only if \n . Put another way, a surjective linear transformation may be\nrecognized by its identical codomain and image.\n         A linear transformation with identical codomain and image, which is therefore surjective; and a linear transformation with an image smaller than the codomain  , which is therefore not surjective. "
},
{
  "id": "activity-110",
  "level": "2",
  "url": "AT4.html#activity-110",
  "type": "Activity",
  "number": "3.4.12",
  "title": "",
  "body": "\nLet   be a linear map with standard matrix  .\n            Sort the following claims into two groups of  equivalent  statements:\none group that means   is  injective , and one group that means\n  is  surjective .\n          The kernel of   is trivial, i.e.  .\n  The columns of   span  .\n  The columns of   are linearly independent.\n  Every column of   has a pivot.\n  Every row of   has a pivot.\n  The image of   equals its codomain, i.e.  .\n  The system of linear equations given by the augmented matrix   has a solution for all  .\n  The system of linear equations given by the augmented matrix   has exactly one solution.\n "
},
{
  "id": "observation-21",
  "level": "2",
  "url": "AT4.html#observation-21",
  "type": "Observation",
  "number": "3.4.13",
  "title": "",
  "body": "\n  The easiest way to determine if the linear map with standard matrix  \n  is injective is to see if   has a pivot in each column.\n         \n  The easiest way to determine if the linear map with standard matrix  \n  is surjective is to see if   has a pivot in each row.\n         "
},
{
  "id": "activity-111",
  "level": "2",
  "url": "AT4.html#activity-111",
  "type": "Activity",
  "number": "3.4.14",
  "title": "",
  "body": "\n  What can you conclude about the linear map \n    with standard matrix \n   ?\n          Its standard matrix has more columns than rows, so   is not\n    injective.\n      Its standard matrix has more columns than rows, so   is\n    injective.\n      Its standard matrix has more rows than columns, so   is not\n    surjective.\n      Its standard matrix has more rows than columns, so   is\n    surjective.\n     "
},
{
  "id": "activity-112",
  "level": "2",
  "url": "AT4.html#activity-112",
  "type": "Activity",
  "number": "3.4.15",
  "title": "",
  "body": "\n  What can you conclude about the linear map   with standard matrix \n   ?\n          Its standard matrix has more columns than rows, so   is not\n    injective.\n      Its standard matrix has more columns than rows, so   is\n    injective.\n      Its standard matrix has more rows than columns, so   is not\n    surjective.\n      Its standard matrix has more rows than columns, so   is\n    surjective.\n     "
},
{
  "id": "fact-21",
  "level": "2",
  "url": "AT4.html#fact-21",
  "type": "Fact",
  "number": "3.4.16",
  "title": "",
  "body": "The following are true for any linear map  :  If  , then   is not injective.\n      If  , then   is not surjective.\n     \n  Basically, a linear transformation cannot reduce dimension without collapsing\n  vectors into each other, and a linear transformation cannot\n  increase dimension from its domain to its image.\n     A linear transformation whose domain has a larger dimension than its codomain, and is therefore not injective; and a linear transformation whose domain has a smaller dimension than its codomain, and is therefore not surjective. \n  But dimension arguments  cannot  be used to prove a map  is \n  injective or surjective.\n     "
},
{
  "id": "activity-113",
  "level": "2",
  "url": "AT4.html#activity-113",
  "type": "Activity",
  "number": "3.4.17",
  "title": "",
  "body": "bijective \nHow many pivot rows must   have?\n     \n How many pivot columns must   have?\n     \nWhat is  ?\n     "
},
{
  "id": "activity-114",
  "level": "2",
  "url": "AT4.html#activity-114",
  "type": "Activity",
  "number": "3.4.18",
  "title": "",
  "body": "\nLet   be a bijective linear map with\nstandard matrix  . Label each of the following as true or false.\n            is the identity matrix.\n  The columns of   form a basis for  \n  The system of linear equations given by the augmented matrix   has exactly one solution\nfor each  .\n "
},
{
  "id": "observation-22",
  "level": "2",
  "url": "AT4.html#observation-22",
  "type": "Observation",
  "number": "3.4.19",
  "title": "",
  "body": "\n  The easiest way to show that the linear map with standard matrix  \n  is bijective is to show that   is the identity matrix.\n     "
},
{
  "id": "activity-115",
  "level": "2",
  "url": "AT4.html#activity-115",
  "type": "Activity",
  "number": "3.4.20",
  "title": "",
  "body": "\nLet   be given by the standard matrix\n \nWhich of the following must be true?\n            is neither injective nor surjective\n    is injective but not surjective\n    is surjective but not injective\n    is bijective.\n "
},
{
  "id": "activity-116",
  "level": "2",
  "url": "AT4.html#activity-116",
  "type": "Activity",
  "number": "3.4.21",
  "title": "",
  "body": "\nLet   be given by\n \nWhich of the following must be true?\n            is neither injective nor surjective\n    is injective but not surjective\n    is surjective but not injective\n    is bijective.\n "
},
{
  "id": "activity-117",
  "level": "2",
  "url": "AT4.html#activity-117",
  "type": "Activity",
  "number": "3.4.22",
  "title": "",
  "body": "\nLet   be given by\n \nWhich of the following must be true?\n            is neither injective nor surjective\n    is injective but not surjective\n    is surjective but not injective\n    is bijective.\n "
},
{
  "id": "activity-118",
  "level": "2",
  "url": "AT4.html#activity-118",
  "type": "Activity",
  "number": "3.4.23",
  "title": "",
  "body": "\nLet   be given by\n \nWhich of the following must be true?\n            is neither injective nor surjective\n    is injective but not surjective\n    is surjective but not injective\n    is bijective.\n "
},
{
  "id": "figure-38",
  "level": "2",
  "url": "AT4.html#figure-38",
  "type": "Figure",
  "number": "38",
  "title": "",
  "body": "\n               \n             Video: The kernel and image of a linear transformation "
},
{
  "id": "figure-39",
  "level": "2",
  "url": "AT4.html#figure-39",
  "type": "Figure",
  "number": "39",
  "title": "",
  "body": "\n               \n             Video: Finding a basis of the image of a linear transformation "
},
{
  "id": "exploration-38",
  "level": "2",
  "url": "AT4.html#exploration-38",
  "type": "Exploration",
  "number": "3.4.24",
  "title": "",
  "body": "\n                    Suppose that   is a linear transformation between two vector spaces   and  . State carefully what conditions   must satisfy. Let   and   be the zero vectors in   and   respectively.\n                     Prove that   is one-to-one if and only if  , and that   is the unique element of   which is mapped to  . Remember that this needs to be done in both directions. First prove the if and only if statement, and then show the uniqueness. Do not use subtraction in your proof. The only vector space operation we have is addition, and a structure preserving function only preserves addition. If you are writing  , what you really mean is that  , where   is the additive inverse of  .  "
},
{
  "id": "exploration-39",
  "level": "2",
  "url": "AT4.html#exploration-39",
  "type": "Exploration",
  "number": "3.4.25",
  "title": "",
  "body": "dual "
},
{
  "id": "MX1",
  "level": "1",
  "url": "MX1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Matrices and Multiplication (MX1)",
  "body": "Matrices and Multiplication (MX1) \n                 \nMultiply matrices.\n \n             Class Activities \nIf   and   are linear maps,\nthen the composition map   is a linear map from  .\n         The composition of two linear maps. \nRecall that for a vector,  , the composition is computed as  .\n         \nLet   be given by the   standard matrix\n  and\n  be given by the   standard matrix\n .\n         \nWhat are the domain and codomain of the composition map  ?\n          The domain is   and the codomain is  \n  The domain is   and the codomain is  \n  The domain is   and the codomain is  \n  The domain is   and the codomain is  \n \nLet   be given by the  \nstandard matrix  \nand   be given by the   standard matrix\n .\n     \nWhat size will the standard matrix of   be?\n(Rows   Columns)\n           \n   \n   \n   \n \nLet   be given by the   standard matrix\n \nand   be given by the   standard matrix\n .\n         \nCompute\n \n     \nCompute\n .\n     \nCompute\n .\n     \nWrite the   standard matrix of  .\n     product \nFor the previous activity, \n  was a map  , and \n  was a map  , so   gave a map   with a\n  standard matrix:\n \n \n         \nLet   be given by the matrix \n \nand   be given by the matrix\n .\n         \nWrite the dimensions (rows   columns)\nfor  ,  ,  , and  .\n     \nFind the standard matrix   of  .\n     \nFind the standard matrix   of  .\n     \nConsider the following three matrices.\n         \nFind the domain and codomain of each of the three linear maps corresponding to  ,  , and  .\n     \nOnly one of the matrix products\n  can actually be computed.\nCompute it.\n     \nLet  , \nand let  .  \n         \n  Compute the product   by hand.\n     \n  Check your work using technology. Using Octave:\n     \nB = [3 -4 0 ; 2 0 -1 ; 0 -3 3]\nA = [2 7 -1 ; 0 3 2  ; 1 1 -1]\nB*A\n     Of the following three matrices, only two may be multiplied.\n       \n      Explain which two can be multiplied and why. Then show how to find their product. Videos \n               \n             Video: Multiplying matrices Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations \n         Construct 3 matrices,  , such that\n          .\n             \n                    Construct 3 examples of matrix multiplication, with all matrix dimensions at least 2.\n Where   and   are not square, but   is square. Where  . Where  . \nUse the included map in this problem.\n                     Adjacency map, showing roads between 5 cities A map with 5 dots. A is connected to B, B is connected to C, C is connected to D and E, and D and E are connected to each other An  adjacency matrix  for this map is a matrix that has the number of roads from city   to city   in the   entry of the matrix. A road is a path of length exactly 1. All  entries are 0. Write the adjacency matrix for this map, with the cities in alphabetical order. What does the square of this matrix tell you about the map? The cube? The  -th power? Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-22",
  "level": "2",
  "url": "MX1.html#objectives-22",
  "type": "Learning Outcomes",
  "number": "4.1",
  "title": "",
  "body": "\n                 \nMultiply matrices.\n \n             "
},
{
  "id": "observation-23",
  "level": "2",
  "url": "MX1.html#observation-23",
  "type": "Observation",
  "number": "4.1.1",
  "title": "",
  "body": "\nIf   and   are linear maps,\nthen the composition map   is a linear map from  .\n         The composition of two linear maps. \nRecall that for a vector,  , the composition is computed as  .\n         "
},
{
  "id": "activity-119",
  "level": "2",
  "url": "MX1.html#activity-119",
  "type": "Activity",
  "number": "4.1.2",
  "title": "",
  "body": "\nLet   be given by the   standard matrix\n  and\n  be given by the   standard matrix\n .\n         \nWhat are the domain and codomain of the composition map  ?\n          The domain is   and the codomain is  \n  The domain is   and the codomain is  \n  The domain is   and the codomain is  \n  The domain is   and the codomain is  \n "
},
{
  "id": "activity-120",
  "level": "2",
  "url": "MX1.html#activity-120",
  "type": "Activity",
  "number": "4.1.3",
  "title": "",
  "body": "\nLet   be given by the  \nstandard matrix  \nand   be given by the   standard matrix\n .\n     \nWhat size will the standard matrix of   be?\n(Rows   Columns)\n           \n   \n   \n   \n "
},
{
  "id": "activity-121",
  "level": "2",
  "url": "MX1.html#activity-121",
  "type": "Activity",
  "number": "4.1.4",
  "title": "",
  "body": "\nLet   be given by the   standard matrix\n \nand   be given by the   standard matrix\n .\n         \nCompute\n \n     \nCompute\n .\n     \nCompute\n .\n     \nWrite the   standard matrix of  .\n     "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "MX1.html#definition-24",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": "product \nFor the previous activity, \n  was a map  , and \n  was a map  , so   gave a map   with a\n  standard matrix:\n \n \n         "
},
{
  "id": "activity-122",
  "level": "2",
  "url": "MX1.html#activity-122",
  "type": "Activity",
  "number": "4.1.6",
  "title": "",
  "body": "\nLet   be given by the matrix \n \nand   be given by the matrix\n .\n         \nWrite the dimensions (rows   columns)\nfor  ,  ,  , and  .\n     \nFind the standard matrix   of  .\n     \nFind the standard matrix   of  .\n     "
},
{
  "id": "activity-123",
  "level": "2",
  "url": "MX1.html#activity-123",
  "type": "Activity",
  "number": "4.1.7",
  "title": "",
  "body": "\nConsider the following three matrices.\n         \nFind the domain and codomain of each of the three linear maps corresponding to  ,  , and  .\n     \nOnly one of the matrix products\n  can actually be computed.\nCompute it.\n     "
},
{
  "id": "activity-124",
  "level": "2",
  "url": "MX1.html#activity-124",
  "type": "Activity",
  "number": "4.1.8",
  "title": "",
  "body": "\nLet  , \nand let  .  \n         \n  Compute the product   by hand.\n     \n  Check your work using technology. Using Octave:\n     \nB = [3 -4 0 ; 2 0 -1 ; 0 -3 3]\nA = [2 7 -1 ; 0 3 2  ; 1 1 -1]\nB*A\n     "
},
{
  "id": "activity-125",
  "level": "2",
  "url": "MX1.html#activity-125",
  "type": "Activity",
  "number": "4.1.9",
  "title": "",
  "body": "Of the following three matrices, only two may be multiplied.\n       \n      Explain which two can be multiplied and why. Then show how to find their product. "
},
{
  "id": "figure-41",
  "level": "2",
  "url": "MX1.html#figure-41",
  "type": "Figure",
  "number": "41",
  "title": "",
  "body": "\n               \n             Video: Multiplying matrices "
},
{
  "id": "exploration-40",
  "level": "2",
  "url": "MX1.html#exploration-40",
  "type": "Exploration",
  "number": "4.1.10",
  "title": "",
  "body": "\n         Construct 3 matrices,  , such that\n          .\n             "
},
{
  "id": "exploration-41",
  "level": "2",
  "url": "MX1.html#exploration-41",
  "type": "Exploration",
  "number": "4.1.11",
  "title": "",
  "body": "\n                    Construct 3 examples of matrix multiplication, with all matrix dimensions at least 2.\n Where   and   are not square, but   is square. Where  . Where  . "
},
{
  "id": "exploration-42",
  "level": "2",
  "url": "MX1.html#exploration-42",
  "type": "Exploration",
  "number": "4.1.12",
  "title": "",
  "body": "\nUse the included map in this problem.\n                     Adjacency map, showing roads between 5 cities A map with 5 dots. A is connected to B, B is connected to C, C is connected to D and E, and D and E are connected to each other An  adjacency matrix  for this map is a matrix that has the number of roads from city   to city   in the   entry of the matrix. A road is a path of length exactly 1. All  entries are 0. Write the adjacency matrix for this map, with the cities in alphabetical order. What does the square of this matrix tell you about the map? The cube? The  -th power? "
},
{
  "id": "MX2",
  "level": "1",
  "url": "MX2.html",
  "type": "Section",
  "number": "4.2",
  "title": "Row Operations as Matrix Multiplication (MX2)",
  "body": "Row Operations as Matrix Multiplication (MX2) \n                 \nExpress row operations through matrix multiplication.\n \n             Class Activities \nLet  .\nFind a   matrix   such that  , that is,\n \nCheck your guess using technology.\n     \nThe identity matrix   (or just   when   is obvious from context) is\nthe   matrix\n \nIt has a   on each diagonal element and a   in every other position.\n         \n  For any square matrix  ,  :\n   \n         \nTweaking the identity matrix slightly allows us to write row operations\nin terms of matrix multiplication.\n         \nCreate a matrix that doubles the third row of  :\n \n     \n  Create a matrix that swaps the second and third rows of  :\n   \n     \nCreate a matrix that adds   times the third row of   to the first row:\n \n     \nIf   is the result of applying a row operation to  , then\n  is the result of applying the same row operation to  .\n         \n     \n    Scaling a row:  \n     \n \n     \n    Swapping rows:  \n     \n \n     \n    Adding a row multiple to another row:  \n     \n \nSuch matrices can be chained together to emulate multiple row operations.\nIn particular,\n \nfor some sequence of matrices  .\n         \nConsider the two row operations \n  and  \napplied as follows to show  :\n         \nExpress these row operations as matrix multiplication\nby expressing   as the product of two matrices and  :\n \nCheck your work using technology.\n         Videos \n               \n             Video: Row operations as matrix multiplication Slideshow Slideshow of activities available at  . Exercises available at  . Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-23",
  "level": "2",
  "url": "MX2.html#objectives-23",
  "type": "Learning Outcomes",
  "number": "4.2",
  "title": "",
  "body": "\n                 \nExpress row operations through matrix multiplication.\n \n             "
},
{
  "id": "activity-126",
  "level": "2",
  "url": "MX2.html#activity-126",
  "type": "Activity",
  "number": "4.2.1",
  "title": "",
  "body": "\nLet  .\nFind a   matrix   such that  , that is,\n \nCheck your guess using technology.\n     "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "MX2.html#definition-25",
  "type": "Definition",
  "number": "4.2.2",
  "title": "",
  "body": "\nThe identity matrix   (or just   when   is obvious from context) is\nthe   matrix\n \nIt has a   on each diagonal element and a   in every other position.\n         "
},
{
  "id": "fact-22",
  "level": "2",
  "url": "MX2.html#fact-22",
  "type": "Fact",
  "number": "4.2.3",
  "title": "",
  "body": "\n  For any square matrix  ,  :\n   \n         "
},
{
  "id": "activity-127",
  "level": "2",
  "url": "MX2.html#activity-127",
  "type": "Activity",
  "number": "4.2.4",
  "title": "",
  "body": "\nTweaking the identity matrix slightly allows us to write row operations\nin terms of matrix multiplication.\n         \nCreate a matrix that doubles the third row of  :\n \n     \n  Create a matrix that swaps the second and third rows of  :\n   \n     \nCreate a matrix that adds   times the third row of   to the first row:\n \n     "
},
{
  "id": "fact-23",
  "level": "2",
  "url": "MX2.html#fact-23",
  "type": "Fact",
  "number": "4.2.5",
  "title": "",
  "body": "\nIf   is the result of applying a row operation to  , then\n  is the result of applying the same row operation to  .\n         \n     \n    Scaling a row:  \n     \n \n     \n    Swapping rows:  \n     \n \n     \n    Adding a row multiple to another row:  \n     \n \nSuch matrices can be chained together to emulate multiple row operations.\nIn particular,\n \nfor some sequence of matrices  .\n         "
},
{
  "id": "activity-128",
  "level": "2",
  "url": "MX2.html#activity-128",
  "type": "Activity",
  "number": "4.2.6",
  "title": "",
  "body": "\nConsider the two row operations \n  and  \napplied as follows to show  :\n         \nExpress these row operations as matrix multiplication\nby expressing   as the product of two matrices and  :\n \nCheck your work using technology.\n         "
},
{
  "id": "figure-43",
  "level": "2",
  "url": "MX2.html#figure-43",
  "type": "Figure",
  "number": "43",
  "title": "",
  "body": "\n               \n             Video: Row operations as matrix multiplication "
},
{
  "id": "MX3",
  "level": "1",
  "url": "MX3.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Inverse of a Matrix (MX3)",
  "body": "The Inverse of a Matrix (MX3) \n                 \nDetermine if a matrix is invertible, and if so, compute its inverse.\n \n             Class Activities \nLet   be a linear map with standard matrix  .\nSort the following items into three groups of statements: a group that means\n  is  injective , a group that means   is  surjective ,\nand a group that means   is  bijective .\n            has a solution for all  \n    has a unique solution for all  \n    has a unique solution.\n  The columns of   span  \n  The columns of   are linearly independent\n  The columns of   are a basis of  \n  Every column of   has a pivot\n  Every row of   has a pivot\n    and  \n \n  Let   be the linear transformation given by the standard matrix\n   .\n         \n  Write an augmented matrix representing the system of equations given by  ,\n  that is,  .\n  Then solve   to find the kernel of  .\n         \n  Let   be a linear map with standard matrix  .\n       If   is a bijection and   is any   vector, \n  then   has a unique solution.\n inverse map inverse matrix invertible \n  Let   be the linear transformation given by the standard matrix\n   .\n         \n  Write an augmented matrix representing the system of equations given by  ,\n  that is,  .\n  Then solve   to find  .\n       \n   Solve   to find  .\n       \n   Solve   to find  .\n       \n   Write  , the standard matrix for  .\n       \nWe could have solved these three systems simultaneously\nby row reducing the matrix   at once.\n \n         \n  Find the inverse   of the matrix\n   \n  by row-reducing  .\n         \nIs the matrix   invertible? Give a reason for your answer.\n         \n    An   matrix   is invertible if and only if  .\n     \n  Let   be the bijective linear map defined by\n   ,\n  with the inverse map\n   .\n         \n    Compute  .\n       \n    If   is the standard matrix for   and   is the\n    standard matrix for  , find the   matrix \n     \n       \n    is the identity map for any bijective\n  linear transformation  . Therefore\n    equals the identity matrix   for any invertible matrix\n   .\n         Videos \n               \n             Video: Invertible matrices \n               \n             Video: Finding the inverse of a matrix Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations \n        Assume   is an   matrix. Prove the following are equivalent. Some of these results you have proven previously.\n            is non-singular.    row reduces to the identity matrix.  For any choice of  , the system of equations represented by the augmented matrix   has a unique solution.  The columns of   are a linearly independent set.  The columns of   form a basis for  .  The rank of   is  .  The nullity of   is 0.    is invertible.  The linear transformation   with standard matrix   is injective and surjective. Such a map is called an  isomorphism . Assume   is a square matrix, and   is the zero matrix. Prove that   You will need to first prove a lemma that matrix multiplication distributes over matrix addition.  Generalize your result to the case where   is the zero matrix. Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-24",
  "level": "2",
  "url": "MX3.html#objectives-24",
  "type": "Learning Outcomes",
  "number": "4.3",
  "title": "",
  "body": "\n                 \nDetermine if a matrix is invertible, and if so, compute its inverse.\n \n             "
},
{
  "id": "activity-129",
  "level": "2",
  "url": "MX3.html#activity-129",
  "type": "Activity",
  "number": "4.3.1",
  "title": "",
  "body": "\nLet   be a linear map with standard matrix  .\nSort the following items into three groups of statements: a group that means\n  is  injective , a group that means   is  surjective ,\nand a group that means   is  bijective .\n            has a solution for all  \n    has a unique solution for all  \n    has a unique solution.\n  The columns of   span  \n  The columns of   are linearly independent\n  The columns of   are a basis of  \n  Every column of   has a pivot\n  Every row of   has a pivot\n    and  \n "
},
{
  "id": "activity-130",
  "level": "2",
  "url": "MX3.html#activity-130",
  "type": "Activity",
  "number": "4.3.2",
  "title": "",
  "body": "\n  Let   be the linear transformation given by the standard matrix\n   .\n         \n  Write an augmented matrix representing the system of equations given by  ,\n  that is,  .\n  Then solve   to find the kernel of  .\n         "
},
{
  "id": "definition-26",
  "level": "2",
  "url": "MX3.html#definition-26",
  "type": "Definition",
  "number": "4.3.3",
  "title": "",
  "body": "\n  Let   be a linear map with standard matrix  .\n       If   is a bijection and   is any   vector, \n  then   has a unique solution.\n inverse map inverse matrix invertible "
},
{
  "id": "activity-131",
  "level": "2",
  "url": "MX3.html#activity-131",
  "type": "Activity",
  "number": "4.3.4",
  "title": "",
  "body": "\n  Let   be the linear transformation given by the standard matrix\n   .\n         \n  Write an augmented matrix representing the system of equations given by  ,\n  that is,  .\n  Then solve   to find  .\n       \n   Solve   to find  .\n       \n   Solve   to find  .\n       \n   Write  , the standard matrix for  .\n       "
},
{
  "id": "observation-24",
  "level": "2",
  "url": "MX3.html#observation-24",
  "type": "Observation",
  "number": "4.3.5",
  "title": "",
  "body": "\nWe could have solved these three systems simultaneously\nby row reducing the matrix   at once.\n \n         "
},
{
  "id": "activity-132",
  "level": "2",
  "url": "MX3.html#activity-132",
  "type": "Activity",
  "number": "4.3.6",
  "title": "",
  "body": "\n  Find the inverse   of the matrix\n   \n  by row-reducing  .\n         "
},
{
  "id": "activity-133",
  "level": "2",
  "url": "MX3.html#activity-133",
  "type": "Activity",
  "number": "4.3.7",
  "title": "",
  "body": "\nIs the matrix   invertible? Give a reason for your answer.\n         "
},
{
  "id": "observation-25",
  "level": "2",
  "url": "MX3.html#observation-25",
  "type": "Observation",
  "number": "4.3.8",
  "title": "",
  "body": "\n    An   matrix   is invertible if and only if  .\n     "
},
{
  "id": "activity-134",
  "level": "2",
  "url": "MX3.html#activity-134",
  "type": "Activity",
  "number": "4.3.9",
  "title": "",
  "body": "\n  Let   be the bijective linear map defined by\n   ,\n  with the inverse map\n   .\n         \n    Compute  .\n       \n    If   is the standard matrix for   and   is the\n    standard matrix for  , find the   matrix \n     \n       "
},
{
  "id": "observation-26",
  "level": "2",
  "url": "MX3.html#observation-26",
  "type": "Observation",
  "number": "4.3.10",
  "title": "",
  "body": "\n    is the identity map for any bijective\n  linear transformation  . Therefore\n    equals the identity matrix   for any invertible matrix\n   .\n         "
},
{
  "id": "figure-44",
  "level": "2",
  "url": "MX3.html#figure-44",
  "type": "Figure",
  "number": "44",
  "title": "",
  "body": "\n               \n             Video: Invertible matrices "
},
{
  "id": "figure-45",
  "level": "2",
  "url": "MX3.html#figure-45",
  "type": "Figure",
  "number": "45",
  "title": "",
  "body": "\n               \n             Video: Finding the inverse of a matrix "
},
{
  "id": "exploration-43",
  "level": "2",
  "url": "MX3.html#exploration-43",
  "type": "Exploration",
  "number": "4.3.11",
  "title": "",
  "body": "\n        Assume   is an   matrix. Prove the following are equivalent. Some of these results you have proven previously.\n            is non-singular.    row reduces to the identity matrix.  For any choice of  , the system of equations represented by the augmented matrix   has a unique solution.  The columns of   are a linearly independent set.  The columns of   form a basis for  .  The rank of   is  .  The nullity of   is 0.    is invertible.  The linear transformation   with standard matrix   is injective and surjective. Such a map is called an  isomorphism . "
},
{
  "id": "exploration-44",
  "level": "2",
  "url": "MX3.html#exploration-44",
  "type": "Exploration",
  "number": "4.3.12",
  "title": "",
  "body": "Assume   is a square matrix, and   is the zero matrix. Prove that   You will need to first prove a lemma that matrix multiplication distributes over matrix addition.  Generalize your result to the case where   is the zero matrix. "
},
{
  "id": "GT1",
  "level": "1",
  "url": "GT1.html",
  "type": "Section",
  "number": "5.1",
  "title": "Row Operations and Determinants (GT1)",
  "body": "Row Operations and Determinants (GT1) \n                 \nDescribe how a row operation affects the determinant of a matrix.\n \n             Class Activities \nThe image in   illustrates how the linear transformation\n  given by the\nstandard matrix  \ntransforms the unit square.\n         Transformation of the unit square by the matrix  . \nWhat are the lengths of   and  ?\n         \nWhat is the area of the transformed unit square?\n         \nThe image below illustrates how the linear transformation\n  given by the\nstandard matrix  \ntransforms the unit square.\n         Transformation of the unit square by the matrix  \nWhat are the lengths of   and  ?\n         \nWhat is the area of the transformed unit square?\n         \n  It is possible to find two nonparallel vectors that are scaled but not rotated by\n  the linear map given by  .\n         Certain vectors are stretched out without being rotated. \n  The process for finding such vectors will be covered later in this chapter.\n         \n  Notice that while a linear map can transform vectors in various ways,\n  linear maps always transform parallelograms into parallelograms,\n  and these areas are always transformed by the same factor: in the case of\n   ,\n  this factor is  .\n         A linear map transforming parallelograms into parallelograms. \nSince this change in area is always the same for a given linear map,\nit will be equal to the value of the transformed unit square (which\nbegins with area  ).\n         determinant The linear transformation   scaling areas by a constant factor, which we call the  determinant \nThe transformation of the unit square by the\nstandard matrix   is illustrated below.\nIf   is the\narea of resulting parallelogram, what is the value of  ?\n         The transformation of the unit square by the identity matrix.  The value for   is:  0\n      1\n      2\n      4\n     \nThe transformation of the unit square by the\nstandard matrix   is illustrated below: both\n .\nIf   is \nthe area of the generated parallelogram, what is the value of  ?\n         Transformation of the unit square by a matrix with identical columns. The value of   is:  0\n      1\n      2\n      4\n     \nThe transformations of the unit square by the\nstandard matrices   and\n  are illustrated below.\nDescribe the value of  .\n         The parallelograms generated by   and  \/ Describe the value of  :   \n       \n       \n      Cannot be determined from this information.\n     Consider the vectors  ,  ,  , and   displayed below. Each pair of vectors generates a parallelogram, and the area of each parallelogram can be described in terms of determinants.\n     The vectors  ,  ,   and  For example,   represents the shaded area shown below. Parallelogram generated by   and  Similarly,   represents the shaded area shown below. Parallelogram generated by   and  \nThe paralellograms generated by the\nstandard matrices  ,   and\n  are illustrated below.\n         Parallelogram generated by   and  \nDescribe the value of  .\n \n     \n     \n     \n     \n     \n      Cannot be determined from this information.\n     determinant \nNote that these last two properties together can be phrased as  The determinant is linear in each column. \n         \nThe determinant must also satisfy other properties.\nConsider   and\n .\n         Parallelogram built by   and  \nThe base of both parallelograms is  , while the height has not changed,\nso the determinant does not change either. This can also be proven using the\nother properties of the determinant:\n         \nSwapping columns may be thought of as a reflection, which is represented by a negative\ndeterminant. For example, the following matrices transform the unit square into\nthe same parallelogram, but the second matrix reflects its orientation.\n     Reflection of a parallelogram as a result of swapping columns. \nThe fact that swapping columns multiplies determinants by a negative\nmay be verified by adding and subtracting columns.\n         \n  To summarize, we've shown that the column versions of the three row-reducing operations\n  a matrix may be used to simplify a determinant in the following way:\n          Multiplying a column by a scalar multiplies the\n        determinant by that scalar:\n         \n    Swapping two columns changes the sign of the determinant:\n         \n    Adding a multiple of a column to another column does not\n        change the determinant:\n         \n   \n  The transformation given by the standard matrix   scales areas by\n   , and the transformation given by the standard matrix   scales\n  areas by  . By what factor does the transformation given by the standard matrix\n    scale areas?\n         Area changing under the composition of two linear maps   \n     \n     \n    Cannot be determined\n   \nSince the transformation given by the standard matrix   is obtained\nby applying the transformations given by   and  , it follows that\n .\n         \nRecall that row operations may be produced by matrix multiplication.\n      Multiply the first row of   by  :  \n  Swap the first and second row of  :  \n  Add   times the third row to the first row of  :  \n \nThe determinants of row operation matrices may be computed\nby manipulating columns to reduce each matrix to the identity:\n          Scaling a row:  \n  Swapping rows:  \n  Adding a row multiple to another row:  \n \nConsider the row operation   applied as follows to show\n :\n          Find a matrix   such that  , by applying the same row operation to \n .\n  Find   by comparing with the previous slide.\n  If   is a matrix with  , find \n \n \nConsider the row operation   applied as follows to show\n :\n          Find a matrix   such that  , by applying the same row operation to  .\n  If   is a matrix with  , find  .\n \nConsider the row operation   applied as follows to show\n :\n          Find a matrix   such that  .  If   is a matrix with  , find  .\n     \n  Recall that the column versions of the three row-reducing operations\n  a matrix may be used to simplify a determinant:\n      Multiplying columns by scalars:\n         \n    Swapping two columns:\n         \n    Adding a multiple of a column to another column:\n         \n   \nThe determinants of row operation matrices may be computed\nby manipulating columns to reduce each matrix to the identity:\n      Scaling a row:  \n  Swapping rows:  \n  Adding a row multiple to another row:  \n \nThus we can also use both row operations to simplify determinants:\n          Multiplying rows by scalars:\n   \n \n  Swapping two rows:\n   \n \n  Adding multiples of rows\/columns to other rows:\n   \n \n \n  So we may compute the determinant of   \n  by manipulating its rows\/columns to reduce the matrix to  :\n         Videos \n               \n             Video: Row operations, matrix multiplication, and determinants Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations Prove or disprove. The determinant is a linear operator on the vector space of   matrices. Find a matrix that will double the area of a region in  . Find a matrix that will triple the area of a region in  . Find a matrix that will halve the area of a region in  . Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-26",
  "level": "2",
  "url": "GT1.html#objectives-26",
  "type": "Learning Outcomes",
  "number": "5.1",
  "title": "",
  "body": "\n                 \nDescribe how a row operation affects the determinant of a matrix.\n \n             "
},
{
  "id": "activity-135",
  "level": "2",
  "url": "GT1.html#activity-135",
  "type": "Activity",
  "number": "5.1.1",
  "title": "",
  "body": "\nThe image in   illustrates how the linear transformation\n  given by the\nstandard matrix  \ntransforms the unit square.\n         Transformation of the unit square by the matrix  . \nWhat are the lengths of   and  ?\n         \nWhat is the area of the transformed unit square?\n         "
},
{
  "id": "activity-136",
  "level": "2",
  "url": "GT1.html#activity-136",
  "type": "Activity",
  "number": "5.1.2",
  "title": "",
  "body": "\nThe image below illustrates how the linear transformation\n  given by the\nstandard matrix  \ntransforms the unit square.\n         Transformation of the unit square by the matrix  \nWhat are the lengths of   and  ?\n         \nWhat is the area of the transformed unit square?\n         "
},
{
  "id": "observation-27",
  "level": "2",
  "url": "GT1.html#observation-27",
  "type": "Observation",
  "number": "5.1.3",
  "title": "",
  "body": "\n  It is possible to find two nonparallel vectors that are scaled but not rotated by\n  the linear map given by  .\n         Certain vectors are stretched out without being rotated. \n  The process for finding such vectors will be covered later in this chapter.\n         "
},
{
  "id": "observation-28",
  "level": "2",
  "url": "GT1.html#observation-28",
  "type": "Observation",
  "number": "5.1.4",
  "title": "",
  "body": "\n  Notice that while a linear map can transform vectors in various ways,\n  linear maps always transform parallelograms into parallelograms,\n  and these areas are always transformed by the same factor: in the case of\n   ,\n  this factor is  .\n         A linear map transforming parallelograms into parallelograms. \nSince this change in area is always the same for a given linear map,\nit will be equal to the value of the transformed unit square (which\nbegins with area  ).\n         "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "GT1.html#remark-12",
  "type": "Remark",
  "number": "5.1.5",
  "title": "",
  "body": "determinant The linear transformation   scaling areas by a constant factor, which we call the  determinant "
},
{
  "id": "activity-137",
  "level": "2",
  "url": "GT1.html#activity-137",
  "type": "Activity",
  "number": "5.1.6",
  "title": "",
  "body": "\nThe transformation of the unit square by the\nstandard matrix   is illustrated below.\nIf   is the\narea of resulting parallelogram, what is the value of  ?\n         The transformation of the unit square by the identity matrix.  The value for   is:  0\n      1\n      2\n      4\n     "
},
{
  "id": "activity-138",
  "level": "2",
  "url": "GT1.html#activity-138",
  "type": "Activity",
  "number": "5.1.7",
  "title": "",
  "body": "\nThe transformation of the unit square by the\nstandard matrix   is illustrated below: both\n .\nIf   is \nthe area of the generated parallelogram, what is the value of  ?\n         Transformation of the unit square by a matrix with identical columns. The value of   is:  0\n      1\n      2\n      4\n     "
},
{
  "id": "activity-139",
  "level": "2",
  "url": "GT1.html#activity-139",
  "type": "Activity",
  "number": "5.1.8",
  "title": "",
  "body": "\nThe transformations of the unit square by the\nstandard matrices   and\n  are illustrated below.\nDescribe the value of  .\n         The parallelograms generated by   and  \/ Describe the value of  :   \n       \n       \n      Cannot be determined from this information.\n     "
},
{
  "id": "figure-54",
  "level": "2",
  "url": "GT1.html#figure-54",
  "type": "Figure",
  "number": "54",
  "title": "",
  "body": "The vectors  ,  ,   and  "
},
{
  "id": "figure-55",
  "level": "2",
  "url": "GT1.html#figure-55",
  "type": "Figure",
  "number": "55",
  "title": "",
  "body": "Parallelogram generated by   and  "
},
{
  "id": "figure-56",
  "level": "2",
  "url": "GT1.html#figure-56",
  "type": "Figure",
  "number": "56",
  "title": "",
  "body": "Parallelogram generated by   and  "
},
{
  "id": "activity-140",
  "level": "2",
  "url": "GT1.html#activity-140",
  "type": "Activity",
  "number": "5.1.9",
  "title": "",
  "body": "\nThe paralellograms generated by the\nstandard matrices  ,   and\n  are illustrated below.\n         Parallelogram generated by   and  \nDescribe the value of  .\n \n     \n     \n     \n     \n     \n      Cannot be determined from this information.\n     "
},
{
  "id": "definition-27",
  "level": "2",
  "url": "GT1.html#definition-27",
  "type": "Definition",
  "number": "5.1.10",
  "title": "",
  "body": "determinant \nNote that these last two properties together can be phrased as  The determinant is linear in each column. \n         "
},
{
  "id": "observation-29",
  "level": "2",
  "url": "GT1.html#observation-29",
  "type": "Observation",
  "number": "5.1.11",
  "title": "",
  "body": "\nThe determinant must also satisfy other properties.\nConsider   and\n .\n         Parallelogram built by   and  \nThe base of both parallelograms is  , while the height has not changed,\nso the determinant does not change either. This can also be proven using the\nother properties of the determinant:\n         "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "GT1.html#remark-13",
  "type": "Remark",
  "number": "5.1.12",
  "title": "",
  "body": "\nSwapping columns may be thought of as a reflection, which is represented by a negative\ndeterminant. For example, the following matrices transform the unit square into\nthe same parallelogram, but the second matrix reflects its orientation.\n     Reflection of a parallelogram as a result of swapping columns. "
},
{
  "id": "observation-30",
  "level": "2",
  "url": "GT1.html#observation-30",
  "type": "Observation",
  "number": "5.1.13",
  "title": "",
  "body": "\nThe fact that swapping columns multiplies determinants by a negative\nmay be verified by adding and subtracting columns.\n         "
},
{
  "id": "fact-24",
  "level": "2",
  "url": "GT1.html#fact-24",
  "type": "Fact",
  "number": "5.1.14",
  "title": "",
  "body": "\n  To summarize, we've shown that the column versions of the three row-reducing operations\n  a matrix may be used to simplify a determinant in the following way:\n          Multiplying a column by a scalar multiplies the\n        determinant by that scalar:\n         \n    Swapping two columns changes the sign of the determinant:\n         \n    Adding a multiple of a column to another column does not\n        change the determinant:\n         \n   "
},
{
  "id": "activity-141",
  "level": "2",
  "url": "GT1.html#activity-141",
  "type": "Activity",
  "number": "5.1.15",
  "title": "",
  "body": "\n  The transformation given by the standard matrix   scales areas by\n   , and the transformation given by the standard matrix   scales\n  areas by  . By what factor does the transformation given by the standard matrix\n    scale areas?\n         Area changing under the composition of two linear maps   \n     \n     \n    Cannot be determined\n   "
},
{
  "id": "fact-25",
  "level": "2",
  "url": "GT1.html#fact-25",
  "type": "Fact",
  "number": "5.1.16",
  "title": "",
  "body": "\nSince the transformation given by the standard matrix   is obtained\nby applying the transformations given by   and  , it follows that\n .\n         "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "GT1.html#remark-14",
  "type": "Remark",
  "number": "5.1.17",
  "title": "",
  "body": "\nRecall that row operations may be produced by matrix multiplication.\n      Multiply the first row of   by  :  \n  Swap the first and second row of  :  \n  Add   times the third row to the first row of  :  \n "
},
{
  "id": "fact-26",
  "level": "2",
  "url": "GT1.html#fact-26",
  "type": "Fact",
  "number": "5.1.18",
  "title": "",
  "body": "\nThe determinants of row operation matrices may be computed\nby manipulating columns to reduce each matrix to the identity:\n          Scaling a row:  \n  Swapping rows:  \n  Adding a row multiple to another row:  \n "
},
{
  "id": "activity-142",
  "level": "2",
  "url": "GT1.html#activity-142",
  "type": "Activity",
  "number": "5.1.19",
  "title": "",
  "body": "\nConsider the row operation   applied as follows to show\n :\n          Find a matrix   such that  , by applying the same row operation to \n .\n  Find   by comparing with the previous slide.\n  If   is a matrix with  , find \n \n "
},
{
  "id": "activity-143",
  "level": "2",
  "url": "GT1.html#activity-143",
  "type": "Activity",
  "number": "5.1.20",
  "title": "",
  "body": "\nConsider the row operation   applied as follows to show\n :\n          Find a matrix   such that  , by applying the same row operation to  .\n  If   is a matrix with  , find  .\n "
},
{
  "id": "activity-144",
  "level": "2",
  "url": "GT1.html#activity-144",
  "type": "Activity",
  "number": "5.1.21",
  "title": "",
  "body": "\nConsider the row operation   applied as follows to show\n :\n          Find a matrix   such that  .  If   is a matrix with  , find  .\n     "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "GT1.html#remark-15",
  "type": "Remark",
  "number": "5.1.22",
  "title": "",
  "body": "\n  Recall that the column versions of the three row-reducing operations\n  a matrix may be used to simplify a determinant:\n      Multiplying columns by scalars:\n         \n    Swapping two columns:\n         \n    Adding a multiple of a column to another column:\n         \n   "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "GT1.html#remark-16",
  "type": "Remark",
  "number": "5.1.23",
  "title": "",
  "body": "\nThe determinants of row operation matrices may be computed\nby manipulating columns to reduce each matrix to the identity:\n      Scaling a row:  \n  Swapping rows:  \n  Adding a row multiple to another row:  \n "
},
{
  "id": "fact-27",
  "level": "2",
  "url": "GT1.html#fact-27",
  "type": "Fact",
  "number": "5.1.24",
  "title": "",
  "body": "\nThus we can also use both row operations to simplify determinants:\n          Multiplying rows by scalars:\n   \n \n  Swapping two rows:\n   \n \n  Adding multiples of rows\/columns to other rows:\n   \n \n "
},
{
  "id": "observation-31",
  "level": "2",
  "url": "GT1.html#observation-31",
  "type": "Observation",
  "number": "5.1.25",
  "title": "",
  "body": "\n  So we may compute the determinant of   \n  by manipulating its rows\/columns to reduce the matrix to  :\n         "
},
{
  "id": "figure-61",
  "level": "2",
  "url": "GT1.html#figure-61",
  "type": "Figure",
  "number": "61",
  "title": "",
  "body": "\n               \n             Video: Row operations, matrix multiplication, and determinants "
},
{
  "id": "exploration-45",
  "level": "2",
  "url": "GT1.html#exploration-45",
  "type": "Exploration",
  "number": "5.1.26",
  "title": "",
  "body": "Prove or disprove. The determinant is a linear operator on the vector space of   matrices. Find a matrix that will double the area of a region in  . Find a matrix that will triple the area of a region in  . Find a matrix that will halve the area of a region in  . "
},
{
  "id": "GT2",
  "level": "1",
  "url": "GT2.html",
  "type": "Section",
  "number": "5.2",
  "title": "Computing Determinants (GT2)",
  "body": "Computing Determinants (GT2) \n                 \nCompute the determinant of a   matrix.\n \n             Class Activities \nWe've seen that row reducing all the way into RREF gives us a method of computing determinants.\n     \nHowever, we learned in   that this can be tedious for large matrices.  Thus, we will try\nto figure out how to turn the determinant of a larger matrix\ninto the determinant of a smaller matrix.\n     \n  The following image illustrates the transformation of the unit cube\n  by the matrix\n   .\n     Transformation of the unit cube by the linear transformation. \n  Recall that for this solid  , where   is the height of the solid \n  and   is the area of its parallelogram base.\n  So what must its volume be?\n           \n   \n   \n   \n \nIf row   contains all zeros except for a   on the \nmain (upper-left to lower-right) diagonal, \nthen both column and row  \nmay be removed without changing the value of the determinant.\n \n         \nSince row and column operations affect the determinants in the same\nway, the same technique works for a column of all zeros except for\na   on the main diagonal.\n \n         \n  Remove an appropriate row and column of  \n   \n  to simplify the determinant to a   determinant.\n         \n  Simplify\n   \n  to a multiple of a   determinant by first doing the following:\n          Factor out a   from a column.\n      Swap rows or columns to put a   on the main diagonal.\n     \n  Simplify\n   \n  to a multiple of a   determinant by first doing the following:\n          Use row\/column operations to create two zeroes in the same row or column.\n      Factor\/swap as needed to get a row\/column of all zeroes except \n      a   on the main diagonal.\n     \nUsing row\/column operations, you can introduce zeros\nand reduce dimension to whittle down the determinant of a large\nmatrix to a determinant of a smaller matrix.\n         \nRewrite  \nas a multiple of a determinant of a   matrix.\n         \n  Compute\n    by using any combination of row\/column operations.\n         Laplace expansion cofactor expansion \nFor example, since \n ,\n         \nApplying Laplace expansion to a   matrix yields a short formula you may have seen:\n .\n         \nThere are formulas for the determinants of larger matrices,\nbut they can be pretty tedious to use. For example, writing out a\nformula for a   determinant would require 24 different terms!\n         \nSo this is why we either use Laplace expansion or row\/column operations directly.\n         \nBased on the previous activities, which technique is easier for computing determinants?\n      Memorizing formulas.\n  Using row\/column operations.\n  Laplace expansion.\n  Some other technique (be prepared to describe it).\n \n  Use your preferred technique to compute \n   .\n         You can check your answer using Octave.\n Videos \n               \n             Video: Simplifying a determinant using row operations \n               \n             Video: Computing a determinant Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations   \n                    Prove that the equation of a line in the plane, through points  , when   is given by the equation\n  \n                    Prove that the determinant of any diagonal matrix, upper triangular matrix, or lower triangular matrix, is the product of it's diagonal entries.\n                   \n                    Show that, if an   matrix   has a non-zero determinant, then any   can be represented as a linear combination of the columns of  .\n                  \n                    What is the smallest number of zeros necessary to place in a   matrix, and the placement of those zeros, such that the matrix has a zero determinant?\n                 Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-27",
  "level": "2",
  "url": "GT2.html#objectives-27",
  "type": "Learning Outcomes",
  "number": "5.2",
  "title": "",
  "body": "\n                 \nCompute the determinant of a   matrix.\n \n             "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "GT2.html#remark-17",
  "type": "Remark",
  "number": "5.2.1",
  "title": "",
  "body": "\nWe've seen that row reducing all the way into RREF gives us a method of computing determinants.\n     \nHowever, we learned in   that this can be tedious for large matrices.  Thus, we will try\nto figure out how to turn the determinant of a larger matrix\ninto the determinant of a smaller matrix.\n     "
},
{
  "id": "activity-145",
  "level": "2",
  "url": "GT2.html#activity-145",
  "type": "Activity",
  "number": "5.2.2",
  "title": "",
  "body": "\n  The following image illustrates the transformation of the unit cube\n  by the matrix\n   .\n     Transformation of the unit cube by the linear transformation. \n  Recall that for this solid  , where   is the height of the solid \n  and   is the area of its parallelogram base.\n  So what must its volume be?\n           \n   \n   \n   \n "
},
{
  "id": "fact-28",
  "level": "2",
  "url": "GT2.html#fact-28",
  "type": "Fact",
  "number": "5.2.3",
  "title": "",
  "body": "\nIf row   contains all zeros except for a   on the \nmain (upper-left to lower-right) diagonal, \nthen both column and row  \nmay be removed without changing the value of the determinant.\n \n         \nSince row and column operations affect the determinants in the same\nway, the same technique works for a column of all zeros except for\na   on the main diagonal.\n \n         "
},
{
  "id": "activity-146",
  "level": "2",
  "url": "GT2.html#activity-146",
  "type": "Activity",
  "number": "5.2.4",
  "title": "",
  "body": "\n  Remove an appropriate row and column of  \n   \n  to simplify the determinant to a   determinant.\n         "
},
{
  "id": "activity-147",
  "level": "2",
  "url": "GT2.html#activity-147",
  "type": "Activity",
  "number": "5.2.5",
  "title": "",
  "body": "\n  Simplify\n   \n  to a multiple of a   determinant by first doing the following:\n          Factor out a   from a column.\n      Swap rows or columns to put a   on the main diagonal.\n     "
},
{
  "id": "activity-148",
  "level": "2",
  "url": "GT2.html#activity-148",
  "type": "Activity",
  "number": "5.2.6",
  "title": "",
  "body": "\n  Simplify\n   \n  to a multiple of a   determinant by first doing the following:\n          Use row\/column operations to create two zeroes in the same row or column.\n      Factor\/swap as needed to get a row\/column of all zeroes except \n      a   on the main diagonal.\n     "
},
{
  "id": "observation-32",
  "level": "2",
  "url": "GT2.html#observation-32",
  "type": "Observation",
  "number": "5.2.7",
  "title": "",
  "body": "\nUsing row\/column operations, you can introduce zeros\nand reduce dimension to whittle down the determinant of a large\nmatrix to a determinant of a smaller matrix.\n         "
},
{
  "id": "activity-149",
  "level": "2",
  "url": "GT2.html#activity-149",
  "type": "Activity",
  "number": "5.2.8",
  "title": "",
  "body": "\nRewrite  \nas a multiple of a determinant of a   matrix.\n         "
},
{
  "id": "activity-150",
  "level": "2",
  "url": "GT2.html#activity-150",
  "type": "Activity",
  "number": "5.2.9",
  "title": "",
  "body": "\n  Compute\n    by using any combination of row\/column operations.\n         "
},
{
  "id": "observation-33",
  "level": "2",
  "url": "GT2.html#observation-33",
  "type": "Observation",
  "number": "5.2.10",
  "title": "",
  "body": "Laplace expansion cofactor expansion \nFor example, since \n ,\n         "
},
{
  "id": "observation-34",
  "level": "2",
  "url": "GT2.html#observation-34",
  "type": "Observation",
  "number": "5.2.11",
  "title": "",
  "body": "\nApplying Laplace expansion to a   matrix yields a short formula you may have seen:\n .\n         \nThere are formulas for the determinants of larger matrices,\nbut they can be pretty tedious to use. For example, writing out a\nformula for a   determinant would require 24 different terms!\n         \nSo this is why we either use Laplace expansion or row\/column operations directly.\n         "
},
{
  "id": "activity-151",
  "level": "2",
  "url": "GT2.html#activity-151",
  "type": "Activity",
  "number": "5.2.12",
  "title": "",
  "body": "\nBased on the previous activities, which technique is easier for computing determinants?\n      Memorizing formulas.\n  Using row\/column operations.\n  Laplace expansion.\n  Some other technique (be prepared to describe it).\n "
},
{
  "id": "activity-152",
  "level": "2",
  "url": "GT2.html#activity-152",
  "type": "Activity",
  "number": "5.2.13",
  "title": "",
  "body": "\n  Use your preferred technique to compute \n   .\n         "
},
{
  "id": "insight-1",
  "level": "2",
  "url": "GT2.html#insight-1",
  "type": "Insight",
  "number": "5.2.14",
  "title": "",
  "body": "You can check your answer using Octave.\n "
},
{
  "id": "figure-63",
  "level": "2",
  "url": "GT2.html#figure-63",
  "type": "Figure",
  "number": "63",
  "title": "",
  "body": "\n               \n             Video: Simplifying a determinant using row operations "
},
{
  "id": "figure-64",
  "level": "2",
  "url": "GT2.html#figure-64",
  "type": "Figure",
  "number": "64",
  "title": "",
  "body": "\n               \n             Video: Computing a determinant "
},
{
  "id": "exploration-46",
  "level": "2",
  "url": "GT2.html#exploration-46",
  "type": "Exploration",
  "number": "5.2.15",
  "title": "",
  "body": "  \n                    Prove that the equation of a line in the plane, through points  , when   is given by the equation\n "
},
{
  "id": "exploration-47",
  "level": "2",
  "url": "GT2.html#exploration-47",
  "type": "Exploration",
  "number": "5.2.16",
  "title": "",
  "body": " \n                    Prove that the determinant of any diagonal matrix, upper triangular matrix, or lower triangular matrix, is the product of it's diagonal entries.\n                 "
},
{
  "id": "exploration-48",
  "level": "2",
  "url": "GT2.html#exploration-48",
  "type": "Exploration",
  "number": "5.2.17",
  "title": "",
  "body": "  \n                    Show that, if an   matrix   has a non-zero determinant, then any   can be represented as a linear combination of the columns of  .\n                 "
},
{
  "id": "exploration-49",
  "level": "2",
  "url": "GT2.html#exploration-49",
  "type": "Exploration",
  "number": "5.2.18",
  "title": "",
  "body": " \n                    What is the smallest number of zeros necessary to place in a   matrix, and the placement of those zeros, such that the matrix has a zero determinant?\n                 "
},
{
  "id": "GT3",
  "level": "1",
  "url": "GT3.html",
  "type": "Section",
  "number": "5.3",
  "title": "Eigenvalues and Characteristic Polynomials (GT3)",
  "body": "Eigenvalues and Characteristic Polynomials (GT3) \n                 \nFind the eigenvalues of a   matrix.\n \n             Class Activities \n  An invertible matrix   and its inverse   are given below:\n     \n  Which of the following is equal to  ?\n       \n   \n   \n   \n    For every invertible matrix  ,\n   \n  so  .\n Furthermore,\n  a square matrix   is invertible if and only if  . \nConsider the linear transformation   \ngiven by the matrix  .\n         Transformation of the unit square by the linear transformation  \nIt is easy to see geometrically that\n .\n     \nIt is less obvious (but easily checked once you find it) that\n .\n     eigenvector The map   stretches out the eigenvector   by a factor of   (the corresponding eigenvalue). nontrivial eigenvector eigenvalue \nFinding the eigenvalues   that satisfy\n \nfor some nontrivial eigenvector   is equivalent to finding \nnonzero solutions for the matrix equation\n .\n         \nWhich of the following must be true for any eigenvalue?\n      The  kernel  of the transformation with standard matrix  \nmust contain  the zero vector , so   is  invertible .\n  The  kernel  of the transformation with standard matrix  \nmust contain  a non-zero vector , so   is  not invertible .\n  The  image  of the transformation with standard matrix  \nmust contain  the zero vector , so   is  invertible .\n  The  image  of the transformation with standard matrix  \nmust contain  a non-zero vector , so   is  not invertible .\n \n  The eigenvalues   for a matrix   are the values\n  that make   non-invertible.\n         \n  Thus the eigenvalues   for a matrix  \n  are the solutions to\n  the equation  \n         characteristic polynomial \nFor example, when\n , we have\n .\n         \nThus the characteristic polynomial of   is\n \nand its eigenvalues are the solutions to  .\n         \nLet  .\n         \nCompute   to determine the characteristic polynomial of  .\n     \nSet this characteristic polynomial equal to zero and factor to determine the eigenvalues of  .\n     \n  Find all the eigenvalues for the matrix\n   .\n         \n  Find all the eigenvalues for the matrix\n   .\n     \n  Find all the eigenvalues for the matrix\n   .\n         Videos \n               \n             Video: Finding eigenvalues Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations  \n                    What are the maximum and minimum number of eigenvalues associated with an   matrix? Write small examples to convince yourself you are correct, and then prove this in generality.\n                 Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-28",
  "level": "2",
  "url": "GT3.html#objectives-28",
  "type": "Learning Outcomes",
  "number": "5.3",
  "title": "",
  "body": "\n                 \nFind the eigenvalues of a   matrix.\n \n             "
},
{
  "id": "activity-153",
  "level": "2",
  "url": "GT3.html#activity-153",
  "type": "Activity",
  "number": "5.3.1",
  "title": "",
  "body": "\n  An invertible matrix   and its inverse   are given below:\n     \n  Which of the following is equal to  ?\n       \n   \n   \n   \n "
},
{
  "id": "fact-29",
  "level": "2",
  "url": "GT3.html#fact-29",
  "type": "Fact",
  "number": "5.3.2",
  "title": "",
  "body": "   For every invertible matrix  ,\n   \n  so  .\n Furthermore,\n  a square matrix   is invertible if and only if  . "
},
{
  "id": "observation-35",
  "level": "2",
  "url": "GT3.html#observation-35",
  "type": "Observation",
  "number": "5.3.3",
  "title": "",
  "body": "\nConsider the linear transformation   \ngiven by the matrix  .\n         Transformation of the unit square by the linear transformation  \nIt is easy to see geometrically that\n .\n     \nIt is less obvious (but easily checked once you find it) that\n .\n     "
},
{
  "id": "definition-28",
  "level": "2",
  "url": "GT3.html#definition-28",
  "type": "Definition",
  "number": "5.3.4",
  "title": "",
  "body": "eigenvector The map   stretches out the eigenvector   by a factor of   (the corresponding eigenvalue). nontrivial eigenvector eigenvalue "
},
{
  "id": "activity-154",
  "level": "2",
  "url": "GT3.html#activity-154",
  "type": "Activity",
  "number": "5.3.5",
  "title": "",
  "body": "\nFinding the eigenvalues   that satisfy\n \nfor some nontrivial eigenvector   is equivalent to finding \nnonzero solutions for the matrix equation\n .\n         \nWhich of the following must be true for any eigenvalue?\n      The  kernel  of the transformation with standard matrix  \nmust contain  the zero vector , so   is  invertible .\n  The  kernel  of the transformation with standard matrix  \nmust contain  a non-zero vector , so   is  not invertible .\n  The  image  of the transformation with standard matrix  \nmust contain  the zero vector , so   is  invertible .\n  The  image  of the transformation with standard matrix  \nmust contain  a non-zero vector , so   is  not invertible .\n "
},
{
  "id": "fact-30",
  "level": "2",
  "url": "GT3.html#fact-30",
  "type": "Fact",
  "number": "5.3.6",
  "title": "",
  "body": "\n  The eigenvalues   for a matrix   are the values\n  that make   non-invertible.\n         \n  Thus the eigenvalues   for a matrix  \n  are the solutions to\n  the equation  \n         "
},
{
  "id": "definition-29",
  "level": "2",
  "url": "GT3.html#definition-29",
  "type": "Definition",
  "number": "5.3.7",
  "title": "",
  "body": "characteristic polynomial \nFor example, when\n , we have\n .\n         \nThus the characteristic polynomial of   is\n \nand its eigenvalues are the solutions to  .\n         "
},
{
  "id": "activity-155",
  "level": "2",
  "url": "GT3.html#activity-155",
  "type": "Activity",
  "number": "5.3.8",
  "title": "",
  "body": "\nLet  .\n         \nCompute   to determine the characteristic polynomial of  .\n     \nSet this characteristic polynomial equal to zero and factor to determine the eigenvalues of  .\n     "
},
{
  "id": "activity-156",
  "level": "2",
  "url": "GT3.html#activity-156",
  "type": "Activity",
  "number": "5.3.9",
  "title": "",
  "body": "\n  Find all the eigenvalues for the matrix\n   .\n         "
},
{
  "id": "activity-157",
  "level": "2",
  "url": "GT3.html#activity-157",
  "type": "Activity",
  "number": "5.3.10",
  "title": "",
  "body": "\n  Find all the eigenvalues for the matrix\n   .\n     "
},
{
  "id": "activity-158",
  "level": "2",
  "url": "GT3.html#activity-158",
  "type": "Activity",
  "number": "5.3.11",
  "title": "",
  "body": "\n  Find all the eigenvalues for the matrix\n   .\n         "
},
{
  "id": "figure-67",
  "level": "2",
  "url": "GT3.html#figure-67",
  "type": "Figure",
  "number": "67",
  "title": "",
  "body": "\n               \n             Video: Finding eigenvalues "
},
{
  "id": "exploration-50",
  "level": "2",
  "url": "GT3.html#exploration-50",
  "type": "Exploration",
  "number": "5.3.12",
  "title": "",
  "body": " \n                    What are the maximum and minimum number of eigenvalues associated with an   matrix? Write small examples to convince yourself you are correct, and then prove this in generality.\n                 "
},
{
  "id": "GT4",
  "level": "1",
  "url": "GT4.html",
  "type": "Section",
  "number": "5.4",
  "title": "Eigenvectors and Eigenspaces (GT4)",
  "body": "Eigenvectors and Eigenspaces (GT4) \n                 \nFind a basis for the eigenspace of a   matrix associated with a given eigenvalue.\n \n             Class Activities \nIt's possible to show that   is an eigenvalue for\n .\n         \nCompute the kernel of the transformation with standard matrix\n  \nto find all the eigenvectors   such that  .\n         eigenspace \nFind a basis for the eigenspace for the matrix\n \nassociated with the eigenvalue  .\n         \nFind a basis for the eigenspace for the matrix\n \nassociated with the eigenvalue  .\n         \nFind a basis for the eigenspace for the matrix\n \nassociated with the eigenvalue  .\n         Videos \n               \n             Video: Finding eigenvectors Slideshow Slideshow of activities available at  . Exercises available at  . Mathematical Writing Explorations  \n                    Given a matrix  , let   be the eigenvectors with associated distinct eigenvalues  . Prove the set of eigenvectors is linearly independent.\n                 Sample Problem and Solution \n            Sample problem  .\n         "
},
{
  "id": "objectives-29",
  "level": "2",
  "url": "GT4.html#objectives-29",
  "type": "Learning Outcomes",
  "number": "5.4",
  "title": "",
  "body": "\n                 \nFind a basis for the eigenspace of a   matrix associated with a given eigenvalue.\n \n             "
},
{
  "id": "activity-159",
  "level": "2",
  "url": "GT4.html#activity-159",
  "type": "Activity",
  "number": "5.4.1",
  "title": "",
  "body": "\nIt's possible to show that   is an eigenvalue for\n .\n         \nCompute the kernel of the transformation with standard matrix\n  \nto find all the eigenvectors   such that  .\n         "
},
{
  "id": "definition-30",
  "level": "2",
  "url": "GT4.html#definition-30",
  "type": "Definition",
  "number": "5.4.2",
  "title": "",
  "body": "eigenspace "
},
{
  "id": "activity-160",
  "level": "2",
  "url": "GT4.html#activity-160",
  "type": "Activity",
  "number": "5.4.3",
  "title": "",
  "body": "\nFind a basis for the eigenspace for the matrix\n \nassociated with the eigenvalue  .\n         "
},
{
  "id": "activity-161",
  "level": "2",
  "url": "GT4.html#activity-161",
  "type": "Activity",
  "number": "5.4.4",
  "title": "",
  "body": "\nFind a basis for the eigenspace for the matrix\n \nassociated with the eigenvalue  .\n         "
},
{
  "id": "activity-162",
  "level": "2",
  "url": "GT4.html#activity-162",
  "type": "Activity",
  "number": "5.4.5",
  "title": "",
  "body": "\nFind a basis for the eigenspace for the matrix\n \nassociated with the eigenvalue  .\n         "
},
{
  "id": "figure-68",
  "level": "2",
  "url": "GT4.html#figure-68",
  "type": "Figure",
  "number": "68",
  "title": "",
  "body": "\n               \n             Video: Finding eigenvectors "
},
{
  "id": "exploration-51",
  "level": "2",
  "url": "GT4.html#exploration-51",
  "type": "Exploration",
  "number": "5.4.6",
  "title": "",
  "body": " \n                    Given a matrix  , let   be the eigenvectors with associated distinct eigenvalues  . Prove the set of eigenvectors is linearly independent.\n                 "
},
{
  "id": "truss",
  "level": "1",
  "url": "truss.html",
  "type": "Section",
  "number": "A.1",
  "title": "Civil Engineering: Trusses and Struts",
  "body": "Civil Engineering: Trusses and Struts Activities truss struts A simple truss A simple truss \nConsider the representation of a simple truss pictured below.\nAll of the seven struts are of equal length, affixed to two anchor points\napplying a normal force to nodes   and  , and\nwith a   load applied to the node given by  .\n             A simple truss \nWhich of the following must hold for the truss to be stable?\n             \nAll of the struts will experience compression.\n                 \nAll of the struts will experience tension.\n                 \nSome of the struts will be compressed, but others will be tensioned.\n                 \nSince the forces must balance at each node for the truss to be stable,\nsome of the struts will be compressed, while others will be tensioned. \n             Completed truss \nBy finding vector equations that must hold at each node, we may\ndetermine many of the forces at play.\n             \nFor example, at the bottom left node there are 3 forces acting.\n             Truss with forces \nLet   be the force on   given by the compression\/tension\nof the strut  , let   be defined similarly, and let\n  be the normal force of the anchor point on  .\n             \nFor the truss to be stable, we must have:\n             \nUsing the conventions of the previous remark, and where  \nrepresents the load vector on node  , find four more vector equations\nthat must be satisfied for each of the other four nodes of the truss.\n         A simple truss \nThe five vector equations may be written as follows.\n             \nEach vector has a vertical and horizontal component,\nso it may be treated as a vector in  .\nNote that   must have the same magnitude (but opposite\ndirection) as  .\n             \nTo write a linear system that models the truss under consideration\nwith constant load   newtons,\nhow many scalar variables will be required?\n             \n                     \n :   from the nodes,   from the anchors\n                     \n                 \n                     \n :   from the struts,   from the anchors\n                     \n                 \n                     \n :   from the struts,   from the anchors\n                     \n                 \n                     \n :   from the struts,   from the anchors,   from the load\n                     \n                 \n                     \n :   from the nodes,   from the struts,   from the load\n                     \n                 A simple truss \nSince the angles for each strut are known,\none variable may be used to represent each.\n             Variables for the truss \n            For example:\n             \nSince the angle of the normal forces for each anchor point are unknown,\ntwo variables may be used to represent each.\n             Truss with normal forces \nThe load vector is constant.\n             \nEach of the five vector\nequations found previously represent two linear equations:\none for the horizontal component and one for the vertical.\n             Variables for the truss \nUsing the approximation  , we have\n \nExpand the vector equation given below using sine and cosine of appropriate angles,\nthen compute each component (approximating  ).\n             Variables for the truss \nThe full augmented matrix given by the ten equations in this linear system\nis given below, where the elevent columns correspond to  ,\nand the ten rows correspond to the horizontal and vertical components of the\nforces acting at  .\n             \nThis matrix row-reduces to the following.\n             \nThus we know the truss must satisfy the following conditions.\n             \nIn particular, the negative   represent tension (forces pointing into the nodes),\nand the postive   represent compression (forces pointing out of the nodes).\nThe vertical normal forces   counteract the   load.\n             Completed truss Slideshow Slideshow of activities available at  . "
},
{
  "id": "definition-31",
  "level": "2",
  "url": "truss.html#definition-31",
  "type": "Definition",
  "number": "A.1.1",
  "title": "",
  "body": "truss struts A simple truss A simple truss "
},
{
  "id": "activity-163",
  "level": "2",
  "url": "truss.html#activity-163",
  "type": "Activity",
  "number": "A.1.2",
  "title": "",
  "body": "\nConsider the representation of a simple truss pictured below.\nAll of the seven struts are of equal length, affixed to two anchor points\napplying a normal force to nodes   and  , and\nwith a   load applied to the node given by  .\n             A simple truss \nWhich of the following must hold for the truss to be stable?\n             \nAll of the struts will experience compression.\n                 \nAll of the struts will experience tension.\n                 \nSome of the struts will be compressed, but others will be tensioned.\n                 "
},
{
  "id": "observation-36",
  "level": "2",
  "url": "truss.html#observation-36",
  "type": "Observation",
  "number": "A.1.3",
  "title": "",
  "body": "\nSince the forces must balance at each node for the truss to be stable,\nsome of the struts will be compressed, while others will be tensioned. \n             Completed truss \nBy finding vector equations that must hold at each node, we may\ndetermine many of the forces at play.\n             "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "truss.html#remark-18",
  "type": "Remark",
  "number": "A.1.4",
  "title": "",
  "body": "\nFor example, at the bottom left node there are 3 forces acting.\n             Truss with forces \nLet   be the force on   given by the compression\/tension\nof the strut  , let   be defined similarly, and let\n  be the normal force of the anchor point on  .\n             \nFor the truss to be stable, we must have:\n             "
},
{
  "id": "activity-164",
  "level": "2",
  "url": "truss.html#activity-164",
  "type": "Activity",
  "number": "A.1.5",
  "title": "",
  "body": "\nUsing the conventions of the previous remark, and where  \nrepresents the load vector on node  , find four more vector equations\nthat must be satisfied for each of the other four nodes of the truss.\n         A simple truss "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "truss.html#remark-19",
  "type": "Remark",
  "number": "A.1.6",
  "title": "",
  "body": "\nThe five vector equations may be written as follows.\n             "
},
{
  "id": "observation-37",
  "level": "2",
  "url": "truss.html#observation-37",
  "type": "Observation",
  "number": "A.1.7",
  "title": "",
  "body": "\nEach vector has a vertical and horizontal component,\nso it may be treated as a vector in  .\nNote that   must have the same magnitude (but opposite\ndirection) as  .\n             "
},
{
  "id": "activity-165",
  "level": "2",
  "url": "truss.html#activity-165",
  "type": "Activity",
  "number": "A.1.8",
  "title": "",
  "body": "\nTo write a linear system that models the truss under consideration\nwith constant load   newtons,\nhow many scalar variables will be required?\n             \n                     \n :   from the nodes,   from the anchors\n                     \n                 \n                     \n :   from the struts,   from the anchors\n                     \n                 \n                     \n :   from the struts,   from the anchors\n                     \n                 \n                     \n :   from the struts,   from the anchors,   from the load\n                     \n                 \n                     \n :   from the nodes,   from the struts,   from the load\n                     \n                 A simple truss "
},
{
  "id": "observation-38",
  "level": "2",
  "url": "truss.html#observation-38",
  "type": "Observation",
  "number": "A.1.9",
  "title": "",
  "body": "\nSince the angles for each strut are known,\none variable may be used to represent each.\n             Variables for the truss \n            For example:\n             "
},
{
  "id": "observation-39",
  "level": "2",
  "url": "truss.html#observation-39",
  "type": "Observation",
  "number": "A.1.10",
  "title": "",
  "body": "\nSince the angle of the normal forces for each anchor point are unknown,\ntwo variables may be used to represent each.\n             Truss with normal forces \nThe load vector is constant.\n             "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "truss.html#remark-20",
  "type": "Remark",
  "number": "A.1.11",
  "title": "",
  "body": "\nEach of the five vector\nequations found previously represent two linear equations:\none for the horizontal component and one for the vertical.\n             Variables for the truss \nUsing the approximation  , we have\n "
},
{
  "id": "activity-166",
  "level": "2",
  "url": "truss.html#activity-166",
  "type": "Activity",
  "number": "A.1.12",
  "title": "",
  "body": "\nExpand the vector equation given below using sine and cosine of appropriate angles,\nthen compute each component (approximating  ).\n             Variables for the truss "
},
{
  "id": "observation-40",
  "level": "2",
  "url": "truss.html#observation-40",
  "type": "Observation",
  "number": "A.1.13",
  "title": "",
  "body": "\nThe full augmented matrix given by the ten equations in this linear system\nis given below, where the elevent columns correspond to  ,\nand the ten rows correspond to the horizontal and vertical components of the\nforces acting at  .\n             "
},
{
  "id": "observation-41",
  "level": "2",
  "url": "truss.html#observation-41",
  "type": "Observation",
  "number": "A.1.14",
  "title": "",
  "body": "\nThis matrix row-reduces to the following.\n             "
},
{
  "id": "observation-42",
  "level": "2",
  "url": "truss.html#observation-42",
  "type": "Observation",
  "number": "A.1.15",
  "title": "",
  "body": "\nThus we know the truss must satisfy the following conditions.\n             \nIn particular, the negative   represent tension (forces pointing into the nodes),\nand the postive   represent compression (forces pointing out of the nodes).\nThe vertical normal forces   counteract the   load.\n             Completed truss "
},
{
  "id": "pagerank",
  "level": "1",
  "url": "pagerank.html",
  "type": "Section",
  "number": "A.2",
  "title": "Computer Science: PageRank",
  "body": "Computer Science: PageRank Activities \nThe $978,000,000,000 Problem\n         \n             \nIn the picture below, each circle represents a webpage, and each arrow\nrepresents a link from one page to another.\n             A seven-webpage network \nBased on how these pages link to each other,\nwrite a list of the 7 webpages in order from\nmost important to least important.\n             \nThe $978,000,000,000 Idea\n         \nLinks are endorsements. That is:\n         \n                 \nA webpage is important if it is linked to (endorsed) by important pages.\n                 \n             \n                 \nA webpage distributes its importance equally among all the pages it links to\n(endorses).\n                 \n             \nConsider this small network with only three pages.  Let   be the importance of the three pages respectively.\n         A three-webpage network    splits its endorsement in half between   and     sends all of its endorsement to     sends all of its endorsement to  . page rank system A three-webpage network \n         \n             \n   \n             page rank matrix \nThus, computing the importance of pages on a network is equivalent to solving\nthe matrix equation  .\n         \nThus, our $978,000,000,000 problem is what kind of problem?\n             \n         An antiderivative problem A bijection problem A cofactoring problem A determinant problem An eigenvector problem \nFind a page rank vector   satisfying  \nfor the following network's page rank matrix  .\n         \nThat is, find the eigenspace associated with   for the matrix\n , and choose a vector from that eigenspace.\n             A three-webpage network \n \n                 \nRow-reducing\n \nyields the basic eigenvector  .\n             \nTherefore, we may conclude that pages   and   are equally important,\nand both pages are twice as important as page  .\n             \n    Compute the   page rank matrix for the following network.\n             A seven-webpage network \n    For example, since website   distributes its endorsement equally between   and  , the first column is\n                 .\n             \nFind a page rank vector for the given page rank matrix.\n             \n             \n                 A seven-webpage network \nWhich webpage is most important?\n             \nSince a page rank vector for the network is given by  ,\nit's reasonable to consider page   as the most important page.\n \n             \nBased upon this page rank vector,\nhere is a complete ranking of all seven pages from most important to least important:\n             \n             A seven-webpage network \nGiven the following diagram,\nuse a page rank vector to rank the pages   through   in order\nfrom most important to least important.\n             Another seven-webpage network Slideshow Slideshow of activities available at  . "
},
{
  "id": "activity-167",
  "level": "2",
  "url": "pagerank.html#activity-167",
  "type": "Activity",
  "number": "A.2.1",
  "title": "The $978,000,000,000 Problem.",
  "body": "\nThe $978,000,000,000 Problem\n         \n             \nIn the picture below, each circle represents a webpage, and each arrow\nrepresents a link from one page to another.\n             A seven-webpage network \nBased on how these pages link to each other,\nwrite a list of the 7 webpages in order from\nmost important to least important.\n             "
},
{
  "id": "observation-43",
  "level": "2",
  "url": "pagerank.html#observation-43",
  "type": "Observation",
  "number": "A.2.2",
  "title": "The $978,000,000,000 Idea.",
  "body": "\nThe $978,000,000,000 Idea\n         \nLinks are endorsements. That is:\n         \n                 \nA webpage is important if it is linked to (endorsed) by important pages.\n                 \n             \n                 \nA webpage distributes its importance equally among all the pages it links to\n(endorses).\n                 \n             "
},
{
  "id": "example-4",
  "level": "2",
  "url": "pagerank.html#example-4",
  "type": "Example",
  "number": "A.2.3",
  "title": "",
  "body": "\nConsider this small network with only three pages.  Let   be the importance of the three pages respectively.\n         A three-webpage network    splits its endorsement in half between   and     sends all of its endorsement to     sends all of its endorsement to  . page rank system "
},
{
  "id": "observation-44",
  "level": "2",
  "url": "pagerank.html#observation-44",
  "type": "Observation",
  "number": "A.2.4",
  "title": "",
  "body": "A three-webpage network \n         \n             \n   \n             page rank matrix \nThus, computing the importance of pages on a network is equivalent to solving\nthe matrix equation  .\n         "
},
{
  "id": "activity-168",
  "level": "2",
  "url": "pagerank.html#activity-168",
  "type": "Activity",
  "number": "A.2.5",
  "title": "",
  "body": "\nThus, our $978,000,000,000 problem is what kind of problem?\n             \n         An antiderivative problem A bijection problem A cofactoring problem A determinant problem An eigenvector problem "
},
{
  "id": "activity-169",
  "level": "2",
  "url": "pagerank.html#activity-169",
  "type": "Activity",
  "number": "A.2.6",
  "title": "",
  "body": "\nFind a page rank vector   satisfying  \nfor the following network's page rank matrix  .\n         \nThat is, find the eigenspace associated with   for the matrix\n , and choose a vector from that eigenspace.\n             A three-webpage network \n \n                 "
},
{
  "id": "observation-45",
  "level": "2",
  "url": "pagerank.html#observation-45",
  "type": "Observation",
  "number": "A.2.7",
  "title": "",
  "body": "\nRow-reducing\n \nyields the basic eigenvector  .\n             \nTherefore, we may conclude that pages   and   are equally important,\nand both pages are twice as important as page  .\n             "
},
{
  "id": "activity-170",
  "level": "2",
  "url": "pagerank.html#activity-170",
  "type": "Activity",
  "number": "A.2.8",
  "title": "",
  "body": "\n    Compute the   page rank matrix for the following network.\n             A seven-webpage network \n    For example, since website   distributes its endorsement equally between   and  , the first column is\n                 .\n             "
},
{
  "id": "activity-171",
  "level": "2",
  "url": "pagerank.html#activity-171",
  "type": "Activity",
  "number": "A.2.9",
  "title": "",
  "body": "\nFind a page rank vector for the given page rank matrix.\n             \n             \n                 A seven-webpage network \nWhich webpage is most important?\n             "
},
{
  "id": "observation-46",
  "level": "2",
  "url": "pagerank.html#observation-46",
  "type": "Observation",
  "number": "A.2.10",
  "title": "",
  "body": "\nSince a page rank vector for the network is given by  ,\nit's reasonable to consider page   as the most important page.\n \n             \nBased upon this page rank vector,\nhere is a complete ranking of all seven pages from most important to least important:\n             \n             A seven-webpage network "
},
{
  "id": "activity-172",
  "level": "2",
  "url": "pagerank.html#activity-172",
  "type": "Activity",
  "number": "A.2.11",
  "title": "",
  "body": "\nGiven the following diagram,\nuse a page rank vector to rank the pages   through   in order\nfrom most important to least important.\n             Another seven-webpage network "
},
{
  "id": "geology",
  "level": "1",
  "url": "geology.html",
  "type": "Section",
  "number": "A.3",
  "title": "Geology: Phases and Components",
  "body": "Geology: Phases and Components Activities phase component \nIn a typical application, a geologist knows how to build each phase from the components, and is interested in determining reactions among the different phases.\n             \nConsider the 3 components \n \nand the 5 phases:\n \n             \nGeologists already know (or can easily deduce) that\n \nsince, for example:\n \n             \nTo study this vector space, each of the three components   may be considered\nas the three components of a Euclidean vector.\n \n     \nDetermine if the set of phases is linearly dependent or linearly independent.\n     \nGeologists are interested in knowing all the possible chemical reactions among the 5 phases:\n \n \n\nThat is, they want to find numbers   such that \n \n         \nSet up a system of equations equivalent to this vector equation.\n         \nFind a basis for its solution space.\n         \nInterpret each basis vector as a vector equation and a chemical equation.\n         \nWe found two basis vectors \n  and \n , \ncorresponding to the vector and chemical equations\n \n         \nCombine the basis vectors to produce a chemical equation among the five phases that does not involve  .\n         Slideshow Slideshow of activities available at  . "
},
{
  "id": "definition-32",
  "level": "2",
  "url": "geology.html#definition-32",
  "type": "Definition",
  "number": "A.3.1",
  "title": "",
  "body": "phase component \nIn a typical application, a geologist knows how to build each phase from the components, and is interested in determining reactions among the different phases.\n             "
},
{
  "id": "observation-47",
  "level": "2",
  "url": "geology.html#observation-47",
  "type": "Observation",
  "number": "A.3.2",
  "title": "",
  "body": "\nConsider the 3 components \n \nand the 5 phases:\n \n             \nGeologists already know (or can easily deduce) that\n \nsince, for example:\n \n             "
},
{
  "id": "activity-173",
  "level": "2",
  "url": "geology.html#activity-173",
  "type": "Activity",
  "number": "A.3.3",
  "title": "",
  "body": "\nTo study this vector space, each of the three components   may be considered\nas the three components of a Euclidean vector.\n \n     \nDetermine if the set of phases is linearly dependent or linearly independent.\n     "
},
{
  "id": "activity-174",
  "level": "2",
  "url": "geology.html#activity-174",
  "type": "Activity",
  "number": "A.3.4",
  "title": "",
  "body": "\nGeologists are interested in knowing all the possible chemical reactions among the 5 phases:\n \n \n\nThat is, they want to find numbers   such that \n \n         \nSet up a system of equations equivalent to this vector equation.\n         \nFind a basis for its solution space.\n         \nInterpret each basis vector as a vector equation and a chemical equation.\n         "
},
{
  "id": "activity-175",
  "level": "2",
  "url": "geology.html#activity-175",
  "type": "Activity",
  "number": "A.3.5",
  "title": "",
  "body": "\nWe found two basis vectors \n  and \n , \ncorresponding to the vector and chemical equations\n \n         \nCombine the basis vectors to produce a chemical equation among the five phases that does not involve  .\n         "
},
{
  "id": "sample-exercises",
  "level": "1",
  "url": "sample-exercises.html",
  "type": "Section",
  "number": "B.1",
  "title": "Sample Exercises with Solutions",
  "body": "Sample Exercises with Solutions \nHere we model one exercise and solution for each learning objective.\nYour solutions should not look identical to those shown below, but\nthese solutions can give you an idea of the level of detail required\nfor a complete solution.\n     LE1 \nConsider the scalar system of equations \n     \n             \nRewrite this system as a vector equation.\n                 \nWrite an augmented matrix corresponding to this system.\n                 \n \n                 \n                     \n \n                 LE2 \n                 \nFor each of the following matrices, explain why it is not in reduced row\nechelon form.\n                     \n                 \n             \n                 \nShow step-by-step why\n \n             \n         \n             \n                     \n  is not in reduced row echelon form because\nthe pivots are not all  .\n                     \n                 \n                     \n  is not in reduced row echelon form because\nthe pivots are not descending to the right.\n                     \n                 \n                     \n  is not in reduced row echelon form because\nnot every entry above and below each pivot is zero.\n                     \n                 \n         \n     \n             LE3 \nConsider each of the following systems of linear equations\nor vector equations.\n     \n           \n             \n           \n         \n           \n             \n           \n         \n           \n             \n           \n         \n         \nExplain how to find a simpler system or vector equation\nthat has the same solution set for each.\n         \n       \n         \nExplain whether each solution set\nhas no solutions, one solution, or infinitely-many solutions.\nIf the set is finite, describe it using set notation.\n         \n       \n           \n             \n            This matrix corresponds to the simpler system\n                  \n              The third equation   indicates that the system has no solutions.\n            The solution set is  .\n           \n         \n           \n             \n             This matrix corresponds to the simpler system\n                  \n            Since there are three variables and two nontrivial equations, the solution set has infinitely-many solutions.\n           \n         \n           \n             \n            This matrix corresponds to the simpler system\n                                \n            This system has one solution.  \n            The solution set is  .\n           \n         LE4 \nConsider the following\nvector equation.\n       \n     \n         \nExplain how to find a simpler system or vector equation\nthat has the same solution set.\n         \n       \n         \nExplain how to describe this solution set using set notation.\n         \n       First, we compute \n       \n      This corresponds to the simpler system \n \n      Since the second column is a non-pivot column, we let  .  Making this substitution\n        and then solving for  ,  , and   produces the system\n         \n      Thus, the solution set is  .\n     VS1 \nLet   be the set of all pairs of numbers   of real numbers together with the following operations:\n     \n             \nShow that scalar multiplication distributes over vector addition:\n             \n \n         \n             \nExplain why   nonetheless is not a vector space.\n             \n         \n             \nWe compute both sides:\n             \n             \n             \nand\n             \n             \n             \nSince these are the same, we have shown that the property holds.\n             \n         \n             \nTo show   is not a vector space, we must show that it fails one of the 8 defining properties of vector spaces.\nWe will show that scalar multiplication does not distribute over scalar addition, i.e., there are values\nsuch that\n \n             \n             \n                     \n(Solution method 1)\nFirst, we compute\n                     \n                         \n                         \nThen we compute\n                         \n                         \n                         \nSince   when  , the property fails to hold.\n                     \n                 \n                     \n(Solution method 2) When we let  , we may simplify both sides as follows.\n                     \n                     \n                     \n                     \nSince these ordered pairs are different, the property fails to hold.\n                     \n                 \n         VS2 \n                 \nWrite a statement involving the solutions of a vector equation\nthat's equivalent to each claim below.\n                 \n                 \n                             \n is a linear combination of the vectors  .\n                             \n                         \n                             \n is a linear combination of the vectors  .\n                             \n                         \n             \n                 \nUse these statements to determine if each vector\nis or is not a linear combination.\nIf it is, give an example of such a linear combination.\n                 \n               is a linear combination of the vectors   exactly when the vector equation   has a solution.  To solve this vector equation, we compute\n\n                         .\n                         We see that this vector equation has solution set  , so\n                        \n  is a linear combination; for example,\n                             \n                         \n                    is a linear combination of the vectors   exactly when the vector equation   has a solution.  To solve this vector equation, we compute\n                         .\n                    \n                       This vector equation has no solution, so\n  is not a linear combination.\n                         \n                 VS3 \n                 \nWrite a statement involving the solutions of a vector equation that's equivalent to each\nclaim below.\n                 \n                 \n                         \nThe set of vectors    spans   .\n                         \n                     \n                         \nThe set of vectors   does  not  span  .\n                         \n                     \n             \n                 \nExplain how to determine which of these statements is true.\n                 \n              The set of vectors    spans   exactly when the vector equation \n              has a solution   for all   . If there is  some  vector   for which this vector equation has no solution, then the set does not span  . To answer this, we compute  \n             .\n         We see that for some  , this vector equation will not have a solution, so the set of vectors  \n                does  not  span\n .\n         VS4 \nConsider the following two sets of Euclidean vectors.\n \nExplain why one of these sets is a subspace of  , and\nwhy the other is not.\n     \nTo show that   is a subspace, let\n  and\n ,\nso we know that   and  .\n     \nConsider\n \nTo see if  , we need to check if  .\nWe compute\n         \nThus  , so   is closed under vector addition.\n     \nNow consider\n \nSimilarly, to check that  , we need to check if  , so we compute\n         \nand we see that  , so   is closed under scalar \nmultiplication. Therefore   is a subspace of  .\n     \nNow, to show   is not a subspace, we will show that it is not closed under vector addition.\n     \n             \n(Solution Method 1) Now let\n  and\n ,\nso we know that   and  .\n             \n             \nConsider\n \nTo see if  , we need to check if  .\nWe compute\n                 \nand thus   \\textbf{only when}  .\nSince this is not true in general,   is not closed under vector addition, and thus cannot be a subspace.\n             \n         \n             \n(Solution Method 2)\nNote that the vector\n \nbelongs to   since  .\nHowever, the vector\n \ndoes not belong to   since  .\nTherefore   is not closed under scalar multiplication,\nand thus is not a subspace.\n             \n         VS5 \n                 \nWrite a statement involving the solutions of a vector equation that's equivalent to each\nclaim below.\n                 \n                 \n                         \nThe set of vectors   is linearly  independent .\n                         \n                     \n                         \nThe set of vectors   is linearly  dependent .\n                         \n                     \n             \n                 \nExplain how to determine which of these statements is true.\n                 \n              The set of vectors   is linearly independent exactly when the vector equation\n              has no non-trivial (i.e. nonzero) solutions.\n            The set is linearly  dependent  when there exists a nontrivial (i.e. nonzero) solution.  We compute\n             .\n         \n        Thus, this vector equation has a solution set  .  \n        Since there are nontrivial solutions, we conclude that the set of vectors   is linearly\n\n dependent .\n         VS6 \n                 \nWrite a statement involving spanning and independence properties\nthat's equivalent to each claim below.\n                 \n                 \n                         \nThe set of vectors   is a  basis \nof  .\n                         \n                     \n                         \nThe set of vectors   is  not  a basis\nof  .\n                         \n                     \n             \n                 \nExplain how to determine which of these statements is true.\n                 \n             The set of vectors   is a basis\nof   exactly when it is linearly independent  and  the set spans  . \n            If it is either linearly dependent,  or  the set does not span  , then the set is not a basis.\n          To answer this, we compute\n             .\n         We see that this set of vectors is linearly dependent, so therefore \nthe set of vectors   is\n\n not  a basis.\n         VS7 \nConsider the subspace \n \n     \n             \nExplain how to find a basis of  .\n             \n         \n             \nExplain how to find the dimension of  .\n             \n         \n     \nObserve that\n \nIf we remove the vectors yielding non-pivot columns, the resulting\nset will span the same vectors while being linearly independent.\nTherefore\n \nis a basis of  .\n     \n         \n     \nSince this (and thus every other) basis has three vectors in it, the dimension of   is  .\n     \n         VS8 \n                 \nGiven the set\n \nwrite a statement involving the solutions to a \n\npolynomial\nequation that's equivalent to each claim below.\n                 \n                 \n                         \nThe set of \n\npolynomials\nis linearly  independent .\n                         \n                     \n                         \nThe set of \n\npolynomials\nis linearly  dependent .\n                         \n                     \n             \n                 \nExplain how to determine which of these statements is true.\n                 \n             The set of polynomials  \n            is linearly  independent  exactly when the polynomial equation\n             \n            has no nontrivial (i.e. nonzero) solutions.  The set is linearly  dependent  when this equation has a nontrivial (i.e. nonzero) solution. To solve this equation, we distribute and then collect coefficients to obtain\n             .\n            These polynomials are equal precisely when their coefficients are equal, leading to the system\n             .\n         \n            To solve this, we compute\n             \n         \nThe system has (infintely many) nontrivial solutions, so we that the set of polynomials \n    is linearly  dependent .\n         VS9 \nConsider the homogeneous system of equations\n         \n     \n             \nFind the solution space of the system.\n             \n         \n             \nFind a basis of the solution space.\n             \n         \n             \nObserve that\n \n             \n             \nLetting   and  \n(since those correspond to the non-pivot columns),\nthis is equivalent to the system\n\n         \nThus, the solution set is\n \n             \n         \n             \nSince we can write  \na basis for the solution space is\n \n             \n         AT1 \nConsider the following maps of polynomials  \nand   defined by\n \nExplain why one of these maps is a linear transformation, and why the other\nmap is not.\n     \nTo show   is a linear transformation, we must show two things:\n         \n         \n     \nTo show   respects addition, we compute\n         \nBut note that   and  , so we have  .\n     \nFor the second part, we compute\n         \nBut note that   as well, so we have  .\nNow, since   respects both addition and scalar multiplication, we can conclude   is a linear transformation.\n     \n             \n(Solution method 1)\nAs for  , we compute\n                 \nHowever, note that  , which is not\nalways the same polynomial (for example, when  ).\nSo we see that  ,\nso   does not respect addition and is therefore not a linear transformation.\n             \n         \n             \n(Solution method 2)\nAs for  , we may choose the polynomial   and scalar  . Then\n \n             \n             \nBut on the other hand,  \nSince this isn't the same polynomial,   does not preserve multiplication\nand is therefore not a linear transformation.\n             \n         AT2 \n             \nFind the standard matrix for the linear transformation   given by\n \n             \n         \n             \nLet   be the linear transformation given by the standard matrix\n \nCompute  .\n             \n         \n             \nSince\n                 \nthe standard matrix for   is  .\n             \n         \n             \n \n                 \n             \n         AT3 \nLet   be the linear transformation given by\n \n     \n             \nExplain how to find the image of   and the kernel of  . \n             \n         \n             \nExplain how to find a basis of the image of   and a basis of the kernel of  . \n             \n         \n             \nExplain how to find the rank and nullity of T, and why the rank-nullity theorem holds for T.\n             \n         \n             \n                To find the image we compute\n \n                 \n             \n         \n             \nThe kernel is the solution set of the corresponding homogeneous system of equations, i.e.\n                 \nSo we compute\n \nThen, letting   and   we have\n \n             \n         \n             \nSince\n ,\nwe simply need to find a linearly independent subset of these four spanning vectors. So we compute\n \nSince the first two columns are pivot columns, they form a linearly independent spanning set, so a basis for  \nis  \n             \n             \nTo find a basis for the kernel, note that\n \nso a basis for the kernel is\n \n             \n         \n             \nThe dimension of the image (the rank) is  , the dimension of the kernel (the nullity) is  ,\nand the dimension of the domain of   is  , so we see  , which verifies that the sum\nof the rank and nullity of   is the dimension of the domain of  .\n             \n         AT4 \nLet   be the linear transformation given by the standard matrix  .\n     \n             \nExplain why   is or is not injective.\n             \n         \n             \nExplain why   is or is not surjective.\n             \n         \nCompute  \n     \n             \nNote that the third and fourth columns are non-pivot columns, which means   contains infinitely many vectors, so   is not injective.\n             \n         \n             \nSince there are only two pivots, the image (i.e. the span of the columns) is a 2-dimensional subspace (and thus does not equal  ), so   is not surjective.\n             \n         MX1 \nOf the following three matrices, only two may be multiplied.\n     \nExplain which two may be multiplied and why. Then show how to find their product.\n     \n  is the only one that can be computed, since   corresponds to a linear transformation   and   corresponds to a linear transfromation  . Thus the composition   corresponds to a linear transformation   with a    standard matrix.\nWe compute\n     .\n     \nThus\n \n     MX2 \nLet   be a   matrix.\n     \n             \nGive a   matrix   that may be used to perform the row\n      operation  .\n             \n         \n             \nGive a   matrix   that may be used to perform the row\n      operation  .\n             \n         \n             \nUse matrix multiplication to describe the matrix obtained by applying \n          and then  \n      to   (note the order).\n             \n         \n             \n \n             \n         \n             \n \n             \n         \n             \n \n             \n         MX3 \nExplain why each of the following matrices is or is not invertible by\ndisussing its corresponding linear transformation.\nIf the matrix is invertible, explain how to find its inverse.\n         \n        We compute \n .\nWe see   is  bijective, and therefore invertible.  To compute the inverse, we solve   by computing\n .\n                 \nSimilarly, we solve   by computing\n . \n                 \n          Similarly, we solve   by computing\n . \n        Similarly, we solve   by computing\n .\n            \nCombining these, we obtain  .\n We compute\n .\nWe see   is not bijective and thus is  not   invertible.\n GT1 \nLet   be a   matrix with determinant  .\n     \n             \nLet   be the matrix obtained from   by applying the row operation  . What is  ?\n             \n         \n             \nLet   be the matrix obtained from   by applying the row operation  . What is  ?\n             \n         \n             \nLet   be the matrix obtained from   by applying the row operation  . What is  ?\n             \n         \n             \nAdding a multiple of one row to another row does not change the determinant, so  .\n             \n         \n             \nScaling a row scales the determinant by the same factor, so so  .\n             \n         \n             \nSwaping rows changes the sign of the determinant, so  .\n             \n         GT2 \nShow how to compute the determinant of the matrix\n \n     \nHere is one possible solution, first applying a single row operation,\n and then performing Laplace\/cofactor expansions to reduce the determinant\n to a linear combination of   determinants:\n     \nHere is another possible solution, using row and column operations to first reduce\nthe determinant to a   matrix and then applying a formula:\n     GT3 \nExplain how to find the eigenvalues of the matrix  .\n     \nCompute the characteristic polynomial: \n \nThe eigenvalues are the roots of the characteristic polynomial, namely   and  .\n     GT4 \nExplain how to find a basis for the eigenspace associated to the eigenvalue   in the matrix  \n     \nThe eigenspace associated to   is the kernel of  , so we compute\n \nThus we see the kernel is  \nwhich has a basis of  .\n     "
},
{
  "id": "sampleLE1",
  "level": "2",
  "url": "sample-exercises.html#sampleLE1",
  "type": "Example",
  "number": "B.1.1",
  "title": "LE1.",
  "body": "LE1 \nConsider the scalar system of equations \n     \n             \nRewrite this system as a vector equation.\n                 \nWrite an augmented matrix corresponding to this system.\n                 \n \n                 \n                     \n \n                 "
},
{
  "id": "sampleLE2",
  "level": "2",
  "url": "sample-exercises.html#sampleLE2",
  "type": "Example",
  "number": "B.1.2",
  "title": "LE2.",
  "body": "LE2 \n                 \nFor each of the following matrices, explain why it is not in reduced row\nechelon form.\n                     \n                 \n             \n                 \nShow step-by-step why\n \n             \n         \n             \n                     \n  is not in reduced row echelon form because\nthe pivots are not all  .\n                     \n                 \n                     \n  is not in reduced row echelon form because\nthe pivots are not descending to the right.\n                     \n                 \n                     \n  is not in reduced row echelon form because\nnot every entry above and below each pivot is zero.\n                     \n                 \n         \n     \n             "
},
{
  "id": "sampleLE3",
  "level": "2",
  "url": "sample-exercises.html#sampleLE3",
  "type": "Example",
  "number": "B.1.3",
  "title": "LE3.",
  "body": "LE3 \nConsider each of the following systems of linear equations\nor vector equations.\n     \n           \n             \n           \n         \n           \n             \n           \n         \n           \n             \n           \n         \n         \nExplain how to find a simpler system or vector equation\nthat has the same solution set for each.\n         \n       \n         \nExplain whether each solution set\nhas no solutions, one solution, or infinitely-many solutions.\nIf the set is finite, describe it using set notation.\n         \n       \n           \n             \n            This matrix corresponds to the simpler system\n                  \n              The third equation   indicates that the system has no solutions.\n            The solution set is  .\n           \n         \n           \n             \n             This matrix corresponds to the simpler system\n                  \n            Since there are three variables and two nontrivial equations, the solution set has infinitely-many solutions.\n           \n         \n           \n             \n            This matrix corresponds to the simpler system\n                                \n            This system has one solution.  \n            The solution set is  .\n           \n         "
},
{
  "id": "sampleLE4",
  "level": "2",
  "url": "sample-exercises.html#sampleLE4",
  "type": "Example",
  "number": "B.1.4",
  "title": "LE4.",
  "body": "LE4 \nConsider the following\nvector equation.\n       \n     \n         \nExplain how to find a simpler system or vector equation\nthat has the same solution set.\n         \n       \n         \nExplain how to describe this solution set using set notation.\n         \n       First, we compute \n       \n      This corresponds to the simpler system \n \n      Since the second column is a non-pivot column, we let  .  Making this substitution\n        and then solving for  ,  , and   produces the system\n         \n      Thus, the solution set is  .\n     "
},
{
  "id": "sampleVS1",
  "level": "2",
  "url": "sample-exercises.html#sampleVS1",
  "type": "Example",
  "number": "B.1.5",
  "title": "VS1.",
  "body": "VS1 \nLet   be the set of all pairs of numbers   of real numbers together with the following operations:\n     \n             \nShow that scalar multiplication distributes over vector addition:\n             \n \n         \n             \nExplain why   nonetheless is not a vector space.\n             \n         \n             \nWe compute both sides:\n             \n             \n             \nand\n             \n             \n             \nSince these are the same, we have shown that the property holds.\n             \n         \n             \nTo show   is not a vector space, we must show that it fails one of the 8 defining properties of vector spaces.\nWe will show that scalar multiplication does not distribute over scalar addition, i.e., there are values\nsuch that\n \n             \n             \n                     \n(Solution method 1)\nFirst, we compute\n                     \n                         \n                         \nThen we compute\n                         \n                         \n                         \nSince   when  , the property fails to hold.\n                     \n                 \n                     \n(Solution method 2) When we let  , we may simplify both sides as follows.\n                     \n                     \n                     \n                     \nSince these ordered pairs are different, the property fails to hold.\n                     \n                 \n         "
},
{
  "id": "sampleVS2",
  "level": "2",
  "url": "sample-exercises.html#sampleVS2",
  "type": "Example",
  "number": "B.1.6",
  "title": "VS2.",
  "body": "VS2 \n                 \nWrite a statement involving the solutions of a vector equation\nthat's equivalent to each claim below.\n                 \n                 \n                             \n is a linear combination of the vectors  .\n                             \n                         \n                             \n is a linear combination of the vectors  .\n                             \n                         \n             \n                 \nUse these statements to determine if each vector\nis or is not a linear combination.\nIf it is, give an example of such a linear combination.\n                 \n               is a linear combination of the vectors   exactly when the vector equation   has a solution.  To solve this vector equation, we compute\n\n                         .\n                         We see that this vector equation has solution set  , so\n                        \n  is a linear combination; for example,\n                             \n                         \n                    is a linear combination of the vectors   exactly when the vector equation   has a solution.  To solve this vector equation, we compute\n                         .\n                    \n                       This vector equation has no solution, so\n  is not a linear combination.\n                         \n                 "
},
{
  "id": "sampleVS3",
  "level": "2",
  "url": "sample-exercises.html#sampleVS3",
  "type": "Example",
  "number": "B.1.7",
  "title": "VS3.",
  "body": "VS3 \n                 \nWrite a statement involving the solutions of a vector equation that's equivalent to each\nclaim below.\n                 \n                 \n                         \nThe set of vectors    spans   .\n                         \n                     \n                         \nThe set of vectors   does  not  span  .\n                         \n                     \n             \n                 \nExplain how to determine which of these statements is true.\n                 \n              The set of vectors    spans   exactly when the vector equation \n              has a solution   for all   . If there is  some  vector   for which this vector equation has no solution, then the set does not span  . To answer this, we compute  \n             .\n         We see that for some  , this vector equation will not have a solution, so the set of vectors  \n                does  not  span\n .\n         "
},
{
  "id": "sampleVS4",
  "level": "2",
  "url": "sample-exercises.html#sampleVS4",
  "type": "Example",
  "number": "B.1.8",
  "title": "VS4.",
  "body": "VS4 \nConsider the following two sets of Euclidean vectors.\n \nExplain why one of these sets is a subspace of  , and\nwhy the other is not.\n     \nTo show that   is a subspace, let\n  and\n ,\nso we know that   and  .\n     \nConsider\n \nTo see if  , we need to check if  .\nWe compute\n         \nThus  , so   is closed under vector addition.\n     \nNow consider\n \nSimilarly, to check that  , we need to check if  , so we compute\n         \nand we see that  , so   is closed under scalar \nmultiplication. Therefore   is a subspace of  .\n     \nNow, to show   is not a subspace, we will show that it is not closed under vector addition.\n     \n             \n(Solution Method 1) Now let\n  and\n ,\nso we know that   and  .\n             \n             \nConsider\n \nTo see if  , we need to check if  .\nWe compute\n                 \nand thus   \\textbf{only when}  .\nSince this is not true in general,   is not closed under vector addition, and thus cannot be a subspace.\n             \n         \n             \n(Solution Method 2)\nNote that the vector\n \nbelongs to   since  .\nHowever, the vector\n \ndoes not belong to   since  .\nTherefore   is not closed under scalar multiplication,\nand thus is not a subspace.\n             \n         "
},
{
  "id": "sampleVS5",
  "level": "2",
  "url": "sample-exercises.html#sampleVS5",
  "type": "Example",
  "number": "B.1.9",
  "title": "VS5.",
  "body": "VS5 \n                 \nWrite a statement involving the solutions of a vector equation that's equivalent to each\nclaim below.\n                 \n                 \n                         \nThe set of vectors   is linearly  independent .\n                         \n                     \n                         \nThe set of vectors   is linearly  dependent .\n                         \n                     \n             \n                 \nExplain how to determine which of these statements is true.\n                 \n              The set of vectors   is linearly independent exactly when the vector equation\n              has no non-trivial (i.e. nonzero) solutions.\n            The set is linearly  dependent  when there exists a nontrivial (i.e. nonzero) solution.  We compute\n             .\n         \n        Thus, this vector equation has a solution set  .  \n        Since there are nontrivial solutions, we conclude that the set of vectors   is linearly\n\n dependent .\n         "
},
{
  "id": "sampleVS6",
  "level": "2",
  "url": "sample-exercises.html#sampleVS6",
  "type": "Example",
  "number": "B.1.10",
  "title": "VS6.",
  "body": "VS6 \n                 \nWrite a statement involving spanning and independence properties\nthat's equivalent to each claim below.\n                 \n                 \n                         \nThe set of vectors   is a  basis \nof  .\n                         \n                     \n                         \nThe set of vectors   is  not  a basis\nof  .\n                         \n                     \n             \n                 \nExplain how to determine which of these statements is true.\n                 \n             The set of vectors   is a basis\nof   exactly when it is linearly independent  and  the set spans  . \n            If it is either linearly dependent,  or  the set does not span  , then the set is not a basis.\n          To answer this, we compute\n             .\n         We see that this set of vectors is linearly dependent, so therefore \nthe set of vectors   is\n\n not  a basis.\n         "
},
{
  "id": "sampleVS7",
  "level": "2",
  "url": "sample-exercises.html#sampleVS7",
  "type": "Example",
  "number": "B.1.11",
  "title": "VS7.",
  "body": "VS7 \nConsider the subspace \n \n     \n             \nExplain how to find a basis of  .\n             \n         \n             \nExplain how to find the dimension of  .\n             \n         \n     \nObserve that\n \nIf we remove the vectors yielding non-pivot columns, the resulting\nset will span the same vectors while being linearly independent.\nTherefore\n \nis a basis of  .\n     \n         \n     \nSince this (and thus every other) basis has three vectors in it, the dimension of   is  .\n     \n         "
},
{
  "id": "sampleVS8",
  "level": "2",
  "url": "sample-exercises.html#sampleVS8",
  "type": "Example",
  "number": "B.1.12",
  "title": "VS8.",
  "body": "VS8 \n                 \nGiven the set\n \nwrite a statement involving the solutions to a \n\npolynomial\nequation that's equivalent to each claim below.\n                 \n                 \n                         \nThe set of \n\npolynomials\nis linearly  independent .\n                         \n                     \n                         \nThe set of \n\npolynomials\nis linearly  dependent .\n                         \n                     \n             \n                 \nExplain how to determine which of these statements is true.\n                 \n             The set of polynomials  \n            is linearly  independent  exactly when the polynomial equation\n             \n            has no nontrivial (i.e. nonzero) solutions.  The set is linearly  dependent  when this equation has a nontrivial (i.e. nonzero) solution. To solve this equation, we distribute and then collect coefficients to obtain\n             .\n            These polynomials are equal precisely when their coefficients are equal, leading to the system\n             .\n         \n            To solve this, we compute\n             \n         \nThe system has (infintely many) nontrivial solutions, so we that the set of polynomials \n    is linearly  dependent .\n         "
},
{
  "id": "sampleVS9",
  "level": "2",
  "url": "sample-exercises.html#sampleVS9",
  "type": "Example",
  "number": "B.1.13",
  "title": "VS9.",
  "body": "VS9 \nConsider the homogeneous system of equations\n         \n     \n             \nFind the solution space of the system.\n             \n         \n             \nFind a basis of the solution space.\n             \n         \n             \nObserve that\n \n             \n             \nLetting   and  \n(since those correspond to the non-pivot columns),\nthis is equivalent to the system\n\n         \nThus, the solution set is\n \n             \n         \n             \nSince we can write  \na basis for the solution space is\n \n             \n         "
},
{
  "id": "sampleAT1",
  "level": "2",
  "url": "sample-exercises.html#sampleAT1",
  "type": "Example",
  "number": "B.1.14",
  "title": "AT1.",
  "body": "AT1 \nConsider the following maps of polynomials  \nand   defined by\n \nExplain why one of these maps is a linear transformation, and why the other\nmap is not.\n     \nTo show   is a linear transformation, we must show two things:\n         \n         \n     \nTo show   respects addition, we compute\n         \nBut note that   and  , so we have  .\n     \nFor the second part, we compute\n         \nBut note that   as well, so we have  .\nNow, since   respects both addition and scalar multiplication, we can conclude   is a linear transformation.\n     \n             \n(Solution method 1)\nAs for  , we compute\n                 \nHowever, note that  , which is not\nalways the same polynomial (for example, when  ).\nSo we see that  ,\nso   does not respect addition and is therefore not a linear transformation.\n             \n         \n             \n(Solution method 2)\nAs for  , we may choose the polynomial   and scalar  . Then\n \n             \n             \nBut on the other hand,  \nSince this isn't the same polynomial,   does not preserve multiplication\nand is therefore not a linear transformation.\n             \n         "
},
{
  "id": "sampleAT2",
  "level": "2",
  "url": "sample-exercises.html#sampleAT2",
  "type": "Example",
  "number": "B.1.15",
  "title": "AT2.",
  "body": "AT2 \n             \nFind the standard matrix for the linear transformation   given by\n \n             \n         \n             \nLet   be the linear transformation given by the standard matrix\n \nCompute  .\n             \n         \n             \nSince\n                 \nthe standard matrix for   is  .\n             \n         \n             \n \n                 \n             \n         "
},
{
  "id": "sampleAT3",
  "level": "2",
  "url": "sample-exercises.html#sampleAT3",
  "type": "Example",
  "number": "B.1.16",
  "title": "AT3.",
  "body": "AT3 \nLet   be the linear transformation given by\n \n     \n             \nExplain how to find the image of   and the kernel of  . \n             \n         \n             \nExplain how to find a basis of the image of   and a basis of the kernel of  . \n             \n         \n             \nExplain how to find the rank and nullity of T, and why the rank-nullity theorem holds for T.\n             \n         \n             \n                To find the image we compute\n \n                 \n             \n         \n             \nThe kernel is the solution set of the corresponding homogeneous system of equations, i.e.\n                 \nSo we compute\n \nThen, letting   and   we have\n \n             \n         \n             \nSince\n ,\nwe simply need to find a linearly independent subset of these four spanning vectors. So we compute\n \nSince the first two columns are pivot columns, they form a linearly independent spanning set, so a basis for  \nis  \n             \n             \nTo find a basis for the kernel, note that\n \nso a basis for the kernel is\n \n             \n         \n             \nThe dimension of the image (the rank) is  , the dimension of the kernel (the nullity) is  ,\nand the dimension of the domain of   is  , so we see  , which verifies that the sum\nof the rank and nullity of   is the dimension of the domain of  .\n             \n         "
},
{
  "id": "sampleAT4",
  "level": "2",
  "url": "sample-exercises.html#sampleAT4",
  "type": "Example",
  "number": "B.1.17",
  "title": "AT4.",
  "body": "AT4 \nLet   be the linear transformation given by the standard matrix  .\n     \n             \nExplain why   is or is not injective.\n             \n         \n             \nExplain why   is or is not surjective.\n             \n         \nCompute  \n     \n             \nNote that the third and fourth columns are non-pivot columns, which means   contains infinitely many vectors, so   is not injective.\n             \n         \n             \nSince there are only two pivots, the image (i.e. the span of the columns) is a 2-dimensional subspace (and thus does not equal  ), so   is not surjective.\n             \n         "
},
{
  "id": "sampleMX1",
  "level": "2",
  "url": "sample-exercises.html#sampleMX1",
  "type": "Example",
  "number": "B.1.18",
  "title": "MX1.",
  "body": "MX1 \nOf the following three matrices, only two may be multiplied.\n     \nExplain which two may be multiplied and why. Then show how to find their product.\n     \n  is the only one that can be computed, since   corresponds to a linear transformation   and   corresponds to a linear transfromation  . Thus the composition   corresponds to a linear transformation   with a    standard matrix.\nWe compute\n     .\n     \nThus\n \n     "
},
{
  "id": "sampleMX2",
  "level": "2",
  "url": "sample-exercises.html#sampleMX2",
  "type": "Example",
  "number": "B.1.19",
  "title": "MX2.",
  "body": "MX2 \nLet   be a   matrix.\n     \n             \nGive a   matrix   that may be used to perform the row\n      operation  .\n             \n         \n             \nGive a   matrix   that may be used to perform the row\n      operation  .\n             \n         \n             \nUse matrix multiplication to describe the matrix obtained by applying \n          and then  \n      to   (note the order).\n             \n         \n             \n \n             \n         \n             \n \n             \n         \n             \n \n             \n         "
},
{
  "id": "sampleMX3",
  "level": "2",
  "url": "sample-exercises.html#sampleMX3",
  "type": "Example",
  "number": "B.1.20",
  "title": "MX3.",
  "body": "MX3 \nExplain why each of the following matrices is or is not invertible by\ndisussing its corresponding linear transformation.\nIf the matrix is invertible, explain how to find its inverse.\n         \n        We compute \n .\nWe see   is  bijective, and therefore invertible.  To compute the inverse, we solve   by computing\n .\n                 \nSimilarly, we solve   by computing\n . \n                 \n          Similarly, we solve   by computing\n . \n        Similarly, we solve   by computing\n .\n            \nCombining these, we obtain  .\n We compute\n .\nWe see   is not bijective and thus is  not   invertible.\n "
},
{
  "id": "sampleGT1",
  "level": "2",
  "url": "sample-exercises.html#sampleGT1",
  "type": "Example",
  "number": "B.1.21",
  "title": "GT1.",
  "body": "GT1 \nLet   be a   matrix with determinant  .\n     \n             \nLet   be the matrix obtained from   by applying the row operation  . What is  ?\n             \n         \n             \nLet   be the matrix obtained from   by applying the row operation  . What is  ?\n             \n         \n             \nLet   be the matrix obtained from   by applying the row operation  . What is  ?\n             \n         \n             \nAdding a multiple of one row to another row does not change the determinant, so  .\n             \n         \n             \nScaling a row scales the determinant by the same factor, so so  .\n             \n         \n             \nSwaping rows changes the sign of the determinant, so  .\n             \n         "
},
{
  "id": "sampleGT2",
  "level": "2",
  "url": "sample-exercises.html#sampleGT2",
  "type": "Example",
  "number": "B.1.22",
  "title": "GT2.",
  "body": "GT2 \nShow how to compute the determinant of the matrix\n \n     \nHere is one possible solution, first applying a single row operation,\n and then performing Laplace\/cofactor expansions to reduce the determinant\n to a linear combination of   determinants:\n     \nHere is another possible solution, using row and column operations to first reduce\nthe determinant to a   matrix and then applying a formula:\n     "
},
{
  "id": "sampleGT3",
  "level": "2",
  "url": "sample-exercises.html#sampleGT3",
  "type": "Example",
  "number": "B.1.23",
  "title": "GT3.",
  "body": "GT3 \nExplain how to find the eigenvalues of the matrix  .\n     \nCompute the characteristic polynomial: \n \nThe eigenvalues are the roots of the characteristic polynomial, namely   and  .\n     "
},
{
  "id": "sampleGT4",
  "level": "2",
  "url": "sample-exercises.html#sampleGT4",
  "type": "Example",
  "number": "B.1.24",
  "title": "GT4.",
  "body": "GT4 \nExplain how to find a basis for the eigenspace associated to the eigenvalue   in the matrix  \n     \nThe eigenspace associated to   is the kernel of  , so we compute\n \nThus we see the kernel is  \nwhich has a basis of  .\n     "
},
{
  "id": "list-of-definitions",
  "level": "1",
  "url": "list-of-definitions.html",
  "type": "Section",
  "number": "B.2",
  "title": "Definitions",
  "body": "Definitions "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "Index "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
