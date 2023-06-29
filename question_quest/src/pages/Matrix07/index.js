import { NavBar, Question, Code } from "../../components";

import matrix07 from "../../images/matrix07.jpg";

export default function Matrix07(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find a specific pair in matrix"
                statement={`You have been given a 2-D matrix ‘MAT’ of size ‘N’ x ‘N’ i.e. N rows and N columns. Your task is to find the maximum value of ‘MAT[a][b]’ - ‘MAT[c][d]’ over all possible indices (0 <= ‘a’, ‘b’, ‘c’, ‘d’ < ‘N’) such that . ‘a’ > ‘c’ and ‘b’ > ‘d’.
                For example:
                             `}
                image = {matrix07}
                input={`The first line of input contains an integer 'T' which denotes the number of test cases or queries to be run. Then the test cases follow.
                The first line of each test case contains one integer ‘N’ representing the number of rows (or columns) of the square matrix ‘MAT’.
                The next ‘N’ lines of each test case contain ‘N’ single space-separated integers denoting the values of ‘MAT’.
                `}
                output={`For each test case, print the maximum value of ‘MAT[a][b]’ - ‘MAT[c][d]’ over all possible choices of indices i.e. 0 <= ‘a’, ‘b’, ‘c’, ‘d’ < ‘N’ such that  ‘a’ > ‘c’ and ‘b’ > ‘d’.
                Print the output of each test case in a separate line.
                `}
                constraints={`1 <= ‘T’ <= 100
                2 <= ‘N’ <= 100
                -10^5 <= ‘MAT[i][j]’ <= 10^5
                Time Limit : 1 second
                `}
                sampleinput1={`2
                3
                1 2 3
                4 5 6
                7 8 9
                3
                -1 -2 -3
                -4 -5 -6
                -7 -8 -9
                `}
                sampleoutput1={`8
                -4
                `}
                explanation1={`For sample test case 1: 
                In this sample test case, to maximise the value of ‘MAT[a][b]’ - ‘MAT[c][d]’ fulfilling the given conditions on indices (‘a’ > ‘c’ and ‘b’ > ‘d’), we take ‘a’ = 3, ‘b’ = 3, ‘c’ = 0 and ‘d’ = 0 .  So, ‘MAT[a][b]’ = 9 and ‘MAT[c][d]’ = 1 and the value of ‘MAT[a][b]’ - ‘MAT[c][d]’ => 9 - 1 = 8 which is maximum among all possible combinations.`}
                image2 = {matrix07}
                sampleinput2={`2
                2
                1 5 
                4 2 
                3
                -1 5 -3
                -14 -5 -2
                -7 8 -9`}
                sampleoutput2={`1
                22`}
                />
            <Code file_link="matrix/matrix_07" />
        </div>
    </>
}