import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting11(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find four elements that sum to a given value"
                statement={`You are given an array/list 'ARR' of ‘N’ integers  and an integer value ‘TARGET’. You need to check whether there exist four numbers (ARR[i], ARR[j], ARR[k], ARR[l]) such that (0 <= i < j < k < l < N) and ARR[i] + ARR[j] + ARR[k] + ARR[l] = 'TARGET'.`}
                input={`The first line of the input contains an integer ‘T’ denoting the number of test cases.
                The first line of each test case contains two space-separated integers ‘N’ and ‘TARGET’ denoting the number of the elements present in the sequence and the target sum respectively
                The second line of each test case contains ‘N’ space-separated integers denoting the elements of the array 'ARR'.`}
                output={`The only line of output of each test case should contain  “Yes” (without quotes) if there exist 4 numbers (having different indices) that give sum ‘TARGET’ else “No” (without quotes).`}
                constraints={`1 <= T <= 10^2
                4 <= N <= 2*10^2   
                -10^9 <= ARR[i] <= 10^9
                -10^9 <= TARGET<= 10^9 
                Time Limit: 1 sec`}
                sampleinput1={`2
                5 9
                1 3 3 10 2
                6 20
                2 4 6 3 1 1`}
                sampleoutput1={`Yes
                No`}
                explanation1={`Test case 1:
                The elements at indices (0, 1, 2, 4) gives sum 9 i.e, ARR[0] + ARR[1] + ARR[2] + ARR[4] = 9. Hence the answer is Yes.
                Test case 2:
                None of the combinations of 4 numbers gives 20 as 'TARGET'. Hence the answer is No.  `}
                sampleinput2={`2
                5 15
                0 10 1 2 2
                6 20
                -2 12 -1 1 20 1 `}
                sampleoutput2={`Yes
                Yes`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_11" />
        </div>
    </>
}