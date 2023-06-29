import { NavBar, Question, Code } from "../../components";

export default function Matrix08(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Rotate matrix by 90 degrees"
                statement={`You are given a square matrix of non-negative integers matrix your task is to rotate that array by 90-degrees in an anti-clockwise direction using constant extra space
                For Example :    
                For given 2D array :
                    [ [ 1,  2,  3 ],
                        [ 4,  5,  6 ],
                        [ 7,  8,  9 ]  ]
                After 90 degree rotation in anti clockwise direction, it will become:
                    [ [ 3,  6,  9 ],
                        [ 2,  5,  8 ],
                        [ 1,  4,  7 ]   ] `}
                input={`The first line of input contains an integer 'T' representing the number of the test case. Then the test case follows.
                The first line of each test case contains an integer 'N' representing the size of the square matrix 'ARR'.
                Each of the next 'N' lines contains 'N' space-separated integers representing the elements of the matrix 'ARR'.
                `}
                output={`For each test case, print N lines where N is the size of the matrix, containing N space-separated integer denoting the elements of the matrix after rotation.
                The output of each test case will be printed in a separate line.
                `}
                constraints={`1 ≤ T ≤ 50
                1 ≤ N ≤ 100
                1 ≤ MATRIX[i][j] ≤ 10 ^ 5                
                Time Limit: 1 sec. `}
                sampleinput1={`2
                3
                1  2  3
                4  5  6
                7  8  9
                4
                1  2  3  4 
                5  6  7  8 
                9 10 11 12 
                13 14 15 16
                `}
                sampleoutput1={`3  6  9 
                2  5  8 
                1  4  7
                4  8 12 16 
                3  7 11 15 
                2  6 10 14 
                1  5  9 13
                `}
                explanation1={`For, first test case, the given matrix has been rotated by 90 degrees in an anticlockwise direction as the first row is now the first column inverted and so on for second and third rows.
                For, second test case, the given matrix has been rotated by 90 degrees in an anticlockwise direction as the first row is now first column inverted and so on for second, third and fourth rows.`}
                sampleinput2={`2
                3
                7  4  1 
                8  5  2 
                9  6  3
                4
                13  9  5  1 
                14  10  6  2 
                15 11 7 3 
                16 12 8 4`}
                sampleoutput2={`1  2  3
                4  5  6
                7  8  9
                1  2  3  4 
                5  6  7  8 
                9 10 11 12 
                13 14 15 16`}
                
                />
            <Code file_link="matrix/matrix_08" />
        </div>
    </>
}