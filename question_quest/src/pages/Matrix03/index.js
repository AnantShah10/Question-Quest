import { NavBar, Question, Code } from "../../components";

export default function Matrix03(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find median in a row wise sorted matrix"
                statement={`You are given a row-wise sorted matrix 'mat' of size m x n where 'm' and 'n' are the numbers of rows and columns of the matrix, respectively.
                Your task is to find and return the median of the matrix.
                             `}
                input={`The first line contains two space-separated integers, 'm', and 'n', representing the number of rows and the columns of the matrix, respectively.
                Each of the next 'm' lines contains 'n' space-separated integers denoting the elements of the matrix.
                `}
                output={`Return a single integer representing the median of the matrix.
                `}
                constraints={`1 <= 'T' <= 50
                1 <= 'N' , 'M' <= 100
                1 <= 'MATRIX'['I']['J'] <= 10 ^ 5
                'N' * 'M' is always an odd number.
                Where 'MATRIX'['I']['J']  denotes the value at ('I', 'J')th cell in the matrix.
                Time limit: 1 sec
                                `}
                sampleinput1={`'n' = 5, 'm' = 5
                'mat' = 
                [     [ 1, 5, 7, 9, 11 ],
                      [ 2, 3, 4, 8, 9 ],
                      [ 4, 11, 14, 19, 20 ],
                      [ 6, 10, 22, 99, 100 ],
                      [ 7, 15, 17, 24, 28 ]   ]
                `}
                sampleoutput1={`10
                `}
                explanation1={` If we arrange the elements of the matrix in the sorted order in an array, they will be like this-
                1 2 3 4 4 5 6 7 7 8 9 9 10 11 11 14 15 17 19 20 22 24 28 99 100 
                So the median is 10, which is at index 12, which is midway as the total elements are 25, so the 12th index is exactly midway. Therefore, the answer will be 10. `}
                sampleinput2={`3 5
                1 2 3 4 5
                8 9 11 12 13
                21 23 25 27 29`}
                sampleoutput2={`11`}
                />
            <Code file_link="matrix/matrix_03" />
        </div>
    </>
}