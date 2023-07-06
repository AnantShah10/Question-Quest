import { NavBar, Question, Code } from "../../components";

export default function Array11(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Find duplicate in an array of N+1 Integers"
                statement={`You are given an array ‘ARR’ of size ‘N’ containing each number between 1 and ‘N’ - 1 at least once. There is a single integer value that is present in the array twice. Your task is to find the duplicate integer value present in the array.
                    Consider ARR = [1, 2, 3, 4, 4], the duplicate integer value present in the array is 4. Hence, the answer is 4 in this case.
                    A duplicate number is always present in the given array.`}
                input={`The first line of the input contains an integer, 'T,’ denoting the number of test cases.
                    The first line of each test case contains a single integer, 'N', denoting the number of elements in the array.
                    The second line of each test case contains 'N' space-separated integers denoting the elements of the array 'ARR'.`}
                output={`For each test case, print a single integer - the duplicate element in the array.
                    Print the output of each test case in a separate line.`}
                constraints={`1 <=  T  <= 10
                    2 <=  N <= 10 ^ 5
                    1 <=  ARR[i]  <= N - 1
                    Where 'T' denotes the number of test cases, 'N' denotes the number of elements in the array, and 'ARR[i]' denotes the 'i-th' element of the array 'ARR'.
                    Time limit: 1 sec`}
                sampleinput1={`2
                    5
                    4 2 1 3 1
                    7
                    6 3 1 5 4 3 2`}
                sampleoutput1={`1
                    3`}
                explanation1={`For the first test case, 
                    The duplicate integer value present in the array is 1. Hence, the answer is 1 in this case.
                    For the second test case,
                    The duplicate integer value present in the array is 3. Hence, the answer is 3 in this case.`}
                sampleinput2={`2
                    6 
                    5 1 2 3 4 2  
                    9
                    8 7 2 5 4 7 1 3 6`}
                sampleoutput2={`2
                    7`}
                />
            <Code file_link="array/array_11" />
        </div>
    </div>
}