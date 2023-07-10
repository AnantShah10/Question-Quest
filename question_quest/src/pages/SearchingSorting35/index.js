import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting35(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Implement Merge-sort in-place"
                statement={`You are given an array consisting of N integers. Your task is to sort the array in non-descending order using merge sort. Perform the task as in-place.
                For Example:
                Let the array be [1, 2, -3, 4, -4, -5]. On sorting the array in non-descending order we get the resulting array [-5, -4, -3, 1, 2, 4].`}
                input={`The very first line of input contains an integer ‘T’ denoting the number of test cases. 
                The first line of every test case contains an integer ‘N’ denoting the number of elements present in the array.
                The second line of every test case contains ‘N’ space-separated integers denoting the elements present in the array.
                `}
                output={`For each test case, the resulting sorted array is printed.
                Output for each test case is printed on a separate line.`}
                constraints={`1 <= T <= 10
                1 <= N <= 5000
                -10^5 <= Arr[i] <= 10^5
                
                Where  ‘T’ represents the number of test cases and ‘N’ represents the number of elements present in the array.
                
                Time Limit: 1 sec`}
                sampleinput1={`2
                5
                1 -4 -2 5 3
                2
                2 1       `}
                sampleoutput1={`-4 -2 1 3 5
                1 2`}
                explanation1={`For the first test case we have, array: [1, -4, -2, 5, 3] and N = 5.
                On sorting the array in non-descending order we get the resulting array [-4, -2, 1, 3, 5].
                
                For the second test case we have, array: [2, 1] and N = 2.
                On sorting the array in non-descending order we get the resulting array [1, 2].`}
                sampleinput2={`3
                4
                1 -5 -5 3
                5
                -1 -2 3 4 5
                1
                -2 `}
                sampleoutput2={`-5 -5 1 3 
                -2 -1 3 4 5
                -2`}
                
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_35" />
        </div>
    </>
}