import { NavBar, Question, Code } from "../../components";

export default function Matrix05(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Print elements in sorted order using row-column wise sorted matrix"
                statement={`You have been given a matrix of ‘N’ rows and ‘M’ columns filled up with integers where every row is sorted in non-decreasing order. 
                            Your task is to return all the elements of the given matrix in non-decreasing order.
                             `}
                input={`The first line contains a single integer ‘T’ representing the number of test cases. 
                The first line of each test case will contain two integers ‘N’ and ‘M’ denoting the number of rows and columns, respectively.
                Next ‘N’ lines contain ‘M’ space-separated integers each denoting the elements in the matrix.
                `}
                output={`For each test case, print N*M space-separated integers which denote the elements of the given matrix in non-decreasing order.
                Output for every test case will be printed in a separate line.
                `}
                constraints={`1 <= T <= 50
                1 <= N , M <= 10^2
                0 <= matrix[i][j] <= 10^5
                Where ‘T’ is the number of test cases.
                Where 'N' is the number of rows in the given matrix, and 'M' is the number of columns in the given matrix.
                And, matrix[i][j] denotes the value at (i, j)th cell in the matrix.
                
                Time Limit: 1 sec
                `}
                sampleinput1={`2
                1 3
                1 2 3
                2 3
                2 6 9
                1 5 11
                `}
                sampleoutput1={`1 2 3
                1 2 5 6 9 11
                `}
                explanation1={`In the first test case, the list of the elements of the given matrix in a non-decreasing order is [1, 2, 3].

                In the second test case, the list of the elements of the given matrix in a non-decreasing order is [1, 2, 5, 6, 9, 11].`}
                sampleinput2={`2
                3 3
                2 6 8
                1 4 7
                6 8 9
                2 2
                4 6
                1 2`}
                sampleoutput2={`1 2 4 6 6 7 8 8 9
                1 2 4 6`}
                explanation2={`In the first test case, the list of the elements of the given matrix in a non-decreasing order is [1, 2, 4, 6, 6, 7, 8, 8, 9].

                In the second test case, the list of the elements of the given matrix in a non-decreasing order is [1, 2, 4, 6].`}
                />
            <Code file_link="matrix/matrix_05" />
        </div>
    </>
}