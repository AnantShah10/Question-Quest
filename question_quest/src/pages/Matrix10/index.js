import { NavBar, Question, Code } from "../../components";

export default function Matrix10(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Common elements in all rows of a given matrix"
                statement={`You are given a 2-D Matrix 'MAT' having 'N' rows and 'M' columns, respectively. Your task is to find all elements which are present in each row of the matrix.
                            For Example:
                            Consider the matrix MAT [ [ 2, 3, 4, 7 ] , [ 0, 0, 3, 5 ] , [ 1, 3, 8, 9 ] ] having 3 rows and 4 columns respectively.
                            The output array should be [ 3 ] as 3 is the only element that is present in all three rows. `}
                input={`The first line of the input contains an integer, 'T', denoting the number of test cases.
                The first line of each test case contains two space-separated integers, 'N' and 'M', denoting the number of rows and columns in the Matrix 'MAT', respectively.                
                Each of the next 'N' lines contains 'M' space-separated integers denoting the matrix 'MAT' elements.
                `}
                output={`The only line of output of each test case should contain all elements which are present in each row of the given matrix separated by a single space.
                Print the output of each test case in a new line.
                `}
                constraints={`1 <= T <= 10
                1 <= N, M <= 1000
                0 <= MAT[i][j] <= 10^9
                Where 'MAT[i][j]' denotes the element present at the 'i-th' row and the 'j-th' column of the matrix 'MAT'.
                Time Limit: 1 sec
                `}
                sampleinput1={`2
                3 4
                1 4 5 6
                3 4 5 6
                5 6 7 2
                3 2
                4 6 
                6 4
                2 6
                `}
                sampleoutput1={`5 6
                6
                `}
                explanation1={`For the first test case : 
                Elements that are common in the first two rows are 4, 5, and 6. Out of which only 5 and 6 are present in the third row. Therefore the output array is [ 5, 6 ] in this case.
                For the second test case : 
                We can see that only 6 are present in all three rows. Therefore the output array is [ 6 ] in this case.`}
                sampleinput2={`2
                4 3
                1 2 3
                2 2 3
                2 3 1
                2 3 4
                3 3
                1 2 3
                0 6 0
                4 6 1`}
                sampleoutput2={`2 3`}
                explanation2={`For the first test case : 
                As elements 2 and 3 are present in all three rows of the matrix. Therefore the output array is [ 2, 3 ] in this case.
                For the second test case : 
                There is no such element that is present in all three rows. Therefore the output array is an empty array in this case.`}
                />
            <Code file_link="matrix/matrix_10" />
        </div>
    </>
}