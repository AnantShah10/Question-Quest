import { NavBar, Question, Code } from "../../components";

export default function Matrix04(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find row with maximum no. of 1’s"
                statement={`You have been given a non-empty grid ‘mat’ with 'n' rows and 'm' columns consisting of only 0s and 1s. All the rows are sorted in ascending order.
                            Your task is to find the index of the row with the maximum number of ones.
                            Note: If two rows have the same number of ones, consider the one with a smaller index. If there's no row with at least 1 zero, return -1.
                             `}
                input={`The first input line contains two space-separated integers, ‘n’ and ‘m’ representing the number of rows and columns of the grid, respectively.
                From the second line, the next ‘n’ lines represent the rows of the grid. Every row contains ‘m’ single space-separated integers.
                `}
                output={`For each test case, print the index of the row with the maximum number of ones.
                Print the output of each test case in a separate line.
                `}
                constraints={`1 <= n <= 50
                1 <= m <= 50
                0 <= mat[i][j] <= 1
                
                Where ‘n’ is the number of rows and ‘m’ is the number of columns.
                
                Time limit: 1 sec
                `}
                sampleinput1={`3 3
                1 1 1
                0 0 1
                0 0 0
                `}
                sampleoutput1={`0`}
                explanation1={`The row with the maximum number of ones is 0 (0 - indexed).`}
                sampleinput2={`2 2
                1 1
                1 1`}
                sampleoutput2={`0`}
                explanation2={`Both rows have the same number of ones. Therefore, we will pick the row with smaller index.`}
                />
               
            <Code file_link="matrix/matrix_04" />
        </div>
    </>
}