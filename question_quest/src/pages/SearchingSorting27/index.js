import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting27(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Job Scheduling Algo"
                statement={`You are given 'N' jobs with their start time 'Start', end time 'End' and profit 'Profit'. You need to tell the maximum profit you can obtain by performing these jobs such that no two jobs overlap.`}
                input={`The first line contains an integer 'T' denoting the number of test cases to be run. 
                The first line of each test case contains a single integers 'N' denoting the number of jobs.                
                The second line of each test case contains ‘N’ single space-separated integers denoting the start time of 'N' jobs respectively.                
                The third line of each test case contains ‘N’ single space-separated integers denoting the end time of 'N' jobs respectively.                
                The fourth line of each test case contains ‘N’ single space-separated integers denoting the profit of 'N' jobs respectively.
                `}
                output={`For each test case, the maximum profit is printed.
                Print the output of each test case in a separate line.`}
                constraints={`1 <= T <= 100
                1 <= N <= 3000
                1 <= Start[i] < End[i] <= 10^9
                1 <= Profit[i] <= 10^9
                
                Where 'T' denotes the number of test cases, 'N' denotes the number of jobs respectively, 'Start[i]' and 'End[i]' denotes the start and end time of  'i-th' job, and 'Profit[i]' denotes the profit of  'i-th' job. `}
                sampleinput1={`2
                4
                1 2 3 3
                3 4 5 6
                50 10 40 70
                3
                1 1 1
                5 3 4
                5 6 4  `}
                sampleoutput1={`120
                6`}
                explanation1={`For test case 1:
                We perform the jobs in this order for maximum profit: 1 -> 4.
                So the total profit becomes 50 + 70 = 120.
                
                For test case 2:
                As all the jobs are overlapping, we can perform only one job. Therefore we perform the job with maximum profit i.e. the 2nd one. Thus, the total profit is 6.`}
                sampleinput2={`2
                4
                1 3 6 2
                2 5 9 100
                50 20 100 200
                2
                1 2 
                2 3 
                10 20`}
                sampleoutput2={`250
                30`}

                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_27" />
        </div>
    </>
}