import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting09(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Searching in an array where adjacent differ by at most k"
                statement={`There are 'N' students standing in a line, and their heights are given. But the constraint is that the difference in heights of adjacent students does not exceed 'K', i.e.,
                | height[i] - height[i+1] | <= K, where i ∈  (1, N-1)
                Your task is to find the position of a student having height 'H'. If no such student is found, return -1.`}
                input={` The first line contains 'T', denoting the number of tests.
                For each Test :
                    The first line contains three space-separated integers 'N', 'K' and 'H',  denoting the number of students, the maximum difference in adjacent heights, and height of target student, respectively.
                    The second line contains an array 'A' of length 'N', denoting the heights of students.`}
                output={`For each test, print an integer, denoting the minimum position of a student having a height equal to 'H'.`}
                constraints={`1 <= 'T' <= 5
                1 <= 'N' <= 10^5
                1 <= K, A[i] <= 10^9  i ∈  (1, N)
                Note - Sum of 'N' over all test cases does not exceed 10^5.
                Time Limit: 1 sec`}
                sampleinput1={`2
                5 1 6
                4 5 6 7 6
                3 2 2
                1 2 2`}
                sampleoutput1={`2
                1`}
                explanation1={`For case 1:
                The first student with height equal to 6, is standing at position 2 (starting from 0).
                
                For Case 2:
                The first student with height equal to 2, is standing at position 1 (starting from 0).`}
                sampleinput2={`2
                3 1 2
                1 1 1
                4 1 2
                3 2 1 3`}
                sampleoutput2={`-1
                    1 `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_09" />
        </div>
    </>
}