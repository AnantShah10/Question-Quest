import { NavBar, Question, Code } from "../../components";

export default function BitManipulation02(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find the two non-repeating elements in an array of repeating elements"
                statement={`You are given an array of integers ‘A’ having ‘N’ number of elements. It is given that all the numbers in the array occur twice except the two numbers that appear only one time. You need to find those two non-repeating numbers.
                For Example:
                If the given array is [ 4, 7, 3, 2, 7, 2 ], you have to find ‘4’ and ‘3’ as 4 and 3 occur one time, and the rest of the elements ( 7 and 2 ) are occurring twice.`}
                input = {`The first line contains a single integer T representing the number of test cases.      
                The first line of each test case contains a single integer ‘N’, denoting the number of elements in the array.
                The second line of each test case contains ‘N’ space-separated integers denoting the elements of the given array.`}
                output={`For each test case, print two space-separated integers that denote the two non-repeating numbers in the given array.
                Print the output of each test case in a new line.
                `}
                constraints={`1 <= T <= 10
                4 <= N <= 10^5
                1 <= A[i] <= 10^5
                Time Limit: 1 sec `}
                sampleinput1={`2
                4
                2 4 7 2
                8
                3 9 3 1 4 8 1 9
                `}
                sampleoutput1={`4 7
                4 8
                `}
                explanation1={`Test Case 1: The given array is [ 2, 4, 7, 2 ].  4 and 7 are the two non-repeating numbers. Hence the output will be 4 and 7.
                Test Case 2: Numbers 3, 1, 9 occurs two times while 4 and 8 occur once. Hence the output will be 4 8`}
                sampleinput2={`2
                6
                11 2 6 11 6 5
                4
                3 5 5 7`}
                sampleoutput2={`2 5
                3 7`}
                
                />
            <Code file_link="bit_manipulation/bit_manipulation_02" />
        </div>
    </>
}