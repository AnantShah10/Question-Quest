import { NavBar, Question, Code } from "../../components";

export default function Array08(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Find Largest sum contiguous Subarray"
                statement={`You are given an array (ARR) of length N, consisting of integers. You have to find the sum of the subarray having maximum sum among all subarrays.
                    A subarray is a contiguous segment of an array. In other words, a subarray can be formed by removing 0 or more integers from the beginning, and 0 or more integers from the end of an array.
                    The sum of an empty subarray is 0.`}
                input={`The first line of input contains an integer N, representing the length of the array.
                    The second line of input contains N single space-separated integers, denoting the elements of the array.`}
                output={`In the only output line, output the maximum subarray sum.`}
                constraints={`1 <= N <= 10^6
                    -10^6 <= A[i] <= 10^6
                    where N is the length of the array.
                    A[i] represents the numbers present in the array.
                    Time limit: 1sec`}
                sampleinput1={`9
                    1 2 7 -4 3 2 -10 9 1`}
                sampleoutput1={`11`}
                explanation1={`The subarray yielding maximum sum is [1, 2, 7, -4, 3, 2].`}
                sampleinput2={`6
                    10 20 -30 40 -50 60`}
                sampleoutput2={`60`}
                sampleinput3={`3
                    -3 -5 -6`}
                sampleoutput3={`0`}
                />
            <Code file_link="array/array_08" />
        </div>
    </div>
}