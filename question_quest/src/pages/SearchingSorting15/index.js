import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting15(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Product array Puzzle"
                statement={`You are given ‘N’ integers in the form of an array ‘ARR’. Count the number of subarrays having their sum as 0.
                For Example:
                Let ‘ARR’ be: [1, 4, -5]
                The subarray [1, 4, -5] has a sum equal to 0. So the count is 1.`}
                input={`The first line of input contains an integer ‘T’, denoting the number of test cases.
                The first line of each test case contains an integer, ‘N’, representing the size of the array.
                The second line of each test case contains ‘N’ space-separated integers, representing the array ‘ARR’ elements.`}
                output={`For each test case, print the sorted array.
                Print output of each test case in a separate line.`}
                constraints={`1 <= T <= 10
                1 <= N <= 10^5
                -10^5 <= ARR[i] <= 10^5
                Time Limit: 1 sec.`}
                sampleinput1={`2
                3
                1 4 -5
                4
                -1 1 0 1`}
                sampleoutput1={`1
                3`}
                explanation1={`For test case 1: 
                The subarray [1, 4, -5] has a sum equal to 0. 
                So the count is 1.
                
                For test case 2: 
                The subarray [-1, 1], [-1, 1, 0] and  [0] has a sum equal to 0. 
                So the count is 3.`}
                sampleinput2={`2
                4
                -1 0 1 -1
                3
                -2 0 2`}
                sampleoutput2={`4
                2 `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_15" />
        </div>
    </>
}