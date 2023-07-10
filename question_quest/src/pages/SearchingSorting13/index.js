import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting13(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Count triplet with sum smaller than a given value"
                statement={`You are given an array ‘ARR’ containing ‘N’ integers, and you are also given an integer ‘TARGET’.
                You task is to find the count of triplets i, j, k ( 0 ≤ i < j < k < N ), such that 'ARR[i]' + 'ARR[j]' + 'ARR[j]' is less than the value of ‘TARGET’.
                For Example:
                If ‘N’ = 7, ‘ARR’ = { 1, 5, 2, 3, 4, 6, 7 } and ‘TARGET’ = 9
                Then, there are three triplets with sum less than 9:
                1) {1, 5, 2}
                2) {1, 2, 3}
                3) {1, 2, 4}
                4) {1, 3, 4}
                Thus, the output will be 4. `}
                input={`The first line contains a single integer ‘T’ denoting the number of test cases, then each test case follows:
                The first line of each test case contains a single integer ‘N’, denoting the size of the array.
                The second line of each test case contains 'N' integers ‘ARR’, denoting the array elements.
                The third line of each test case contains a single integer ‘TARGET’, denoting the target value to evaluate the smaller sum.`}
                output={`For each test case, print the count of triplets having a sum less than the given target value.
                Output for each test case will be printed in a separate line.`}
                constraints={`1 ≤ 'T' ≤ 10      
                1 ≤ 'N' ≤ 100
                -100 ≤ 'ARR[i]' ≤ 100
                -100 ≤ 'TARGET' ≤ 100
                Time Limit: 1 sec`}
                sampleinput1={`2
                7
                1 5 2 3 4 6 7
                9
                6
                -1 0 2 3 4 6
                4`}
                sampleoutput1={`4
                3`}
                explanation1={`For test case 1 :
                We will print 4 because:
                The following four triplets have sum less than 9: {1, 5, 2}, {1, 2, 3}, {1, 2, 4} and {1, 3, 4}.
                For test case 2 : 
                We will print 3 because:
                The following three triplets have sum less than 4: {-1, 0, 2}, {-1, 0, 3} and {-1, 0, 4}.`}
                sampleinput2={`2
                4
                3 1 2 0
                100
                3
                1 1 0
                2`}
                sampleoutput2={`4
                0 `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_13" />
        </div>
    </>
}