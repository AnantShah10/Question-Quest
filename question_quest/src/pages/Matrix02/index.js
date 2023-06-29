import { NavBar, Question, Code } from "../../components";

export default function Matrix02(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Search an element in a Matrix"
                statement={`You have been given a 2-D array 'mat' of size 'M x N' where 'M' and 'N' denote the number of rows and columns, respectively. The elements of each row are sorted in non-decreasing order.
                Moreover, the first element of a row is greater than the last element of the previous row (if it exists).  
                You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.`}
                input={`The first line contains three space-separated integers 'M', 'N', and ‘target’ where 'M' and 'N' denote the number of rows and columns of the 'mat', respectively, and ‘target’ is the integer to be found.
                From the second line, the next 'M' lines represent the rows of the 'mat'. Every row contains 'N' single space-separated integers.
                `}
                output={`Return 'true' if ‘target’ is present in the 'mat'; else, return 'false'.
                `}
                constraints={`1 <= N <= 50
                1 <= M <= 50
                -10^5 <= mat[i], target <= 10^5
                Time Limit: 1 sec
                `}
                sampleinput1={`3 4 8
                1 2 3 4
                5 6 7 8
                9 10 11 12
                `}
                sampleoutput1={`true
                `}
                explanation1={`The ‘target’  = 8 exists in the 'mat' at index (1, 3).`}
                sampleinput2={`3 3 78
                1 2 4 
                6 7 8
                9 10 34`}
                sampleoutput2={`false`}
                />
            <Code file_link="matrix/matrix_02" />
        </div>
    </>
}