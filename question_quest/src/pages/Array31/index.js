import { NavBar, Question, Code } from "../../components";

export default function Array31(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Smallest Subarray with sum greater than a given value"
                statement={`Rahul is a programming enthusiast. He is currently learning about arrays/lists. One day his teacher asked him to solve a very difficult problem. The problem was to find the length of the smallest subarray(subarray is a contiguous part of an array/list) in a given array/list ‘ARR’ of size ‘N’ with its sum greater than a given value. If there is no such subarray return 0.
                    Example: Given an ‘ARR’: [1, 2, 21, 7, 6, 12] and a number ‘X’: 23. The length of the smallest subarray is 2 as the subarray is  [21, 7].
                    Note: Here are multiple subarrays whose sum is greater than ‘X’ such as [1, 2, 21] or [7, 6, 12] but we have to choose the minimum length subarray.`}
                input={`The first line contains a single integer ‘T’ representing the number of test cases. 
                    The first line of each test case will contain two integers ‘N’ and ‘X’ that denote the size of the ‘ARR’ and the given value respectively.
                    The second line of each test case contains ‘N’ space-separated integers ‘A[i]’, these are the numbers present in our ‘ARR’.`}
                output={`For each test case, print an integer denoting the length of the minimum subarray whose sum is greater than ‘X’.
                    Output for every test case will be printed in a separate line.`}
                constraints={`1 <= T <= 10^2
                    1 <= N <= 10^3
                    1 <= X <= 10^9
                    0 <= A[i] <= 10^9
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    5 11
                    9 1 5 3 9
                    4 8
                    5 1 2 1 `}
                sampleoutput1={`2
                    4`}
                explanation1={`In the first test case, the length of the minimum subarray is 2. The subarray is [3, 9] as the sum is 12 which is greater than the given value 11.
                    In the second test case, the length of the minimum subarray is 4. The subarray is [5,1, 2, 1] as the sum is 9 which is greater than the given value 8.`}
                sampleinput2={`2
                    7  32
                    27 1 2 4 15 12 8 
                    6 10
                    9 1 2 11 4 1 `}
                sampleoutput2={`3
                    1`}
                explanation2={`In the first test case, the length of the minimum subarray is 3. The subarray is [15,12, 8] as the sum is 35 which is greater than the given value 32.
                    In the second test case, the length of the minimum subarray is 1. The subarray is [11] as the sum is 11 which is greater than the given value 10.`}
                />
            <Code file_link="array/array_31" />
        </div>
    </div>
}