import { NavBar, Question, Code } from "../../components";

export default function Array12(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Merge 2 sorted arrays without using Extra space"
                statement={`Given two non-decreasing sorted arrays, ‘A’ and ‘B’, having ‘N’ and ‘M’ elements, respectively. You must merge these arrays, ‘A’ and ‘B’, into a sorted array without using extra space. Of all the 'N + M' sorted elements, array 'A' should contain the first 'N' elements, and array 'B' should have the last 'M' elements.
                    You must perform the merge operation in place and must not allocate any extra space to merge the two arrays.
                    When ‘N’ = 4, ‘A’ = {1, 4, 5, 7} and ‘M’ = 3, ‘B’ = {2, 3, 6}. We can merge these two arrays into {1, 2, 3, 4, 5, 6, 7} (The elements of ‘A’ are {1, 2, 3, 4} ). Hence, the answer is {1, 2, 3, 4, 5, 6, 7}.`}
                input={`The first line contains two integers, ‘N’ and ‘M’, denoting the sizes of ‘A’ and ‘B’, respectively.
                    The second line contains ‘N’ integers denoting the elements of ‘A’.
                    The third line contains ‘M’ integers denoting the elements of ‘B’.`}
                output={`You must merge the two sorted arrays in place. The smallest ‘N’ elements should be in ‘A’, and the greatest ‘M’ elements should be in ‘B’. You don’t have to return anything. The system will print ‘A’ + ‘B’, where ‘+’ denotes concatenation. `}
                constraints={`1 <= N <= 10^5
                    1 <= M <= 10^5
                    0 <= A[i] <= 10^9
                    0 <= B[i] <= 10^9
                    The sum of ‘N + M’ over all test cases does not exceed 2 * 10^5.
                    Time Limit: 1-sec`}
                sampleinput1={`3 4
                    1 8 8
                    2 3 4 5`}
                sampleoutput1={`1 2 3 4 5 8 8`}
                explanation1={`We have ‘A’ = {1, 8, 8} and ‘B’ = {2, 3, 4, 5}. 
                    Merging the two arrays results in {1, 2, 3, 4, 5, 8, 8}.
                    Hence the answer is {1, 2, 3, 4, 5, 8, 8}, where ‘A’ contains {1, 2, 3} and ‘B’ contains {4, 5, 8, 8}.`}
                sampleinput2={`4 5
                    1 1 1 1 
                    2 2 3 3 5`}
                sampleoutput2={`1 1 1 1 2 2 3 3 5`}
                />
            <Code file_link="array/array_12" />
        </div>
    </div>
}