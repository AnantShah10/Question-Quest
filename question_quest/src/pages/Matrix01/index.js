import { NavBar, Question, Code } from "../../components";

import matrix01 from "../../images/matrix01.jpg";
import matrix01_2 from "../../images/matrix01_2.jpg";

export default function Matrix01(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Spiral traversal on a Matrix"
                statement={`You are given a 2-D array 'MATRIX' of dimensions N x M, of integers. You need to return the spiral path of the matrix.
                        Example of Spiral Matrix:`
                        }
                image={matrix01}
                input={`The first line contains an integer 'T' which denotes the number of test cases or queries to be run. Then the test cases follow.
                The first line of each test case contains two single space-separated integers 'N' and 'M', denoting the number of rows and columns respectively.
                The next 'N' lines, each contains 'M' single space-separated integers representing the elements in a row of the matrix.
                `}
                output={`For each test case/query, print the spiral path of the given matrix.
                The output for every test case will be printed in a separate line.
                `}
                constraints={`1 <= T <= 5
                1 <= N  <= 10 ^ 2
                1 <= M <= 10 ^ 2
                -10 ^ 9 <= MATRIX[ i ][ j ] <= 10 ^ 9
                Time Limit: 1sec.
                `}
                sampleinput1={`2
                4 4
                1 2 3 4 
                5 6 7 8 
                9 10 11 12 
                13 14 15 16
                3 6
                1 2 3 4 5 6 
                7 8 9 10 11 12 
                13 14 15 16 17 18
                `}
                sampleoutput1={`1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
                1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11
                `}
                explanation1={`The spiral path for the test case 2 is as shown below:`}
                image2={matrix01_2}
                sampleinput2={`2
                1 1
                4
                1 5
                1 2 3 4 5`}
                sampleoutput2={`4
                1 2 3 4 5`}
                />
            <Code file_link="matrix/matrix_01" />
        </div>
    </>
}