import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting01(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find first and last positions of an element in a sorted array"
                statement={`You have been given a sorted array/list ARR consisting of ‘N’ elements. You are also given an integer ‘K’.
                Now, your task is to find the first and last occurrence of ‘K’ in ARR.
                For example, if ARR = [0, 1, 1, 5] and K = 1, then the first and last occurrence of 1 will be 1(0 - indexed) and 2.`}
                input={`The first line of input contains an integer 'T' which denotes the number of test cases or queries to be run. Then the test cases follow.
                The first line of each test case contains two single-space separated integers ‘N’ and ‘K’, respectively.
                The second line of each test case contains ‘N’ single space-separated integers denoting the elements of the array/list ARR.`}
                output={`Return two single-space separated integers denoting the first and the last occurrence of ‘K’ in ARR, respectively.`}
                constraints={`1 <= T <= 100
                1 <= N <= 5000
                0 <= K <= 10^5
                0 <= ARR[i] <=10^5
                Time Limit : 1 second`}
                sampleinput1={`2
                6 3
                0 5 5 6 6 6
                8 2
                0 0 1 1 2 2 2 2`}
                sampleoutput1={`-1 -1 
                4 7`}
                explanation1={`For the first test case, 3 is not present in the array. Hence the first and last occurrence of 3 is -1 and -1.
                For the second test case, the first occurrence of 2 in at index 4 and last occurrence is at index 7.`}
                sampleinput2={`2
                4 0
                0 0 0 0
                1 2
                2`}
                sampleoutput2={`0 3
                    0 0 `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_01" />
        </div>
    </>
}