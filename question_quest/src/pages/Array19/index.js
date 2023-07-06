import { NavBar, Question, Code } from "../../components";

export default function Array19(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Find common elements In 3 sorted arrays"
                statement={`You are given three arrays 'A', 'B' and 'C' of length 'N', 'M' and 'K' respectively. All the three arrays are sorted in non-decreasing order. Your task is to find all such elements which are present in all the three given arrays.
                    1. The output array should have the same ordering of elements as the original arrays.
                    2. Even if a particular element appears more than once in each of the three arrays, it should still be present only once in the output array.
                    3. If there are no common elements in the arrays, return an empty array.
                    Consider the three arrays A = [ 2, 3, 4, 7 ] , B = [ 0, 0, 3, 5 ] , C = [ 1, 3, 8, 9 ]
                    The output array should be [ 3 ] as 3 is the only element which is present in all the three arrays.`}
                input={`The first line of the input contains an integer 'T', denoting the number of test cases. 
                    The first line of each test case contains three space-separated integers 'N', 'M' and 'K' denoting the number of elements in Array A, Array B and Array C respectively.
                    The second line of each test case contains 'N' space-separated integers denoting the elements of the array 'A'.                    
                    The third line of each test case contains 'M' space-separated integers denoting the elements of the array 'B'.    
                    The fourth line of each test case contains 'K' space-separated integers denoting the elements of the array 'C'.`}
                output={`The only line of output of each test case should contain the elements that are common in all three arrays separated by space.
                    Print the output of each test case in a new line.`}
                constraints={`1 <= T <= 10
                    1 <= N, M, K <= 30000
                    0 <= A[i] <= 10^9
                    0 <= B[i] <= 10^9
                    0 <= C[i] <= 10^9
                    Where 'A[i]', 'B[i]', 'C[i]' denotes the 'i'th' element of the arrays 'A', 'B' and 'C' respectively.
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    4 3 3
                    1 4 5 6
                    3 4 5 
                    5 6 7
                    3 1 3
                    4 6 8
                    6
                    2 2 6`}
                sampleoutput1={`5
                    6`}
                explanation1={`For the first test case : 
                    Elements that are common in array A and B = [ 4, 5 ]. Out of which only 5 is present in Array C. Therefore the output array is [ 5 ] in this case.
                    For the second test case : 
                    It can be seen that only 6 is present in all the three arrays. Therefore the output array is [ 6 ] in this case.`}
                sampleinput2={`2
                    4 4 3
                    1 2 2 3
                    2 2 3 3
                    2 2 3
                    3 2 2
                    1 2 3
                    0 6
                    4 6`}
                sampleoutput2={`2 3`}
                explanation2={`For the first test case, elements 2,3 are present in all three arrays.
                    For the second test case, no element is common in all three arrays, hence we do not print anything.`}
                />
            <Code file_link="array/array_19" />
        </div>
    </div>
}