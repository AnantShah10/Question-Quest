import { NavBar, Question, Code } from "../../components";

export default function Array04(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo"
                statement={`You have been given an integer array/list(ARR) of size 'N'. It only contains 0s, 1s and 2s. Write a solution to sort this array/list.
                    Try to solve the problem in 'Single Scan'. ' Single Scan' refers to iterating over the array/list just once or to put it in other words, you will be visiting each element in the array/list just once.`}
                input={`The first line contains an integer 'T' which denotes the number of test cases or queries to be run. Then the test cases follow.
                    The first line of each test case contains an Integer 'N' denoting the size of the array/list.
                    The second line of each test case contains 'N' space-separated Integers denoting the array/list.`}
                output={`For each test case/query, print the sorted array/list(ARR) as space-separated Integers.
                    Output for every test case will be printed in a separate line.`}
                constraints={`1 <= T <= 10
                    1 <= N <= (5 * (10 ^ 5))
                    0 <= ARR[i] <= 2
                    Where 'N' is the size of the given array/list.
                    And, ARR[i] denotes the i-th element in the array/list.   
                    Time Limit: 1sec `}
                sampleinput1={`2
                    6
                    0 1 2 2 1 0
                    7
                    0 1 2 1 2 1 2`}
                sampleoutput1={`0 0 1 1 2 2
                    0 1 1 1 2 2 2`}
                sampleinput2={`2
                    7
                    2 2 2 1 1 1 0
                    6
                    2 1 2 0 1 0`}
                sampleoutput2={`0 1 1 1 2 2 2
                    0 0 1 1 2 2`}
                />
            <Code file_link="array/array_04" />
        </div>
    </div>
}