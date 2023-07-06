import { NavBar, Question, Code } from "../../components";

export default function Array05(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Move all the negative elements to one side of the array"
                statement={`You are given an array 'ARR' consisting of 'N' integers. You need to rearrange the array elements such that all negative numbers appear before all positive numbers.
                    Can you solve this in O(1) auxiliary space?
                    Let the array be [1, 2, -3, 4, -4, -5]. On rearranging the array such that all negative numbers appear before all positive numbers we get the resulting array [-3, -5, -4, 2, 4, 1].`}
                input={`The very first line of input contains an integer ‘T’ denoting the number of test cases. 
                    The first line of every test case contains an integer ‘N’ denoting the number of elements present in the array.
                    The second line of every test case contains ‘N’ space-separated integers denoting the elements present in the array.`}
                output={`For each test case, “Yes” is printed if the resulting array is correct otherwise “No”.
                    Output for each test case is printed on a separate line.`}
                constraints={`1 <= T <= 10
                    1 <= N <= 5 * 10^4
                    -10^5 <= ARR[i] <= 10^5
                    Where  ‘T’ represents the number of test cases and ‘N’ represents the number of elements present in the array.
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    5
                    1 -4 -2 5 3
                    2
                    2 1`}
                sampleoutput1={`Yes
                    Yes`}
                explanation1={`For the first test case we have, array: [1, -4, -2, 5, 3] and N = 5. On rearranging the array such that all negative numbers appear before all positive numbers we get the resulting array [-2, -4, 1, 5, 3].
                    For the second test case we have, array: [2, 1] and N = 2. There are no negative numbers. Hence, we do not require any rearrangement.`}
                sampleinput2={`3
                    4
                    1 -5 -5 3
                    5
                    -1 -2 3 4 5
                    1
                    -2`}
                sampleoutput2={`Yes 
                    Yes
                    Yes`}
                explanation2={`For the first test case we have, array: [1, -5, -5,  3] and N = 4. On rearranging the array such that all negative numbers appear before all positive numbers we get the resulting array [-5, -5, 1, 3].
                    For the second test case we have, array: [-1, -2, 3, 4, 5] and N = 5. There are already arranged in required way. Hence, we do not require any rearrangement.
                    For the third test case we have, array: [-2 ] and N = 1. The array is already arranged in required way. Hence, we do not require any rearrangement.`}
                />
            <Code file_link="array/array_05" />
        </div>
    </div>
}