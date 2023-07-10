import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting10(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find a pair with a given difference"
                statement={`You are given a sorted array ARR of integers of size N and an integer K. You have to find whether it is possible to find a pair of integers having an absolute difference of K.`}
                input={`The first line of input contains an integer T, denoting the number of test cases.
                The first line of each test case consists of two space-separated integers N and K, denoting the size of the given array ARR and the required absolute difference.
                The second line of each test case consists of N space-separated integers denoting the elements of the array.`}
                output={`For each test case print, “Yes” if it is possible to have a pair of integers having absolute difference equal to K and “No” otherwise, in a separate line.`}
                constraints={`1 <= T <= 100
                1 <= N <= 10^4
                1 <= ARR[i] <= 10^9
                0 <= K <= 10^9
                Time Limit: 1 sec.`}
                sampleinput1={`1
                3 2
                1 2 3`}
                sampleoutput1={`Yes`}
                explanation1={`In the given array absolute difference of 1 and 3 equals to 2, which is required K.`}
                sampleinput2={`1
                4 6
                2 3 3 5`}
                sampleoutput2={`No `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_10" />
        </div>
    </>
}