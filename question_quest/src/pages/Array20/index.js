import { NavBar, Question, Code } from "../../components";

export default function Array20(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Rearrange the array in alternating positive and negative items with O(1) extra space"
                statement={`Given an array arr of size N containing positive and negative integers. Arrange the array alternatively such that every non-negative integer is followed by a negative integer and vice-versa.
                    The number of positive integers and negative integers may not be equal. In such cases, add the extra integers at the end.
                    For array {4, -9, -2, 6, -8}, the output will be {-9, 4, -2, 6, -8}
                    For array {1, 2, 3, -5}, the output will be {-5, 1, 2, 3}`}
                input={`The first line contains an integer 'T' which denotes the number of test cases or queries to be run. Then, the T test cases follow.
                    The first line of each test case or query contains an integer 'N' representing the size of the array (arr).
                    The second line contains 'N' single space-separated integers, representing the elements in the array.`}
                output={`For each test case, the output is “Valid” if the rearrangement is valid otherwise, “Invalid”, without quotes.`}
                constraints={`1 <= T <= 10 
                    1 <= N <= 10^5
                    Sum of N over all test cases does not exceeds 10^5. 
                    -(10^9) <= arr[i] <= (10^9) 
                    Time limit: 1 second`}
                sampleinput1={`1
                    4
                    -1 2 2 -5 `}
                sampleoutput1={`-1 2 -5 2 `}
                sampleinput2={`2
                    5
                    -2 -3 -3 -6 -2
                    3
                    1 -1 -1`}
                sampleoutput2={`-2 -3 -3 -6 -2
                    -1 1 -1`}
                />
            <Code file_link="array/array_20" />
        </div>
    </div>
}