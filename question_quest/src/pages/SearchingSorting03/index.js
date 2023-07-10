import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting03(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Search in a rotated sorted array"
                statement={`You have been given a sorted array/list 'arr' consisting of 'n' elements. You are also given an integer k
                Now the array is rotated at some pivot point unknown to you.
                For example, if 'arr' = [ 1, 3, 5, 7, 8], then after rotating 'arr' at index 3, the array will be 'arr' = [7, 8, 1, 3, 5].
                Now, your task is to find the index at which ‘k’ is present in 'arr'.`}
                input={`In the first line, two single-space separated integers ‘n’ and ‘k’, respectively.
                The second line, ‘n’ single space-separated integers, denotes the array/list 'arr' elements.`}
                output={`The only line contains the index at which 'k' is present in 'arr'.`}
                constraints={`1 <= n <= 5000
                0 <= k <= 10^5
                0 <= arr[i] <= 10^5
                Time Limit: 1 second`}
                sampleinput1={`4 3
                8 9 4 5`}
                sampleoutput1={`-1 
                `}
                explanation1={`For the test case, 3 is not present in the array. Hence the output will be -1.`}
                sampleinput2={`4 3
                2 3 5 8`}
                sampleoutput2={`1 `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_03" />
        </div>
    </>
}