import { NavBar, Question, Code } from "../../components";

export default function Array02(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find the maximum and minimum element in an array"
                statement={`You are given an array “ARR” of size N. Your task is to find out the maximum and minimum elements in the array.
                    Can you do the above task in a minimum number of comparisons?`}
                input={`The first line of input contains a single integer T, representing the number of test cases.Then the T test cases follow. 
                    The first line of each test case contains a single integer N representing the size of the array 'ARR'.
                    The second line of each test case contains N space separated integers representing the elements of the array “arr”.`}
                output={`For each test case, print the maximum and minimum element of the array 'ARR' separated by a space.`}
                constraints={`1 <= T <= 10
                    1 <= N <= 10^5 
                    -10^9 <= ARR[i] <= 10^9
                    Time limit: 1 second`}
                sampleinput1={`2
                    7
                    1 2 4 5 6 6 6 
                    6
                    -1 -4 5 8 9 3`}
                sampleoutput1={`6 1
                    9 -4`}
                explanation1={`For the first test case, the maximum element in the array is 6 and the minimum element in the array is 1.
                    For the second test case, the maximum element in the array is 9 and the minimum element in the array is -4.`}
                sampleinput2={`2
                    5
                    3 3 3 3 3 
                    1
                    -1`}
                sampleoutput2={`3 3
                    -1 -1`}
                />
            <Code file_link="array/array_02" />
        </div>
    </>
}