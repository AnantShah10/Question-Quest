import { NavBar, Question, Code } from "../../components";

export default function Matrix09(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Kth smallest element in a row-column wise sorted matrix"
                statement={`You are given a square matrix ‘NxN’ rows and columns. The matrix is sorted, meaning all rows and columns of the matrix are sorted in ascending order. You are also given an integer ‘K’, and your task is to find the ‘K’th smallest element in the sorted order.
                            For Example:
                            You are given ‘mat’ = [[1, 2, 2,], [3, 3, 4], [5, 6 ,7]]] and ‘K’ = 5, the elements of the matrix are [1, 2, 2, 3, 3, 4, 5, 6, 7], the 5th smallest element in the matrix is 3. Hence the answer is 3.
                             `}
                input={`The first line of input contains a single integer ‘T’ representing the number of test cases.
                The first line of each test case contains two space-separated integers, ‘N’ and ‘K’, representing the order of the square matrix given and the integer given.
                The following ‘N’ lines contain ‘N’ space-separated integers representing a row of the matrix.
                `}
                output={`For each test case, print a single integer representing the ‘K’ the smallest element in the sorted matrix.
                `}
                constraints={`1 <= T <= 10
                1 <= N <= 10^3
                1 <= |mat[i][j]| <= 10^4
                Time Limit: 1 sec
                `}
                sampleinput1={`2
                3 5
                1 2 2
                3 3 4
                5 6 7
                2 2
                1 2
                3 4
                `}
                sampleoutput1={`3
                2
                `}
                explanation1={`For the first test case, ‘mat’ = [[1, 2, 2,], [3, 3, 4], [5, 6 ,7]]] and ‘K’ = 5, the elements of the matrix are [1, 2, 2, 3, 3, 4, 5, 6, 7], the 5th smallest element in the matrix is 3. Hence the answer is 3.
                For the second test case,  ‘mat’ = [[1, 2], [3, 4]] and ‘K’ = 2, the elements of the matrix are [1, 2, 3, 4], the 2nd smallest element in the matrix is 2. Hence the answer is 2.`}
                sampleinput2={`2
                1 1
                1 
                3 3
                1 2 5
                1 2 11
                12 13 14`}
                sampleoutput2={`1 
                2`}
                />
            <Code file_link="matrix/matrix_09" />
        </div>
    </>
}