import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting36(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Partitioning and Sorting Arrays with Many Repeated Entries"
                statement={`You’re given an array with many repeated values. Your task is to sort this array efficiently.`}
                input={`The first line of the input contains an integer T denoting the number of test cases.
                The first line of each test case contains an integer N, the size of the array.
                The second line of each test case contains N space-separated integers, the elements present in the array.
                `}
                output={`For every test case, the only line of output should contain N space-separated integers in sorted order.`}
                constraints={`1 <= T <= 10
                1 <=  N <= 10^5
                10^-9<= arr[i] <= 10^9
                
                Time limit: 1 sec`}
                sampleinput1={`1
                4
                3 1 2 4   `}
                sampleoutput1={`1 2 3 4`}
                explanation1={`‘1 2 3 4’, is the sorted array for the given input.`}
                sampleinput2={`2
                6
                3 4 1 6 2 5
                5
                3 5 8 9 11  `}
                sampleoutput2={`1 2 3 4 5 6
                3 5 8 9 11`}
                explanation2={`‘1 2 3 4 5 6’ and  ‘3 5 8 9 11’ are the sorted arrays for the given inputs.`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_36" />
        </div>
    </>
}