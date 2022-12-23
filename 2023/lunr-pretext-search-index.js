var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Linear Algebra for Team-Based Inquiry Learning teambasedinquirylearning.github.io\/linear-algebra\/   https:\/\/teambasedinquirylearning.github.io\/linear-algebra\/   copyright  This work includes materials used under license from the following works:    Understanding Linear Algebra       CC BY 4.0      "
},
{
  "id": "tbil-rl",
  "level": "1",
  "url": "tbil-rl.html",
  "type": "Preface",
  "number": "",
  "title": "TBIL Resource Library",
  "body": " TBIL Resource Library  This work is made available as part of the TBIL Resource Library , a product of NSF DUE Award #2011807 .  "
},
{
  "id": "instructor-notes",
  "level": "1",
  "url": "instructor-notes.html",
  "type": "Preface",
  "number": "",
  "title": "For Instructors",
  "body": " For Instructors  If you are adopting this text in your class, please fill out this short form so we can track usage, let you know about updates, etc.  "
},
{
  "id": "video-resources",
  "level": "1",
  "url": "video-resources.html",
  "type": "Preface",
  "number": "",
  "title": "Video Resources",
  "body": " Video Resources  Videos are available at the end of each section. A complete playlist of videos aligned with this text is available on YouTube .  "
},
{
  "id": "slideshows",
  "level": "1",
  "url": "slideshows.html",
  "type": "Preface",
  "number": "",
  "title": "Slideshows",
  "body": " Slideshows  Slides for each section are available in HTML format.    LE     LE1 slides      LE2 slides      LE3 slides      LE4 slides       VS     VS1 slides      VS2 slides      VS3 slides      VS4 slides      VS5 slides      VS6 slides      VS7 slides      VS8 slides      VS9 slides       AT     AT1 slides      AT2 slides      AT3 slides      AT4 slides       MX     MX1 slides      MX2 slides      MX3 slides       GT     GT1 slides      GT2 slides      GT3 slides      GT4 slides       Applications     Civil Engineering slides      Computer Science slides      Geology slides       "
},
{
  "id": "LE1",
  "level": "1",
  "url": "LE1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Linear Systems, Vector Equations, and Augmented Matrices (LE1)",
  "body": " Linear Systems, Vector Equations, and Augmented Matrices (LE1)     Translate back and forth between a system of linear equations, a vector equation, and the corresponding augmented matrix.     Class Activities    A linear equation linear equation is an equation of the variables of the form .  A solution for a linear equation is a Euclidean vector Euclidean vector vector Euclidean  that satisfies (that is, a Euclidean vector that can be plugged into the equation).  linear equation solution     In previous classes you likely used the variables in equations. However, since this course often deals with equations of four or more variables, we will often write our variables as , and assume when convenient.      A system of linear equations (or a linear system for short) is a collection of one or more linear equations.  Its solution set solution set is given by . system of linear equations linear system    When variables in a large linear system are missing, we prefer to write the system in one of the following standard forms:   Original linear system:   Verbose standard form:   Concise standard form:        It will often be convenient to think of a system of equations as a vector equation. vector equation   By applying vector operations and equating components, it is straightforward to see that the vector equation is equivalent to the system of equations       A linear system is consistent linear system consistent if its solution set is non-empty (that is, there exists a solution for the system). Otherwise it is inconsistent . linear system inconsistent       All linear systems are one of the following:   Consistent with one solution: its solution set contains a single vector, e.g.    Consistent with infinitely-many solutions : its solution set contains infinitely many vectors, e.g.   Inconsistent : its solution set is the empty set, denoted by either or .       All inconsistent linear systems contain a logical contradiction . Find a contradiction in this system to show that its solution set is the empty set.       Consider the following consistent linear system.    Find three different solutions for this system.  Let where is an arbitrary real number, then find an expression for in terms of . Use this to write the solution set for the linear system.     Consider the following linear system.   Describe the solution set to the linear system by setting and , and then solving for and .      Solving linear systems of two variables by graphing or substitution is reasonable for two-variable systems, but these simple techniques won't usually cut it for equations with more than two variables or more than two equations. For example, has the exact same solution set as the system in the previous activity, but we'll want to learn new techniques to compute these solutions efficiently.      The only important information in a linear system are its coefficients and constants.   Original linear system:   Verbose standard form:   Coefficients\/constants:        A system of linear equations with variables is often represented by writing its coefficients and constants in an augmented matrix . augmented matrix         The corresponding augmented matrix for this system is obtained by simply writing the coefficients and constants in matrix form.   Linear system:   Augmented matrix:    Vector equation:       Videos      Video: Converting between systems, vector equations, and augmented matrices     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations    Choose a value for the real constant such that the following system has one, many, or no solutions. In each case, write the solution set.  Consider the linear system:        Consider the linear system:  Assume and are arbitrary real numbers.  Choose values for , and , such that . Show that this system is inconsistent.  Prove that, if , the system is consistent with exactly one solution.       Given a set , we can define a relation between two arbitrary elements . If the two elements are related, we denote this .  Any relation on a set that satisfies the properties below is an equivalence relation equivalence relation .  Reflexive : For any  Symmetric : For , if , then  Transitive: for any   For each of the following relations, show that it is or is not an equivalence relation.  For , if an only if .  For , if an only if .     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-2",
  "level": "2",
  "url": "LE1.html#objectives-2",
  "type": "Learning Outcomes",
  "number": "1.1",
  "title": "",
  "body": "   Translate back and forth between a system of linear equations, a vector equation, and the corresponding augmented matrix.    "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "LE1.html#definition-1",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A linear equation linear equation is an equation of the variables of the form .  A solution for a linear equation is a Euclidean vector Euclidean vector vector Euclidean  that satisfies (that is, a Euclidean vector that can be plugged into the equation).  linear equation solution  "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "LE1.html#remark-1",
  "type": "Remark",
  "number": "1.1.2",
  "title": "",
  "body": "  In previous classes you likely used the variables in equations. However, since this course often deals with equations of four or more variables, we will often write our variables as , and assume when convenient.   "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "LE1.html#definition-2",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  A system of linear equations (or a linear system for short) is a collection of one or more linear equations.  Its solution set solution set is given by . system of linear equations linear system "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "LE1.html#remark-2",
  "type": "Remark",
  "number": "1.1.4",
  "title": "",
  "body": "  When variables in a large linear system are missing, we prefer to write the system in one of the following standard forms:   Original linear system:   Verbose standard form:   Concise standard form:     "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "LE1.html#remark-3",
  "type": "Remark",
  "number": "1.1.5",
  "title": "",
  "body": "  It will often be convenient to think of a system of equations as a vector equation. vector equation   By applying vector operations and equating components, it is straightforward to see that the vector equation is equivalent to the system of equations    "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "LE1.html#definition-3",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "  A linear system is consistent linear system consistent if its solution set is non-empty (that is, there exists a solution for the system). Otherwise it is inconsistent . linear system inconsistent    "
},
{
  "id": "fact-1",
  "level": "2",
  "url": "LE1.html#fact-1",
  "type": "Fact",
  "number": "1.1.7",
  "title": "",
  "body": "  All linear systems are one of the following:   Consistent with one solution: its solution set contains a single vector, e.g.    Consistent with infinitely-many solutions : its solution set contains infinitely many vectors, e.g.   Inconsistent : its solution set is the empty set, denoted by either or .    "
},
{
  "id": "activity-1",
  "level": "2",
  "url": "LE1.html#activity-1",
  "type": "Activity",
  "number": "1.1.8",
  "title": "",
  "body": "  All inconsistent linear systems contain a logical contradiction . Find a contradiction in this system to show that its solution set is the empty set.    "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "LE1.html#activity-2",
  "type": "Activity",
  "number": "1.1.9",
  "title": "",
  "body": "  Consider the following consistent linear system.    Find three different solutions for this system.  Let where is an arbitrary real number, then find an expression for in terms of . Use this to write the solution set for the linear system.  "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "LE1.html#activity-3",
  "type": "Activity",
  "number": "1.1.10",
  "title": "",
  "body": "  Consider the following linear system.   Describe the solution set to the linear system by setting and , and then solving for and .   "
},
{
  "id": "observation-1",
  "level": "2",
  "url": "LE1.html#observation-1",
  "type": "Observation",
  "number": "1.1.11",
  "title": "",
  "body": "  Solving linear systems of two variables by graphing or substitution is reasonable for two-variable systems, but these simple techniques won't usually cut it for equations with more than two variables or more than two equations. For example, has the exact same solution set as the system in the previous activity, but we'll want to learn new techniques to compute these solutions efficiently.   "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "LE1.html#remark-4",
  "type": "Remark",
  "number": "1.1.12",
  "title": "",
  "body": "  The only important information in a linear system are its coefficients and constants.   Original linear system:   Verbose standard form:   Coefficients\/constants:     "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "LE1.html#definition-4",
  "type": "Definition",
  "number": "1.1.13",
  "title": "",
  "body": "  A system of linear equations with variables is often represented by writing its coefficients and constants in an augmented matrix . augmented matrix      "
},
{
  "id": "example-1",
  "level": "2",
  "url": "LE1.html#example-1",
  "type": "Example",
  "number": "1.1.14",
  "title": "",
  "body": "  The corresponding augmented matrix for this system is obtained by simply writing the coefficients and constants in matrix form.   Linear system:   Augmented matrix:    Vector equation:    "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "LE1.html#figure-1",
  "type": "Figure",
  "number": "1",
  "title": "",
  "body": "    Video: Converting between systems, vector equations, and augmented matrices  "
},
{
  "id": "exploration-1",
  "level": "2",
  "url": "LE1.html#exploration-1",
  "type": "Exploration",
  "number": "1.1.15",
  "title": "",
  "body": "  Choose a value for the real constant such that the following system has one, many, or no solutions. In each case, write the solution set.  Consider the linear system:    "
},
{
  "id": "exploration-2",
  "level": "2",
  "url": "LE1.html#exploration-2",
  "type": "Exploration",
  "number": "1.1.16",
  "title": "",
  "body": "   Consider the linear system:  Assume and are arbitrary real numbers.  Choose values for , and , such that . Show that this system is inconsistent.  Prove that, if , the system is consistent with exactly one solution.    "
},
{
  "id": "equiv_relation",
  "level": "2",
  "url": "LE1.html#equiv_relation",
  "type": "Exploration",
  "number": "1.1.17",
  "title": "",
  "body": "  Given a set , we can define a relation between two arbitrary elements . If the two elements are related, we denote this .  Any relation on a set that satisfies the properties below is an equivalence relation equivalence relation .  Reflexive : For any  Symmetric : For , if , then  Transitive: for any   For each of the following relations, show that it is or is not an equivalence relation.  For , if an only if .  For , if an only if .  "
},
{
  "id": "LE2",
  "level": "1",
  "url": "LE2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Row Reduction of Matrices (LE2)",
  "body": " Row Reduction of Matrices (LE2)     Explain why a matrix isn’t in reduced row echelon form, and put a matrix in reduced row echelon form.     Class Activities    Two systems of linear equations (and their corresponding augmented matrices) are said to be equivalent equivalent matrices if they have the same solution set.  For example, both of these systems share the same solution set .          Therefore these augmented matrices are equivalent (even though they're not equal ), which we denote with :         Following are seven procedures used to manipulate an augmented matrix. Label the procedures that would result in an equivalent augmented matrix as valid , and label the procedures that might change the solution set of the corresponding linear system as invalid .   Swap two rows.  Swap two columns.  Add a constant to every term in a row.  Multiply a row by a nonzero constant.  Add a constant multiple of one row to another row.  Replace a column with zeros.  Replace a row with zeros.        The following three row operations row operations produce equivalent augmented matrices.   Swap two rows, for example, :     Multiply a row by a nonzero constant, for example, :    Add a constant multiple of one row to another row, for example, :         Consider the following (equivalent) linear systems.   A)   B)   C)     D)   E)   F)    Rank the six linear systems from most complicated to simplest.      We can rewrite the previous in terms of equivalences of augmented matrices   Determine the row operation(s) necessary in each step to transform the most complicated system's augmented matrix into the simplest.      A matrix is in reduced row echelon form ( RREF ) Reduced row echelon form if   The leading term (first nonzero term) of each nonzero row is a 1. Call these terms pivots . pivot   Each pivot is to the right of every higher pivot.  Each term above or below a pivot is zero.  All rows of zeroes are at the bottom of the matrix.   Every matrix has a unique reduced row echelon form. If is a matrix, we write for the reduced row echelon form of that matrix.      Recall that a matrix is in reduced row echelon form ( RREF ) if   The leading term (first nonzero term) of each nonzero row is a 1. Call these terms pivots .  Each pivot is to the right of every higher pivot.  Each term above or below a pivot is zero.  All rows of zeroes are at the bottom of the matrix.   For each matrix, circle the leading terms, and label it as RREF or not RREF. For the ones not in RREF, find their RREF.           Recall that a matrix is in reduced row echelon form ( RREF ) if   The leading term (first nonzero term) of each nonzero row is a 1. Call these terms pivots .  Each pivot is to the right of every higher pivot.  Each term above or below a pivot is zero.  All rows of zeroes are at the bottom of the matrix.   For each matrix, circle the leading terms, and label it as RREF or not RREF. For the ones not in RREF, find their RREF.           In practice, if we simply need to convert a matrix into reduced row echelon form, we use technology to do so.  However, it is also important to understand the Gauss-Jordan elimination Gauss-Jordan elimination algorithm that a computer or calculator uses to convert a matrix (augmented or not) into reduced row echelon form. Understanding this algorithm will help us better understand how to interpret the results in many applications we use it for in Module V.      Consider the matrix Which row operation is the best choice for the first move in converting to RREF?   Add row 3 to row 2 ( )  Add row 2 to row 3 ( )  Swap row 1 to row 2 ( )  Add -2 row 2 to row 1 ( )       Consider the matrix Which row operation is the best choice for the next move in converting to RREF?   Add row 1 to row 3 ( )  Add -2 row 1 to row 2 ( )  Add 2 row 2 to row 3 ( )  Add 2 row 3 to row 2 ( )       Consider the matrix Which row operation is the best choice for the next move in converting to RREF?   Add row 1 to row 2 ( )  Add -1 row 3 to row 2 ( )  Add -1 row 2 to row 3 ( )  Add row 2 to row 1 ( )       Consider the matrix    Perform three row operations to produce a matrix closer to RREF.  Finish putting it in RREF.     Consider the matrix   Compute .      Consider the matrix   Compute .      Videos      Video: Row reduction     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations    Prove that Gauss-Jordan Elimination preserves the solution set of a system of linear equations in variables. Make sure your proof includes each of the following. Just because I've used bullet points here does not mean you should use bullet points in your proof.  Write an arbitrary system of linear equations in variables. Your notation should be unambiguous.  Label an element of your solution set. You won't know what it is exactly, so you'll have to use a variable. Remember what it means (by definition!) to be in the solution set.  Describe the three operations used in Gauss-Jordan Elimination.  Consider all three operations in Gauss-Jordan Elimination. After each one is used, show that the element of the solution set you picked still satisfies the definition.        Let indicate the set of all matrices with real entries. Show that equivalence of matrices as defined in this section is an equivalence relation, as in exploration     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-3",
  "level": "2",
  "url": "LE2.html#objectives-3",
  "type": "Learning Outcomes",
  "number": "1.2",
  "title": "",
  "body": "   Explain why a matrix isn’t in reduced row echelon form, and put a matrix in reduced row echelon form.    "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "LE2.html#definition-5",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Two systems of linear equations (and their corresponding augmented matrices) are said to be equivalent equivalent matrices if they have the same solution set.  For example, both of these systems share the same solution set .          Therefore these augmented matrices are equivalent (even though they're not equal ), which we denote with :     "
},
{
  "id": "activity-4",
  "level": "2",
  "url": "LE2.html#activity-4",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "   Following are seven procedures used to manipulate an augmented matrix. Label the procedures that would result in an equivalent augmented matrix as valid , and label the procedures that might change the solution set of the corresponding linear system as invalid .   Swap two rows.  Swap two columns.  Add a constant to every term in a row.  Multiply a row by a nonzero constant.  Add a constant multiple of one row to another row.  Replace a column with zeros.  Replace a row with zeros.     "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "LE2.html#definition-6",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "  The following three row operations row operations produce equivalent augmented matrices.   Swap two rows, for example, :     Multiply a row by a nonzero constant, for example, :    Add a constant multiple of one row to another row, for example, :      "
},
{
  "id": "activity-5",
  "level": "2",
  "url": "LE2.html#activity-5",
  "type": "Activity",
  "number": "1.2.4",
  "title": "",
  "body": "  Consider the following (equivalent) linear systems.   A)   B)   C)     D)   E)   F)    Rank the six linear systems from most complicated to simplest.   "
},
{
  "id": "activity-6",
  "level": "2",
  "url": "LE2.html#activity-6",
  "type": "Activity",
  "number": "1.2.5",
  "title": "",
  "body": "  We can rewrite the previous in terms of equivalences of augmented matrices   Determine the row operation(s) necessary in each step to transform the most complicated system's augmented matrix into the simplest.   "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "LE2.html#definition-7",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "  A matrix is in reduced row echelon form ( RREF ) Reduced row echelon form if   The leading term (first nonzero term) of each nonzero row is a 1. Call these terms pivots . pivot   Each pivot is to the right of every higher pivot.  Each term above or below a pivot is zero.  All rows of zeroes are at the bottom of the matrix.   Every matrix has a unique reduced row echelon form. If is a matrix, we write for the reduced row echelon form of that matrix.   "
},
{
  "id": "activity-7",
  "level": "2",
  "url": "LE2.html#activity-7",
  "type": "Activity",
  "number": "1.2.7",
  "title": "",
  "body": "  Recall that a matrix is in reduced row echelon form ( RREF ) if   The leading term (first nonzero term) of each nonzero row is a 1. Call these terms pivots .  Each pivot is to the right of every higher pivot.  Each term above or below a pivot is zero.  All rows of zeroes are at the bottom of the matrix.   For each matrix, circle the leading terms, and label it as RREF or not RREF. For the ones not in RREF, find their RREF.        "
},
{
  "id": "activity-8",
  "level": "2",
  "url": "LE2.html#activity-8",
  "type": "Activity",
  "number": "1.2.8",
  "title": "",
  "body": "  Recall that a matrix is in reduced row echelon form ( RREF ) if   The leading term (first nonzero term) of each nonzero row is a 1. Call these terms pivots .  Each pivot is to the right of every higher pivot.  Each term above or below a pivot is zero.  All rows of zeroes are at the bottom of the matrix.   For each matrix, circle the leading terms, and label it as RREF or not RREF. For the ones not in RREF, find their RREF.        "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "LE2.html#remark-5",
  "type": "Remark",
  "number": "1.2.9",
  "title": "",
  "body": "  In practice, if we simply need to convert a matrix into reduced row echelon form, we use technology to do so.  However, it is also important to understand the Gauss-Jordan elimination Gauss-Jordan elimination algorithm that a computer or calculator uses to convert a matrix (augmented or not) into reduced row echelon form. Understanding this algorithm will help us better understand how to interpret the results in many applications we use it for in Module V.   "
},
{
  "id": "activity-9",
  "level": "2",
  "url": "LE2.html#activity-9",
  "type": "Activity",
  "number": "1.2.10",
  "title": "",
  "body": "  Consider the matrix Which row operation is the best choice for the first move in converting to RREF?   Add row 3 to row 2 ( )  Add row 2 to row 3 ( )  Swap row 1 to row 2 ( )  Add -2 row 2 to row 1 ( )    "
},
{
  "id": "activity-10",
  "level": "2",
  "url": "LE2.html#activity-10",
  "type": "Activity",
  "number": "1.2.11",
  "title": "",
  "body": "  Consider the matrix Which row operation is the best choice for the next move in converting to RREF?   Add row 1 to row 3 ( )  Add -2 row 1 to row 2 ( )  Add 2 row 2 to row 3 ( )  Add 2 row 3 to row 2 ( )    "
},
{
  "id": "activity-11",
  "level": "2",
  "url": "LE2.html#activity-11",
  "type": "Activity",
  "number": "1.2.12",
  "title": "",
  "body": "  Consider the matrix Which row operation is the best choice for the next move in converting to RREF?   Add row 1 to row 2 ( )  Add -1 row 3 to row 2 ( )  Add -1 row 2 to row 3 ( )  Add row 2 to row 1 ( )    "
},
{
  "id": "activity-12",
  "level": "2",
  "url": "LE2.html#activity-12",
  "type": "Activity",
  "number": "1.2.13",
  "title": "",
  "body": "  Consider the matrix    Perform three row operations to produce a matrix closer to RREF.  Finish putting it in RREF.  "
},
{
  "id": "activity-13",
  "level": "2",
  "url": "LE2.html#activity-13",
  "type": "Activity",
  "number": "1.2.14",
  "title": "",
  "body": "  Consider the matrix   Compute .   "
},
{
  "id": "activity-14",
  "level": "2",
  "url": "LE2.html#activity-14",
  "type": "Activity",
  "number": "1.2.15",
  "title": "",
  "body": "  Consider the matrix   Compute .   "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "LE2.html#figure-2",
  "type": "Figure",
  "number": "2",
  "title": "",
  "body": "    Video: Row reduction  "
},
{
  "id": "exploration-4",
  "level": "2",
  "url": "LE2.html#exploration-4",
  "type": "Exploration",
  "number": "1.2.16",
  "title": "",
  "body": "  Prove that Gauss-Jordan Elimination preserves the solution set of a system of linear equations in variables. Make sure your proof includes each of the following. Just because I've used bullet points here does not mean you should use bullet points in your proof.  Write an arbitrary system of linear equations in variables. Your notation should be unambiguous.  Label an element of your solution set. You won't know what it is exactly, so you'll have to use a variable. Remember what it means (by definition!) to be in the solution set.  Describe the three operations used in Gauss-Jordan Elimination.  Consider all three operations in Gauss-Jordan Elimination. After each one is used, show that the element of the solution set you picked still satisfies the definition.     "
},
{
  "id": "exploration-5",
  "level": "2",
  "url": "LE2.html#exploration-5",
  "type": "Exploration",
  "number": "1.2.17",
  "title": "",
  "body": "  Let indicate the set of all matrices with real entries. Show that equivalence of matrices as defined in this section is an equivalence relation, as in exploration  "
},
{
  "id": "LE3",
  "level": "1",
  "url": "LE3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Counting Solutions for Linear Systems (LE3)",
  "body": " Counting Solutions for Linear Systems (LE3)     Determine the number of solutions for a system of linear equations or a vector equation.     Class Activities     Free browser-based technologies for mathematical computation are available online.   Go to .   In the dropdown on the right, you can select a number of different languages. Select \"Octave\" for the Matlab-compatible syntax used by this text.   Type rref([1,3,2;2,5,7]) and then press the Evaluate button to compute the of .    Since the vertical bar in an augmented matrix does not affect row operations, the of may be computed in the same way.      In the HTML version of this text, code cells are often embedded for your convenience when RREFs need to be computed.  Try this out to compute .        Consider the following system of equations.  .  Convert this to an augmented matrix and use technology to compute its reduced row echelon form:   Use the matrix to write a linear system equivalent to the original system.  How many solutions must this system have?   Zero    Only one    Infinitely-many        Consider the vector equation    Convert this to an augmented matrix and use technology to compute its reduced row echelon form:  Use the matrix to write a linear system equivalent to the original system.  How many solutions must this system have?   Zero    Only one    Infinitely-many        Is the only possible logical contradiction obtained from the RREF of an augmented matrix?   Yes, is the only possible contradiction from an RREF matrix.  No, is another possible contradiction from an RREF matrix.  No, is another possible contradiction from an RREF matrix.  No, is another possible contradiction from an RREF matrix.       Consider the following linear system.    Find its corresponding augmented matrix and find .  Use the matrix to write a linear system equivalent to the original system.  How many solutions must this system have?   Zero    One    Infinitely-many        We will see in that the intuition established here generalizes: a consistent system with more nontrivial equations than variables will always have infinitely many solutions.      By finding from a linear system's corresponding augmented matrix , we can immediately tell how many solutions the system has.    If the linear system given by includes the contradiction , that is, the row , then the system is inconsistent , which means it has zero solutions and its solution set is written as or .    If the linear system given by sets each variable of the system to a single value; that is, , , and so on; then the system is consistent with exactly one solution , and its solution set is .    Otherwise, the system must be consistent with infinitely-many different solutions. We'll learn how to find such solution sets in .        For each vector equation, write an explanation for whether each solution set has no solutions, one solution, or infinitely-many solutions. If the set is finite, describe it using set notation.                Videos      Video: Finding the number of solutions for a system     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations    A system of equations with all constants equal to 0 is called homogeneous . These are addressed in detail in section   Choose three systems of equations from this chapter that you have already solved. Replace the constants with 0 to make the systems homogeneous. Solve the homogeneous systems and make a conjecture about the relationship between the earlier solutions you found and the associated homogeneous systems.  Prove or disprove. A system of linear equations is homogeneous if an only if it has the the zero vector as a solution.      Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-4",
  "level": "2",
  "url": "LE3.html#objectives-4",
  "type": "Learning Outcomes",
  "number": "1.3",
  "title": "",
  "body": "   Determine the number of solutions for a system of linear equations or a vector equation.    "
},
{
  "id": "activity-15",
  "level": "2",
  "url": "LE3.html#activity-15",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": "  Free browser-based technologies for mathematical computation are available online.   Go to .   In the dropdown on the right, you can select a number of different languages. Select \"Octave\" for the Matlab-compatible syntax used by this text.   Type rref([1,3,2;2,5,7]) and then press the Evaluate button to compute the of .    Since the vertical bar in an augmented matrix does not affect row operations, the of may be computed in the same way.   "
},
{
  "id": "activity-16",
  "level": "2",
  "url": "LE3.html#activity-16",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "  In the HTML version of this text, code cells are often embedded for your convenience when RREFs need to be computed.  Try this out to compute .   "
},
{
  "id": "activity-17",
  "level": "2",
  "url": "LE3.html#activity-17",
  "type": "Activity",
  "number": "1.3.3",
  "title": "",
  "body": "  Consider the following system of equations.  .  Convert this to an augmented matrix and use technology to compute its reduced row echelon form:   Use the matrix to write a linear system equivalent to the original system.  How many solutions must this system have?   Zero    Only one    Infinitely-many    "
},
{
  "id": "activity-18",
  "level": "2",
  "url": "LE3.html#activity-18",
  "type": "Activity",
  "number": "1.3.4",
  "title": "",
  "body": "  Consider the vector equation    Convert this to an augmented matrix and use technology to compute its reduced row echelon form:  Use the matrix to write a linear system equivalent to the original system.  How many solutions must this system have?   Zero    Only one    Infinitely-many    "
},
{
  "id": "activity-19",
  "level": "2",
  "url": "LE3.html#activity-19",
  "type": "Activity",
  "number": "1.3.5",
  "title": "",
  "body": "  Is the only possible logical contradiction obtained from the RREF of an augmented matrix?   Yes, is the only possible contradiction from an RREF matrix.  No, is another possible contradiction from an RREF matrix.  No, is another possible contradiction from an RREF matrix.  No, is another possible contradiction from an RREF matrix.    "
},
{
  "id": "LE3-inf",
  "level": "2",
  "url": "LE3.html#LE3-inf",
  "type": "Activity",
  "number": "1.3.6",
  "title": "",
  "body": "  Consider the following linear system.    Find its corresponding augmented matrix and find .  Use the matrix to write a linear system equivalent to the original system.  How many solutions must this system have?   Zero    One    Infinitely-many    "
},
{
  "id": "fact-2",
  "level": "2",
  "url": "LE3.html#fact-2",
  "type": "Fact",
  "number": "1.3.7",
  "title": "",
  "body": "  We will see in that the intuition established here generalizes: a consistent system with more nontrivial equations than variables will always have infinitely many solutions.   "
},
{
  "id": "fact-3",
  "level": "2",
  "url": "LE3.html#fact-3",
  "type": "Fact",
  "number": "1.3.8",
  "title": "",
  "body": "  By finding from a linear system's corresponding augmented matrix , we can immediately tell how many solutions the system has.    If the linear system given by includes the contradiction , that is, the row , then the system is inconsistent , which means it has zero solutions and its solution set is written as or .    If the linear system given by sets each variable of the system to a single value; that is, , , and so on; then the system is consistent with exactly one solution , and its solution set is .    Otherwise, the system must be consistent with infinitely-many different solutions. We'll learn how to find such solution sets in .     "
},
{
  "id": "activity-21",
  "level": "2",
  "url": "LE3.html#activity-21",
  "type": "Activity",
  "number": "1.3.9",
  "title": "",
  "body": "  For each vector equation, write an explanation for whether each solution set has no solutions, one solution, or infinitely-many solutions. If the set is finite, describe it using set notation.            "
},
{
  "id": "figure-3",
  "level": "2",
  "url": "LE3.html#figure-3",
  "type": "Figure",
  "number": "3",
  "title": "",
  "body": "    Video: Finding the number of solutions for a system  "
},
{
  "id": "exploration-6",
  "level": "2",
  "url": "LE3.html#exploration-6",
  "type": "Exploration",
  "number": "1.3.10",
  "title": "",
  "body": "  A system of equations with all constants equal to 0 is called homogeneous . These are addressed in detail in section   Choose three systems of equations from this chapter that you have already solved. Replace the constants with 0 to make the systems homogeneous. Solve the homogeneous systems and make a conjecture about the relationship between the earlier solutions you found and the associated homogeneous systems.  Prove or disprove. A system of linear equations is homogeneous if an only if it has the the zero vector as a solution.   "
},
{
  "id": "LE4",
  "level": "1",
  "url": "LE4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Linear Systems with Infinitely-Many Solutions (LE4)",
  "body": " Linear Systems with Infinitely-Many Solutions (LE4)     Compute the solution set for a system of linear equations or a vector equation with infinitly many solutions.     Class Activities    Consider this simplified linear system found to be equivalent to the system from :   Earlier, we determined this system has infinitely-many solutions.   Let and write the solution set in the form .  Let and write the solution set in the form .  Which of these was easier? What features of the RREF matrix caused this?     Recall that the pivots of a matrix in form are the leading s in each non-zero row.  The pivot columns in an augmented matrix correspond to the bound variables bound variables in the system of equations ( below). The remaining variables are called free variables free variables ( below).    To efficiently solve a system in RREF form, assign letters to the free variables, and then solve for the bound variables.      Find the solution set for the system by doing the following.   Row-reduce its augmented matrix.  Assign letters to the free variables (given by the non-pivot columns): and .   Solve for the bound variables (given by the pivot columns) to show that ,  ,  and .    Replace through with the appropriate expressions of in the following set-builder notation.          Don't forget to correctly express the solution set of a linear system. Systems with zero or one solutions may be written by listing their elements, while systems with infinitely-many solutions may be written using set-builder notation.    Inconsistent : or (not ).    Consistent with one solution : e.g. (not just ).     Consistent with infinitely-many solutions : e.g. (not just ).        Show how to find the solution set for the vector equation .       Consider the following system of linear equations.   Explain how to find a simpler system or vector equation that has the same solution set.  Explain how to describe this solution set using set notation.      Videos      Video: Solving a system of linear equations with infinitely-many solutions     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations    Construct a system of 3 equations in 3 variables having:  0 free variables  1 free variable  2 free variables  In each case, solve the system you have created. Conjecture a relationship between the number of free variables and the type of solution set that can be obtained from a given system.      For each of the following, decide if it's true or false. If you think it's true, can we construct a proof? If you think it's false, can we find a counterexample?  If the coefficient matrix of a system of linear equations has a pivot in the rightmost column, then the system is inconsistent.  If a system of equations has two equations and four unknowns, then it must be consistent.  If a system of equations having four equations and three unknowns is consistent, then the solution is unique.  Suppose that a linear system has four equations and four unknowns and that the coefficient matrix has four pivots. Then the linear system is consistent and has a unique solution.  Suppose that a linear system has five equations and three unknowns and that the coefficient matrix has a pivot in every column. Then the linear system is consistent and has a unique solution.    Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-5",
  "level": "2",
  "url": "LE4.html#objectives-5",
  "type": "Learning Outcomes",
  "number": "1.4",
  "title": "",
  "body": "   Compute the solution set for a system of linear equations or a vector equation with infinitly many solutions.    "
},
{
  "id": "activity-22",
  "level": "2",
  "url": "LE4.html#activity-22",
  "type": "Activity",
  "number": "1.4.1",
  "title": "",
  "body": "  Consider this simplified linear system found to be equivalent to the system from :   Earlier, we determined this system has infinitely-many solutions.   Let and write the solution set in the form .  Let and write the solution set in the form .  Which of these was easier? What features of the RREF matrix caused this?  "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "LE4.html#definition-8",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": "  Recall that the pivots of a matrix in form are the leading s in each non-zero row.  The pivot columns in an augmented matrix correspond to the bound variables bound variables in the system of equations ( below). The remaining variables are called free variables free variables ( below).    To efficiently solve a system in RREF form, assign letters to the free variables, and then solve for the bound variables.   "
},
{
  "id": "activity-23",
  "level": "2",
  "url": "LE4.html#activity-23",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "  Find the solution set for the system by doing the following.   Row-reduce its augmented matrix.  Assign letters to the free variables (given by the non-pivot columns): and .   Solve for the bound variables (given by the pivot columns) to show that ,  ,  and .    Replace through with the appropriate expressions of in the following set-builder notation.      "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "LE4.html#remark-6",
  "type": "Remark",
  "number": "1.4.4",
  "title": "",
  "body": "  Don't forget to correctly express the solution set of a linear system. Systems with zero or one solutions may be written by listing their elements, while systems with infinitely-many solutions may be written using set-builder notation.    Inconsistent : or (not ).    Consistent with one solution : e.g. (not just ).     Consistent with infinitely-many solutions : e.g. (not just ).     "
},
{
  "id": "activity-24",
  "level": "2",
  "url": "LE4.html#activity-24",
  "type": "Activity",
  "number": "1.4.5",
  "title": "",
  "body": "  Show how to find the solution set for the vector equation .    "
},
{
  "id": "activity-25",
  "level": "2",
  "url": "LE4.html#activity-25",
  "type": "Activity",
  "number": "1.4.6",
  "title": "",
  "body": "  Consider the following system of linear equations.   Explain how to find a simpler system or vector equation that has the same solution set.  Explain how to describe this solution set using set notation.   "
},
{
  "id": "figure-4",
  "level": "2",
  "url": "LE4.html#figure-4",
  "type": "Figure",
  "number": "4",
  "title": "",
  "body": "    Video: Solving a system of linear equations with infinitely-many solutions  "
},
{
  "id": "exploration-7",
  "level": "2",
  "url": "LE4.html#exploration-7",
  "type": "Exploration",
  "number": "1.4.7",
  "title": "",
  "body": "  Construct a system of 3 equations in 3 variables having:  0 free variables  1 free variable  2 free variables  In each case, solve the system you have created. Conjecture a relationship between the number of free variables and the type of solution set that can be obtained from a given system.   "
},
{
  "id": "exploration-8",
  "level": "2",
  "url": "LE4.html#exploration-8",
  "type": "Exploration",
  "number": "1.4.8",
  "title": "",
  "body": "  For each of the following, decide if it's true or false. If you think it's true, can we construct a proof? If you think it's false, can we find a counterexample?  If the coefficient matrix of a system of linear equations has a pivot in the rightmost column, then the system is inconsistent.  If a system of equations has two equations and four unknowns, then it must be consistent.  If a system of equations having four equations and three unknowns is consistent, then the solution is unique.  Suppose that a linear system has four equations and four unknowns and that the coefficient matrix has four pivots. Then the linear system is consistent and has a unique solution.  Suppose that a linear system has five equations and three unknowns and that the coefficient matrix has a pivot in every column. Then the linear system is consistent and has a unique solution. "
},
{
  "id": "VS1",
  "level": "1",
  "url": "VS1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vector Spaces (VS1)",
  "body": " Vector Spaces (VS1)     Explain why a given set with defined addition and scalar multiplication does satisfy a given vector space property, but nonetheless isn't a vector space.     Class Activities    Several properties of the real numbers, such as commutivity: also hold for Euclidean vectors with multiple components: .      Consider each of the following properties of the real numbers . Label each property as valid if the property also holds for two-dimensional Euclidean vectors and numbers , and invalid if it does not.    .     .    There exists some where .    There exists some where .    If , then is the only vector equally distant from both and      .     .    If , then there exists some number such that .     .     .         A vector space vector space  is any set of mathematical objects, called vectors vector , and a set of numbers, called scalars scalar , with associated addition and scalar multiplication operations that satisfy the following properties.  We always assume the codomain of our operations is , i.e. that addition is a map and that scalar multiplication is a map .  Let be vectors belonging to , and let be scalars.   Vector addition is associative: .    Vector addition is commutative: .    An additive identity exists: There exists some where . additive identity     Additive inverses exist: There exists some where . additive inverse     Scalar multiplication is associative: .    1 is a multiplicative identity: .    Scalar multiplication distributes over vector addition: .    Scalar multiplication distributes over scalar addition: .       In this text, we only consider real vector spaces, i.e. those whose scalars come from . However, one can similarly define vector spaces with scalars from other fields like the complex or rational numbers.     Every Euclidean vector space Euclidean vector space  satisfies all eight requirements for the usual definitions of addition and scalar multiplication, but we will also study other types of vector spaces.      The space of  matrices  satisfies all eight requirements for component-wise addition and scalar multiplication.      Every Euclidean space is a vector space, but there are other examples of vector spaces as well.  For example, consider the set of complex numbers with the usual defintions of addition and scalar multiplication, and let , , and . Then   All eight properties can be verified in this way.      The following sets are just a few examples of vector spaces, with the usual\/natural operations for addition and scalar multiplication.     : Euclidean vectors with components.     : Complex numbers.     : Matrices of real numbers with rows and columns.     : Polynomials of degree or less.     : Polynomials of any degree.     : Real-valued continuous functions.        Consider the set .  Which of the following vectors is not in ?                            Consider the set with the operation defined by .  Let be in with and . Using the operations defined for , which of the following is ?                            Consider the set with operations defined by .  Let be scalars and .   Verify that .  Compute the value of .     Consider the set with operations defined by .  Let be unspecified scalars in and be an unspecified vector in .   Show that both sides of the equation simplify to the expression .  Which of the properties from did we verify in the previous task?  Vector addition is associative  is a multiplicative identity  Scalar multiplication distributes over scalar addition   Show that contains an additive identity element satisfying for all by choosing appropriate values for and using those to simplify to .     It turns out with operations defined by satisifes all eight properties from .  Thus, is a vector space.      Let have operations defined by  .   Show that is the scalar multiplication identity element by simplifying to .  Show that does not have an additive identity element by showing that for any possible values of .  Is a vector space according to ?     Let have operations defined by    Show that scalar multiplication distributes over vector addition, i.e. for all  .  Show that vector addition is not associative, i.e. for some vectors .  Is a vector space?     Videos      Video: Verifying that a vector space property holds       Video: Showing something is not a vector space     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations      Show that , the set of positive real numbers, is a vector space, but where really means the product (so ), and where scalar multiplication really means . Yes, you really do need to check all of the properties, but this is the only time I'll make you do so. Remember, examples aren't proofs, so you should start with arbitrary elements of for your vectors. Make sure you're careful about telling the reader what means.  Prove that the additive identity in an arbitrary vector space is unique.  Prove that additive inverses are unique. Assume you have a vector space and some . Further, assume with . Prove that .        Consider the vector space of polynomials, . Suppose further that , where are each positive integers. Conjecture a relationship between and . We will investigate this further in section     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-7",
  "level": "2",
  "url": "VS1.html#objectives-7",
  "type": "Learning Outcomes",
  "number": "2.1",
  "title": "",
  "body": "   Explain why a given set with defined addition and scalar multiplication does satisfy a given vector space property, but nonetheless isn't a vector space.    "
},
{
  "id": "observation-2",
  "level": "2",
  "url": "VS1.html#observation-2",
  "type": "Observation",
  "number": "2.1.1",
  "title": "",
  "body": "  Several properties of the real numbers, such as commutivity: also hold for Euclidean vectors with multiple components: .   "
},
{
  "id": "activity-26",
  "level": "2",
  "url": "VS1.html#activity-26",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  Consider each of the following properties of the real numbers . Label each property as valid if the property also holds for two-dimensional Euclidean vectors and numbers , and invalid if it does not.    .     .    There exists some where .    There exists some where .    If , then is the only vector equally distant from both and      .     .    If , then there exists some number such that .     .     .     "
},
{
  "id": "VS1-properties",
  "level": "2",
  "url": "VS1.html#VS1-properties",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "   A vector space vector space  is any set of mathematical objects, called vectors vector , and a set of numbers, called scalars scalar , with associated addition and scalar multiplication operations that satisfy the following properties.  We always assume the codomain of our operations is , i.e. that addition is a map and that scalar multiplication is a map .  Let be vectors belonging to , and let be scalars.   Vector addition is associative: .    Vector addition is commutative: .    An additive identity exists: There exists some where . additive identity     Additive inverses exist: There exists some where . additive inverse     Scalar multiplication is associative: .    1 is a multiplicative identity: .    Scalar multiplication distributes over vector addition: .    Scalar multiplication distributes over scalar addition: .     "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "VS1.html#remark-7",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": " In this text, we only consider real vector spaces, i.e. those whose scalars come from . However, one can similarly define vector spaces with scalars from other fields like the complex or rational numbers.  "
},
{
  "id": "observation-3",
  "level": "2",
  "url": "VS1.html#observation-3",
  "type": "Observation",
  "number": "2.1.5",
  "title": "",
  "body": "  Every Euclidean vector space Euclidean vector space  satisfies all eight requirements for the usual definitions of addition and scalar multiplication, but we will also study other types of vector spaces.   "
},
{
  "id": "observation-4",
  "level": "2",
  "url": "VS1.html#observation-4",
  "type": "Observation",
  "number": "2.1.6",
  "title": "",
  "body": "  The space of  matrices  satisfies all eight requirements for component-wise addition and scalar multiplication.   "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "VS1.html#remark-8",
  "type": "Remark",
  "number": "2.1.7",
  "title": "",
  "body": "  Every Euclidean space is a vector space, but there are other examples of vector spaces as well.  For example, consider the set of complex numbers with the usual defintions of addition and scalar multiplication, and let , , and . Then   All eight properties can be verified in this way.   "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "VS1.html#remark-9",
  "type": "Remark",
  "number": "2.1.8",
  "title": "",
  "body": "  The following sets are just a few examples of vector spaces, with the usual\/natural operations for addition and scalar multiplication.     : Euclidean vectors with components.     : Complex numbers.     : Matrices of real numbers with rows and columns.     : Polynomials of degree or less.     : Polynomials of any degree.     : Real-valued continuous functions.     "
},
{
  "id": "activity-27",
  "level": "2",
  "url": "VS1.html#activity-27",
  "type": "Activity",
  "number": "2.1.9",
  "title": "",
  "body": "  Consider the set .  Which of the following vectors is not in ?                         "
},
{
  "id": "activity-28",
  "level": "2",
  "url": "VS1.html#activity-28",
  "type": "Activity",
  "number": "2.1.10",
  "title": "",
  "body": "  Consider the set with the operation defined by .  Let be in with and . Using the operations defined for , which of the following is ?                         "
},
{
  "id": "activity-29",
  "level": "2",
  "url": "VS1.html#activity-29",
  "type": "Activity",
  "number": "2.1.11",
  "title": "",
  "body": "  Consider the set with operations defined by .  Let be scalars and .   Verify that .  Compute the value of .  "
},
{
  "id": "activity-30",
  "level": "2",
  "url": "VS1.html#activity-30",
  "type": "Activity",
  "number": "2.1.12",
  "title": "",
  "body": "  Consider the set with operations defined by .  Let be unspecified scalars in and be an unspecified vector in .   Show that both sides of the equation simplify to the expression .  Which of the properties from did we verify in the previous task?  Vector addition is associative  is a multiplicative identity  Scalar multiplication distributes over scalar addition   Show that contains an additive identity element satisfying for all by choosing appropriate values for and using those to simplify to .  "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "VS1.html#remark-10",
  "type": "Remark",
  "number": "2.1.13",
  "title": "",
  "body": "  It turns out with operations defined by satisifes all eight properties from .  Thus, is a vector space.   "
},
{
  "id": "activity-31",
  "level": "2",
  "url": "VS1.html#activity-31",
  "type": "Activity",
  "number": "2.1.14",
  "title": "",
  "body": "  Let have operations defined by  .   Show that is the scalar multiplication identity element by simplifying to .  Show that does not have an additive identity element by showing that for any possible values of .  Is a vector space according to ?  "
},
{
  "id": "activity-32",
  "level": "2",
  "url": "VS1.html#activity-32",
  "type": "Activity",
  "number": "2.1.15",
  "title": "",
  "body": "  Let have operations defined by    Show that scalar multiplication distributes over vector addition, i.e. for all  .  Show that vector addition is not associative, i.e. for some vectors .  Is a vector space?  "
},
{
  "id": "figure-5",
  "level": "2",
  "url": "VS1.html#figure-5",
  "type": "Figure",
  "number": "5",
  "title": "",
  "body": "    Video: Verifying that a vector space property holds  "
},
{
  "id": "figure-6",
  "level": "2",
  "url": "VS1.html#figure-6",
  "type": "Figure",
  "number": "6",
  "title": "",
  "body": "    Video: Showing something is not a vector space  "
},
{
  "id": "exploration-9",
  "level": "2",
  "url": "VS1.html#exploration-9",
  "type": "Exploration",
  "number": "2.1.16",
  "title": "",
  "body": "    Show that , the set of positive real numbers, is a vector space, but where really means the product (so ), and where scalar multiplication really means . Yes, you really do need to check all of the properties, but this is the only time I'll make you do so. Remember, examples aren't proofs, so you should start with arbitrary elements of for your vectors. Make sure you're careful about telling the reader what means.  Prove that the additive identity in an arbitrary vector space is unique.  Prove that additive inverses are unique. Assume you have a vector space and some . Further, assume with . Prove that .     "
},
{
  "id": "exploration-10",
  "level": "2",
  "url": "VS1.html#exploration-10",
  "type": "Exploration",
  "number": "2.1.17",
  "title": "",
  "body": "  Consider the vector space of polynomials, . Suppose further that , where are each positive integers. Conjecture a relationship between and . We will investigate this further in section  "
},
{
  "id": "VS2",
  "level": "1",
  "url": "VS2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Linear Combinations (VS2)",
  "body": " Linear Combinations (VS2)     Determine if a Euclidean vector can be written as a linear combination of a given set of Euclidean vectors by solving an appropriate vector equation.     Class Activities    A linear combination  linear combination of a set of vectors is given by for any choice of scalar multiples .  For example, we can say is a linear combination of the vectors and since .      The span span of a set of vectors is the collection of all linear combinations of that set: .  For example: .        Consider .   Sketch , , , and in the plane.  Sketch a representation of all the vectors belonging to in the plane.     Consider .   Sketch the following linear combinations in the plane.    Sketch a representation of all the vectors belonging to in the plane.     Sketch a representation of all the vectors belonging to in the plane.      The vector belongs to exactly when there exists a solution to the vector equation .   Reinterpret this vector equation as a system of linear equations.  Find its solution set, using technology to find of its corresponding augmented matrix.  Given this solution set, does belong to ?      A vector belongs to if and only if the vector equation is consistent.      The following are all equivalent statements:    The vector belongs to .    The vector equation is consistent.    The linear system corresponding to is consistent.     doesn't have a row representing the contradiction .        Determine if belongs to by solving an appropriate vector equation.       Determine if belongs to by solving an appropriate vector equation.       Does the third-degree polynomial in belong to ?   Reinterpret this question as a question about the solution(s) of a polynomial equation:  Write a Euclidean vector equation that has the same solution set:  Answer this equivalent question, and use its solution to answer the original question.      Does the polynomial belong to ?      Does the matrix belong to ?    Reinterpret this question as a question about the solution(s) of a matrix equation.  Answer this equivalent question, and use its solution to answer the original question.      Videos      Video: Linear combinations     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations    Suppose is a set of vectors. Show that is a linear combination of members of , if an only if there are a set of scalars such that We can do this in a few parts. I've used bullets here to indicate all that needs to be done. This is an \"if and only if\" proof, so it needs two parts.  First, assume that has a solution, with . Show that is a linear combination of elements of .  Next, assume that is a linear combination of elements of . Can you find the appropriate to make the equation true?  In either of your proofs above, does the case when change your thinking? Explain why or why not.        Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-8",
  "level": "2",
  "url": "VS2.html#objectives-8",
  "type": "Learning Outcomes",
  "number": "2.2",
  "title": "",
  "body": "   Determine if a Euclidean vector can be written as a linear combination of a given set of Euclidean vectors by solving an appropriate vector equation.    "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "VS2.html#definition-10",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  A linear combination  linear combination of a set of vectors is given by for any choice of scalar multiples .  For example, we can say is a linear combination of the vectors and since .   "
},
{
  "id": "definition-11",
  "level": "2",
  "url": "VS2.html#definition-11",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "  The span span of a set of vectors is the collection of all linear combinations of that set: .  For example: .   "
},
{
  "id": "activity-33",
  "level": "2",
  "url": "VS2.html#activity-33",
  "type": "Activity",
  "number": "2.2.3",
  "title": "",
  "body": "  Consider .   Sketch , , , and in the plane.  Sketch a representation of all the vectors belonging to in the plane.  "
},
{
  "id": "activity-34",
  "level": "2",
  "url": "VS2.html#activity-34",
  "type": "Activity",
  "number": "2.2.4",
  "title": "",
  "body": "  Consider .   Sketch the following linear combinations in the plane.    Sketch a representation of all the vectors belonging to in the plane.  "
},
{
  "id": "activity-35",
  "level": "2",
  "url": "VS2.html#activity-35",
  "type": "Activity",
  "number": "2.2.5",
  "title": "",
  "body": "  Sketch a representation of all the vectors belonging to in the plane.   "
},
{
  "id": "activity-36",
  "level": "2",
  "url": "VS2.html#activity-36",
  "type": "Activity",
  "number": "2.2.6",
  "title": "",
  "body": "  The vector belongs to exactly when there exists a solution to the vector equation .   Reinterpret this vector equation as a system of linear equations.  Find its solution set, using technology to find of its corresponding augmented matrix.  Given this solution set, does belong to ?  "
},
{
  "id": "fact-4",
  "level": "2",
  "url": "VS2.html#fact-4",
  "type": "Fact",
  "number": "2.2.7",
  "title": "",
  "body": "  A vector belongs to if and only if the vector equation is consistent.   "
},
{
  "id": "observation-5",
  "level": "2",
  "url": "VS2.html#observation-5",
  "type": "Observation",
  "number": "2.2.8",
  "title": "",
  "body": "  The following are all equivalent statements:    The vector belongs to .    The vector equation is consistent.    The linear system corresponding to is consistent.     doesn't have a row representing the contradiction .     "
},
{
  "id": "activity-37",
  "level": "2",
  "url": "VS2.html#activity-37",
  "type": "Activity",
  "number": "2.2.9",
  "title": "",
  "body": "  Determine if belongs to by solving an appropriate vector equation.   "
},
{
  "id": "activity-38",
  "level": "2",
  "url": "VS2.html#activity-38",
  "type": "Activity",
  "number": "2.2.10",
  "title": "",
  "body": "  Determine if belongs to by solving an appropriate vector equation.   "
},
{
  "id": "activity-39",
  "level": "2",
  "url": "VS2.html#activity-39",
  "type": "Activity",
  "number": "2.2.11",
  "title": "",
  "body": "  Does the third-degree polynomial in belong to ?   Reinterpret this question as a question about the solution(s) of a polynomial equation:  Write a Euclidean vector equation that has the same solution set:  Answer this equivalent question, and use its solution to answer the original question.  "
},
{
  "id": "activity-40",
  "level": "2",
  "url": "VS2.html#activity-40",
  "type": "Activity",
  "number": "2.2.12",
  "title": "",
  "body": "  Does the polynomial belong to ?   "
},
{
  "id": "activity-41",
  "level": "2",
  "url": "VS2.html#activity-41",
  "type": "Activity",
  "number": "2.2.13",
  "title": "",
  "body": "  Does the matrix belong to ?    Reinterpret this question as a question about the solution(s) of a matrix equation.  Answer this equivalent question, and use its solution to answer the original question.  "
},
{
  "id": "figure-7",
  "level": "2",
  "url": "VS2.html#figure-7",
  "type": "Figure",
  "number": "7",
  "title": "",
  "body": "    Video: Linear combinations  "
},
{
  "id": "exploration-11",
  "level": "2",
  "url": "VS2.html#exploration-11",
  "type": "Exploration",
  "number": "2.2.14",
  "title": "",
  "body": "  Suppose is a set of vectors. Show that is a linear combination of members of , if an only if there are a set of scalars such that We can do this in a few parts. I've used bullets here to indicate all that needs to be done. This is an \"if and only if\" proof, so it needs two parts.  First, assume that has a solution, with . Show that is a linear combination of elements of .  Next, assume that is a linear combination of elements of . Can you find the appropriate to make the equation true?  In either of your proofs above, does the case when change your thinking? Explain why or why not.     "
},
{
  "id": "VS3",
  "level": "1",
  "url": "VS3.html",
  "type": "Section",
  "number": "2.3",
  "title": "Spanning Sets (VS3)",
  "body": " Spanning Sets (VS3)     Determine if a set of Euclidean vectors spans by solving appropriate vector equations.     Class Activities    Any single non-zero vector\/number in spans , since .      An vector       How many vectors are required to span ? Sketch a drawing in the plane to support your answer.      The plane                         Infinitely Many        How many vectors are required to span ?      space                         Infinitely Many        At least vectors are required to span .      Failed attempts to span by vectors       Consider the question: Does every vector in belong to ?    Determine if belongs to .    Write a system of equations to determine if the arbitrary vector belongs to .    Write down the simpler system of equations that results from computing the RREF of the corresponding augmented matrix.      The vector equation simplifies to the system of equations . This last equation gives a relation among the components of the vector that must be satisfied for it to belong to the span. Thus, we can conclude that is not all of , as we can find some vector that does not satisfy the equation .      The set fails to span all of exactly when the vector equation is inconsistent for some vector .  Note that this happens exactly when has a non-pivot row of zeros. as then must have a pivot in one of the last three columns.  Conversely, if has a pivot in each row, there will not be a relation solely among , in which case .      Consider the set of vectors and the question Does ?    Rewrite this question in terms of the solutions to a vector equation.  Answer your new question, and use this to answer the original question.      Consider the set of third-degree polynomials and the question Does ?    Rewrite this question to be about the solutions to a polynomial equation.  Answer your new question, and use this to answer the original question.      Consider the set of matrices and the question Does ?    Rewrite this as a question about the solutions to a matrix equation.  Answer your new question, and use this to answer the original question.      Let be three vectors, and suppose is another vector with . What can you conclude about ?    is larger than .   .   is smaller than .       Videos      Video: Determining if a set spans a Euclidean space     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   Construct each of the following, or show that it is impossible:  A set of 2 vectors that spans  A set of 3 vectors that spans  A set of 3 vectors that does not span  A set of 4 vectors that spans  For any of the sets you constructed that did span the required space, are any of the vectors a linear combination of the others in your set?    Based on these results, generalize this a conjecture about how a set of and vectors would or would not span .     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-9",
  "level": "2",
  "url": "VS3.html#objectives-9",
  "type": "Learning Outcomes",
  "number": "2.3",
  "title": "",
  "body": "   Determine if a set of Euclidean vectors spans by solving appropriate vector equations.    "
},
{
  "id": "observation-6",
  "level": "2",
  "url": "VS3.html#observation-6",
  "type": "Observation",
  "number": "2.3.1",
  "title": "",
  "body": "  Any single non-zero vector\/number in spans , since .      An vector    "
},
{
  "id": "activity-42",
  "level": "2",
  "url": "VS3.html#activity-42",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": "  How many vectors are required to span ? Sketch a drawing in the plane to support your answer.      The plane                         Infinitely Many     "
},
{
  "id": "activity-43",
  "level": "2",
  "url": "VS3.html#activity-43",
  "type": "Activity",
  "number": "2.3.3",
  "title": "",
  "body": "  How many vectors are required to span ?      space                         Infinitely Many     "
},
{
  "id": "fact-5",
  "level": "2",
  "url": "VS3.html#fact-5",
  "type": "Fact",
  "number": "2.3.4",
  "title": "",
  "body": "  At least vectors are required to span .      Failed attempts to span by vectors    "
},
{
  "id": "activity-44",
  "level": "2",
  "url": "VS3.html#activity-44",
  "type": "Activity",
  "number": "2.3.5",
  "title": "",
  "body": "  Consider the question: Does every vector in belong to ?    Determine if belongs to .    Write a system of equations to determine if the arbitrary vector belongs to .    Write down the simpler system of equations that results from computing the RREF of the corresponding augmented matrix.   "
},
{
  "id": "observation-7",
  "level": "2",
  "url": "VS3.html#observation-7",
  "type": "Observation",
  "number": "2.3.6",
  "title": "",
  "body": "  The vector equation simplifies to the system of equations . This last equation gives a relation among the components of the vector that must be satisfied for it to belong to the span. Thus, we can conclude that is not all of , as we can find some vector that does not satisfy the equation .   "
},
{
  "id": "fact-6",
  "level": "2",
  "url": "VS3.html#fact-6",
  "type": "Fact",
  "number": "2.3.7",
  "title": "",
  "body": "  The set fails to span all of exactly when the vector equation is inconsistent for some vector .  Note that this happens exactly when has a non-pivot row of zeros. as then must have a pivot in one of the last three columns.  Conversely, if has a pivot in each row, there will not be a relation solely among , in which case .   "
},
{
  "id": "activity-45",
  "level": "2",
  "url": "VS3.html#activity-45",
  "type": "Activity",
  "number": "2.3.8",
  "title": "",
  "body": "  Consider the set of vectors and the question Does ?    Rewrite this question in terms of the solutions to a vector equation.  Answer your new question, and use this to answer the original question.  "
},
{
  "id": "activity-46",
  "level": "2",
  "url": "VS3.html#activity-46",
  "type": "Activity",
  "number": "2.3.9",
  "title": "",
  "body": "  Consider the set of third-degree polynomials and the question Does ?    Rewrite this question to be about the solutions to a polynomial equation.  Answer your new question, and use this to answer the original question.  "
},
{
  "id": "activity-47",
  "level": "2",
  "url": "VS3.html#activity-47",
  "type": "Activity",
  "number": "2.3.10",
  "title": "",
  "body": "  Consider the set of matrices and the question Does ?    Rewrite this as a question about the solutions to a matrix equation.  Answer your new question, and use this to answer the original question.  "
},
{
  "id": "activity-48",
  "level": "2",
  "url": "VS3.html#activity-48",
  "type": "Activity",
  "number": "2.3.11",
  "title": "",
  "body": "  Let be three vectors, and suppose is another vector with . What can you conclude about ?    is larger than .   .   is smaller than .    "
},
{
  "id": "figure-12",
  "level": "2",
  "url": "VS3.html#figure-12",
  "type": "Figure",
  "number": "12",
  "title": "",
  "body": "    Video: Determining if a set spans a Euclidean space  "
},
{
  "id": "exploration-12",
  "level": "2",
  "url": "VS3.html#exploration-12",
  "type": "Exploration",
  "number": "2.3.12",
  "title": "",
  "body": " Construct each of the following, or show that it is impossible:  A set of 2 vectors that spans  A set of 3 vectors that spans  A set of 3 vectors that does not span  A set of 4 vectors that spans  For any of the sets you constructed that did span the required space, are any of the vectors a linear combination of the others in your set?  "
},
{
  "id": "exploration-13",
  "level": "2",
  "url": "VS3.html#exploration-13",
  "type": "Exploration",
  "number": "2.3.13",
  "title": "",
  "body": " Based on these results, generalize this a conjecture about how a set of and vectors would or would not span .  "
},
{
  "id": "VS4",
  "level": "1",
  "url": "VS4.html",
  "type": "Section",
  "number": "2.4",
  "title": "Subspaces (VS4)",
  "body": " Subspaces (VS4)     Determine if a subset of is a subspace or not.     Class Activities    Consider two non-colinear vectors in . If we look at all linear combinations of those two vectors (that is, their span ), we end up with a plane within . Call this plane .         Are all of the vectors in also in ?    Let be the additive identity in . Is ?    For any unspecified , is it the case that ?    For any unspecified and , is it the case that ?        A subset of a vector space is called a subspace subspace if it is a vector space on its own. The operations of addition and scalar from the parent vector space are inherited by the subspace.      Note the similarities between a planar subspace spanned by two non-colinear vectors in , and the Euclidean plane . While they are not the same thing (and shouldn't be referred to interchangably), algebraists call such similar spaces isomorphic isomorphic ; we'll learn what this means more carefully in a later chapter.     A planar subset of compared with the plane .   A planar subset of compared with the plane .       In order for a nonempty sub set  of a vector space to be a sub space , we must first check that the operations inherits from are defined on .  Recall that we are using the convention that an \"operation on \" must have a codomain of .  In other words, we need to check two things:    The set is closed under addition vector space closed under addition : for any , the sum is also in .    The set is closed under scalar multiplication vector space closed under scalar multiplication : for any and scalar , the product is also in .    Once we have verified the operations are closed and thus well-defined on , we get the eight vector space properties for free.   Six of the eight (e.g. commutativity) propertieshold directly since they hold in .    Since and is closed under scalar multiplication, we see is in for any .    Since and is closed under scalar multiplication, we see is in for any .       Let .   Let and be vectors in , so and . Show that also belongs to by verifying that .  Let , so . Show that also belongs to for any by verifying an appropriate equation.  Is is a subspace of ?     Let . Choose a vector in and a real number , and show that isn't in . Is a subspace of ?      Since is a scalar and for any vector , a nonempty set that is closed under scalar multiplication must contain the zero vector for that vector space.  Put another way, you can check any of the following to show that a nonempty subset isn't a subspace:    Show that .    Find such that .    Find such that .    If you cannot do any of these, then can be proven to be a subspace by doing the following:    Prove that whenever .    Prove that whenever .        Consider these subsets of : .   Show isn't a subspace by showing that .  Show isn't a subspace by finding two vectors such that .  Show isn't a subspace by finding a vector such that .     Consider these subsets of , the vector space of all matrices with real entries. Show that each of these sets is or is not a subspace of .    .   .   .   .     Let be a subspace of a vector space . How are and related?     may include vectors that aren't in      may include vectors that aren't in      and always contain the same vectors        If is any subset of a vector space , then since collects all possible linear combinations, is automatically a subspace of .  In fact, is always the smallest subspace of that contains all the vectors in .      Videos      Video: Showing that a subset of a vector space is a subspace       Video: Showing that a subset of a vector space is not a subspace     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   A square matrix is symmetric symmetric matrix if, for each index , the entries . That is, the matrix is itself when reflected over the diagonal from upper left to lower right. Prove that the set of symmetric matrices is a subspace of . s   The space of all real-valued function of one real variable is a vector space. First, define and for this vector space. Check that you have closure (both kinds!) and show what the zero vector is under your chosen addition. Decide if each of the following is a subspace. If so, prove it. If not, provide the counterexample.  The set of even functions, .  The set of odd functions, .     Give an example of each of these, or explain why it's not possible that such a thing would exist.  A nonempty subset of that is not a subspace.  A set of two vectors in that is not a spanning set.     Let be a vector space and a subset of . Show that the span of is a subspace. Is it possible that there is a subset of containing fewer vectors than , but whose span contains all of the vectors in the span of ?    Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-10",
  "level": "2",
  "url": "VS4.html#objectives-10",
  "type": "Learning Outcomes",
  "number": "2.4",
  "title": "",
  "body": "   Determine if a subset of is a subspace or not.    "
},
{
  "id": "activity-49",
  "level": "2",
  "url": "VS4.html#activity-49",
  "type": "Activity",
  "number": "2.4.1",
  "title": "",
  "body": "  Consider two non-colinear vectors in . If we look at all linear combinations of those two vectors (that is, their span ), we end up with a plane within . Call this plane .         Are all of the vectors in also in ?    Let be the additive identity in . Is ?    For any unspecified , is it the case that ?    For any unspecified and , is it the case that ?     "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "VS4.html#definition-12",
  "type": "Definition",
  "number": "2.4.2",
  "title": "",
  "body": "  A subset of a vector space is called a subspace subspace if it is a vector space on its own. The operations of addition and scalar from the parent vector space are inherited by the subspace.   "
},
{
  "id": "observation-8",
  "level": "2",
  "url": "VS4.html#observation-8",
  "type": "Observation",
  "number": "2.4.3",
  "title": "",
  "body": "  Note the similarities between a planar subspace spanned by two non-colinear vectors in , and the Euclidean plane . While they are not the same thing (and shouldn't be referred to interchangably), algebraists call such similar spaces isomorphic isomorphic ; we'll learn what this means more carefully in a later chapter.     A planar subset of compared with the plane .   A planar subset of compared with the plane .    "
},
{
  "id": "fact-7",
  "level": "2",
  "url": "VS4.html#fact-7",
  "type": "Fact",
  "number": "2.4.4",
  "title": "",
  "body": "  In order for a nonempty sub set  of a vector space to be a sub space , we must first check that the operations inherits from are defined on .  Recall that we are using the convention that an \"operation on \" must have a codomain of .  In other words, we need to check two things:    The set is closed under addition vector space closed under addition : for any , the sum is also in .    The set is closed under scalar multiplication vector space closed under scalar multiplication : for any and scalar , the product is also in .    Once we have verified the operations are closed and thus well-defined on , we get the eight vector space properties for free.   Six of the eight (e.g. commutativity) propertieshold directly since they hold in .    Since and is closed under scalar multiplication, we see is in for any .    Since and is closed under scalar multiplication, we see is in for any .    "
},
{
  "id": "activity-50",
  "level": "2",
  "url": "VS4.html#activity-50",
  "type": "Activity",
  "number": "2.4.5",
  "title": "",
  "body": "  Let .   Let and be vectors in , so and . Show that also belongs to by verifying that .  Let , so . Show that also belongs to for any by verifying an appropriate equation.  Is is a subspace of ?  "
},
{
  "id": "activity-51",
  "level": "2",
  "url": "VS4.html#activity-51",
  "type": "Activity",
  "number": "2.4.6",
  "title": "",
  "body": "  Let . Choose a vector in and a real number , and show that isn't in . Is a subspace of ?   "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "VS4.html#remark-11",
  "type": "Remark",
  "number": "2.4.7",
  "title": "",
  "body": "  Since is a scalar and for any vector , a nonempty set that is closed under scalar multiplication must contain the zero vector for that vector space.  Put another way, you can check any of the following to show that a nonempty subset isn't a subspace:    Show that .    Find such that .    Find such that .    If you cannot do any of these, then can be proven to be a subspace by doing the following:    Prove that whenever .    Prove that whenever .     "
},
{
  "id": "activity-52",
  "level": "2",
  "url": "VS4.html#activity-52",
  "type": "Activity",
  "number": "2.4.8",
  "title": "",
  "body": "  Consider these subsets of : .   Show isn't a subspace by showing that .  Show isn't a subspace by finding two vectors such that .  Show isn't a subspace by finding a vector such that .  "
},
{
  "id": "activity-53",
  "level": "2",
  "url": "VS4.html#activity-53",
  "type": "Activity",
  "number": "2.4.9",
  "title": "",
  "body": "  Consider these subsets of , the vector space of all matrices with real entries. Show that each of these sets is or is not a subspace of .    .   .   .   .  "
},
{
  "id": "activity-54",
  "level": "2",
  "url": "VS4.html#activity-54",
  "type": "Activity",
  "number": "2.4.10",
  "title": "",
  "body": "  Let be a subspace of a vector space . How are and related?     may include vectors that aren't in      may include vectors that aren't in      and always contain the same vectors     "
},
{
  "id": "fact-8",
  "level": "2",
  "url": "VS4.html#fact-8",
  "type": "Fact",
  "number": "2.4.11",
  "title": "",
  "body": "  If is any subset of a vector space , then since collects all possible linear combinations, is automatically a subspace of .  In fact, is always the smallest subspace of that contains all the vectors in .   "
},
{
  "id": "figure-14",
  "level": "2",
  "url": "VS4.html#figure-14",
  "type": "Figure",
  "number": "14",
  "title": "",
  "body": "    Video: Showing that a subset of a vector space is a subspace  "
},
{
  "id": "figure-15",
  "level": "2",
  "url": "VS4.html#figure-15",
  "type": "Figure",
  "number": "15",
  "title": "",
  "body": "    Video: Showing that a subset of a vector space is not a subspace  "
},
{
  "id": "exploration-14",
  "level": "2",
  "url": "VS4.html#exploration-14",
  "type": "Exploration",
  "number": "2.4.12",
  "title": "",
  "body": " A square matrix is symmetric symmetric matrix if, for each index , the entries . That is, the matrix is itself when reflected over the diagonal from upper left to lower right. Prove that the set of symmetric matrices is a subspace of . s "
},
{
  "id": "exploration-15",
  "level": "2",
  "url": "VS4.html#exploration-15",
  "type": "Exploration",
  "number": "2.4.13",
  "title": "",
  "body": " The space of all real-valued function of one real variable is a vector space. First, define and for this vector space. Check that you have closure (both kinds!) and show what the zero vector is under your chosen addition. Decide if each of the following is a subspace. If so, prove it. If not, provide the counterexample.  The set of even functions, .  The set of odd functions, .   "
},
{
  "id": "exploration-16",
  "level": "2",
  "url": "VS4.html#exploration-16",
  "type": "Exploration",
  "number": "2.4.14",
  "title": "",
  "body": " Give an example of each of these, or explain why it's not possible that such a thing would exist.  A nonempty subset of that is not a subspace.  A set of two vectors in that is not a spanning set.   "
},
{
  "id": "exploration-17",
  "level": "2",
  "url": "VS4.html#exploration-17",
  "type": "Exploration",
  "number": "2.4.15",
  "title": "",
  "body": " Let be a vector space and a subset of . Show that the span of is a subspace. Is it possible that there is a subset of containing fewer vectors than , but whose span contains all of the vectors in the span of ? "
},
{
  "id": "VS5",
  "level": "1",
  "url": "VS5.html",
  "type": "Section",
  "number": "2.5",
  "title": "Linear Independence (VS5)",
  "body": " Linear Independence (VS5)     Determine if a set of Euclidean vectors is linearly dependent or independent by solving an appropriate vector equation.     Class Activities    Consider the two sets . Which of the following is true?    is bigger than .   and are the same size.   is smaller than .       We say that a set of vectors is linearly dependent linearly dependent if one vector in the set belongs to the span of the others. Otherwise, we say the set is linearly independent . linearly independent       A linearly dependent set of three vectors   You can think of linearly dependent sets as containing a redundant vector, in the sense that you can drop a vector out without reducing the span of the set. In the above image, all three vectors lay in the same planar subspace, but only two vectors are needed to span the plane, so the set is linearly dependent.      Begin with 3 vectors in  .   Choose three non-zero scalars, , and . Let . Is the set linearly dependent?  Find What does this tell you about solution set for the vector equation ?     Let be vectors in . Suppose , so the set is linearly dependent. Which of the following is true of the vector equation ?    It is consistent with one solution.    It is consistent with infinitely many solutions.    It is inconsistent.        For any vector space, the set is linearly dependent if and only if the vector equation is consistent with infinitely many solutions.      Find and mark the part of the matrix that demonstrates that is linearly dependent (the part that shows its linear system has infinitely many solutions).       A set of Euclidean vectors is linearly dependent if and only if has a column without a pivot position.      Compare the following results:    A set of vectors is linearly independent if and only if has all pivot columns.    A set of vectors spans if and only if has all pivot rows.   A set of vectors is linearly independent if and only the vector equation has exactly one solution, with .        Consider whether the set of Euclidean vectors is linearly dependent or linearly independent.   Reinterpret this question as an appropriate question about solutions to a vector equation.  Use the solution to this question to answer the original question.      Consider whether the set of polynomials is linearly dependent or linearly independent.   Reinterpret this question as an appropriate question about solutions to a polynomial equation.  Use the solution to this question to answer the original question.      What is the largest number of vectors that can form a linearly independent set?                   You can have infinitely many vectors and still be linearly independent.        What is the largest number of vectors that can form a linearly independent set?                   You can have infinitely many vectors and still be linearly independent.        What is the largest number of vectors that can form a linearly independent set?                   You can have infinitely many vectors and still be linearly independent.        Is is possible for the set of vectors in a vector space to be linearly independent? Recall that represents the additive identity.      Videos      Video: Linear independence     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   Prove the result of , by showing that, given a set of vectors, is linearly independent iff the equation is only true when .     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-11",
  "level": "2",
  "url": "VS5.html#objectives-11",
  "type": "Learning Outcomes",
  "number": "2.5",
  "title": "",
  "body": "   Determine if a set of Euclidean vectors is linearly dependent or independent by solving an appropriate vector equation.    "
},
{
  "id": "activity-55",
  "level": "2",
  "url": "VS5.html#activity-55",
  "type": "Activity",
  "number": "2.5.1",
  "title": "",
  "body": "  Consider the two sets . Which of the following is true?    is bigger than .   and are the same size.   is smaller than .    "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "VS5.html#definition-13",
  "type": "Definition",
  "number": "2.5.2",
  "title": "",
  "body": "  We say that a set of vectors is linearly dependent linearly dependent if one vector in the set belongs to the span of the others. Otherwise, we say the set is linearly independent . linearly independent       A linearly dependent set of three vectors   You can think of linearly dependent sets as containing a redundant vector, in the sense that you can drop a vector out without reducing the span of the set. In the above image, all three vectors lay in the same planar subspace, but only two vectors are needed to span the plane, so the set is linearly dependent.   "
},
{
  "id": "activity-56",
  "level": "2",
  "url": "VS5.html#activity-56",
  "type": "Activity",
  "number": "2.5.3",
  "title": "",
  "body": "  Begin with 3 vectors in  .   Choose three non-zero scalars, , and . Let . Is the set linearly dependent?  Find What does this tell you about solution set for the vector equation ?  "
},
{
  "id": "activity-57",
  "level": "2",
  "url": "VS5.html#activity-57",
  "type": "Activity",
  "number": "2.5.4",
  "title": "",
  "body": "  Let be vectors in . Suppose , so the set is linearly dependent. Which of the following is true of the vector equation ?    It is consistent with one solution.    It is consistent with infinitely many solutions.    It is inconsistent.     "
},
{
  "id": "fact-9",
  "level": "2",
  "url": "VS5.html#fact-9",
  "type": "Fact",
  "number": "2.5.5",
  "title": "",
  "body": "  For any vector space, the set is linearly dependent if and only if the vector equation is consistent with infinitely many solutions.   "
},
{
  "id": "activity-58",
  "level": "2",
  "url": "VS5.html#activity-58",
  "type": "Activity",
  "number": "2.5.6",
  "title": "",
  "body": "  Find and mark the part of the matrix that demonstrates that is linearly dependent (the part that shows its linear system has infinitely many solutions).   "
},
{
  "id": "observation-9",
  "level": "2",
  "url": "VS5.html#observation-9",
  "type": "Observation",
  "number": "2.5.7",
  "title": "",
  "body": "  A set of Euclidean vectors is linearly dependent if and only if has a column without a pivot position.   "
},
{
  "id": "def_of_LI",
  "level": "2",
  "url": "VS5.html#def_of_LI",
  "type": "Observation",
  "number": "2.5.8",
  "title": "",
  "body": "  Compare the following results:    A set of vectors is linearly independent if and only if has all pivot columns.    A set of vectors spans if and only if has all pivot rows.   A set of vectors is linearly independent if and only the vector equation has exactly one solution, with .     "
},
{
  "id": "activity-59",
  "level": "2",
  "url": "VS5.html#activity-59",
  "type": "Activity",
  "number": "2.5.9",
  "title": "",
  "body": "  Consider whether the set of Euclidean vectors is linearly dependent or linearly independent.   Reinterpret this question as an appropriate question about solutions to a vector equation.  Use the solution to this question to answer the original question.  "
},
{
  "id": "activity-60",
  "level": "2",
  "url": "VS5.html#activity-60",
  "type": "Activity",
  "number": "2.5.10",
  "title": "",
  "body": "  Consider whether the set of polynomials is linearly dependent or linearly independent.   Reinterpret this question as an appropriate question about solutions to a polynomial equation.  Use the solution to this question to answer the original question.  "
},
{
  "id": "activity-61",
  "level": "2",
  "url": "VS5.html#activity-61",
  "type": "Activity",
  "number": "2.5.11",
  "title": "",
  "body": "  What is the largest number of vectors that can form a linearly independent set?                   You can have infinitely many vectors and still be linearly independent.     "
},
{
  "id": "activity-62",
  "level": "2",
  "url": "VS5.html#activity-62",
  "type": "Activity",
  "number": "2.5.12",
  "title": "",
  "body": "  What is the largest number of vectors that can form a linearly independent set?                   You can have infinitely many vectors and still be linearly independent.     "
},
{
  "id": "activity-63",
  "level": "2",
  "url": "VS5.html#activity-63",
  "type": "Activity",
  "number": "2.5.13",
  "title": "",
  "body": "  What is the largest number of vectors that can form a linearly independent set?                   You can have infinitely many vectors and still be linearly independent.     "
},
{
  "id": "activity-64",
  "level": "2",
  "url": "VS5.html#activity-64",
  "type": "Activity",
  "number": "2.5.14",
  "title": "",
  "body": "  Is is possible for the set of vectors in a vector space to be linearly independent? Recall that represents the additive identity.   "
},
{
  "id": "figure-17",
  "level": "2",
  "url": "VS5.html#figure-17",
  "type": "Figure",
  "number": "17",
  "title": "",
  "body": "    Video: Linear independence  "
},
{
  "id": "exploration-18",
  "level": "2",
  "url": "VS5.html#exploration-18",
  "type": "Exploration",
  "number": "2.5.15",
  "title": "",
  "body": " Prove the result of , by showing that, given a set of vectors, is linearly independent iff the equation is only true when .  "
},
{
  "id": "VS6",
  "level": "1",
  "url": "VS6.html",
  "type": "Section",
  "number": "2.6",
  "title": "Identifying a Basis (VS6)",
  "body": " Identifying a Basis (VS6)     Explain why a set of Euclidean vectors is or is not a basis of .     Class Activities    Consider the set of vectors .    Express the vector as a linear combination of the vectors in , i.e. find scalars such that .    Find a different way to express the vector as a linear combination of the vectors in .    How many ways can the vector be written as a linear combination of the vectors in ?      We saw that some vectors could be expressed as a linear combination of the vectors in in lots of (infinitely many) ways, while others could not be expressed at all as a linear combination.  This motivates us to look for sets of vectors where every other vector can be constructed from them, and there is only one way to do so.     A basis basis of a vector space is a set of vectors for which     Every vector in can be expressed as a linear combination of the vectors in     For each vector , there is only one way to write it as a linear combination of the vectors in .    These two properties may be expressed more succintly as the statement \"Every vector in can be expressed uniquely as a linear combination of the vectors in \".  Or, in terms of a vector equation, a set is a basis of if the vector equation has a unique solution for every vector  .      The standard basis basis standard of is the set where .      A basis may be thought of as a collection of building blocks for a vector space, since every vector in the space can be expressed as a unique linear combination of basis vectors.  For example, in many calculus courses, vectors in are often expressed in their component form or in their standard basic vector form Since every vector in can be uniquely described as a linear combination of the vectors in , this set is indeed a basis.     Saying that the vector equation has a solution for every vector  is saying that the set  spans the vector space .  However, to be a basis, we need to also check that the solution is always unique  In other words, it is necessary for a set to span in order to be a basis of , but this is not sufficient .     Recall that in we found two different ways to write the vector as a linear combination of the vectors in the set .  For example, we had .  Manipulate these two equations to show how to build the zero vector out of the vectors in .     Whenever a vector can be expressed as two different linear combinations of vectors in a set , the set must be linearly dependent .     A set of vectors is a basis of a vector space if  spans and is linearly independent .  If either of these fails, then cannot be a basis of .      Label each of the sets as   SPANS or DOES NOT SPAN     LINEARLY INDEPENDENT or LINEARLY DEPENDENT    BASIS FOR or NOT A BASIS FOR    by finding for their corresponding matrices.        If is a basis for , that means doesn't have a non-pivot column, and doesn't have a row of zeros. What is ?       The set is a basis for if and only if and .  That is, a basis for must have exactly vectors and its square matrix must row-reduce to the so-called identity matrix identity matrix containing all zeros except for a downward diagonal of ones. (We will learn where the identity matrix gets its name in a later module.)      Videos      Video: Verifying that a set of vectors is a basis of a vector space     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations     What is a basis for ?  What about ?  Could we write each of these in a way that looks like the standard basis vectors in for some ? Make a conjecture about the relationship between these spaces of matrices and standard Eulidean space.      Recall our earlier definition of symmetric matrices. Find a basis for each of the following:  The space of symmetric matrices.  The space of symmetric matrices.  The space of symmetric matrices.      Must a basis for the space , the space of all quadratic polynomials, contain a polynomial of each degree less than or equal to 2? Generalize your result to polynomials of arbitrary degree.     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-12",
  "level": "2",
  "url": "VS6.html#objectives-12",
  "type": "Learning Outcomes",
  "number": "2.6",
  "title": "",
  "body": "   Explain why a set of Euclidean vectors is or is not a basis of .    "
},
{
  "id": "activity-vs6-intro",
  "level": "2",
  "url": "VS6.html#activity-vs6-intro",
  "type": "Activity",
  "number": "2.6.1",
  "title": "",
  "body": "  Consider the set of vectors .    Express the vector as a linear combination of the vectors in , i.e. find scalars such that .    Find a different way to express the vector as a linear combination of the vectors in .    How many ways can the vector be written as a linear combination of the vectors in ?   "
},
{
  "id": "observation-11",
  "level": "2",
  "url": "VS6.html#observation-11",
  "type": "Observation",
  "number": "2.6.2",
  "title": "",
  "body": " We saw that some vectors could be expressed as a linear combination of the vectors in in lots of (infinitely many) ways, while others could not be expressed at all as a linear combination.  This motivates us to look for sets of vectors where every other vector can be constructed from them, and there is only one way to do so.  "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "VS6.html#definition-14",
  "type": "Definition",
  "number": "2.6.3",
  "title": "",
  "body": "  A basis basis of a vector space is a set of vectors for which     Every vector in can be expressed as a linear combination of the vectors in     For each vector , there is only one way to write it as a linear combination of the vectors in .    These two properties may be expressed more succintly as the statement \"Every vector in can be expressed uniquely as a linear combination of the vectors in \".  Or, in terms of a vector equation, a set is a basis of if the vector equation has a unique solution for every vector  .   "
},
{
  "id": "definition-15",
  "level": "2",
  "url": "VS6.html#definition-15",
  "type": "Definition",
  "number": "2.6.4",
  "title": "",
  "body": "  The standard basis basis standard of is the set where .   "
},
{
  "id": "observation-12",
  "level": "2",
  "url": "VS6.html#observation-12",
  "type": "Observation",
  "number": "2.6.5",
  "title": "",
  "body": "  A basis may be thought of as a collection of building blocks for a vector space, since every vector in the space can be expressed as a unique linear combination of basis vectors.  For example, in many calculus courses, vectors in are often expressed in their component form or in their standard basic vector form Since every vector in can be uniquely described as a linear combination of the vectors in , this set is indeed a basis.   "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "VS6.html#remark-12",
  "type": "Remark",
  "number": "2.6.6",
  "title": "",
  "body": " Saying that the vector equation has a solution for every vector  is saying that the set  spans the vector space .  However, to be a basis, we need to also check that the solution is always unique  In other words, it is necessary for a set to span in order to be a basis of , but this is not sufficient .  "
},
{
  "id": "activity-66",
  "level": "2",
  "url": "VS6.html#activity-66",
  "type": "Activity",
  "number": "2.6.7",
  "title": "",
  "body": "  Recall that in we found two different ways to write the vector as a linear combination of the vectors in the set .  For example, we had .  Manipulate these two equations to show how to build the zero vector out of the vectors in .   "
},
{
  "id": "observation-13",
  "level": "2",
  "url": "VS6.html#observation-13",
  "type": "Observation",
  "number": "2.6.8",
  "title": "",
  "body": " Whenever a vector can be expressed as two different linear combinations of vectors in a set , the set must be linearly dependent .  "
},
{
  "id": "fact-10",
  "level": "2",
  "url": "VS6.html#fact-10",
  "type": "Fact",
  "number": "2.6.9",
  "title": "",
  "body": "  A set of vectors is a basis of a vector space if  spans and is linearly independent .  If either of these fails, then cannot be a basis of .   "
},
{
  "id": "activity-67",
  "level": "2",
  "url": "VS6.html#activity-67",
  "type": "Activity",
  "number": "2.6.10",
  "title": "",
  "body": "  Label each of the sets as   SPANS or DOES NOT SPAN     LINEARLY INDEPENDENT or LINEARLY DEPENDENT    BASIS FOR or NOT A BASIS FOR    by finding for their corresponding matrices.    "
},
{
  "id": "activity-68",
  "level": "2",
  "url": "VS6.html#activity-68",
  "type": "Activity",
  "number": "2.6.11",
  "title": "",
  "body": "  If is a basis for , that means doesn't have a non-pivot column, and doesn't have a row of zeros. What is ?    "
},
{
  "id": "fact-11",
  "level": "2",
  "url": "VS6.html#fact-11",
  "type": "Fact",
  "number": "2.6.12",
  "title": "",
  "body": "  The set is a basis for if and only if and .  That is, a basis for must have exactly vectors and its square matrix must row-reduce to the so-called identity matrix identity matrix containing all zeros except for a downward diagonal of ones. (We will learn where the identity matrix gets its name in a later module.)   "
},
{
  "id": "figure-18",
  "level": "2",
  "url": "VS6.html#figure-18",
  "type": "Figure",
  "number": "18",
  "title": "",
  "body": "    Video: Verifying that a set of vectors is a basis of a vector space  "
},
{
  "id": "exploration-19",
  "level": "2",
  "url": "VS6.html#exploration-19",
  "type": "Exploration",
  "number": "2.6.13",
  "title": "",
  "body": "   What is a basis for ?  What about ?  Could we write each of these in a way that looks like the standard basis vectors in for some ? Make a conjecture about the relationship between these spaces of matrices and standard Eulidean space.    "
},
{
  "id": "exploration-20",
  "level": "2",
  "url": "VS6.html#exploration-20",
  "type": "Exploration",
  "number": "2.6.14",
  "title": "",
  "body": " Recall our earlier definition of symmetric matrices. Find a basis for each of the following:  The space of symmetric matrices.  The space of symmetric matrices.  The space of symmetric matrices.    "
},
{
  "id": "exploration-21",
  "level": "2",
  "url": "VS6.html#exploration-21",
  "type": "Exploration",
  "number": "2.6.15",
  "title": "",
  "body": " Must a basis for the space , the space of all quadratic polynomials, contain a polynomial of each degree less than or equal to 2? Generalize your result to polynomials of arbitrary degree.  "
},
{
  "id": "VS7",
  "level": "1",
  "url": "VS7.html",
  "type": "Section",
  "number": "2.7",
  "title": "Subspace Basis and Dimension (VS7)",
  "body": " Subspace Basis and Dimension (VS7)     Compute a basis for the subspace spanned by a given set of Euclidean vectors, and determine the dimension of the subspace.     Class Activities    Recall from section that a subspace of a vector space is a subset that is itself a vector space.  One easy way to construct a subspace is to take the span of set, but a linearly dependent set contains redundant vectors. For example, only two of the three vectors in the following image are needed to span the planar subspace.      A linearly dependent set of three vectors       Consider the subspace of given by .   Mark the part of that shows that 's spanning set is linearly dependent.  Find a basis for by removing a vector from its spanning set to make it linearly independent.      Let . The easiest basis describing is the set of vectors in given by the pivot columns of .  Put another way, to compute a basis for the subspace , simply remove the vectors corresponding to the non-pivot columns of . For example, since the subspace has as a basis.      Let be the subspace of given by . Find a basis for .       Let be the subspace of given by Find a basis for .       Let be the subspace of given by Find a basis for .       Let and .   Find a basis for .  Find a basis for .      Even though we found different bases for them, and are exactly the same subspace of , since .      Any non-trivial real vector space has infinitely-many different bases, but all the bases for a given vector space are exactly the same size.  For example, are all valid bases for , and they all contain three vectors.      The dimension of a vector space is equal to the size of any basis for the vector space.  As you'd expect, has dimension . For example, has dimension because any basis for such as contains exactly three vectors.      Find the dimension of each subspace of by finding for each corresponding matrix.            Videos      Video: Finding a basis of a subspace and computing the dimension of a subspace     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   Prove each of the following statements is true.  If and are each a basis for a vector space , then  If is linearly independent, then so is .  Let be a vector space of dimension , and . Then there exists a basis for which contains .      Suppose we have the set of all function . We claim that this is a vector space under the usual operation of function addition and scalar multiplication. What is the dimension of this space for each choice of below:            Suppose you have the vector space with the operations Find a basis for and determine it's dimension.    Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-13",
  "level": "2",
  "url": "VS7.html#objectives-13",
  "type": "Learning Outcomes",
  "number": "2.7",
  "title": "",
  "body": "   Compute a basis for the subspace spanned by a given set of Euclidean vectors, and determine the dimension of the subspace.    "
},
{
  "id": "observation-14",
  "level": "2",
  "url": "VS7.html#observation-14",
  "type": "Observation",
  "number": "2.7.1",
  "title": "",
  "body": "  Recall from section that a subspace of a vector space is a subset that is itself a vector space.  One easy way to construct a subspace is to take the span of set, but a linearly dependent set contains redundant vectors. For example, only two of the three vectors in the following image are needed to span the planar subspace.      A linearly dependent set of three vectors    "
},
{
  "id": "activity-69",
  "level": "2",
  "url": "VS7.html#activity-69",
  "type": "Activity",
  "number": "2.7.2",
  "title": "",
  "body": "  Consider the subspace of given by .   Mark the part of that shows that 's spanning set is linearly dependent.  Find a basis for by removing a vector from its spanning set to make it linearly independent.  "
},
{
  "id": "fact-12",
  "level": "2",
  "url": "VS7.html#fact-12",
  "type": "Fact",
  "number": "2.7.3",
  "title": "",
  "body": "  Let . The easiest basis describing is the set of vectors in given by the pivot columns of .  Put another way, to compute a basis for the subspace , simply remove the vectors corresponding to the non-pivot columns of . For example, since the subspace has as a basis.   "
},
{
  "id": "activity-70",
  "level": "2",
  "url": "VS7.html#activity-70",
  "type": "Activity",
  "number": "2.7.4",
  "title": "",
  "body": "  Let be the subspace of given by . Find a basis for .   "
},
{
  "id": "activity-71",
  "level": "2",
  "url": "VS7.html#activity-71",
  "type": "Activity",
  "number": "2.7.5",
  "title": "",
  "body": "  Let be the subspace of given by Find a basis for .   "
},
{
  "id": "activity-72",
  "level": "2",
  "url": "VS7.html#activity-72",
  "type": "Activity",
  "number": "2.7.6",
  "title": "",
  "body": "  Let be the subspace of given by Find a basis for .   "
},
{
  "id": "activity-73",
  "level": "2",
  "url": "VS7.html#activity-73",
  "type": "Activity",
  "number": "2.7.7",
  "title": "",
  "body": "  Let and .   Find a basis for .  Find a basis for .  "
},
{
  "id": "observation-15",
  "level": "2",
  "url": "VS7.html#observation-15",
  "type": "Observation",
  "number": "2.7.8",
  "title": "",
  "body": "  Even though we found different bases for them, and are exactly the same subspace of , since .   "
},
{
  "id": "fact-13",
  "level": "2",
  "url": "VS7.html#fact-13",
  "type": "Fact",
  "number": "2.7.9",
  "title": "",
  "body": "  Any non-trivial real vector space has infinitely-many different bases, but all the bases for a given vector space are exactly the same size.  For example, are all valid bases for , and they all contain three vectors.   "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "VS7.html#definition-16",
  "type": "Definition",
  "number": "2.7.10",
  "title": "",
  "body": "  The dimension of a vector space is equal to the size of any basis for the vector space.  As you'd expect, has dimension . For example, has dimension because any basis for such as contains exactly three vectors.   "
},
{
  "id": "activity-74",
  "level": "2",
  "url": "VS7.html#activity-74",
  "type": "Activity",
  "number": "2.7.11",
  "title": "",
  "body": "  Find the dimension of each subspace of by finding for each corresponding matrix.        "
},
{
  "id": "figure-20",
  "level": "2",
  "url": "VS7.html#figure-20",
  "type": "Figure",
  "number": "20",
  "title": "",
  "body": "    Video: Finding a basis of a subspace and computing the dimension of a subspace  "
},
{
  "id": "exploration-22",
  "level": "2",
  "url": "VS7.html#exploration-22",
  "type": "Exploration",
  "number": "2.7.12",
  "title": "",
  "body": " Prove each of the following statements is true.  If and are each a basis for a vector space , then  If is linearly independent, then so is .  Let be a vector space of dimension , and . Then there exists a basis for which contains .    "
},
{
  "id": "exploration-23",
  "level": "2",
  "url": "VS7.html#exploration-23",
  "type": "Exploration",
  "number": "2.7.13",
  "title": "",
  "body": " Suppose we have the set of all function . We claim that this is a vector space under the usual operation of function addition and scalar multiplication. What is the dimension of this space for each choice of below:          "
},
{
  "id": "exploration-24",
  "level": "2",
  "url": "VS7.html#exploration-24",
  "type": "Exploration",
  "number": "2.7.14",
  "title": "",
  "body": " Suppose you have the vector space with the operations Find a basis for and determine it's dimension. "
},
{
  "id": "VS8",
  "level": "1",
  "url": "VS8.html",
  "type": "Section",
  "number": "2.8",
  "title": "Polynomial and Matrix Spaces (VS8)",
  "body": " Polynomial and Matrix Spaces (VS8)     Answer questions about vector spaces of polynomials or matrices.     Class Activities    Every vector space with finite dimension, that is, every vector space with a basis of the form is said to be isomorphic isomorphic to a Euclidean space , since there exists a natural correspondance between vectors in and vectors in :       We've already been taking advantage of the previous fact by converting polynomials and matrices into Euclidean vectors. Since and are both four-dimensional:       Suppose is a subspace of , and you know that the set is a linearly independent subset of . What can you conclude about ?    The dimension of is 3 or less.    The dimension of is exactly 3.    The dimension of is 3 or more.        Suppose is a subspace of , and you know that is spanned by the six vectors What can you conclude about ?    The dimension of is 6 or less.    The dimension of is exactly 6.    The dimension of is 6 or more.        The space of polynomials (of any degree) has the basis , so it is a natural example of an infinite-dimensional vector space.  Since and other infinite-dimensional spaces cannot be treated as an isomorphic finite-dimensional Euclidean space , vectors in such spaces cannot be studied by converting them into Euclidean vectors. Fortunately, most of the examples we will be interested in for this course will be finite-dimensional.      Videos      Video: Polynomial and matrix calculations     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   Given a matrix   the span of the set of all columns is the column space column space  the span of the set of all rows is the row space row space  the rank rank of a matrix is the dimension of the column space.  Calculate the rank of these matrices.              Calculate a basis for the row space and a basis for the column space of the matrix .    If you are given the values of and , what value of will cause the matrix to have rank 1?     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-14",
  "level": "2",
  "url": "VS8.html#objectives-14",
  "type": "Learning Outcomes",
  "number": "2.8",
  "title": "",
  "body": "   Answer questions about vector spaces of polynomials or matrices.    "
},
{
  "id": "fact-14",
  "level": "2",
  "url": "VS8.html#fact-14",
  "type": "Fact",
  "number": "2.8.1",
  "title": "",
  "body": "  Every vector space with finite dimension, that is, every vector space with a basis of the form is said to be isomorphic isomorphic to a Euclidean space , since there exists a natural correspondance between vectors in and vectors in :    "
},
{
  "id": "observation-16",
  "level": "2",
  "url": "VS8.html#observation-16",
  "type": "Observation",
  "number": "2.8.2",
  "title": "",
  "body": "  We've already been taking advantage of the previous fact by converting polynomials and matrices into Euclidean vectors. Since and are both four-dimensional:    "
},
{
  "id": "activity-75",
  "level": "2",
  "url": "VS8.html#activity-75",
  "type": "Activity",
  "number": "2.8.3",
  "title": "",
  "body": "  Suppose is a subspace of , and you know that the set is a linearly independent subset of . What can you conclude about ?    The dimension of is 3 or less.    The dimension of is exactly 3.    The dimension of is 3 or more.     "
},
{
  "id": "activity-76",
  "level": "2",
  "url": "VS8.html#activity-76",
  "type": "Activity",
  "number": "2.8.4",
  "title": "",
  "body": "  Suppose is a subspace of , and you know that is spanned by the six vectors What can you conclude about ?    The dimension of is 6 or less.    The dimension of is exactly 6.    The dimension of is 6 or more.     "
},
{
  "id": "observation-17",
  "level": "2",
  "url": "VS8.html#observation-17",
  "type": "Observation",
  "number": "2.8.5",
  "title": "",
  "body": "  The space of polynomials (of any degree) has the basis , so it is a natural example of an infinite-dimensional vector space.  Since and other infinite-dimensional spaces cannot be treated as an isomorphic finite-dimensional Euclidean space , vectors in such spaces cannot be studied by converting them into Euclidean vectors. Fortunately, most of the examples we will be interested in for this course will be finite-dimensional.   "
},
{
  "id": "figure-21",
  "level": "2",
  "url": "VS8.html#figure-21",
  "type": "Figure",
  "number": "21",
  "title": "",
  "body": "    Video: Polynomial and matrix calculations  "
},
{
  "id": "exploration-25",
  "level": "2",
  "url": "VS8.html#exploration-25",
  "type": "Exploration",
  "number": "2.8.6",
  "title": "",
  "body": " Given a matrix   the span of the set of all columns is the column space column space  the span of the set of all rows is the row space row space  the rank rank of a matrix is the dimension of the column space.  Calculate the rank of these matrices.            "
},
{
  "id": "exploration-26",
  "level": "2",
  "url": "VS8.html#exploration-26",
  "type": "Exploration",
  "number": "2.8.7",
  "title": "",
  "body": " Calculate a basis for the row space and a basis for the column space of the matrix .  "
},
{
  "id": "exploration-27",
  "level": "2",
  "url": "VS8.html#exploration-27",
  "type": "Exploration",
  "number": "2.8.8",
  "title": "",
  "body": " If you are given the values of and , what value of will cause the matrix to have rank 1?  "
},
{
  "id": "VS9",
  "level": "1",
  "url": "VS9.html",
  "type": "Section",
  "number": "2.9",
  "title": "Homogeneous Linear Systems (VS9)",
  "body": " Homogeneous Linear Systems (VS9)     Find a basis for the solution set of a homogeneous system of equations.     Class Activities    A homogeneous homogeneous system of linear equations is one of the form:   This system is equivalent to the vector equation: and the augmented matrix:       Note that if and are solutions to so is , since implies   Similarly, if , is a solution. Thus the solution set of a homogeneous system is...    A basis for .    A subspace of .    The empty set.        Consider the homogeneous system of equations    Find its solution set (a subspace of ).  Rewrite this solution space in the form   Rewrite this solution space in the form       The coefficients of the free variables in the solution set of a linear system always yield linearly independent vectors.  Thus if is the solution space for a homogeneous system, then is a basis for the solution space.      Consider the homogeneous system of equations   Find a basis for its solution space.       Consider the homogeneous vector equation   Find a basis for its solution space.       Consider the homogeneous system of equations   Find a basis for its solution space.       The basis of the trivial vector space is the empty set. You can denote this as either or .  Thus, if is the only solution of a homogeneous system, the basis of the solution space is .      Videos      Video: Polynomial and matrix calculations     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   An matrix is non-singular non-singular if the associated homogeneous system with coefficient matrix is consistent with one solution. Assume the matrices in the writing explorations in this section are all non-singular.   Prove that the reduced row echelon form of is the identity matrix.  Prove that, for any column vector , the system of equations given by has a unique solution.  Prove that the columns of form a basis for .  Prove that the rank of is .       Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-15",
  "level": "2",
  "url": "VS9.html#objectives-15",
  "type": "Learning Outcomes",
  "number": "2.9",
  "title": "",
  "body": "   Find a basis for the solution set of a homogeneous system of equations.    "
},
{
  "id": "definition-17",
  "level": "2",
  "url": "VS9.html#definition-17",
  "type": "Definition",
  "number": "2.9.1",
  "title": "",
  "body": "  A homogeneous homogeneous system of linear equations is one of the form:   This system is equivalent to the vector equation: and the augmented matrix:    "
},
{
  "id": "activity-77",
  "level": "2",
  "url": "VS9.html#activity-77",
  "type": "Activity",
  "number": "2.9.2",
  "title": "",
  "body": "  Note that if and are solutions to so is , since implies   Similarly, if , is a solution. Thus the solution set of a homogeneous system is...    A basis for .    A subspace of .    The empty set.     "
},
{
  "id": "activity-78",
  "level": "2",
  "url": "VS9.html#activity-78",
  "type": "Activity",
  "number": "2.9.3",
  "title": "",
  "body": "  Consider the homogeneous system of equations    Find its solution set (a subspace of ).  Rewrite this solution space in the form   Rewrite this solution space in the form   "
},
{
  "id": "fact-15",
  "level": "2",
  "url": "VS9.html#fact-15",
  "type": "Fact",
  "number": "2.9.4",
  "title": "",
  "body": "  The coefficients of the free variables in the solution set of a linear system always yield linearly independent vectors.  Thus if is the solution space for a homogeneous system, then is a basis for the solution space.   "
},
{
  "id": "activity-79",
  "level": "2",
  "url": "VS9.html#activity-79",
  "type": "Activity",
  "number": "2.9.5",
  "title": "",
  "body": "  Consider the homogeneous system of equations   Find a basis for its solution space.   "
},
{
  "id": "activity-80",
  "level": "2",
  "url": "VS9.html#activity-80",
  "type": "Activity",
  "number": "2.9.6",
  "title": "",
  "body": "  Consider the homogeneous vector equation   Find a basis for its solution space.   "
},
{
  "id": "activity-81",
  "level": "2",
  "url": "VS9.html#activity-81",
  "type": "Activity",
  "number": "2.9.7",
  "title": "",
  "body": "  Consider the homogeneous system of equations   Find a basis for its solution space.   "
},
{
  "id": "observation-18",
  "level": "2",
  "url": "VS9.html#observation-18",
  "type": "Observation",
  "number": "2.9.8",
  "title": "",
  "body": "  The basis of the trivial vector space is the empty set. You can denote this as either or .  Thus, if is the only solution of a homogeneous system, the basis of the solution space is .   "
},
{
  "id": "figure-22",
  "level": "2",
  "url": "VS9.html#figure-22",
  "type": "Figure",
  "number": "22",
  "title": "",
  "body": "    Video: Polynomial and matrix calculations  "
},
{
  "id": "non-singular",
  "level": "2",
  "url": "VS9.html#non-singular",
  "type": "Exploration",
  "number": "2.9.9",
  "title": "",
  "body": " An matrix is non-singular non-singular if the associated homogeneous system with coefficient matrix is consistent with one solution. Assume the matrices in the writing explorations in this section are all non-singular.   Prove that the reduced row echelon form of is the identity matrix.  Prove that, for any column vector , the system of equations given by has a unique solution.  Prove that the columns of form a basis for .  Prove that the rank of is .    "
},
{
  "id": "AT1",
  "level": "1",
  "url": "AT1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Linear Transformations (AT1)",
  "body": " Linear Transformations (AT1)     Determine if a map between vector spaces of polynomials is linear or not.     Class Activities    A linear transformation  linear transformation (also called a linear map ) is a map between vector spaces that preserves the vector space operations. More precisely, if and are vector spaces, a map is called a linear transformation if    for any , and     for any and .   In other words, a map is linear when vector space operations can be applied before or after the transformation without affecting the result.      Given a linear transformation , is called the domain of and is called the co-domain of .      A linear transformation with a domain of and a co-domain of       Let be given by   To show that is a linear transformation, we must verify that by computing and , and we must verify that by computing .  Therefore is a linear transformation.      Let be given by   To show that is not linear, we only need to find one counterexample.    Since the resulting vectors are different, is not a linear transformation.      A map between Euclidean spaces is linear exactly when every component of the output is a linear combination of the variables of .  For example, the following map is definitely linear because and are linear combinations of : .  But the map below is not linear because , , and are not linear combinations (even though is): .      Let be the derivative map defined by for each polynomial . We recall from calculus that  , and . Which of the following can we conclude from these calculus rules?     is not a vector space     is a linear map     is not a linear map        Let the polynomial maps and be defined by .  Compute , , , and . Based on these computations, can you conclude that either or is definitely not a linear transformation?      If is a linear transformation, then where is the additive identity of the vector spaces .  Put another way, an easy way to prove that a map like can not be linear is to check that       Showing is not a linear transformation can be done by finding an example for any one of the following.    Show (where is the additive identity of and ).    Find such that .    Find and such that .    Otherwise, can be shown to be linear by proving the following in general .    For all , .    For all and , .    Note the similarities between this process and showing that a subset of a vector space is or is not a subspace.      Continue to consider defined by .   Verify that is equal to for all polynomials .  Verify that is equal to for all real numbers and polynomials .  Is linear?     Let polynomial maps and be defined by    Note that and . So instead, show that to verify that is not linear.  Prove that is linear by verifying that and .     Videos      Video: Showing a transformation is linear       Video: Showing a transformation is not linear     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations    If are vectors spaces, with associated zero vectors and , and is a linear transformation, does ? Prove this is true, or find a counterexample.   Assume is a linear transformation between vector spaces. Let with additive inverse . Prove that .      Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-17",
  "level": "2",
  "url": "AT1.html#objectives-17",
  "type": "Learning Outcomes",
  "number": "3.1",
  "title": "",
  "body": "   Determine if a map between vector spaces of polynomials is linear or not.    "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "AT1.html#definition-18",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A linear transformation  linear transformation (also called a linear map ) is a map between vector spaces that preserves the vector space operations. More precisely, if and are vector spaces, a map is called a linear transformation if    for any , and     for any and .   In other words, a map is linear when vector space operations can be applied before or after the transformation without affecting the result.   "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "AT1.html#definition-19",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  Given a linear transformation , is called the domain of and is called the co-domain of .      A linear transformation with a domain of and a co-domain of    "
},
{
  "id": "example-2",
  "level": "2",
  "url": "AT1.html#example-2",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Let be given by   To show that is a linear transformation, we must verify that by computing and , and we must verify that by computing .  Therefore is a linear transformation.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "AT1.html#example-3",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  Let be given by   To show that is not linear, we only need to find one counterexample.    Since the resulting vectors are different, is not a linear transformation.   "
},
{
  "id": "fact-16",
  "level": "2",
  "url": "AT1.html#fact-16",
  "type": "Fact",
  "number": "3.1.5",
  "title": "",
  "body": "  A map between Euclidean spaces is linear exactly when every component of the output is a linear combination of the variables of .  For example, the following map is definitely linear because and are linear combinations of : .  But the map below is not linear because , , and are not linear combinations (even though is): .   "
},
{
  "id": "activity-82",
  "level": "2",
  "url": "AT1.html#activity-82",
  "type": "Activity",
  "number": "3.1.6",
  "title": "",
  "body": "  Let be the derivative map defined by for each polynomial . We recall from calculus that  , and . Which of the following can we conclude from these calculus rules?     is not a vector space     is a linear map     is not a linear map     "
},
{
  "id": "activity-83",
  "level": "2",
  "url": "AT1.html#activity-83",
  "type": "Activity",
  "number": "3.1.7",
  "title": "",
  "body": "  Let the polynomial maps and be defined by .  Compute , , , and . Based on these computations, can you conclude that either or is definitely not a linear transformation?   "
},
{
  "id": "fact-17",
  "level": "2",
  "url": "AT1.html#fact-17",
  "type": "Fact",
  "number": "3.1.8",
  "title": "",
  "body": "  If is a linear transformation, then where is the additive identity of the vector spaces .  Put another way, an easy way to prove that a map like can not be linear is to check that    "
},
{
  "id": "observation-19",
  "level": "2",
  "url": "AT1.html#observation-19",
  "type": "Observation",
  "number": "3.1.9",
  "title": "",
  "body": "  Showing is not a linear transformation can be done by finding an example for any one of the following.    Show (where is the additive identity of and ).    Find such that .    Find and such that .    Otherwise, can be shown to be linear by proving the following in general .    For all , .    For all and , .    Note the similarities between this process and showing that a subset of a vector space is or is not a subspace.   "
},
{
  "id": "activity-84",
  "level": "2",
  "url": "AT1.html#activity-84",
  "type": "Activity",
  "number": "3.1.10",
  "title": "",
  "body": "  Continue to consider defined by .   Verify that is equal to for all polynomials .  Verify that is equal to for all real numbers and polynomials .  Is linear?  "
},
{
  "id": "activity-85",
  "level": "2",
  "url": "AT1.html#activity-85",
  "type": "Activity",
  "number": "3.1.11",
  "title": "",
  "body": "  Let polynomial maps and be defined by    Note that and . So instead, show that to verify that is not linear.  Prove that is linear by verifying that and .  "
},
{
  "id": "figure-24",
  "level": "2",
  "url": "AT1.html#figure-24",
  "type": "Figure",
  "number": "24",
  "title": "",
  "body": "    Video: Showing a transformation is linear  "
},
{
  "id": "figure-25",
  "level": "2",
  "url": "AT1.html#figure-25",
  "type": "Figure",
  "number": "25",
  "title": "",
  "body": "    Video: Showing a transformation is not linear  "
},
{
  "id": "exploration-29",
  "level": "2",
  "url": "AT1.html#exploration-29",
  "type": "Exploration",
  "number": "3.1.12",
  "title": "",
  "body": "  If are vectors spaces, with associated zero vectors and , and is a linear transformation, does ? Prove this is true, or find a counterexample. "
},
{
  "id": "exploration-30",
  "level": "2",
  "url": "AT1.html#exploration-30",
  "type": "Exploration",
  "number": "3.1.13",
  "title": "",
  "body": " Assume is a linear transformation between vector spaces. Let with additive inverse . Prove that .   "
},
{
  "id": "AT2",
  "level": "1",
  "url": "AT2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Standard Matrices (AT2)",
  "body": " Standard Matrices (AT2)     Translate back and forth between a linear transformation of Euclidean spaces and its standard matrix, and perform related computations.     Class Activities    Recall that a linear map satisfies     for any .     for any .    In other words, a map is linear when vector space operations can be applied before or after the transformation without affecting the result.      Suppose is a linear map, and you know and . What is ?                    Suppose is a linear map, and you know and . What is ?                            Suppose is a linear map, and you know and . What is ?                            Suppose is a linear map, and you know and . What piece of information would help you compute ?    The value of .    The value of .    The value of .    Any of the above.        Consider any basis for . Since every vector can be written as a linear combination of basis vectors, , we may compute as follows:   Therefore any linear transformation can be defined by just describing the values of .  Put another way, the images of the basis vectors completely determine determine the transformation .      Since a linear transformation is determined by its action on the standard basis , it is convenient to store this information in an matrix, called the standard matrix standard matrix of , given by .  For example, let be the linear map determined by the following values for applied to the standard basis of .   Then the standard matrix corresponding to is       Let be the linear transformation given by Write the standard matrix for .      Let be the linear transformation given by    Compute , , and .  Find the standard matrix for .     Because every linear map has a linear combination of the variables in each component, and thus yields exactly the coefficients of , the standard matrix for is simply an ordered list of the coefficients of the :       Let be the linear transformation given by the standard matrix    Compute .  Compute .     Compute the following linear transformations of vectors given their standard matrices.         Videos      Video: Using the standard matrix to compute the image of a vector     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations  We can represent images in the plane using vectors, and manipulate those images with linear transformations. We introduce some notation in these explorations that is needed for their completion, but is not essential to the rest of the text. These have a geometric flair to them, and can be understood by thinking of geometric transformations in terms of standard matrices.  Given two vectors and , we define the dot product dot product as    For each of the following properties, determine if it is held by the dot product. Either provide a proof it the property holds, or provide a counter-example if it does not.  Distributive over addition (e.g., (  Associative?  Commutative?    Given the properties you proved in the last exploration, could the dot product take the place of as a vector space operation on ?  Is the dot product a linear operator? That is, given vectors , and , is it true that Prove or provide a counter-example.    Assume and define the length of a vector by . Prove that if an only if and are perpendicular. You may use the fact (try and prove it!) that two vectors are perpendicular if and only if their dot product is zero.       A dilation is given by by mapping a vector to some scalar multiple of .  A rotation is given by  A reflection of over a line can be found by first finding a vector along , then  Represent each of the following transformations with respect to the standard basis in .  Rotation through an angle .  Reflection over a line passing through the origin.  Dilation by some scalar .  Prove that each transformation is linear, and that your matrix representations are correct.     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-18",
  "level": "2",
  "url": "AT2.html#objectives-18",
  "type": "Learning Outcomes",
  "number": "3.2",
  "title": "",
  "body": "   Translate back and forth between a linear transformation of Euclidean spaces and its standard matrix, and perform related computations.    "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "AT2.html#remark-13",
  "type": "Remark",
  "number": "3.2.1",
  "title": "",
  "body": "  Recall that a linear map satisfies     for any .     for any .    In other words, a map is linear when vector space operations can be applied before or after the transformation without affecting the result.   "
},
{
  "id": "activity-86",
  "level": "2",
  "url": "AT2.html#activity-86",
  "type": "Activity",
  "number": "3.2.2",
  "title": "",
  "body": "  Suppose is a linear map, and you know and . What is ?                 "
},
{
  "id": "activity-87",
  "level": "2",
  "url": "AT2.html#activity-87",
  "type": "Activity",
  "number": "3.2.3",
  "title": "",
  "body": "  Suppose is a linear map, and you know and . What is ?                         "
},
{
  "id": "activity-88",
  "level": "2",
  "url": "AT2.html#activity-88",
  "type": "Activity",
  "number": "3.2.4",
  "title": "",
  "body": "  Suppose is a linear map, and you know and . What is ?                         "
},
{
  "id": "activity-89",
  "level": "2",
  "url": "AT2.html#activity-89",
  "type": "Activity",
  "number": "3.2.5",
  "title": "",
  "body": "  Suppose is a linear map, and you know and . What piece of information would help you compute ?    The value of .    The value of .    The value of .    Any of the above.     "
},
{
  "id": "fact-18",
  "level": "2",
  "url": "AT2.html#fact-18",
  "type": "Fact",
  "number": "3.2.6",
  "title": "",
  "body": "  Consider any basis for . Since every vector can be written as a linear combination of basis vectors, , we may compute as follows:   Therefore any linear transformation can be defined by just describing the values of .  Put another way, the images of the basis vectors completely determine determine the transformation .   "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "AT2.html#definition-20",
  "type": "Definition",
  "number": "3.2.7",
  "title": "",
  "body": "  Since a linear transformation is determined by its action on the standard basis , it is convenient to store this information in an matrix, called the standard matrix standard matrix of , given by .  For example, let be the linear map determined by the following values for applied to the standard basis of .   Then the standard matrix corresponding to is    "
},
{
  "id": "activity-90",
  "level": "2",
  "url": "AT2.html#activity-90",
  "type": "Activity",
  "number": "3.2.8",
  "title": "",
  "body": "  Let be the linear transformation given by Write the standard matrix for .   "
},
{
  "id": "activity-91",
  "level": "2",
  "url": "AT2.html#activity-91",
  "type": "Activity",
  "number": "3.2.9",
  "title": "",
  "body": "  Let be the linear transformation given by    Compute , , and .  Find the standard matrix for .  "
},
{
  "id": "fact-19",
  "level": "2",
  "url": "AT2.html#fact-19",
  "type": "Fact",
  "number": "3.2.10",
  "title": "",
  "body": "  Because every linear map has a linear combination of the variables in each component, and thus yields exactly the coefficients of , the standard matrix for is simply an ordered list of the coefficients of the :    "
},
{
  "id": "activity-92",
  "level": "2",
  "url": "AT2.html#activity-92",
  "type": "Activity",
  "number": "3.2.11",
  "title": "",
  "body": "  Let be the linear transformation given by the standard matrix    Compute .  Compute .  "
},
{
  "id": "activity-93",
  "level": "2",
  "url": "AT2.html#activity-93",
  "type": "Activity",
  "number": "3.2.12",
  "title": "",
  "body": "  Compute the following linear transformations of vectors given their standard matrices.      "
},
{
  "id": "figure-26",
  "level": "2",
  "url": "AT2.html#figure-26",
  "type": "Figure",
  "number": "26",
  "title": "",
  "body": "    Video: Using the standard matrix to compute the image of a vector  "
},
{
  "id": "p-689",
  "level": "2",
  "url": "AT2.html#p-689",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "exploration-31",
  "level": "2",
  "url": "AT2.html#exploration-31",
  "type": "Exploration",
  "number": "3.2.13",
  "title": "",
  "body": " For each of the following properties, determine if it is held by the dot product. Either provide a proof it the property holds, or provide a counter-example if it does not.  Distributive over addition (e.g., (  Associative?  Commutative?   "
},
{
  "id": "exploration-32",
  "level": "2",
  "url": "AT2.html#exploration-32",
  "type": "Exploration",
  "number": "3.2.14",
  "title": "",
  "body": "Given the properties you proved in the last exploration, could the dot product take the place of as a vector space operation on ? "
},
{
  "id": "exploration-33",
  "level": "2",
  "url": "AT2.html#exploration-33",
  "type": "Exploration",
  "number": "3.2.15",
  "title": "",
  "body": "Is the dot product a linear operator? That is, given vectors , and , is it true that Prove or provide a counter-example. "
},
{
  "id": "exploration-34",
  "level": "2",
  "url": "AT2.html#exploration-34",
  "type": "Exploration",
  "number": "3.2.16",
  "title": "",
  "body": "  Assume and define the length of a vector by . Prove that if an only if and are perpendicular. You may use the fact (try and prove it!) that two vectors are perpendicular if and only if their dot product is zero.   "
},
{
  "id": "exploration-35",
  "level": "2",
  "url": "AT2.html#exploration-35",
  "type": "Exploration",
  "number": "3.2.17",
  "title": "",
  "body": "   A dilation is given by by mapping a vector to some scalar multiple of .  A rotation is given by  A reflection of over a line can be found by first finding a vector along , then  Represent each of the following transformations with respect to the standard basis in .  Rotation through an angle .  Reflection over a line passing through the origin.  Dilation by some scalar .  Prove that each transformation is linear, and that your matrix representations are correct.  "
},
{
  "id": "AT3",
  "level": "1",
  "url": "AT3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Image and Kernel (AT3)",
  "body": " Image and Kernel (AT3)     Compute a basis for the kernel and a basis for the image of a linear map, and verify that the rank-nullity theorem holds for a given linear map.     Class Activities    Let be given by Which of these subspaces of describes the set of all vectors that transform into ?                       Let be a linear transformation, and let be the additive identity (the zero vector ) of . The kernel kernel of is an important subspace of defined by       The kernel of a linear transformation       Let be given by Which of these subspaces of describes , the set of all vectors that transform into ?                            Let be the linear transformation given by the standard matrix    Set to find a linear system of equations whose solution set is the kernel.  Use to solve this homogeneous system of equations and find a basis for the kernel of .      Let be the linear transformation given by   Find a basis for the kernel of .       Let be given by Which of these subspaces of describes the set of all vectors that are the result of using to transform vectors?                            Let be a linear transformation. The image of is an important subspace of defined by   In the examples below, the left example's image is all of , but the right example's image is a planar subspace of .      The image of a linear transformation       Let be given by Which of these subspaces of describes , the set of all vectors that are the result of using to transform vectors?                       Let be the linear transformation given by the standard matrix   Since for a vector , , which of the following best describes the set of vectors ?    The set of vectors spans but is not linearly independent.    The set of vectors is a linearly independent subset of but does not span .    The set of vectors is linearly independent and spans ; that is, the set of vectors is a basis for .        Let be the linear transformation given by the standard matrix   Since the set spans , we can obtain a basis for by finding and only using the vectors corresponding to pivot columns:       Let be a linear transformation with standard matrix .    The kernel of is the solution set of the homogeneous system given by the augmented matrix . Use the coefficients of its free variables to get a basis for the kernel.    The image of is the span of the columns of . Remove the vectors creating non-pivot columns in to get a basis for the image.        Let be the linear transformation given by the standard matrix   Find a basis for the kernel and a basis for the image of .       Let be a linear transformation with standard matrix . Which of the following is equal to the dimension of the kernel of ?    The number of pivot columns    The number of non-pivot columns    The number of pivot rows    The number of non-pivot rows        Let be a linear transformation with standard matrix . Which of the following is equal to the dimension of the image of ?    The number of pivot columns    The number of non-pivot columns    The number of pivot rows    The number of non-pivot rows        Combining these with the observation that the number of columns is the dimension of the domain of , we have the rank-nullity theorem :   The dimension of the domain of equals .   The dimension of the image is called the rank of (or ) and the dimension of the kernel is called the nullity .      Let be the linear transformation given by the standard matrix Verify that the rank-nullity theorem holds for .       Videos      Video: The kernel and image of a linear transformation       Video: Finding a basis of the image of a linear transformation       Video: Finding a basis of the kernel of a linear transformation       Video: The rank-nullity theorem     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations    Assume is a linear map. Let be a set of vectors in , and set .  If the set is linearly independent, must the set also be linearly independent?  If the set is linearly independent, must the set also be linearly independent?  If the set spans , must the set also span ?  If the set spans , must the set also span ?  In light of this, is the image of the basis of a vector space always a basis for the codomain?      Prove the Rank-Nullity Theorem. Use the steps below to help you.  The theorem states that, given a linear map , with and vector spaces, the rank of , plus the nullity of , equals the dimension of the domain . Assume that the dimension of is .  For simplicity, denote the rank of by , and the nullity by .  Recall that is the dimension of the range space of . State the precise definition.  Recall that is the dimension of the null space of . State the precise definition.  Begin with a basis for the null space, denoted . Show how this can be extended to a basis for , with In this portion, you should assume , and construct additional vectors which are not linear combinations of vectors in . Prove that you can always do this until you have total linearly independent vectors.  Show that is a basis for the range space. Start by showing that it is linearly independent, and be sure you prove that each element of the range space can be written as a linear combination of .  Show that spans the range space.  State your conclusion.       Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-19",
  "level": "2",
  "url": "AT3.html#objectives-19",
  "type": "Learning Outcomes",
  "number": "3.3",
  "title": "",
  "body": "   Compute a basis for the kernel and a basis for the image of a linear map, and verify that the rank-nullity theorem holds for a given linear map.    "
},
{
  "id": "activity-94",
  "level": "2",
  "url": "AT3.html#activity-94",
  "type": "Activity",
  "number": "3.3.1",
  "title": "",
  "body": "  Let be given by Which of these subspaces of describes the set of all vectors that transform into ?                    "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "AT3.html#definition-21",
  "type": "Definition",
  "number": "3.3.2",
  "title": "",
  "body": "  Let be a linear transformation, and let be the additive identity (the zero vector ) of . The kernel kernel of is an important subspace of defined by       The kernel of a linear transformation    "
},
{
  "id": "activity-95",
  "level": "2",
  "url": "AT3.html#activity-95",
  "type": "Activity",
  "number": "3.3.3",
  "title": "",
  "body": "  Let be given by Which of these subspaces of describes , the set of all vectors that transform into ?                         "
},
{
  "id": "activity-96",
  "level": "2",
  "url": "AT3.html#activity-96",
  "type": "Activity",
  "number": "3.3.4",
  "title": "",
  "body": "  Let be the linear transformation given by the standard matrix    Set to find a linear system of equations whose solution set is the kernel.  Use to solve this homogeneous system of equations and find a basis for the kernel of .  "
},
{
  "id": "activity-97",
  "level": "2",
  "url": "AT3.html#activity-97",
  "type": "Activity",
  "number": "3.3.5",
  "title": "",
  "body": "  Let be the linear transformation given by   Find a basis for the kernel of .   "
},
{
  "id": "activity-98",
  "level": "2",
  "url": "AT3.html#activity-98",
  "type": "Activity",
  "number": "3.3.6",
  "title": "",
  "body": "  Let be given by Which of these subspaces of describes the set of all vectors that are the result of using to transform vectors?                         "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "AT3.html#definition-22",
  "type": "Definition",
  "number": "3.3.7",
  "title": "",
  "body": "  Let be a linear transformation. The image of is an important subspace of defined by   In the examples below, the left example's image is all of , but the right example's image is a planar subspace of .      The image of a linear transformation    "
},
{
  "id": "activity-99",
  "level": "2",
  "url": "AT3.html#activity-99",
  "type": "Activity",
  "number": "3.3.8",
  "title": "",
  "body": "  Let be given by Which of these subspaces of describes , the set of all vectors that are the result of using to transform vectors?                    "
},
{
  "id": "activity-100",
  "level": "2",
  "url": "AT3.html#activity-100",
  "type": "Activity",
  "number": "3.3.9",
  "title": "",
  "body": "  Let be the linear transformation given by the standard matrix   Since for a vector , , which of the following best describes the set of vectors ?    The set of vectors spans but is not linearly independent.    The set of vectors is a linearly independent subset of but does not span .    The set of vectors is linearly independent and spans ; that is, the set of vectors is a basis for .     "
},
{
  "id": "observation-20",
  "level": "2",
  "url": "AT3.html#observation-20",
  "type": "Observation",
  "number": "3.3.10",
  "title": "",
  "body": "  Let be the linear transformation given by the standard matrix   Since the set spans , we can obtain a basis for by finding and only using the vectors corresponding to pivot columns:    "
},
{
  "id": "fact-20",
  "level": "2",
  "url": "AT3.html#fact-20",
  "type": "Fact",
  "number": "3.3.11",
  "title": "",
  "body": "  Let be a linear transformation with standard matrix .    The kernel of is the solution set of the homogeneous system given by the augmented matrix . Use the coefficients of its free variables to get a basis for the kernel.    The image of is the span of the columns of . Remove the vectors creating non-pivot columns in to get a basis for the image.     "
},
{
  "id": "activity-101",
  "level": "2",
  "url": "AT3.html#activity-101",
  "type": "Activity",
  "number": "3.3.12",
  "title": "",
  "body": "  Let be the linear transformation given by the standard matrix   Find a basis for the kernel and a basis for the image of .   "
},
{
  "id": "activity-102",
  "level": "2",
  "url": "AT3.html#activity-102",
  "type": "Activity",
  "number": "3.3.13",
  "title": "",
  "body": "  Let be a linear transformation with standard matrix . Which of the following is equal to the dimension of the kernel of ?    The number of pivot columns    The number of non-pivot columns    The number of pivot rows    The number of non-pivot rows     "
},
{
  "id": "activity-103",
  "level": "2",
  "url": "AT3.html#activity-103",
  "type": "Activity",
  "number": "3.3.14",
  "title": "",
  "body": "  Let be a linear transformation with standard matrix . Which of the following is equal to the dimension of the image of ?    The number of pivot columns    The number of non-pivot columns    The number of pivot rows    The number of non-pivot rows     "
},
{
  "id": "observation-21",
  "level": "2",
  "url": "AT3.html#observation-21",
  "type": "Observation",
  "number": "3.3.15",
  "title": "",
  "body": "  Combining these with the observation that the number of columns is the dimension of the domain of , we have the rank-nullity theorem :   The dimension of the domain of equals .   The dimension of the image is called the rank of (or ) and the dimension of the kernel is called the nullity .   "
},
{
  "id": "activity-104",
  "level": "2",
  "url": "AT3.html#activity-104",
  "type": "Activity",
  "number": "3.3.16",
  "title": "",
  "body": "  Let be the linear transformation given by the standard matrix Verify that the rank-nullity theorem holds for .   "
},
{
  "id": "figure-29",
  "level": "2",
  "url": "AT3.html#figure-29",
  "type": "Figure",
  "number": "29",
  "title": "",
  "body": "    Video: The kernel and image of a linear transformation  "
},
{
  "id": "figure-30",
  "level": "2",
  "url": "AT3.html#figure-30",
  "type": "Figure",
  "number": "30",
  "title": "",
  "body": "    Video: Finding a basis of the image of a linear transformation  "
},
{
  "id": "figure-31",
  "level": "2",
  "url": "AT3.html#figure-31",
  "type": "Figure",
  "number": "31",
  "title": "",
  "body": "    Video: Finding a basis of the kernel of a linear transformation  "
},
{
  "id": "figure-32",
  "level": "2",
  "url": "AT3.html#figure-32",
  "type": "Figure",
  "number": "32",
  "title": "",
  "body": "    Video: The rank-nullity theorem  "
},
{
  "id": "exploration-36",
  "level": "2",
  "url": "AT3.html#exploration-36",
  "type": "Exploration",
  "number": "3.3.17",
  "title": "",
  "body": "  Assume is a linear map. Let be a set of vectors in , and set .  If the set is linearly independent, must the set also be linearly independent?  If the set is linearly independent, must the set also be linearly independent?  If the set spans , must the set also span ?  If the set spans , must the set also span ?  In light of this, is the image of the basis of a vector space always a basis for the codomain?    "
},
{
  "id": "exploration-37",
  "level": "2",
  "url": "AT3.html#exploration-37",
  "type": "Exploration",
  "number": "3.3.18",
  "title": "",
  "body": " Prove the Rank-Nullity Theorem. Use the steps below to help you.  The theorem states that, given a linear map , with and vector spaces, the rank of , plus the nullity of , equals the dimension of the domain . Assume that the dimension of is .  For simplicity, denote the rank of by , and the nullity by .  Recall that is the dimension of the range space of . State the precise definition.  Recall that is the dimension of the null space of . State the precise definition.  Begin with a basis for the null space, denoted . Show how this can be extended to a basis for , with In this portion, you should assume , and construct additional vectors which are not linear combinations of vectors in . Prove that you can always do this until you have total linearly independent vectors.  Show that is a basis for the range space. Start by showing that it is linearly independent, and be sure you prove that each element of the range space can be written as a linear combination of .  Show that spans the range space.  State your conclusion.    "
},
{
  "id": "AT4",
  "level": "1",
  "url": "AT4.html",
  "type": "Section",
  "number": "3.4",
  "title": "Injective and Surjective Linear Maps (AT4)",
  "body": " Injective and Surjective Linear Maps (AT4)     Determine if a given linear map is injective and\/or surjective.     Class Activities    Let be a linear transformation. is called injective or one-to-one if does not map two distinct vectors to the same place. More precisely, is injective if whenever .      An injective transformation and a non-injective transformation       Let be given by Is injective?    Yes, because whenever .    Yes, because whenever .    No, because .    No, because .        Let be given by Is injective?    Yes, because whenever .    Yes, because whenever .    No, because .    No, because .        Let be a linear transformation. is called surjective or onto if every element of is mapped to by an element of . More precisely, for every , there is some with .      A surjective transformation and a non-surjective transformation       Let be given by Is surjective?    Yes, because for every , there exists such that .    No, because can never equal .    No, because can never equal .        Let be given by Is surjective?    Yes, because for every , there exists such that .    Yes, because for every , there exists such that .    No, because can never equal .        As we will see, it's no coincidence that the of the injective map's standard matrix has all pivot columns. Similarly, the of the surjective map's standard matrix has a pivot in each row.      Let be a linear transformation where contains multiple vectors. What can you conclude?     is injective     is not injective     is surjective     is not surjective        A linear transformation is injective if and only if  . Put another way, an injective linear transformation may be recognized by its trivial kernel.      A linear transformation with trivial kernel, which is therefore injective       Let be a linear transformation where is spanned by four vectors. What can you conclude?     is injective     is not injective     is surjective     is not surjective        A linear transformation is surjective if and only if  . Put another way, a surjective linear transformation may be recognized by its identical codomain and image.      A linear transformation with identical codomain and image, which is therefore surjective; and a linear transformation with an image smaller than the codomain , which is therefore not surjective.       Let be a linear map with standard matrix . Sort the following claims into two groups of equivalent statements: one group that means is injective , and one group that means is surjective .   The kernel of is trivial, i.e. .  The columns of span .  The columns of are linearly independent.  Every column of has a pivot.  Every row of has a pivot.  The image of equals its codomain, i.e. .  The system of linear equations given by the augmented matrix has a solution for all .  The system of linear equations given by the augmented matrix has exactly one solution.        The easiest way to determine if the linear map with standard matrix is injective is to see if has a pivot in each column.  The easiest way to determine if the linear map with standard matrix is surjective is to see if has a pivot in each row.      What can you conclude about the linear map with standard matrix ?   Its standard matrix has more columns than rows, so is not injective.  Its standard matrix has more columns than rows, so is injective.  Its standard matrix has more rows than columns, so is not surjective.  Its standard matrix has more rows than columns, so is surjective.       What can you conclude about the linear map with standard matrix ?   Its standard matrix has more columns than rows, so is not injective.  Its standard matrix has more columns than rows, so is injective.  Its standard matrix has more rows than columns, so is not surjective.  Its standard matrix has more rows than columns, so is surjective.       The following are true for any linear map :   If , then is not injective.  If , then is not surjective.   Basically, a linear transformation cannot reduce dimension without collapsing vectors into each other, and a linear transformation cannot increase dimension from its domain to its image.      A linear transformation whose domain has a larger dimension than its codomain, and is therefore not injective; and a linear transformation whose domain has a smaller dimension than its codomain, and is therefore not surjective.   But dimension arguments cannot be used to prove a map is injective or surjective.      Suppose with standard matrix is both injective and surjective (we call such maps bijective ).   How many pivot rows must have?  How many pivot columns must have?  What is ?     Let be a bijective linear map with standard matrix . Label each of the following as true or false.    is the identity matrix.  The columns of form a basis for   The system of linear equations given by the augmented matrix has exactly one solution for each .       The easiest way to show that the linear map with standard matrix is bijective is to show that is the identity matrix.      Let be given by the standard matrix Which of the following must be true?    is neither injective nor surjective   is injective but not surjective   is surjective but not injective   is bijective.        Let be given by Which of the following must be true?    is neither injective nor surjective   is injective but not surjective   is surjective but not injective   is bijective.        Let be given by Which of the following must be true?    is neither injective nor surjective   is injective but not surjective   is surjective but not injective   is bijective.        Let be given by Which of the following must be true?    is neither injective nor surjective   is injective but not surjective   is surjective but not injective   is bijective.        Videos      Video: The kernel and image of a linear transformation       Video: Finding a basis of the image of a linear transformation     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   Suppose that is a linear transformation between two vector spaces and . State carefully what conditions must satisfy. Let and be the zero vectors in and respectively.  Prove that is one-to-one if and only if , and that is the unique element of which is mapped to . Remember that this needs to be done in both directions. First prove the if and only if statement, and then show the uniqueness.  Do not use subtraction in your proof. The only vector space operation we have is addition, and a structure preserving function only preserves addition. If you are writing , what you really mean is that , where is the additive inverse of .      Start with an -dimensional vector space . We can define the dual of , denoted , by Prove that is isomorphic to . Here are some things to think about as you work through this.  Start by assuming you have a basis for . How many basis vectors should you have?  For each basis vector in , define a function that returns 1 if it's given that basis vector, and returns 0 if it's given any other basis vector. For example, if and are each members of the basis for , and you'll need a function , where and for all .  How many of these functions will you need? Show that each of them is in .  Show that the functions you found in the last part are a basis for ? To do this, take an arbitrary function and some vector . Write in terms of the basis you chose earlier. How can you write , with respect to that basis? Pay attention to the fact that all functions in are linear.  Now that you've got a basis for and a basis for , can you find an isomorphism?      Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-20",
  "level": "2",
  "url": "AT4.html#objectives-20",
  "type": "Learning Outcomes",
  "number": "3.4",
  "title": "",
  "body": "   Determine if a given linear map is injective and\/or surjective.    "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "AT4.html#definition-23",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  Let be a linear transformation. is called injective or one-to-one if does not map two distinct vectors to the same place. More precisely, is injective if whenever .      An injective transformation and a non-injective transformation    "
},
{
  "id": "activity-105",
  "level": "2",
  "url": "AT4.html#activity-105",
  "type": "Activity",
  "number": "3.4.2",
  "title": "",
  "body": "  Let be given by Is injective?    Yes, because whenever .    Yes, because whenever .    No, because .    No, because .     "
},
{
  "id": "activity-106",
  "level": "2",
  "url": "AT4.html#activity-106",
  "type": "Activity",
  "number": "3.4.3",
  "title": "",
  "body": "  Let be given by Is injective?    Yes, because whenever .    Yes, because whenever .    No, because .    No, because .     "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "AT4.html#definition-24",
  "type": "Definition",
  "number": "3.4.4",
  "title": "",
  "body": "  Let be a linear transformation. is called surjective or onto if every element of is mapped to by an element of . More precisely, for every , there is some with .      A surjective transformation and a non-surjective transformation    "
},
{
  "id": "activity-107",
  "level": "2",
  "url": "AT4.html#activity-107",
  "type": "Activity",
  "number": "3.4.5",
  "title": "",
  "body": "  Let be given by Is surjective?    Yes, because for every , there exists such that .    No, because can never equal .    No, because can never equal .     "
},
{
  "id": "activity-108",
  "level": "2",
  "url": "AT4.html#activity-108",
  "type": "Activity",
  "number": "3.4.6",
  "title": "",
  "body": "  Let be given by Is surjective?    Yes, because for every , there exists such that .    Yes, because for every , there exists such that .    No, because can never equal .     "
},
{
  "id": "observation-22",
  "level": "2",
  "url": "AT4.html#observation-22",
  "type": "Observation",
  "number": "3.4.7",
  "title": "",
  "body": "  As we will see, it's no coincidence that the of the injective map's standard matrix has all pivot columns. Similarly, the of the surjective map's standard matrix has a pivot in each row.   "
},
{
  "id": "activity-109",
  "level": "2",
  "url": "AT4.html#activity-109",
  "type": "Activity",
  "number": "3.4.8",
  "title": "",
  "body": "  Let be a linear transformation where contains multiple vectors. What can you conclude?     is injective     is not injective     is surjective     is not surjective     "
},
{
  "id": "fact-21",
  "level": "2",
  "url": "AT4.html#fact-21",
  "type": "Fact",
  "number": "3.4.9",
  "title": "",
  "body": "  A linear transformation is injective if and only if  . Put another way, an injective linear transformation may be recognized by its trivial kernel.      A linear transformation with trivial kernel, which is therefore injective    "
},
{
  "id": "activity-110",
  "level": "2",
  "url": "AT4.html#activity-110",
  "type": "Activity",
  "number": "3.4.10",
  "title": "",
  "body": "  Let be a linear transformation where is spanned by four vectors. What can you conclude?     is injective     is not injective     is surjective     is not surjective     "
},
{
  "id": "fact-22",
  "level": "2",
  "url": "AT4.html#fact-22",
  "type": "Fact",
  "number": "3.4.11",
  "title": "",
  "body": "  A linear transformation is surjective if and only if  . Put another way, a surjective linear transformation may be recognized by its identical codomain and image.      A linear transformation with identical codomain and image, which is therefore surjective; and a linear transformation with an image smaller than the codomain , which is therefore not surjective.    "
},
{
  "id": "activity-111",
  "level": "2",
  "url": "AT4.html#activity-111",
  "type": "Activity",
  "number": "3.4.12",
  "title": "",
  "body": "  Let be a linear map with standard matrix . Sort the following claims into two groups of equivalent statements: one group that means is injective , and one group that means is surjective .   The kernel of is trivial, i.e. .  The columns of span .  The columns of are linearly independent.  Every column of has a pivot.  Every row of has a pivot.  The image of equals its codomain, i.e. .  The system of linear equations given by the augmented matrix has a solution for all .  The system of linear equations given by the augmented matrix has exactly one solution.     "
},
{
  "id": "observation-23",
  "level": "2",
  "url": "AT4.html#observation-23",
  "type": "Observation",
  "number": "3.4.13",
  "title": "",
  "body": "  The easiest way to determine if the linear map with standard matrix is injective is to see if has a pivot in each column.  The easiest way to determine if the linear map with standard matrix is surjective is to see if has a pivot in each row.   "
},
{
  "id": "activity-112",
  "level": "2",
  "url": "AT4.html#activity-112",
  "type": "Activity",
  "number": "3.4.14",
  "title": "",
  "body": "  What can you conclude about the linear map with standard matrix ?   Its standard matrix has more columns than rows, so is not injective.  Its standard matrix has more columns than rows, so is injective.  Its standard matrix has more rows than columns, so is not surjective.  Its standard matrix has more rows than columns, so is surjective.    "
},
{
  "id": "activity-113",
  "level": "2",
  "url": "AT4.html#activity-113",
  "type": "Activity",
  "number": "3.4.15",
  "title": "",
  "body": "  What can you conclude about the linear map with standard matrix ?   Its standard matrix has more columns than rows, so is not injective.  Its standard matrix has more columns than rows, so is injective.  Its standard matrix has more rows than columns, so is not surjective.  Its standard matrix has more rows than columns, so is surjective.    "
},
{
  "id": "fact-23",
  "level": "2",
  "url": "AT4.html#fact-23",
  "type": "Fact",
  "number": "3.4.16",
  "title": "",
  "body": "  The following are true for any linear map :   If , then is not injective.  If , then is not surjective.   Basically, a linear transformation cannot reduce dimension without collapsing vectors into each other, and a linear transformation cannot increase dimension from its domain to its image.      A linear transformation whose domain has a larger dimension than its codomain, and is therefore not injective; and a linear transformation whose domain has a smaller dimension than its codomain, and is therefore not surjective.   But dimension arguments cannot be used to prove a map is injective or surjective.   "
},
{
  "id": "activity-114",
  "level": "2",
  "url": "AT4.html#activity-114",
  "type": "Activity",
  "number": "3.4.17",
  "title": "",
  "body": "  Suppose with standard matrix is both injective and surjective (we call such maps bijective ).   How many pivot rows must have?  How many pivot columns must have?  What is ?  "
},
{
  "id": "activity-115",
  "level": "2",
  "url": "AT4.html#activity-115",
  "type": "Activity",
  "number": "3.4.18",
  "title": "",
  "body": "  Let be a bijective linear map with standard matrix . Label each of the following as true or false.    is the identity matrix.  The columns of form a basis for   The system of linear equations given by the augmented matrix has exactly one solution for each .    "
},
{
  "id": "observation-24",
  "level": "2",
  "url": "AT4.html#observation-24",
  "type": "Observation",
  "number": "3.4.19",
  "title": "",
  "body": "  The easiest way to show that the linear map with standard matrix is bijective is to show that is the identity matrix.   "
},
{
  "id": "activity-116",
  "level": "2",
  "url": "AT4.html#activity-116",
  "type": "Activity",
  "number": "3.4.20",
  "title": "",
  "body": "  Let be given by the standard matrix Which of the following must be true?    is neither injective nor surjective   is injective but not surjective   is surjective but not injective   is bijective.    "
},
{
  "id": "activity-117",
  "level": "2",
  "url": "AT4.html#activity-117",
  "type": "Activity",
  "number": "3.4.21",
  "title": "",
  "body": "  Let be given by Which of the following must be true?    is neither injective nor surjective   is injective but not surjective   is surjective but not injective   is bijective.    "
},
{
  "id": "activity-118",
  "level": "2",
  "url": "AT4.html#activity-118",
  "type": "Activity",
  "number": "3.4.22",
  "title": "",
  "body": "  Let be given by Which of the following must be true?    is neither injective nor surjective   is injective but not surjective   is surjective but not injective   is bijective.    "
},
{
  "id": "activity-119",
  "level": "2",
  "url": "AT4.html#activity-119",
  "type": "Activity",
  "number": "3.4.23",
  "title": "",
  "body": "  Let be given by Which of the following must be true?    is neither injective nor surjective   is injective but not surjective   is surjective but not injective   is bijective.    "
},
{
  "id": "figure-38",
  "level": "2",
  "url": "AT4.html#figure-38",
  "type": "Figure",
  "number": "38",
  "title": "",
  "body": "    Video: The kernel and image of a linear transformation  "
},
{
  "id": "figure-39",
  "level": "2",
  "url": "AT4.html#figure-39",
  "type": "Figure",
  "number": "39",
  "title": "",
  "body": "    Video: Finding a basis of the image of a linear transformation  "
},
{
  "id": "exploration-38",
  "level": "2",
  "url": "AT4.html#exploration-38",
  "type": "Exploration",
  "number": "3.4.24",
  "title": "",
  "body": " Suppose that is a linear transformation between two vector spaces and . State carefully what conditions must satisfy. Let and be the zero vectors in and respectively.  Prove that is one-to-one if and only if , and that is the unique element of which is mapped to . Remember that this needs to be done in both directions. First prove the if and only if statement, and then show the uniqueness.  Do not use subtraction in your proof. The only vector space operation we have is addition, and a structure preserving function only preserves addition. If you are writing , what you really mean is that , where is the additive inverse of .    "
},
{
  "id": "exploration-39",
  "level": "2",
  "url": "AT4.html#exploration-39",
  "type": "Exploration",
  "number": "3.4.25",
  "title": "",
  "body": " Start with an -dimensional vector space . We can define the dual of , denoted , by Prove that is isomorphic to . Here are some things to think about as you work through this.  Start by assuming you have a basis for . How many basis vectors should you have?  For each basis vector in , define a function that returns 1 if it's given that basis vector, and returns 0 if it's given any other basis vector. For example, if and are each members of the basis for , and you'll need a function , where and for all .  How many of these functions will you need? Show that each of them is in .  Show that the functions you found in the last part are a basis for ? To do this, take an arbitrary function and some vector . Write in terms of the basis you chose earlier. How can you write , with respect to that basis? Pay attention to the fact that all functions in are linear.  Now that you've got a basis for and a basis for , can you find an isomorphism?   "
},
{
  "id": "MX1",
  "level": "1",
  "url": "MX1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Matrices and Multiplication (MX1)",
  "body": " Matrices and Multiplication (MX1)     Multiply matrices.     Class Activities    If and are linear maps, then the composition map is a linear map from .      The composition of two linear maps.   Recall that for a vector, , the composition is computed as .      Let be given by the standard matrix and be given by the standard matrix .  What are the domain and codomain of the composition map ?    The domain is and the codomain is   The domain is and the codomain is   The domain is and the codomain is   The domain is and the codomain is         Let be given by the standard matrix and be given by the standard matrix .  What size will the standard matrix of be? (Rows Columns)                      Let be given by the standard matrix and be given by the standard matrix .   Compute   Compute .  Compute .  Write the standard matrix of .     We define the product  of a matrix and a matrix to be the standard matrix of the composition map of the two corresponding linear functions.  For the previous activity, was a map , and was a map , so gave a map with a standard matrix:        Let be given by the matrix and be given by the matrix .   Write the dimensions (rows columns) for , , , and .  Find the standard matrix of .  Find the standard matrix of .     Consider the following three matrices.    Find the domain and codomain of each of the three linear maps corresponding to , , and .  Only one of the matrix products can actually be computed. Compute it.     Let , and let .   Compute the product by hand.  Check your work using technology. Using Octave: B = [3 -4 0 ; 2 0 -1 ; 0 -3 3] A = [2 7 -1 ; 0 3 2 ; 1 1 -1] B*A      Of the following three matrices, only two may be multiplied. Explain which two can be multiplied and why. Then show how to find their product.         Videos      Video: Multiplying matrices     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   Construct 3 matrices, , such that    .     Construct 3 examples of matrix multiplication, with all matrix dimensions at least 2.  Where and are not square, but is square.  Where .  Where .      Use the included map in this problem.  Adjacency map, showing roads between 5 cities   A map with 5 dots. A is connected to B, B is connected to C, C is connected to D and E, and D and E are connected to each other      An adjacency matrix for this map is a matrix that has the number of roads from city to city in the entry of the matrix. A road is a path of length exactly 1. All entries are 0. Write the adjacency matrix for this map, with the cities in alphabetical order.  What does the square of this matrix tell you about the map? The cube? The -th power?       Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-22",
  "level": "2",
  "url": "MX1.html#objectives-22",
  "type": "Learning Outcomes",
  "number": "4.1",
  "title": "",
  "body": "   Multiply matrices.    "
},
{
  "id": "observation-25",
  "level": "2",
  "url": "MX1.html#observation-25",
  "type": "Observation",
  "number": "4.1.1",
  "title": "",
  "body": "  If and are linear maps, then the composition map is a linear map from .      The composition of two linear maps.   Recall that for a vector, , the composition is computed as .   "
},
{
  "id": "activity-120",
  "level": "2",
  "url": "MX1.html#activity-120",
  "type": "Activity",
  "number": "4.1.2",
  "title": "",
  "body": "  Let be given by the standard matrix and be given by the standard matrix .  What are the domain and codomain of the composition map ?    The domain is and the codomain is   The domain is and the codomain is   The domain is and the codomain is   The domain is and the codomain is      "
},
{
  "id": "activity-121",
  "level": "2",
  "url": "MX1.html#activity-121",
  "type": "Activity",
  "number": "4.1.3",
  "title": "",
  "body": "  Let be given by the standard matrix and be given by the standard matrix .  What size will the standard matrix of be? (Rows Columns)                   "
},
{
  "id": "activity-122",
  "level": "2",
  "url": "MX1.html#activity-122",
  "type": "Activity",
  "number": "4.1.4",
  "title": "",
  "body": "  Let be given by the standard matrix and be given by the standard matrix .   Compute   Compute .  Compute .  Write the standard matrix of .  "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "MX1.html#definition-25",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": "  We define the product  of a matrix and a matrix to be the standard matrix of the composition map of the two corresponding linear functions.  For the previous activity, was a map , and was a map , so gave a map with a standard matrix:     "
},
{
  "id": "activity-123",
  "level": "2",
  "url": "MX1.html#activity-123",
  "type": "Activity",
  "number": "4.1.6",
  "title": "",
  "body": "  Let be given by the matrix and be given by the matrix .   Write the dimensions (rows columns) for , , , and .  Find the standard matrix of .  Find the standard matrix of .  "
},
{
  "id": "activity-124",
  "level": "2",
  "url": "MX1.html#activity-124",
  "type": "Activity",
  "number": "4.1.7",
  "title": "",
  "body": "  Consider the following three matrices.    Find the domain and codomain of each of the three linear maps corresponding to , , and .  Only one of the matrix products can actually be computed. Compute it.  "
},
{
  "id": "activity-125",
  "level": "2",
  "url": "MX1.html#activity-125",
  "type": "Activity",
  "number": "4.1.8",
  "title": "",
  "body": "  Let , and let .   Compute the product by hand.  Check your work using technology. Using Octave: B = [3 -4 0 ; 2 0 -1 ; 0 -3 3] A = [2 7 -1 ; 0 3 2 ; 1 1 -1] B*A  "
},
{
  "id": "activity-126",
  "level": "2",
  "url": "MX1.html#activity-126",
  "type": "Activity",
  "number": "4.1.9",
  "title": "",
  "body": "  Of the following three matrices, only two may be multiplied. Explain which two can be multiplied and why. Then show how to find their product.      "
},
{
  "id": "figure-41",
  "level": "2",
  "url": "MX1.html#figure-41",
  "type": "Figure",
  "number": "41",
  "title": "",
  "body": "    Video: Multiplying matrices  "
},
{
  "id": "exploration-40",
  "level": "2",
  "url": "MX1.html#exploration-40",
  "type": "Exploration",
  "number": "4.1.10",
  "title": "",
  "body": " Construct 3 matrices, , such that    .   "
},
{
  "id": "exploration-41",
  "level": "2",
  "url": "MX1.html#exploration-41",
  "type": "Exploration",
  "number": "4.1.11",
  "title": "",
  "body": " Construct 3 examples of matrix multiplication, with all matrix dimensions at least 2.  Where and are not square, but is square.  Where .  Where .    "
},
{
  "id": "exploration-42",
  "level": "2",
  "url": "MX1.html#exploration-42",
  "type": "Exploration",
  "number": "4.1.12",
  "title": "",
  "body": " Use the included map in this problem.  Adjacency map, showing roads between 5 cities   A map with 5 dots. A is connected to B, B is connected to C, C is connected to D and E, and D and E are connected to each other      An adjacency matrix for this map is a matrix that has the number of roads from city to city in the entry of the matrix. A road is a path of length exactly 1. All entries are 0. Write the adjacency matrix for this map, with the cities in alphabetical order.  What does the square of this matrix tell you about the map? The cube? The -th power?    "
},
{
  "id": "MX2",
  "level": "1",
  "url": "MX2.html",
  "type": "Section",
  "number": "4.2",
  "title": "Row Operations as Matrix Multiplication (MX2)",
  "body": " Row Operations as Matrix Multiplication (MX2)     Express row operations through matrix multiplication.     Class Activities    Let . Find a matrix such that , that is, Check your guess using technology.       The identity matrix (or just when is obvious from context) is the matrix It has a on each diagonal element and a in every other position.      For any square matrix , :       Tweaking the identity matrix slightly allows us to write row operations in terms of matrix multiplication.   Create a matrix that doubles the third row of :   Create a matrix that swaps the second and third rows of :   Create a matrix that adds times the third row of to the first row:       If is the result of applying a row operation to , then is the result of applying the same row operation to .    Scaling a row:     Swapping rows:     Adding a row multiple to another row:     Such matrices can be chained together to emulate multiple row operations. In particular, for some sequence of matrices .      Consider the two row operations and applied as follows to show :   Express these row operations as matrix multiplication by expressing as the product of two matrices and : Check your work using technology.       Videos      Video: Row operations as matrix multiplication     Slideshow  Slideshow of activities available at .    Exercises available at .    Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-23",
  "level": "2",
  "url": "MX2.html#objectives-23",
  "type": "Learning Outcomes",
  "number": "4.2",
  "title": "",
  "body": "   Express row operations through matrix multiplication.    "
},
{
  "id": "activity-127",
  "level": "2",
  "url": "MX2.html#activity-127",
  "type": "Activity",
  "number": "4.2.1",
  "title": "",
  "body": "  Let . Find a matrix such that , that is, Check your guess using technology.   "
},
{
  "id": "definition-26",
  "level": "2",
  "url": "MX2.html#definition-26",
  "type": "Definition",
  "number": "4.2.2",
  "title": "",
  "body": "  The identity matrix (or just when is obvious from context) is the matrix It has a on each diagonal element and a in every other position.   "
},
{
  "id": "fact-24",
  "level": "2",
  "url": "MX2.html#fact-24",
  "type": "Fact",
  "number": "4.2.3",
  "title": "",
  "body": "  For any square matrix , :    "
},
{
  "id": "activity-128",
  "level": "2",
  "url": "MX2.html#activity-128",
  "type": "Activity",
  "number": "4.2.4",
  "title": "",
  "body": "  Tweaking the identity matrix slightly allows us to write row operations in terms of matrix multiplication.   Create a matrix that doubles the third row of :   Create a matrix that swaps the second and third rows of :   Create a matrix that adds times the third row of to the first row:   "
},
{
  "id": "fact-25",
  "level": "2",
  "url": "MX2.html#fact-25",
  "type": "Fact",
  "number": "4.2.5",
  "title": "",
  "body": "  If is the result of applying a row operation to , then is the result of applying the same row operation to .    Scaling a row:     Swapping rows:     Adding a row multiple to another row:     Such matrices can be chained together to emulate multiple row operations. In particular, for some sequence of matrices .   "
},
{
  "id": "activity-129",
  "level": "2",
  "url": "MX2.html#activity-129",
  "type": "Activity",
  "number": "4.2.6",
  "title": "",
  "body": "  Consider the two row operations and applied as follows to show :   Express these row operations as matrix multiplication by expressing as the product of two matrices and : Check your work using technology.   "
},
{
  "id": "figure-43",
  "level": "2",
  "url": "MX2.html#figure-43",
  "type": "Figure",
  "number": "43",
  "title": "",
  "body": "    Video: Row operations as matrix multiplication  "
},
{
  "id": "MX3",
  "level": "1",
  "url": "MX3.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Inverse of a Matrix (MX3)",
  "body": " The Inverse of a Matrix (MX3)     Determine if a matrix is invertible, and if so, compute its inverse.     Class Activities    Let be a linear map with standard matrix . Sort the following items into three groups of statements: a group that means is injective , a group that means is surjective , and a group that means is bijective .    has a solution for all    has a unique solution for all    has a unique solution.  The columns of span   The columns of are linearly independent  The columns of are a basis of   Every column of has a pivot  Every row of has a pivot   and        Let be the linear transformation given by the standard matrix .  Write an augmented matrix representing the system of equations given by , that is, . Then solve to find the kernel of .       Let be a linear map with standard matrix .   If is a bijection and is any vector, then has a unique solution.  So we may define an inverse map inverse map  by setting to be this unique solution.  Let be the standard matrix for . We call the inverse matrix inverse matrix of , so we also say that is invertible invertible .       Let be the linear transformation given by the standard matrix .   Write an augmented matrix representing the system of equations given by , that is, . Then solve to find .  Solve to find .  Solve to find .  Write , the standard matrix for .      We could have solved these three systems simultaneously by row reducing the matrix at once.       Find the inverse of the matrix by row-reducing .       Is the matrix invertible? Give a reason for your answer.       An matrix is invertible if and only if .      Let be the bijective linear map defined by , with the inverse map .   Compute .  If is the standard matrix for and is the standard matrix for , find the matrix       is the identity map for any bijective linear transformation . Therefore equals the identity matrix for any invertible matrix .      Videos      Video: Invertible matrices       Video: Finding the inverse of a matrix     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   Assume is an matrix. Prove the following are equivalent. Some of these results you have proven previously.   is non-singular.   row reduces to the identity matrix.  For any choice of , the system of equations represented by the augmented matrix has a unique solution.  The columns of are a linearly independent set.  The columns of form a basis for .  The rank of is .  The nullity of is 0.   is invertible.  The linear transformation with standard matrix is injective and surjective. Such a map is called an isomorphism .       Assume is a square matrix, and is the zero matrix. Prove that You will need to first prove a lemma that matrix multiplication distributes over matrix addition.  Generalize your result to the case where is the zero matrix.       Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-24",
  "level": "2",
  "url": "MX3.html#objectives-24",
  "type": "Learning Outcomes",
  "number": "4.3",
  "title": "",
  "body": "   Determine if a matrix is invertible, and if so, compute its inverse.    "
},
{
  "id": "activity-130",
  "level": "2",
  "url": "MX3.html#activity-130",
  "type": "Activity",
  "number": "4.3.1",
  "title": "",
  "body": "  Let be a linear map with standard matrix . Sort the following items into three groups of statements: a group that means is injective , a group that means is surjective , and a group that means is bijective .    has a solution for all    has a unique solution for all    has a unique solution.  The columns of span   The columns of are linearly independent  The columns of are a basis of   Every column of has a pivot  Every row of has a pivot   and     "
},
{
  "id": "activity-131",
  "level": "2",
  "url": "MX3.html#activity-131",
  "type": "Activity",
  "number": "4.3.2",
  "title": "",
  "body": "  Let be the linear transformation given by the standard matrix .  Write an augmented matrix representing the system of equations given by , that is, . Then solve to find the kernel of .   "
},
{
  "id": "definition-27",
  "level": "2",
  "url": "MX3.html#definition-27",
  "type": "Definition",
  "number": "4.3.3",
  "title": "",
  "body": "  Let be a linear map with standard matrix .   If is a bijection and is any vector, then has a unique solution.  So we may define an inverse map inverse map  by setting to be this unique solution.  Let be the standard matrix for . We call the inverse matrix inverse matrix of , so we also say that is invertible invertible .    "
},
{
  "id": "activity-132",
  "level": "2",
  "url": "MX3.html#activity-132",
  "type": "Activity",
  "number": "4.3.4",
  "title": "",
  "body": "  Let be the linear transformation given by the standard matrix .   Write an augmented matrix representing the system of equations given by , that is, . Then solve to find .  Solve to find .  Solve to find .  Write , the standard matrix for .  "
},
{
  "id": "observation-26",
  "level": "2",
  "url": "MX3.html#observation-26",
  "type": "Observation",
  "number": "4.3.5",
  "title": "",
  "body": "  We could have solved these three systems simultaneously by row reducing the matrix at once.    "
},
{
  "id": "activity-133",
  "level": "2",
  "url": "MX3.html#activity-133",
  "type": "Activity",
  "number": "4.3.6",
  "title": "",
  "body": "  Find the inverse of the matrix by row-reducing .   "
},
{
  "id": "activity-134",
  "level": "2",
  "url": "MX3.html#activity-134",
  "type": "Activity",
  "number": "4.3.7",
  "title": "",
  "body": "  Is the matrix invertible? Give a reason for your answer.   "
},
{
  "id": "observation-27",
  "level": "2",
  "url": "MX3.html#observation-27",
  "type": "Observation",
  "number": "4.3.8",
  "title": "",
  "body": "  An matrix is invertible if and only if .   "
},
{
  "id": "activity-135",
  "level": "2",
  "url": "MX3.html#activity-135",
  "type": "Activity",
  "number": "4.3.9",
  "title": "",
  "body": "  Let be the bijective linear map defined by , with the inverse map .   Compute .  If is the standard matrix for and is the standard matrix for , find the matrix   "
},
{
  "id": "observation-28",
  "level": "2",
  "url": "MX3.html#observation-28",
  "type": "Observation",
  "number": "4.3.10",
  "title": "",
  "body": "   is the identity map for any bijective linear transformation . Therefore equals the identity matrix for any invertible matrix .   "
},
{
  "id": "figure-44",
  "level": "2",
  "url": "MX3.html#figure-44",
  "type": "Figure",
  "number": "44",
  "title": "",
  "body": "    Video: Invertible matrices  "
},
{
  "id": "figure-45",
  "level": "2",
  "url": "MX3.html#figure-45",
  "type": "Figure",
  "number": "45",
  "title": "",
  "body": "    Video: Finding the inverse of a matrix  "
},
{
  "id": "exploration-43",
  "level": "2",
  "url": "MX3.html#exploration-43",
  "type": "Exploration",
  "number": "4.3.11",
  "title": "",
  "body": " Assume is an matrix. Prove the following are equivalent. Some of these results you have proven previously.   is non-singular.   row reduces to the identity matrix.  For any choice of , the system of equations represented by the augmented matrix has a unique solution.  The columns of are a linearly independent set.  The columns of form a basis for .  The rank of is .  The nullity of is 0.   is invertible.  The linear transformation with standard matrix is injective and surjective. Such a map is called an isomorphism .    "
},
{
  "id": "exploration-44",
  "level": "2",
  "url": "MX3.html#exploration-44",
  "type": "Exploration",
  "number": "4.3.12",
  "title": "",
  "body": "  Assume is a square matrix, and is the zero matrix. Prove that You will need to first prove a lemma that matrix multiplication distributes over matrix addition.  Generalize your result to the case where is the zero matrix.    "
},
{
  "id": "GT1",
  "level": "1",
  "url": "GT1.html",
  "type": "Section",
  "number": "5.1",
  "title": "Row Operations and Determinants (GT1)",
  "body": " Row Operations and Determinants (GT1)     Describe how a row operation affects the determinant of a matrix.     Class Activities     The image in illustrates how the linear transformation given by the standard matrix transforms the unit square.      Transformation of the unit square by the matrix .    What are the lengths of and ?  What is the area of the transformed unit square?     The image below illustrates how the linear transformation given by the standard matrix transforms the unit square.      Transformation of the unit square by the matrix    What are the lengths of and ?  What is the area of the transformed unit square?     It is possible to find two nonparallel vectors that are scaled but not rotated by the linear map given by .        Certain vectors are stretched out without being rotated.   The process for finding such vectors will be covered later in this chapter.      Notice that while a linear map can transform vectors in various ways, linear maps always transform parallelograms into parallelograms, and these areas are always transformed by the same factor: in the case of , this factor is .      A linear map transforming parallelograms into parallelograms.   Since this change in area is always the same for a given linear map, it will be equal to the value of the transformed unit square (which begins with area ).      We will define the determinant of a square matrix , or for short, to be the factor by which scales areas. In order to figure out how to compute it, we first figure out the properties it must satisfy.      The linear transformation scaling areas by a constant factor, which we call the determinant       The transformation of the unit square by the standard matrix is illustrated below. If is the area of resulting parallelogram, what is the value of ?      The transformation of the unit square by the identity matrix.   The value for is:   0  1  2  4       The transformation of the unit square by the standard matrix is illustrated below: both . If is the area of the generated parallelogram, what is the value of ?      Transformation of the unit square by a matrix with identical columns.   The value of is:   0  1  2  4       The transformations of the unit square by the standard matrices and are illustrated below. Describe the value of .      The parallelograms generated by and \/   Describe the value of :            Cannot be determined from this information.     Consider the vectors , , , and displayed below. Each pair of vectors generates a parallelogram, and the area of each parallelogram can be described in terms of determinants.      The vectors , , and   For example, represents the shaded area shown below.      Parallelogram generated by and   Similarly, represents the shaded area shown below.      Parallelogram generated by and     The paralellograms generated by the standard matrices , and are illustrated below.      Parallelogram generated by and   Describe the value of .            Cannot be determined from this information.       The determinant is the unique function satisfying these properties:   whenever two columns of the matrix are identical.   , assuming no other columns change.   , assuming no other columns change.    Note that these last two properties together can be phrased as The determinant is linear in each column.       The determinant must also satisfy other properties. Consider and .      Parallelogram built by and   The base of both parallelograms is , while the height has not changed, so the determinant does not change either. This can also be proven using the other properties of the determinant:       Swapping columns may be thought of as a reflection, which is represented by a negative determinant. For example, the following matrices transform the unit square into the same parallelogram, but the second matrix reflects its orientation.       Reflection of a parallelogram as a result of swapping columns.       The fact that swapping columns multiplies determinants by a negative may be verified by adding and subtracting columns.       To summarize, we've shown that the column versions of the three row-reducing operations a matrix may be used to simplify a determinant in the following way:   Multiplying a column by a scalar multiplies the determinant by that scalar:   Swapping two columns changes the sign of the determinant:   Adding a multiple of a column to another column does not change the determinant:        The transformation given by the standard matrix scales areas by , and the transformation given by the standard matrix scales areas by . By what factor does the transformation given by the standard matrix scale areas?      Area changing under the composition of two linear maps             Cannot be determined       Since the transformation given by the standard matrix is obtained by applying the transformations given by and , it follows that .      Recall that row operations may be produced by matrix multiplication.   Multiply the first row of by :   Swap the first and second row of :   Add times the third row to the first row of :        The determinants of row operation matrices may be computed by manipulating columns to reduce each matrix to the identity:   Scaling a row:   Swapping rows:   Adding a row multiple to another row:        Consider the row operation applied as follows to show :    Find a matrix such that , by applying the same row operation to .  Find by comparing with the previous slide.  If is a matrix with , find      Consider the row operation applied as follows to show :    Find a matrix such that , by applying the same row operation to .  If is a matrix with , find .     Consider the row operation applied as follows to show :    Find a matrix such that .  If is a matrix with , find .     Recall that the column versions of the three row-reducing operations a matrix may be used to simplify a determinant:   Multiplying columns by scalars:   Swapping two columns:   Adding a multiple of a column to another column:        The determinants of row operation matrices may be computed by manipulating columns to reduce each matrix to the identity:   Scaling a row:   Swapping rows:   Adding a row multiple to another row:        Thus we can also use both row operations to simplify determinants:   Multiplying rows by scalars:    Swapping two rows:    Adding multiples of rows\/columns to other rows:         So we may compute the determinant of by manipulating its rows\/columns to reduce the matrix to :       Videos      Video: Row operations, matrix multiplication, and determinants     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations    Prove or disprove. The determinant is a linear operator on the vector space of matrices.  Find a matrix that will double the area of a region in .  Find a matrix that will triple the area of a region in .  Find a matrix that will halve the area of a region in .       Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-26",
  "level": "2",
  "url": "GT1.html#objectives-26",
  "type": "Learning Outcomes",
  "number": "5.1",
  "title": "",
  "body": "   Describe how a row operation affects the determinant of a matrix.    "
},
{
  "id": "activity-136",
  "level": "2",
  "url": "GT1.html#activity-136",
  "type": "Activity",
  "number": "5.1.1",
  "title": "",
  "body": "  The image in illustrates how the linear transformation given by the standard matrix transforms the unit square.      Transformation of the unit square by the matrix .    What are the lengths of and ?  What is the area of the transformed unit square?  "
},
{
  "id": "activity-137",
  "level": "2",
  "url": "GT1.html#activity-137",
  "type": "Activity",
  "number": "5.1.2",
  "title": "",
  "body": "  The image below illustrates how the linear transformation given by the standard matrix transforms the unit square.      Transformation of the unit square by the matrix    What are the lengths of and ?  What is the area of the transformed unit square?  "
},
{
  "id": "observation-29",
  "level": "2",
  "url": "GT1.html#observation-29",
  "type": "Observation",
  "number": "5.1.3",
  "title": "",
  "body": "  It is possible to find two nonparallel vectors that are scaled but not rotated by the linear map given by .        Certain vectors are stretched out without being rotated.   The process for finding such vectors will be covered later in this chapter.   "
},
{
  "id": "observation-30",
  "level": "2",
  "url": "GT1.html#observation-30",
  "type": "Observation",
  "number": "5.1.4",
  "title": "",
  "body": "  Notice that while a linear map can transform vectors in various ways, linear maps always transform parallelograms into parallelograms, and these areas are always transformed by the same factor: in the case of , this factor is .      A linear map transforming parallelograms into parallelograms.   Since this change in area is always the same for a given linear map, it will be equal to the value of the transformed unit square (which begins with area ).   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "GT1.html#remark-14",
  "type": "Remark",
  "number": "5.1.5",
  "title": "",
  "body": "  We will define the determinant of a square matrix , or for short, to be the factor by which scales areas. In order to figure out how to compute it, we first figure out the properties it must satisfy.      The linear transformation scaling areas by a constant factor, which we call the determinant    "
},
{
  "id": "activity-138",
  "level": "2",
  "url": "GT1.html#activity-138",
  "type": "Activity",
  "number": "5.1.6",
  "title": "",
  "body": "  The transformation of the unit square by the standard matrix is illustrated below. If is the area of resulting parallelogram, what is the value of ?      The transformation of the unit square by the identity matrix.   The value for is:   0  1  2  4    "
},
{
  "id": "activity-139",
  "level": "2",
  "url": "GT1.html#activity-139",
  "type": "Activity",
  "number": "5.1.7",
  "title": "",
  "body": "  The transformation of the unit square by the standard matrix is illustrated below: both . If is the area of the generated parallelogram, what is the value of ?      Transformation of the unit square by a matrix with identical columns.   The value of is:   0  1  2  4    "
},
{
  "id": "activity-140",
  "level": "2",
  "url": "GT1.html#activity-140",
  "type": "Activity",
  "number": "5.1.8",
  "title": "",
  "body": "  The transformations of the unit square by the standard matrices and are illustrated below. Describe the value of .      The parallelograms generated by and \/   Describe the value of :            Cannot be determined from this information.    "
},
{
  "id": "figure-54",
  "level": "2",
  "url": "GT1.html#figure-54",
  "type": "Figure",
  "number": "54",
  "title": "",
  "body": "    The vectors , , and  "
},
{
  "id": "figure-55",
  "level": "2",
  "url": "GT1.html#figure-55",
  "type": "Figure",
  "number": "55",
  "title": "",
  "body": "    Parallelogram generated by and  "
},
{
  "id": "figure-56",
  "level": "2",
  "url": "GT1.html#figure-56",
  "type": "Figure",
  "number": "56",
  "title": "",
  "body": "    Parallelogram generated by and  "
},
{
  "id": "activity-141",
  "level": "2",
  "url": "GT1.html#activity-141",
  "type": "Activity",
  "number": "5.1.9",
  "title": "",
  "body": "  The paralellograms generated by the standard matrices , and are illustrated below.      Parallelogram generated by and   Describe the value of .            Cannot be determined from this information.    "
},
{
  "id": "definition-28",
  "level": "2",
  "url": "GT1.html#definition-28",
  "type": "Definition",
  "number": "5.1.10",
  "title": "",
  "body": "  The determinant is the unique function satisfying these properties:   whenever two columns of the matrix are identical.   , assuming no other columns change.   , assuming no other columns change.    Note that these last two properties together can be phrased as The determinant is linear in each column.    "
},
{
  "id": "observation-31",
  "level": "2",
  "url": "GT1.html#observation-31",
  "type": "Observation",
  "number": "5.1.11",
  "title": "",
  "body": "  The determinant must also satisfy other properties. Consider and .      Parallelogram built by and   The base of both parallelograms is , while the height has not changed, so the determinant does not change either. This can also be proven using the other properties of the determinant:    "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "GT1.html#remark-15",
  "type": "Remark",
  "number": "5.1.12",
  "title": "",
  "body": "  Swapping columns may be thought of as a reflection, which is represented by a negative determinant. For example, the following matrices transform the unit square into the same parallelogram, but the second matrix reflects its orientation.       Reflection of a parallelogram as a result of swapping columns.    "
},
{
  "id": "observation-32",
  "level": "2",
  "url": "GT1.html#observation-32",
  "type": "Observation",
  "number": "5.1.13",
  "title": "",
  "body": "  The fact that swapping columns multiplies determinants by a negative may be verified by adding and subtracting columns.    "
},
{
  "id": "fact-26",
  "level": "2",
  "url": "GT1.html#fact-26",
  "type": "Fact",
  "number": "5.1.14",
  "title": "",
  "body": "  To summarize, we've shown that the column versions of the three row-reducing operations a matrix may be used to simplify a determinant in the following way:   Multiplying a column by a scalar multiplies the determinant by that scalar:   Swapping two columns changes the sign of the determinant:   Adding a multiple of a column to another column does not change the determinant:     "
},
{
  "id": "activity-142",
  "level": "2",
  "url": "GT1.html#activity-142",
  "type": "Activity",
  "number": "5.1.15",
  "title": "",
  "body": "  The transformation given by the standard matrix scales areas by , and the transformation given by the standard matrix scales areas by . By what factor does the transformation given by the standard matrix scale areas?      Area changing under the composition of two linear maps             Cannot be determined    "
},
{
  "id": "fact-27",
  "level": "2",
  "url": "GT1.html#fact-27",
  "type": "Fact",
  "number": "5.1.16",
  "title": "",
  "body": "  Since the transformation given by the standard matrix is obtained by applying the transformations given by and , it follows that .   "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "GT1.html#remark-16",
  "type": "Remark",
  "number": "5.1.17",
  "title": "",
  "body": "  Recall that row operations may be produced by matrix multiplication.   Multiply the first row of by :   Swap the first and second row of :   Add times the third row to the first row of :     "
},
{
  "id": "fact-28",
  "level": "2",
  "url": "GT1.html#fact-28",
  "type": "Fact",
  "number": "5.1.18",
  "title": "",
  "body": "  The determinants of row operation matrices may be computed by manipulating columns to reduce each matrix to the identity:   Scaling a row:   Swapping rows:   Adding a row multiple to another row:     "
},
{
  "id": "activity-143",
  "level": "2",
  "url": "GT1.html#activity-143",
  "type": "Activity",
  "number": "5.1.19",
  "title": "",
  "body": "  Consider the row operation applied as follows to show :    Find a matrix such that , by applying the same row operation to .  Find by comparing with the previous slide.  If is a matrix with , find   "
},
{
  "id": "activity-144",
  "level": "2",
  "url": "GT1.html#activity-144",
  "type": "Activity",
  "number": "5.1.20",
  "title": "",
  "body": "  Consider the row operation applied as follows to show :    Find a matrix such that , by applying the same row operation to .  If is a matrix with , find .  "
},
{
  "id": "activity-145",
  "level": "2",
  "url": "GT1.html#activity-145",
  "type": "Activity",
  "number": "5.1.21",
  "title": "",
  "body": "  Consider the row operation applied as follows to show :    Find a matrix such that .  If is a matrix with , find .  "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "GT1.html#remark-17",
  "type": "Remark",
  "number": "5.1.22",
  "title": "",
  "body": "  Recall that the column versions of the three row-reducing operations a matrix may be used to simplify a determinant:   Multiplying columns by scalars:   Swapping two columns:   Adding a multiple of a column to another column:     "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "GT1.html#remark-18",
  "type": "Remark",
  "number": "5.1.23",
  "title": "",
  "body": "  The determinants of row operation matrices may be computed by manipulating columns to reduce each matrix to the identity:   Scaling a row:   Swapping rows:   Adding a row multiple to another row:     "
},
{
  "id": "fact-29",
  "level": "2",
  "url": "GT1.html#fact-29",
  "type": "Fact",
  "number": "5.1.24",
  "title": "",
  "body": "  Thus we can also use both row operations to simplify determinants:   Multiplying rows by scalars:    Swapping two rows:    Adding multiples of rows\/columns to other rows:      "
},
{
  "id": "observation-33",
  "level": "2",
  "url": "GT1.html#observation-33",
  "type": "Observation",
  "number": "5.1.25",
  "title": "",
  "body": "  So we may compute the determinant of by manipulating its rows\/columns to reduce the matrix to :    "
},
{
  "id": "figure-61",
  "level": "2",
  "url": "GT1.html#figure-61",
  "type": "Figure",
  "number": "61",
  "title": "",
  "body": "    Video: Row operations, matrix multiplication, and determinants  "
},
{
  "id": "exploration-45",
  "level": "2",
  "url": "GT1.html#exploration-45",
  "type": "Exploration",
  "number": "5.1.26",
  "title": "",
  "body": "  Prove or disprove. The determinant is a linear operator on the vector space of matrices.  Find a matrix that will double the area of a region in .  Find a matrix that will triple the area of a region in .  Find a matrix that will halve the area of a region in .    "
},
{
  "id": "GT2",
  "level": "1",
  "url": "GT2.html",
  "type": "Section",
  "number": "5.2",
  "title": "Computing Determinants (GT2)",
  "body": " Computing Determinants (GT2)     Compute the determinant of a matrix.     Class Activities    We've seen that row reducing all the way into RREF gives us a method of computing determinants.  However, we learned in that this can be tedious for large matrices. Thus, we will try to figure out how to turn the determinant of a larger matrix into the determinant of a smaller matrix.      The following image illustrates the transformation of the unit cube by the matrix .      Transformation of the unit cube by the linear transformation.   Recall that for this solid , where is the height of the solid and is the area of its parallelogram base. So what must its volume be?                    If row contains all zeros except for a on the main (upper-left to lower-right) diagonal, then both column and row may be removed without changing the value of the determinant.   Since row and column operations affect the determinants in the same way, the same technique works for a column of all zeros except for a on the main diagonal.       Remove an appropriate row and column of to simplify the determinant to a determinant.     Simplify to a multiple of a determinant by first doing the following:   Factor out a from a column.  Swap rows or columns to put a on the main diagonal.     Simplify to a multiple of a determinant by first doing the following:   Use row\/column operations to create two zeroes in the same row or column.  Factor\/swap as needed to get a row\/column of all zeroes except a on the main diagonal.     Using row\/column operations, you can introduce zeros and reduce dimension to whittle down the determinant of a large matrix to a determinant of a smaller matrix.       Rewrite as a multiple of a determinant of a matrix.     Compute by using any combination of row\/column operations.      Another option is to take advantage of the fact that the determinant is linear in each row or column. This approach is called Laplace expansion or cofactor expansion .  For example, since ,       Applying Laplace expansion to a matrix yields a short formula you may have seen: .  There are formulas for the determinants of larger matrices, but they can be pretty tedious to use. For example, writing out a formula for a determinant would require 24 different terms!   So this is why we either use Laplace expansion or row\/column operations directly.      Based on the previous activities, which technique is easier for computing determinants?   Memorizing formulas.  Using row\/column operations.  Laplace expansion.  Some other technique (be prepared to describe it).       Use your preferred technique to compute .    You can check your answer using Octave.     Videos      Video: Simplifying a determinant using row operations       Video: Computing a determinant     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   Prove that the equation of a line in the plane, through points , when is given by the equation     Prove that the determinant of any diagonal matrix, upper triangular matrix, or lower triangular matrix, is the product of it's diagonal entries.    Show that, if an matrix has a non-zero determinant, then any can be represented as a linear combination of the columns of .    What is the smallest number of zeros necessary to place in a matrix, and the placement of those zeros, such that the matrix has a zero determinant?     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-27",
  "level": "2",
  "url": "GT2.html#objectives-27",
  "type": "Learning Outcomes",
  "number": "5.2",
  "title": "",
  "body": "   Compute the determinant of a matrix.    "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "GT2.html#remark-19",
  "type": "Remark",
  "number": "5.2.1",
  "title": "",
  "body": "  We've seen that row reducing all the way into RREF gives us a method of computing determinants.  However, we learned in that this can be tedious for large matrices. Thus, we will try to figure out how to turn the determinant of a larger matrix into the determinant of a smaller matrix.   "
},
{
  "id": "activity-146",
  "level": "2",
  "url": "GT2.html#activity-146",
  "type": "Activity",
  "number": "5.2.2",
  "title": "",
  "body": "  The following image illustrates the transformation of the unit cube by the matrix .      Transformation of the unit cube by the linear transformation.   Recall that for this solid , where is the height of the solid and is the area of its parallelogram base. So what must its volume be?                 "
},
{
  "id": "fact-30",
  "level": "2",
  "url": "GT2.html#fact-30",
  "type": "Fact",
  "number": "5.2.3",
  "title": "",
  "body": "  If row contains all zeros except for a on the main (upper-left to lower-right) diagonal, then both column and row may be removed without changing the value of the determinant.   Since row and column operations affect the determinants in the same way, the same technique works for a column of all zeros except for a on the main diagonal.    "
},
{
  "id": "activity-147",
  "level": "2",
  "url": "GT2.html#activity-147",
  "type": "Activity",
  "number": "5.2.4",
  "title": "",
  "body": "  Remove an appropriate row and column of to simplify the determinant to a determinant.  "
},
{
  "id": "activity-148",
  "level": "2",
  "url": "GT2.html#activity-148",
  "type": "Activity",
  "number": "5.2.5",
  "title": "",
  "body": "  Simplify to a multiple of a determinant by first doing the following:   Factor out a from a column.  Swap rows or columns to put a on the main diagonal.  "
},
{
  "id": "activity-149",
  "level": "2",
  "url": "GT2.html#activity-149",
  "type": "Activity",
  "number": "5.2.6",
  "title": "",
  "body": "  Simplify to a multiple of a determinant by first doing the following:   Use row\/column operations to create two zeroes in the same row or column.  Factor\/swap as needed to get a row\/column of all zeroes except a on the main diagonal.  "
},
{
  "id": "observation-34",
  "level": "2",
  "url": "GT2.html#observation-34",
  "type": "Observation",
  "number": "5.2.7",
  "title": "",
  "body": "  Using row\/column operations, you can introduce zeros and reduce dimension to whittle down the determinant of a large matrix to a determinant of a smaller matrix.    "
},
{
  "id": "activity-150",
  "level": "2",
  "url": "GT2.html#activity-150",
  "type": "Activity",
  "number": "5.2.8",
  "title": "",
  "body": "  Rewrite as a multiple of a determinant of a matrix.  "
},
{
  "id": "activity-151",
  "level": "2",
  "url": "GT2.html#activity-151",
  "type": "Activity",
  "number": "5.2.9",
  "title": "",
  "body": "  Compute by using any combination of row\/column operations.   "
},
{
  "id": "observation-35",
  "level": "2",
  "url": "GT2.html#observation-35",
  "type": "Observation",
  "number": "5.2.10",
  "title": "",
  "body": "  Another option is to take advantage of the fact that the determinant is linear in each row or column. This approach is called Laplace expansion or cofactor expansion .  For example, since ,    "
},
{
  "id": "observation-36",
  "level": "2",
  "url": "GT2.html#observation-36",
  "type": "Observation",
  "number": "5.2.11",
  "title": "",
  "body": "  Applying Laplace expansion to a matrix yields a short formula you may have seen: .  There are formulas for the determinants of larger matrices, but they can be pretty tedious to use. For example, writing out a formula for a determinant would require 24 different terms!   So this is why we either use Laplace expansion or row\/column operations directly.   "
},
{
  "id": "activity-152",
  "level": "2",
  "url": "GT2.html#activity-152",
  "type": "Activity",
  "number": "5.2.12",
  "title": "",
  "body": "  Based on the previous activities, which technique is easier for computing determinants?   Memorizing formulas.  Using row\/column operations.  Laplace expansion.  Some other technique (be prepared to describe it).    "
},
{
  "id": "activity-153",
  "level": "2",
  "url": "GT2.html#activity-153",
  "type": "Activity",
  "number": "5.2.13",
  "title": "",
  "body": "  Use your preferred technique to compute .   "
},
{
  "id": "insight-1",
  "level": "2",
  "url": "GT2.html#insight-1",
  "type": "Insight",
  "number": "5.2.14",
  "title": "",
  "body": "You can check your answer using Octave.  "
},
{
  "id": "figure-63",
  "level": "2",
  "url": "GT2.html#figure-63",
  "type": "Figure",
  "number": "63",
  "title": "",
  "body": "    Video: Simplifying a determinant using row operations  "
},
{
  "id": "figure-64",
  "level": "2",
  "url": "GT2.html#figure-64",
  "type": "Figure",
  "number": "64",
  "title": "",
  "body": "    Video: Computing a determinant  "
},
{
  "id": "exploration-46",
  "level": "2",
  "url": "GT2.html#exploration-46",
  "type": "Exploration",
  "number": "5.2.15",
  "title": "",
  "body": " Prove that the equation of a line in the plane, through points , when is given by the equation   "
},
{
  "id": "exploration-47",
  "level": "2",
  "url": "GT2.html#exploration-47",
  "type": "Exploration",
  "number": "5.2.16",
  "title": "",
  "body": " Prove that the determinant of any diagonal matrix, upper triangular matrix, or lower triangular matrix, is the product of it's diagonal entries.  "
},
{
  "id": "exploration-48",
  "level": "2",
  "url": "GT2.html#exploration-48",
  "type": "Exploration",
  "number": "5.2.17",
  "title": "",
  "body": " Show that, if an matrix has a non-zero determinant, then any can be represented as a linear combination of the columns of .  "
},
{
  "id": "exploration-49",
  "level": "2",
  "url": "GT2.html#exploration-49",
  "type": "Exploration",
  "number": "5.2.18",
  "title": "",
  "body": " What is the smallest number of zeros necessary to place in a matrix, and the placement of those zeros, such that the matrix has a zero determinant?  "
},
{
  "id": "GT3",
  "level": "1",
  "url": "GT3.html",
  "type": "Section",
  "number": "5.3",
  "title": "Eigenvalues and Characteristic Polynomials (GT3)",
  "body": " Eigenvalues and Characteristic Polynomials (GT3)     Find the eigenvalues of a matrix.     Class Activities    An invertible matrix and its inverse are given below:   Which of the following is equal to ?                    For every invertible matrix , so .  Furthermore, a square matrix is invertible if and only if .      Consider the linear transformation given by the matrix .      Transformation of the unit square by the linear transformation   It is easy to see geometrically that .  It is less obvious (but easily checked once you find it) that .      Let . An eigenvector eigenvector for is a vector such that is parallel to .      The map stretches out the eigenvector by a factor of (the corresponding eigenvalue).   In other words, for some scalar . If , then we say is a nontrivial eigenvector eigenvector nontrivial and we call this an eigenvalue eigenvalue of .      Finding the eigenvalues that satisfy for some nontrivial eigenvector is equivalent to finding nonzero solutions for the matrix equation .  Which of the following must be true for any eigenvalue?   The kernel of the transformation with standard matrix must contain the zero vector , so is invertible .  The kernel of the transformation with standard matrix must contain a non-zero vector , so is not invertible .  The image of the transformation with standard matrix must contain the zero vector , so is invertible .  The image of the transformation with standard matrix must contain a non-zero vector , so is not invertible .       The eigenvalues for a matrix are the values that make non-invertible.  Thus the eigenvalues for a matrix are the solutions to the equation       The expression is called characteristic polynomial of .  For example, when , we have .  Thus the characteristic polynomial of is and its eigenvalues are the solutions to .      Let .   Compute to determine the characteristic polynomial of .  Set this characteristic polynomial equal to zero and factor to determine the eigenvalues of .     Find all the eigenvalues for the matrix .      Find all the eigenvalues for the matrix .      Find all the eigenvalues for the matrix .       Videos      Video: Finding eigenvalues     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   What are the maximum and minimum number of eigenvalues associated with an matrix? Write small examples to convince yourself you are correct, and then prove this in generality.     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-28",
  "level": "2",
  "url": "GT3.html#objectives-28",
  "type": "Learning Outcomes",
  "number": "5.3",
  "title": "",
  "body": "   Find the eigenvalues of a matrix.    "
},
{
  "id": "activity-154",
  "level": "2",
  "url": "GT3.html#activity-154",
  "type": "Activity",
  "number": "5.3.1",
  "title": "",
  "body": "  An invertible matrix and its inverse are given below:   Which of the following is equal to ?                 "
},
{
  "id": "fact-31",
  "level": "2",
  "url": "GT3.html#fact-31",
  "type": "Fact",
  "number": "5.3.2",
  "title": "",
  "body": "  For every invertible matrix , so .  Furthermore, a square matrix is invertible if and only if .   "
},
{
  "id": "observation-37",
  "level": "2",
  "url": "GT3.html#observation-37",
  "type": "Observation",
  "number": "5.3.3",
  "title": "",
  "body": "  Consider the linear transformation given by the matrix .      Transformation of the unit square by the linear transformation   It is easy to see geometrically that .  It is less obvious (but easily checked once you find it) that .   "
},
{
  "id": "definition-29",
  "level": "2",
  "url": "GT3.html#definition-29",
  "type": "Definition",
  "number": "5.3.4",
  "title": "",
  "body": "  Let . An eigenvector eigenvector for is a vector such that is parallel to .      The map stretches out the eigenvector by a factor of (the corresponding eigenvalue).   In other words, for some scalar . If , then we say is a nontrivial eigenvector eigenvector nontrivial and we call this an eigenvalue eigenvalue of .   "
},
{
  "id": "activity-155",
  "level": "2",
  "url": "GT3.html#activity-155",
  "type": "Activity",
  "number": "5.3.5",
  "title": "",
  "body": "  Finding the eigenvalues that satisfy for some nontrivial eigenvector is equivalent to finding nonzero solutions for the matrix equation .  Which of the following must be true for any eigenvalue?   The kernel of the transformation with standard matrix must contain the zero vector , so is invertible .  The kernel of the transformation with standard matrix must contain a non-zero vector , so is not invertible .  The image of the transformation with standard matrix must contain the zero vector , so is invertible .  The image of the transformation with standard matrix must contain a non-zero vector , so is not invertible .    "
},
{
  "id": "fact-32",
  "level": "2",
  "url": "GT3.html#fact-32",
  "type": "Fact",
  "number": "5.3.6",
  "title": "",
  "body": "  The eigenvalues for a matrix are the values that make non-invertible.  Thus the eigenvalues for a matrix are the solutions to the equation    "
},
{
  "id": "definition-30",
  "level": "2",
  "url": "GT3.html#definition-30",
  "type": "Definition",
  "number": "5.3.7",
  "title": "",
  "body": "  The expression is called characteristic polynomial of .  For example, when , we have .  Thus the characteristic polynomial of is and its eigenvalues are the solutions to .   "
},
{
  "id": "activity-156",
  "level": "2",
  "url": "GT3.html#activity-156",
  "type": "Activity",
  "number": "5.3.8",
  "title": "",
  "body": "  Let .   Compute to determine the characteristic polynomial of .  Set this characteristic polynomial equal to zero and factor to determine the eigenvalues of .  "
},
{
  "id": "activity-157",
  "level": "2",
  "url": "GT3.html#activity-157",
  "type": "Activity",
  "number": "5.3.9",
  "title": "",
  "body": "  Find all the eigenvalues for the matrix .   "
},
{
  "id": "activity-158",
  "level": "2",
  "url": "GT3.html#activity-158",
  "type": "Activity",
  "number": "5.3.10",
  "title": "",
  "body": "  Find all the eigenvalues for the matrix .   "
},
{
  "id": "activity-159",
  "level": "2",
  "url": "GT3.html#activity-159",
  "type": "Activity",
  "number": "5.3.11",
  "title": "",
  "body": "  Find all the eigenvalues for the matrix .   "
},
{
  "id": "figure-67",
  "level": "2",
  "url": "GT3.html#figure-67",
  "type": "Figure",
  "number": "67",
  "title": "",
  "body": "    Video: Finding eigenvalues  "
},
{
  "id": "exploration-50",
  "level": "2",
  "url": "GT3.html#exploration-50",
  "type": "Exploration",
  "number": "5.3.12",
  "title": "",
  "body": " What are the maximum and minimum number of eigenvalues associated with an matrix? Write small examples to convince yourself you are correct, and then prove this in generality.  "
},
{
  "id": "GT4",
  "level": "1",
  "url": "GT4.html",
  "type": "Section",
  "number": "5.4",
  "title": "Eigenvectors and Eigenspaces (GT4)",
  "body": " Eigenvectors and Eigenspaces (GT4)     Find a basis for the eigenspace of a matrix associated with a given eigenvalue.     Class Activities    It's possible to show that is an eigenvalue for .  Compute the kernel of the transformation with standard matrix to find all the eigenvectors such that .       Since the kernel of a linear map is a subspace of , and the kernel obtained from contains all the eigenvectors associated with , we call this kernel the eigenspace eigenspace of associated with .      Find a basis for the eigenspace for the matrix associated with the eigenvalue .       Find a basis for the eigenspace for the matrix associated with the eigenvalue .       Find a basis for the eigenspace for the matrix associated with the eigenvalue .        Videos      Video: Finding eigenvectors     Slideshow  Slideshow of activities available at .    Exercises available at .    Mathematical Writing Explorations   Given a matrix , let be the eigenvectors with associated distinct eigenvalues . Prove the set of eigenvectors is linearly independent.     Sample Problem and Solution  Sample problem .   "
},
{
  "id": "objectives-29",
  "level": "2",
  "url": "GT4.html#objectives-29",
  "type": "Learning Outcomes",
  "number": "5.4",
  "title": "",
  "body": "   Find a basis for the eigenspace of a matrix associated with a given eigenvalue.    "
},
{
  "id": "activity-160",
  "level": "2",
  "url": "GT4.html#activity-160",
  "type": "Activity",
  "number": "5.4.1",
  "title": "",
  "body": "  It's possible to show that is an eigenvalue for .  Compute the kernel of the transformation with standard matrix to find all the eigenvectors such that .   "
},
{
  "id": "definition-31",
  "level": "2",
  "url": "GT4.html#definition-31",
  "type": "Definition",
  "number": "5.4.2",
  "title": "",
  "body": "  Since the kernel of a linear map is a subspace of , and the kernel obtained from contains all the eigenvectors associated with , we call this kernel the eigenspace eigenspace of associated with .   "
},
{
  "id": "activity-161",
  "level": "2",
  "url": "GT4.html#activity-161",
  "type": "Activity",
  "number": "5.4.3",
  "title": "",
  "body": "  Find a basis for the eigenspace for the matrix associated with the eigenvalue .   "
},
{
  "id": "activity-162",
  "level": "2",
  "url": "GT4.html#activity-162",
  "type": "Activity",
  "number": "5.4.4",
  "title": "",
  "body": "  Find a basis for the eigenspace for the matrix associated with the eigenvalue .   "
},
{
  "id": "activity-163",
  "level": "2",
  "url": "GT4.html#activity-163",
  "type": "Activity",
  "number": "5.4.5",
  "title": "",
  "body": "  Find a basis for the eigenspace for the matrix associated with the eigenvalue .   "
},
{
  "id": "figure-68",
  "level": "2",
  "url": "GT4.html#figure-68",
  "type": "Figure",
  "number": "68",
  "title": "",
  "body": "    Video: Finding eigenvectors  "
},
{
  "id": "exploration-51",
  "level": "2",
  "url": "GT4.html#exploration-51",
  "type": "Exploration",
  "number": "5.4.6",
  "title": "",
  "body": " Given a matrix , let be the eigenvectors with associated distinct eigenvalues . Prove the set of eigenvectors is linearly independent.  "
},
{
  "id": "truss",
  "level": "1",
  "url": "truss.html",
  "type": "Section",
  "number": "A.1",
  "title": "Civil Engineering: Trusses and Struts",
  "body": " Civil Engineering: Trusses and Struts   Activities    In engineering, a truss is a structure designed from several beams of material called struts , assembled to behave as a single object.    A simple truss       A simple truss       Consider the representation of a simple truss pictured below. All of the seven struts are of equal length, affixed to two anchor points applying a normal force to nodes and , and with a load applied to the node given by .      A simple truss   Which of the following must hold for the truss to be stable?   All of the struts will experience compression.  All of the struts will experience tension.  Some of the struts will be compressed, but others will be tensioned.       Since the forces must balance at each node for the truss to be stable, some of the struts will be compressed, while others will be tensioned.      Completed truss   By finding vector equations that must hold at each node, we may determine many of the forces at play.      For example, at the bottom left node there are 3 forces acting.      Truss with forces   Let be the force on given by the compression\/tension of the strut , let be defined similarly, and let be the normal force of the anchor point on .  For the truss to be stable, we must have:       Using the conventions of the previous remark, and where represents the load vector on node , find four more vector equations that must be satisfied for each of the other four nodes of the truss.      A simple truss            The five vector equations may be written as follows.            Each vector has a vertical and horizontal component, so it may be treated as a vector in . Note that must have the same magnitude (but opposite direction) as .        To write a linear system that models the truss under consideration with constant load newtons, how many scalar variables will be required?     : from the nodes, from the anchors     : from the struts, from the anchors     : from the struts, from the anchors     : from the struts, from the anchors, from the load     : from the nodes, from the struts, from the load        A simple truss       Since the angles for each strut are known, one variable may be used to represent each.      Variables for the truss   For example:        Since the angle of the normal forces for each anchor point are unknown, two variables may be used to represent each.      Truss with normal forces    The load vector is constant.       Each of the five vector equations found previously represent two linear equations: one for the horizontal component and one for the vertical.      Variables for the truss    Using the approximation , we have      Expand the vector equation given below using sine and cosine of appropriate angles, then compute each component (approximating ).      Variables for the truss          The full augmented matrix given by the ten equations in this linear system is given below, where the elevent columns correspond to , and the ten rows correspond to the horizontal and vertical components of the forces acting at .       This matrix row-reduces to the following.       Thus we know the truss must satisfy the following conditions.   In particular, the negative represent tension (forces pointing into the nodes), and the postive represent compression (forces pointing out of the nodes). The vertical normal forces counteract the load.      Completed truss       Slideshow  Slideshow of activities available at .   "
},
{
  "id": "definition-32",
  "level": "2",
  "url": "truss.html#definition-32",
  "type": "Definition",
  "number": "A.1.1",
  "title": "",
  "body": "  In engineering, a truss is a structure designed from several beams of material called struts , assembled to behave as a single object.    A simple truss       A simple truss    "
},
{
  "id": "activity-164",
  "level": "2",
  "url": "truss.html#activity-164",
  "type": "Activity",
  "number": "A.1.2",
  "title": "",
  "body": "  Consider the representation of a simple truss pictured below. All of the seven struts are of equal length, affixed to two anchor points applying a normal force to nodes and , and with a load applied to the node given by .      A simple truss   Which of the following must hold for the truss to be stable?   All of the struts will experience compression.  All of the struts will experience tension.  Some of the struts will be compressed, but others will be tensioned.    "
},
{
  "id": "observation-38",
  "level": "2",
  "url": "truss.html#observation-38",
  "type": "Observation",
  "number": "A.1.3",
  "title": "",
  "body": "  Since the forces must balance at each node for the truss to be stable, some of the struts will be compressed, while others will be tensioned.      Completed truss   By finding vector equations that must hold at each node, we may determine many of the forces at play.   "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "truss.html#remark-20",
  "type": "Remark",
  "number": "A.1.4",
  "title": "",
  "body": "  For example, at the bottom left node there are 3 forces acting.      Truss with forces   Let be the force on given by the compression\/tension of the strut , let be defined similarly, and let be the normal force of the anchor point on .  For the truss to be stable, we must have:    "
},
{
  "id": "activity-165",
  "level": "2",
  "url": "truss.html#activity-165",
  "type": "Activity",
  "number": "A.1.5",
  "title": "",
  "body": "  Using the conventions of the previous remark, and where represents the load vector on node , find four more vector equations that must be satisfied for each of the other four nodes of the truss.      A simple truss         "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "truss.html#remark-21",
  "type": "Remark",
  "number": "A.1.6",
  "title": "",
  "body": "  The five vector equations may be written as follows.        "
},
{
  "id": "observation-39",
  "level": "2",
  "url": "truss.html#observation-39",
  "type": "Observation",
  "number": "A.1.7",
  "title": "",
  "body": "  Each vector has a vertical and horizontal component, so it may be treated as a vector in . Note that must have the same magnitude (but opposite direction) as .     "
},
{
  "id": "activity-166",
  "level": "2",
  "url": "truss.html#activity-166",
  "type": "Activity",
  "number": "A.1.8",
  "title": "",
  "body": "  To write a linear system that models the truss under consideration with constant load newtons, how many scalar variables will be required?     : from the nodes, from the anchors     : from the struts, from the anchors     : from the struts, from the anchors     : from the struts, from the anchors, from the load     : from the nodes, from the struts, from the load        A simple truss    "
},
{
  "id": "observation-40",
  "level": "2",
  "url": "truss.html#observation-40",
  "type": "Observation",
  "number": "A.1.9",
  "title": "",
  "body": "  Since the angles for each strut are known, one variable may be used to represent each.      Variables for the truss   For example:     "
},
{
  "id": "observation-41",
  "level": "2",
  "url": "truss.html#observation-41",
  "type": "Observation",
  "number": "A.1.10",
  "title": "",
  "body": "  Since the angle of the normal forces for each anchor point are unknown, two variables may be used to represent each.      Truss with normal forces    The load vector is constant.    "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "truss.html#remark-22",
  "type": "Remark",
  "number": "A.1.11",
  "title": "",
  "body": "  Each of the five vector equations found previously represent two linear equations: one for the horizontal component and one for the vertical.      Variables for the truss    Using the approximation , we have   "
},
{
  "id": "activity-167",
  "level": "2",
  "url": "truss.html#activity-167",
  "type": "Activity",
  "number": "A.1.12",
  "title": "",
  "body": "  Expand the vector equation given below using sine and cosine of appropriate angles, then compute each component (approximating ).      Variables for the truss       "
},
{
  "id": "observation-42",
  "level": "2",
  "url": "truss.html#observation-42",
  "type": "Observation",
  "number": "A.1.13",
  "title": "",
  "body": "  The full augmented matrix given by the ten equations in this linear system is given below, where the elevent columns correspond to , and the ten rows correspond to the horizontal and vertical components of the forces acting at .    "
},
{
  "id": "observation-43",
  "level": "2",
  "url": "truss.html#observation-43",
  "type": "Observation",
  "number": "A.1.14",
  "title": "",
  "body": "  This matrix row-reduces to the following.    "
},
{
  "id": "observation-44",
  "level": "2",
  "url": "truss.html#observation-44",
  "type": "Observation",
  "number": "A.1.15",
  "title": "",
  "body": "  Thus we know the truss must satisfy the following conditions.   In particular, the negative represent tension (forces pointing into the nodes), and the postive represent compression (forces pointing out of the nodes). The vertical normal forces counteract the load.      Completed truss    "
},
{
  "id": "pagerank",
  "level": "1",
  "url": "pagerank.html",
  "type": "Section",
  "number": "A.2",
  "title": "Computer Science: PageRank",
  "body": " Computer Science: PageRank   Activities   The $978,000,000,000 Problem     In the picture below, each circle represents a webpage, and each arrow represents a link from one page to another.      A seven-webpage network   Based on how these pages link to each other, write a list of the 7 webpages in order from most important to least important.     The $978,000,000,000 Idea   Links are endorsements. That is:    A webpage is important if it is linked to (endorsed) by important pages.    A webpage distributes its importance equally among all the pages it links to (endorses).       Consider this small network with only three pages. Let be the importance of the three pages respectively.      A three-webpage network     splits its endorsement in half between and   sends all of its endorsement to   sends all of its endorsement to .   This corresponds to the page rank system :          A three-webpage network           By writing this linear system in terms of matrix multiplication, we obtain the page rank matrix  and page rank vector . Thus, computing the importance of pages on a network is equivalent to solving the matrix equation .      Thus, our $978,000,000,000 problem is what kind of problem?    An antiderivative problem  A bijection problem  A cofactoring problem  A determinant problem  An eigenvector problem      Find a page rank vector satisfying for the following network's page rank matrix .  That is, find the eigenspace associated with for the matrix , and choose a vector from that eigenspace.       A three-webpage network           Row-reducing yields the basic eigenvector . Therefore, we may conclude that pages and are equally important, and both pages are twice as important as page .      Compute the page rank matrix for the following network.      A seven-webpage network   For example, since website distributes its endorsement equally between and , the first column is .      Find a page rank vector for the given page rank matrix.          A seven-webpage network    Which webpage is most important?      Since a page rank vector for the network is given by , it's reasonable to consider page as the most important page.   Based upon this page rank vector, here is a complete ranking of all seven pages from most important to least important:       A seven-webpage network       Given the following diagram, use a page rank vector to rank the pages through in order from most important to least important.      Another seven-webpage network       Slideshow  Slideshow of activities available at .   "
},
{
  "id": "activity-168",
  "level": "2",
  "url": "pagerank.html#activity-168",
  "type": "Activity",
  "number": "A.2.1",
  "title": "The $978,000,000,000 Problem.",
  "body": " The $978,000,000,000 Problem     In the picture below, each circle represents a webpage, and each arrow represents a link from one page to another.      A seven-webpage network   Based on how these pages link to each other, write a list of the 7 webpages in order from most important to least important.   "
},
{
  "id": "observation-45",
  "level": "2",
  "url": "pagerank.html#observation-45",
  "type": "Observation",
  "number": "A.2.2",
  "title": "The $978,000,000,000 Idea.",
  "body": " The $978,000,000,000 Idea   Links are endorsements. That is:    A webpage is important if it is linked to (endorsed) by important pages.    A webpage distributes its importance equally among all the pages it links to (endorses).    "
},
{
  "id": "example-4",
  "level": "2",
  "url": "pagerank.html#example-4",
  "type": "Example",
  "number": "A.2.3",
  "title": "",
  "body": "  Consider this small network with only three pages. Let be the importance of the three pages respectively.      A three-webpage network     splits its endorsement in half between and   sends all of its endorsement to   sends all of its endorsement to .   This corresponds to the page rank system :   "
},
{
  "id": "observation-46",
  "level": "2",
  "url": "pagerank.html#observation-46",
  "type": "Observation",
  "number": "A.2.4",
  "title": "",
  "body": "      A three-webpage network           By writing this linear system in terms of matrix multiplication, we obtain the page rank matrix  and page rank vector . Thus, computing the importance of pages on a network is equivalent to solving the matrix equation .   "
},
{
  "id": "activity-169",
  "level": "2",
  "url": "pagerank.html#activity-169",
  "type": "Activity",
  "number": "A.2.5",
  "title": "",
  "body": "  Thus, our $978,000,000,000 problem is what kind of problem?    An antiderivative problem  A bijection problem  A cofactoring problem  A determinant problem  An eigenvector problem   "
},
{
  "id": "activity-170",
  "level": "2",
  "url": "pagerank.html#activity-170",
  "type": "Activity",
  "number": "A.2.6",
  "title": "",
  "body": "  Find a page rank vector satisfying for the following network's page rank matrix .  That is, find the eigenspace associated with for the matrix , and choose a vector from that eigenspace.       A three-webpage network        "
},
{
  "id": "observation-47",
  "level": "2",
  "url": "pagerank.html#observation-47",
  "type": "Observation",
  "number": "A.2.7",
  "title": "",
  "body": "  Row-reducing yields the basic eigenvector . Therefore, we may conclude that pages and are equally important, and both pages are twice as important as page .   "
},
{
  "id": "activity-171",
  "level": "2",
  "url": "pagerank.html#activity-171",
  "type": "Activity",
  "number": "A.2.8",
  "title": "",
  "body": "  Compute the page rank matrix for the following network.      A seven-webpage network   For example, since website distributes its endorsement equally between and , the first column is .   "
},
{
  "id": "activity-172",
  "level": "2",
  "url": "pagerank.html#activity-172",
  "type": "Activity",
  "number": "A.2.9",
  "title": "",
  "body": "  Find a page rank vector for the given page rank matrix.          A seven-webpage network    Which webpage is most important?   "
},
{
  "id": "observation-48",
  "level": "2",
  "url": "pagerank.html#observation-48",
  "type": "Observation",
  "number": "A.2.10",
  "title": "",
  "body": "  Since a page rank vector for the network is given by , it's reasonable to consider page as the most important page.   Based upon this page rank vector, here is a complete ranking of all seven pages from most important to least important:       A seven-webpage network    "
},
{
  "id": "activity-173",
  "level": "2",
  "url": "pagerank.html#activity-173",
  "type": "Activity",
  "number": "A.2.11",
  "title": "",
  "body": "  Given the following diagram, use a page rank vector to rank the pages through in order from most important to least important.      Another seven-webpage network    "
},
{
  "id": "geology",
  "level": "1",
  "url": "geology.html",
  "type": "Section",
  "number": "A.3",
  "title": "Geology: Phases and Components",
  "body": " Geology: Phases and Components   Activities    In geology, a phase is any physically separable material in the system, such as various minerals or liquids.  A component is a chemical compound necessary to make up the phases; these are usually oxides such as Calcium Oxide ( ) or Silicon Dioxide ( ).  In a typical application, a geologist knows how to build each phase from the components, and is interested in determining reactions among the different phases.      Consider the 3 components and the 5 phases:   Geologists already know (or can easily deduce) that since, for example:       To study this vector space, each of the three components may be considered as the three components of a Euclidean vector.   Determine if the set of phases is linearly dependent or linearly independent.      Geologists are interested in knowing all the possible chemical reactions among the 5 phases:  That is, they want to find numbers such that    Set up a system of equations equivalent to this vector equation.  Find a basis for its solution space.  Interpret each basis vector as a vector equation and a chemical equation.     We found two basis vectors and , corresponding to the vector and chemical equations   Combine the basis vectors to produce a chemical equation among the five phases that does not involve .      Slideshow  Slideshow of activities available at .   "
},
{
  "id": "definition-33",
  "level": "2",
  "url": "geology.html#definition-33",
  "type": "Definition",
  "number": "A.3.1",
  "title": "",
  "body": "  In geology, a phase is any physically separable material in the system, such as various minerals or liquids.  A component is a chemical compound necessary to make up the phases; these are usually oxides such as Calcium Oxide ( ) or Silicon Dioxide ( ).  In a typical application, a geologist knows how to build each phase from the components, and is interested in determining reactions among the different phases.   "
},
{
  "id": "observation-49",
  "level": "2",
  "url": "geology.html#observation-49",
  "type": "Observation",
  "number": "A.3.2",
  "title": "",
  "body": "  Consider the 3 components and the 5 phases:   Geologists already know (or can easily deduce) that since, for example:    "
},
{
  "id": "activity-174",
  "level": "2",
  "url": "geology.html#activity-174",
  "type": "Activity",
  "number": "A.3.3",
  "title": "",
  "body": "  To study this vector space, each of the three components may be considered as the three components of a Euclidean vector.   Determine if the set of phases is linearly dependent or linearly independent.   "
},
{
  "id": "activity-175",
  "level": "2",
  "url": "geology.html#activity-175",
  "type": "Activity",
  "number": "A.3.4",
  "title": "",
  "body": "  Geologists are interested in knowing all the possible chemical reactions among the 5 phases:  That is, they want to find numbers such that    Set up a system of equations equivalent to this vector equation.  Find a basis for its solution space.  Interpret each basis vector as a vector equation and a chemical equation.  "
},
{
  "id": "activity-176",
  "level": "2",
  "url": "geology.html#activity-176",
  "type": "Activity",
  "number": "A.3.5",
  "title": "",
  "body": "  We found two basis vectors and , corresponding to the vector and chemical equations   Combine the basis vectors to produce a chemical equation among the five phases that does not involve .   "
},
{
  "id": "sample-exercises",
  "level": "1",
  "url": "sample-exercises.html",
  "type": "Section",
  "number": "B.1",
  "title": "Sample Exercises with Solutions",
  "body": " Sample Exercises with Solutions  Here we model one exercise and solution for each learning objective. Your solutions should not look identical to those shown below, but these solutions can give you an idea of the level of detail required for a complete solution.   LE1   Consider the scalar system of equations    Rewrite this system as a vector equation.  Write an augmented matrix corresponding to this system.                LE2     For each of the following matrices, explain why it is not in reduced row echelon form.     Show step-by-step why            is not in reduced row echelon form because the pivots are not all .     is not in reduced row echelon form because the pivots are not descending to the right.     is not in reduced row echelon form because not every entry above and below each pivot is zero.           LE3   Consider each of the following systems of linear equations or vector equations.                     Explain how to find a simpler system or vector equation that has the same solution set for each.    Explain whether each solution set has no solutions, one solution, or infinitely-many solutions. If the set is finite, describe it using set notation.         This matrix corresponds to the simpler system The third equation indicates that the system has no solutions. The solution set is .     This matrix corresponds to the simpler system Since there are three variables and two nontrivial equations, the solution set has infinitely-many solutions.     This matrix corresponds to the simpler system This system has one solution. The solution set is .      LE4   Consider the following vector equation.     Explain how to find a simpler system or vector equation that has the same solution set.    Explain how to describe this solution set using set notation.      First, we compute This corresponds to the simpler system Since the second column is a non-pivot column, we let . Making this substitution and then solving for , , and produces the system Thus, the solution set is .    VS1   Let be the set of all pairs of numbers of real numbers together with the following operations:     Show that scalar multiplication distributes over vector addition:     Explain why nonetheless is not a vector space.        We compute both sides:   and   Since these are the same, we have shown that the property holds.    To show is not a vector space, we must show that it fails one of the 8 defining properties of vector spaces. We will show that scalar multiplication does not distribute over scalar addition, i.e., there are values such that     (Solution method 1) First, we compute   Then we compute   Since when , the property fails to hold.    (Solution method 2) When we let , we may simplify both sides as follows.    Since these ordered pairs are different, the property fails to hold.        VS2     Write a statement involving the solutions of a vector equation that's equivalent to each claim below.     is a linear combination of the vectors .     is a linear combination of the vectors .      Use these statements to determine if each vector is or is not a linear combination. If it is, give an example of such a linear combination.        is a linear combination of the vectors exactly when the vector equation has a solution. To solve this vector equation, we compute . We see that this vector equation has solution set , so is a linear combination; for example,     is a linear combination of the vectors exactly when the vector equation has a solution. To solve this vector equation, we compute . This vector equation has no solution, so is not a linear combination.      VS3     Write a statement involving the solutions of a vector equation that's equivalent to each claim below.    The set of vectors  spans  .    The set of vectors does not span .      Explain how to determine which of these statements is true.      The set of vectors spans exactly when the vector equation has a solution for all  . If there is some vector for which this vector equation has no solution, then the set does not span . To answer this, we compute . We see that for some , this vector equation will not have a solution, so the set of vectors does not span .    VS4   Consider the following two sets of Euclidean vectors. Explain why one of these sets is a subspace of , and why the other is not.    To show that is a subspace, let and , so we know that and .  Consider To see if , we need to check if . We compute Thus , so is closed under vector addition.  Now consider Similarly, to check that , we need to check if , so we compute and we see that , so is closed under scalar multiplication. Therefore is a subspace of .  Now, to show is not a subspace, we will show that it is not closed under vector addition.    (Solution Method 1) Now let and , so we know that and .  Consider To see if , we need to check if . We compute and thus \\textbf{only when} . Since this is not true in general, is not closed under vector addition, and thus cannot be a subspace.    (Solution Method 2) Note that the vector belongs to since . However, the vector does not belong to since . Therefore is not closed under scalar multiplication, and thus is not a subspace.      VS5     Write a statement involving the solutions of a vector equation that's equivalent to each claim below.    The set of vectors is linearly independent .    The set of vectors is linearly dependent .      Explain how to determine which of these statements is true.      The set of vectors is linearly independent exactly when the vector equation has no non-trivial (i.e. nonzero) solutions. The set is linearly dependent when there exists a nontrivial (i.e. nonzero) solution. We compute .  Thus, this vector equation has a solution set . Since there are nontrivial solutions, we conclude that the set of vectors is linearly dependent .    VS6     Write a statement involving spanning and independence properties that's equivalent to each claim below.    The set of vectors is a basis of .    The set of vectors is not a basis of .      Explain how to determine which of these statements is true.      The set of vectors is a basis of exactly when it is linearly independent and the set spans . If it is either linearly dependent, or the set does not span , then the set is not a basis.  To answer this, we compute .  We see that this set of vectors is linearly dependent, so therefore the set of vectors is not a basis.    VS7   Consider the subspace     Explain how to find a basis of .    Explain how to find the dimension of .        Observe that If we remove the vectors yielding non-pivot columns, the resulting set will span the same vectors while being linearly independent. Therefore is a basis of .    Since this (and thus every other) basis has three vectors in it, the dimension of is .      VS8     Given the set write a statement involving the solutions to a polynomial equation that's equivalent to each claim below.    The set of polynomials is linearly independent .    The set of polynomials is linearly dependent .      Explain how to determine which of these statements is true.      The set of polynomials is linearly independent exactly when the polynomial equation has no nontrivial (i.e. nonzero) solutions. The set is linearly dependent when this equation has a nontrivial (i.e. nonzero) solution.  To solve this equation, we distribute and then collect coefficients to obtain . These polynomials are equal precisely when their coefficients are equal, leading to the system .  To solve this, we compute   The system has (infintely many) nontrivial solutions, so we that the set of polynomials is linearly dependent .    VS9   Consider the homogeneous system of equations     Find the solution space of the system.    Find a basis of the solution space.        Observe that   Letting and (since those correspond to the non-pivot columns), this is equivalent to the system Thus, the solution set is     Since we can write a basis for the solution space is       AT1   Consider the following maps of polynomials and defined by Explain why one of these maps is a linear transformation, and why the other map is not.    To show is a linear transformation, we must show two things:    To show respects addition, we compute But note that and , so we have .  For the second part, we compute But note that as well, so we have . Now, since respects both addition and scalar multiplication, we can conclude is a linear transformation.    (Solution method 1) As for , we compute However, note that , which is not always the same polynomial (for example, when ). So we see that , so does not respect addition and is therefore not a linear transformation.    (Solution method 2) As for , we may choose the polynomial and scalar . Then   But on the other hand, Since this isn't the same polynomial, does not preserve multiplication and is therefore not a linear transformation.      AT2     Find the standard matrix for the linear transformation given by     Let be the linear transformation given by the standard matrix Compute .        Since the standard matrix for is .            AT3   Let be the linear transformation given by     Explain how to find the image of and the kernel of .    Explain how to find a basis of the image of and a basis of the kernel of .    Explain how to find the rank and nullity of T, and why the rank-nullity theorem holds for T.        To find the image we compute      The kernel is the solution set of the corresponding homogeneous system of equations, i.e. So we compute Then, letting and we have     Since , we simply need to find a linearly independent subset of these four spanning vectors. So we compute Since the first two columns are pivot columns, they form a linearly independent spanning set, so a basis for is   To find a basis for the kernel, note that so a basis for the kernel is     The dimension of the image (the rank) is , the dimension of the kernel (the nullity) is , and the dimension of the domain of is , so we see , which verifies that the sum of the rank and nullity of is the dimension of the domain of .      AT4   Let be the linear transformation given by the standard matrix .    Explain why is or is not injective.    Explain why is or is not surjective.      Compute     Note that the third and fourth columns are non-pivot columns, which means contains infinitely many vectors, so is not injective.    Since there are only two pivots, the image (i.e. the span of the columns) is a 2-dimensional subspace (and thus does not equal ), so is not surjective.      MX1   Of the following three matrices, only two may be multiplied.   Explain which two may be multiplied and why. Then show how to find their product.     is the only one that can be computed, since corresponds to a linear transformation and corresponds to a linear transfromation . Thus the composition corresponds to a linear transformation with a standard matrix. We compute  . Thus     MX2   Let be a matrix.    Give a matrix that may be used to perform the row operation .    Give a matrix that may be used to perform the row operation .    Use matrix multiplication to describe the matrix obtained by applying and then to (note the order).                         MX3   Explain why each of the following matrices is or is not invertible by disussing its corresponding linear transformation. If the matrix is invertible, explain how to find its inverse.     We compute . We see is bijective, and therefore invertible. To compute the inverse, we solve by computing . Similarly, we solve by computing . Similarly, we solve by computing . Similarly, we solve by computing . Combining these, we obtain .  We compute . We see is not bijective and thus is not invertible.     GT1   Let be a matrix with determinant .    Let be the matrix obtained from by applying the row operation . What is ?    Let be the matrix obtained from by applying the row operation . What is ?    Let be the matrix obtained from by applying the row operation . What is ?        Adding a multiple of one row to another row does not change the determinant, so .    Scaling a row scales the determinant by the same factor, so so .    Swaping rows changes the sign of the determinant, so .      GT2   Show how to compute the determinant of the matrix     Here is one possible solution, first applying a single row operation, and then performing Laplace\/cofactor expansions to reduce the determinant to a linear combination of determinants:   Here is another possible solution, using row and column operations to first reduce the determinant to a matrix and then applying a formula:     GT3   Explain how to find the eigenvalues of the matrix .    Compute the characteristic polynomial: The eigenvalues are the roots of the characteristic polynomial, namely and .    GT4   Explain how to find a basis for the eigenspace associated to the eigenvalue in the matrix     The eigenspace associated to is the kernel of , so we compute Thus we see the kernel is which has a basis of .    "
},
{
  "id": "sampleLE1",
  "level": "2",
  "url": "sample-exercises.html#sampleLE1",
  "type": "Example",
  "number": "B.1.1",
  "title": "LE1.",
  "body": " LE1   Consider the scalar system of equations    Rewrite this system as a vector equation.  Write an augmented matrix corresponding to this system.               "
},
{
  "id": "sampleLE2",
  "level": "2",
  "url": "sample-exercises.html#sampleLE2",
  "type": "Example",
  "number": "B.1.2",
  "title": "LE2.",
  "body": "LE2     For each of the following matrices, explain why it is not in reduced row echelon form.     Show step-by-step why            is not in reduced row echelon form because the pivots are not all .     is not in reduced row echelon form because the pivots are not descending to the right.     is not in reduced row echelon form because not every entry above and below each pivot is zero.          "
},
{
  "id": "sampleLE3",
  "level": "2",
  "url": "sample-exercises.html#sampleLE3",
  "type": "Example",
  "number": "B.1.3",
  "title": "LE3.",
  "body": "LE3   Consider each of the following systems of linear equations or vector equations.                     Explain how to find a simpler system or vector equation that has the same solution set for each.    Explain whether each solution set has no solutions, one solution, or infinitely-many solutions. If the set is finite, describe it using set notation.         This matrix corresponds to the simpler system The third equation indicates that the system has no solutions. The solution set is .     This matrix corresponds to the simpler system Since there are three variables and two nontrivial equations, the solution set has infinitely-many solutions.     This matrix corresponds to the simpler system This system has one solution. The solution set is .     "
},
{
  "id": "sampleLE4",
  "level": "2",
  "url": "sample-exercises.html#sampleLE4",
  "type": "Example",
  "number": "B.1.4",
  "title": "LE4.",
  "body": "LE4   Consider the following vector equation.     Explain how to find a simpler system or vector equation that has the same solution set.    Explain how to describe this solution set using set notation.      First, we compute This corresponds to the simpler system Since the second column is a non-pivot column, we let . Making this substitution and then solving for , , and produces the system Thus, the solution set is .   "
},
{
  "id": "sampleVS1",
  "level": "2",
  "url": "sample-exercises.html#sampleVS1",
  "type": "Example",
  "number": "B.1.5",
  "title": "VS1.",
  "body": "VS1   Let be the set of all pairs of numbers of real numbers together with the following operations:     Show that scalar multiplication distributes over vector addition:     Explain why nonetheless is not a vector space.        We compute both sides:   and   Since these are the same, we have shown that the property holds.    To show is not a vector space, we must show that it fails one of the 8 defining properties of vector spaces. We will show that scalar multiplication does not distribute over scalar addition, i.e., there are values such that     (Solution method 1) First, we compute   Then we compute   Since when , the property fails to hold.    (Solution method 2) When we let , we may simplify both sides as follows.    Since these ordered pairs are different, the property fails to hold.       "
},
{
  "id": "sampleVS2",
  "level": "2",
  "url": "sample-exercises.html#sampleVS2",
  "type": "Example",
  "number": "B.1.6",
  "title": "VS2.",
  "body": "VS2     Write a statement involving the solutions of a vector equation that's equivalent to each claim below.     is a linear combination of the vectors .     is a linear combination of the vectors .      Use these statements to determine if each vector is or is not a linear combination. If it is, give an example of such a linear combination.        is a linear combination of the vectors exactly when the vector equation has a solution. To solve this vector equation, we compute . We see that this vector equation has solution set , so is a linear combination; for example,     is a linear combination of the vectors exactly when the vector equation has a solution. To solve this vector equation, we compute . This vector equation has no solution, so is not a linear combination.     "
},
{
  "id": "sampleVS3",
  "level": "2",
  "url": "sample-exercises.html#sampleVS3",
  "type": "Example",
  "number": "B.1.7",
  "title": "VS3.",
  "body": "VS3     Write a statement involving the solutions of a vector equation that's equivalent to each claim below.    The set of vectors  spans  .    The set of vectors does not span .      Explain how to determine which of these statements is true.      The set of vectors spans exactly when the vector equation has a solution for all  . If there is some vector for which this vector equation has no solution, then the set does not span . To answer this, we compute . We see that for some , this vector equation will not have a solution, so the set of vectors does not span .   "
},
{
  "id": "sampleVS4",
  "level": "2",
  "url": "sample-exercises.html#sampleVS4",
  "type": "Example",
  "number": "B.1.8",
  "title": "VS4.",
  "body": "VS4   Consider the following two sets of Euclidean vectors. Explain why one of these sets is a subspace of , and why the other is not.    To show that is a subspace, let and , so we know that and .  Consider To see if , we need to check if . We compute Thus , so is closed under vector addition.  Now consider Similarly, to check that , we need to check if , so we compute and we see that , so is closed under scalar multiplication. Therefore is a subspace of .  Now, to show is not a subspace, we will show that it is not closed under vector addition.    (Solution Method 1) Now let and , so we know that and .  Consider To see if , we need to check if . We compute and thus \\textbf{only when} . Since this is not true in general, is not closed under vector addition, and thus cannot be a subspace.    (Solution Method 2) Note that the vector belongs to since . However, the vector does not belong to since . Therefore is not closed under scalar multiplication, and thus is not a subspace.     "
},
{
  "id": "sampleVS5",
  "level": "2",
  "url": "sample-exercises.html#sampleVS5",
  "type": "Example",
  "number": "B.1.9",
  "title": "VS5.",
  "body": "VS5     Write a statement involving the solutions of a vector equation that's equivalent to each claim below.    The set of vectors is linearly independent .    The set of vectors is linearly dependent .      Explain how to determine which of these statements is true.      The set of vectors is linearly independent exactly when the vector equation has no non-trivial (i.e. nonzero) solutions. The set is linearly dependent when there exists a nontrivial (i.e. nonzero) solution. We compute .  Thus, this vector equation has a solution set . Since there are nontrivial solutions, we conclude that the set of vectors is linearly dependent .   "
},
{
  "id": "sampleVS6",
  "level": "2",
  "url": "sample-exercises.html#sampleVS6",
  "type": "Example",
  "number": "B.1.10",
  "title": "VS6.",
  "body": "VS6     Write a statement involving spanning and independence properties that's equivalent to each claim below.    The set of vectors is a basis of .    The set of vectors is not a basis of .      Explain how to determine which of these statements is true.      The set of vectors is a basis of exactly when it is linearly independent and the set spans . If it is either linearly dependent, or the set does not span , then the set is not a basis.  To answer this, we compute .  We see that this set of vectors is linearly dependent, so therefore the set of vectors is not a basis.   "
},
{
  "id": "sampleVS7",
  "level": "2",
  "url": "sample-exercises.html#sampleVS7",
  "type": "Example",
  "number": "B.1.11",
  "title": "VS7.",
  "body": "VS7   Consider the subspace     Explain how to find a basis of .    Explain how to find the dimension of .        Observe that If we remove the vectors yielding non-pivot columns, the resulting set will span the same vectors while being linearly independent. Therefore is a basis of .    Since this (and thus every other) basis has three vectors in it, the dimension of is .     "
},
{
  "id": "sampleVS8",
  "level": "2",
  "url": "sample-exercises.html#sampleVS8",
  "type": "Example",
  "number": "B.1.12",
  "title": "VS8.",
  "body": "VS8     Given the set write a statement involving the solutions to a polynomial equation that's equivalent to each claim below.    The set of polynomials is linearly independent .    The set of polynomials is linearly dependent .      Explain how to determine which of these statements is true.      The set of polynomials is linearly independent exactly when the polynomial equation has no nontrivial (i.e. nonzero) solutions. The set is linearly dependent when this equation has a nontrivial (i.e. nonzero) solution.  To solve this equation, we distribute and then collect coefficients to obtain . These polynomials are equal precisely when their coefficients are equal, leading to the system .  To solve this, we compute   The system has (infintely many) nontrivial solutions, so we that the set of polynomials is linearly dependent .   "
},
{
  "id": "sampleVS9",
  "level": "2",
  "url": "sample-exercises.html#sampleVS9",
  "type": "Example",
  "number": "B.1.13",
  "title": "VS9.",
  "body": "VS9   Consider the homogeneous system of equations     Find the solution space of the system.    Find a basis of the solution space.        Observe that   Letting and (since those correspond to the non-pivot columns), this is equivalent to the system Thus, the solution set is     Since we can write a basis for the solution space is      "
},
{
  "id": "sampleAT1",
  "level": "2",
  "url": "sample-exercises.html#sampleAT1",
  "type": "Example",
  "number": "B.1.14",
  "title": "AT1.",
  "body": "AT1   Consider the following maps of polynomials and defined by Explain why one of these maps is a linear transformation, and why the other map is not.    To show is a linear transformation, we must show two things:    To show respects addition, we compute But note that and , so we have .  For the second part, we compute But note that as well, so we have . Now, since respects both addition and scalar multiplication, we can conclude is a linear transformation.    (Solution method 1) As for , we compute However, note that , which is not always the same polynomial (for example, when ). So we see that , so does not respect addition and is therefore not a linear transformation.    (Solution method 2) As for , we may choose the polynomial and scalar . Then   But on the other hand, Since this isn't the same polynomial, does not preserve multiplication and is therefore not a linear transformation.     "
},
{
  "id": "sampleAT2",
  "level": "2",
  "url": "sample-exercises.html#sampleAT2",
  "type": "Example",
  "number": "B.1.15",
  "title": "AT2.",
  "body": "AT2     Find the standard matrix for the linear transformation given by     Let be the linear transformation given by the standard matrix Compute .        Since the standard matrix for is .           "
},
{
  "id": "sampleAT3",
  "level": "2",
  "url": "sample-exercises.html#sampleAT3",
  "type": "Example",
  "number": "B.1.16",
  "title": "AT3.",
  "body": "AT3   Let be the linear transformation given by     Explain how to find the image of and the kernel of .    Explain how to find a basis of the image of and a basis of the kernel of .    Explain how to find the rank and nullity of T, and why the rank-nullity theorem holds for T.        To find the image we compute      The kernel is the solution set of the corresponding homogeneous system of equations, i.e. So we compute Then, letting and we have     Since , we simply need to find a linearly independent subset of these four spanning vectors. So we compute Since the first two columns are pivot columns, they form a linearly independent spanning set, so a basis for is   To find a basis for the kernel, note that so a basis for the kernel is     The dimension of the image (the rank) is , the dimension of the kernel (the nullity) is , and the dimension of the domain of is , so we see , which verifies that the sum of the rank and nullity of is the dimension of the domain of .     "
},
{
  "id": "sampleAT4",
  "level": "2",
  "url": "sample-exercises.html#sampleAT4",
  "type": "Example",
  "number": "B.1.17",
  "title": "AT4.",
  "body": "AT4   Let be the linear transformation given by the standard matrix .    Explain why is or is not injective.    Explain why is or is not surjective.      Compute     Note that the third and fourth columns are non-pivot columns, which means contains infinitely many vectors, so is not injective.    Since there are only two pivots, the image (i.e. the span of the columns) is a 2-dimensional subspace (and thus does not equal ), so is not surjective.     "
},
{
  "id": "sampleMX1",
  "level": "2",
  "url": "sample-exercises.html#sampleMX1",
  "type": "Example",
  "number": "B.1.18",
  "title": "MX1.",
  "body": "MX1   Of the following three matrices, only two may be multiplied.   Explain which two may be multiplied and why. Then show how to find their product.     is the only one that can be computed, since corresponds to a linear transformation and corresponds to a linear transfromation . Thus the composition corresponds to a linear transformation with a standard matrix. We compute  . Thus    "
},
{
  "id": "sampleMX2",
  "level": "2",
  "url": "sample-exercises.html#sampleMX2",
  "type": "Example",
  "number": "B.1.19",
  "title": "MX2.",
  "body": "MX2   Let be a matrix.    Give a matrix that may be used to perform the row operation .    Give a matrix that may be used to perform the row operation .    Use matrix multiplication to describe the matrix obtained by applying and then to (note the order).                        "
},
{
  "id": "sampleMX3",
  "level": "2",
  "url": "sample-exercises.html#sampleMX3",
  "type": "Example",
  "number": "B.1.20",
  "title": "MX3.",
  "body": "MX3   Explain why each of the following matrices is or is not invertible by disussing its corresponding linear transformation. If the matrix is invertible, explain how to find its inverse.     We compute . We see is bijective, and therefore invertible. To compute the inverse, we solve by computing . Similarly, we solve by computing . Similarly, we solve by computing . Similarly, we solve by computing . Combining these, we obtain .  We compute . We see is not bijective and thus is not invertible.   "
},
{
  "id": "sampleGT1",
  "level": "2",
  "url": "sample-exercises.html#sampleGT1",
  "type": "Example",
  "number": "B.1.21",
  "title": "GT1.",
  "body": "GT1   Let be a matrix with determinant .    Let be the matrix obtained from by applying the row operation . What is ?    Let be the matrix obtained from by applying the row operation . What is ?    Let be the matrix obtained from by applying the row operation . What is ?        Adding a multiple of one row to another row does not change the determinant, so .    Scaling a row scales the determinant by the same factor, so so .    Swaping rows changes the sign of the determinant, so .     "
},
{
  "id": "sampleGT2",
  "level": "2",
  "url": "sample-exercises.html#sampleGT2",
  "type": "Example",
  "number": "B.1.22",
  "title": "GT2.",
  "body": "GT2   Show how to compute the determinant of the matrix     Here is one possible solution, first applying a single row operation, and then performing Laplace\/cofactor expansions to reduce the determinant to a linear combination of determinants:   Here is another possible solution, using row and column operations to first reduce the determinant to a matrix and then applying a formula:    "
},
{
  "id": "sampleGT3",
  "level": "2",
  "url": "sample-exercises.html#sampleGT3",
  "type": "Example",
  "number": "B.1.23",
  "title": "GT3.",
  "body": "GT3   Explain how to find the eigenvalues of the matrix .    Compute the characteristic polynomial: The eigenvalues are the roots of the characteristic polynomial, namely and .   "
},
{
  "id": "sampleGT4",
  "level": "2",
  "url": "sample-exercises.html#sampleGT4",
  "type": "Example",
  "number": "B.1.24",
  "title": "GT4.",
  "body": "GT4   Explain how to find a basis for the eigenspace associated to the eigenvalue in the matrix     The eigenspace associated to is the kernel of , so we compute Thus we see the kernel is which has a basis of .   "
},
{
  "id": "list-of-definitions",
  "level": "1",
  "url": "list-of-definitions.html",
  "type": "Section",
  "number": "B.2",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
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
