import { NavBar, Question, Code } from "../../components";

import matrix06 from "../../images/matrix06.png";
import matrix06_2 from "../../images/matrix06_2.jpg";

export default function Matrix06(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Maximum size rectangle"
                statement={`You are given an 'N' * 'M' sized binary-valued matrix 'MAT, where 'N' is the number of rows and 'M' is the number of columns. 
                            You need to return the maximum size (area) of the submatrix which consists of all 1’s i.e. the maximum area of a submatrix in which each cell has only the value ‘1’.
                             `}
                image = {matrix06}
                input={`The first line of the input contains an integer 'T' denoting the number of test cases.
                The first line of each test case contains two space-separated integers 'N' and 'M', where 'N' = the number of rows in the given matrix and 'M' = the number of columns in the given matrix.
                Then 'N' lines follow for each test case. Each line contains 'M' space-separated integers (either 1 or 0) denoting matrix elements.
                `}
                output={`For each test case print in a single line the area of maximum size submatrix of all 1’s in the given matrix on a new line.
                The output of each test case will be printed in a separate line.
                `}
                constraints={`1 <= 'T' <= 50
                1 <= 'N', 'M' <= 100
                Time Limit: 1 sec
                `}
                sampleinput1={`2
                2 2
                1 1
                1 1
                5 4
                1 0 1 1
                1 0 1 1
                0 1 0 1
                1 1 1 1
                0 0 0 1
                `}
                sampleoutput1={`4
                5
                `}
                explanation1={`For First Test Case: It is easy to see that whole matrix of size 2 * 2 contains '1' only hence the required area will be 4.
                For Second Test Case:`}
                image2 = {matrix06_2}
                sampleinput2={`2
                2 2
                1 0
                0 1
                4 4
                1 1 1 1
                1 1 1 1
                0 0 1 1
                0 0 1 1`}
                sampleoutput2={`1
                8`}
                
                />
            <Code file_link="matrix/matrix_06" />
        </div>
    </>
}