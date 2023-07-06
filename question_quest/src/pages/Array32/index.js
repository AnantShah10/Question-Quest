import { NavBar, Question, Code } from "../../components";

export default function Array32(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Three way partitioning of an array around a given value"
                statement={`You are given an array consisting of N positive integers and a range [A, B], where A and B are two integers. You have to modify the array such that the following conditions are satisfied:
                    1. All the elements of the array strictly smaller than ‘a’ should come first.
                    2. All the elements of the array between the range [a, b] should come next.
                    3. All the elements of the array strictly greater than ‘b’ should come last.`}
                input={`The first line of the input contains an integer T denoting the number of test cases.
                    The first line of each test case contains three space-separated integers N, A, B, denoting the size of the array, the first element of the range, and the second element of the range [a, b] respectively.
                    The second line of each test case contains N space-separated integers representing the elements of the array.`}
                output={`The output of the test case will be “Correct” if you have modified the array correctly else it will be “Incorrect” without quotes. 
                    The output of each test case will be printed in a separate line.`}
                constraints={`1 <= T <= 5
                    1 <= N <= 5000
                    0 <= arr[i] <= 10^9
                    0 <= a, b <= 10^9`}
                sampleinput1={`1
                    5 2 3
                    2 0 1 3 4`}
                sampleoutput1={`Correct`}
                explanation1={`After modifying the array according to the given condition, we will get 0 1 2 3 4 .
                    Since this element array satisfies the required properties, so we will get output as Correct.`}
                sampleinput2={`1
                    5 4 6
                    1 3 5 7 9`}
                sampleoutput2={`Correct`}
                />
            <Code file_link="array/array_32" />
        </div>
    </div>
}