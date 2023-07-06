import { NavBar, Question, Code } from "../../components";

export default function Array21(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Find if there is any subarray with sum equal to 0"
                statement={`You are given an array/list ‘ARR’ of ‘N’ positive integers and an integer ‘K’. Your task is to check if there exists a subset in ‘ARR’ with a sum equal to ‘K’.
                    Note: Return true if there exists a subset with sum equal to ‘K’. Otherwise, return false.
                    If ‘ARR’ is {1,2,3,4} and ‘K’ = 4, then there exists 2 subsets with sum = 4. These are {1,3} and {4}. Hence, return true.`}
                input={`The first line contains a single integer T representing the number of test cases.
                    The first line of each test case contains two space-separated integers ‘N’ and ‘K’ representing the size of the input ‘ARR’ and the required sum as discussed above.  
                    The next line of each test case contains ‘N’ single space-separated integers that represent the elements of the ‘ARR’.`}
                output={`For each test case, return true or false as discussed above.
                    Output for each test case will be printed in a separate line.`}
                constraints={`1 <= T <= 5
                    1 <= N <= 10^3
                    0 <= ARR[i] <= 10^9
                    0 <= K <= 10^3
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    4 5
                    4 3 2 1
                    5 4
                    2 5 1 6 7`}
                sampleoutput1={`true
                    false`}
                explanation1={`In example 1, ‘ARR’ is {4,3,2,1} and ‘K’ = 5. There exist 2 subsets with sum = 5. These are {4,1} and {3,2}. Hence, return true.
                    In example 2, ‘ARR’ is {2,5,1,6,7} and ‘K’ = 4. There are no subsets with sum = 4. Hence, return false.`}
                sampleinput2={`2
                    4 4
                    6 1 2 1
                    5 6
                    1 7 2 9 10`}
                sampleoutput2={`true
                    false`}
                explanation2={`In example 1, ‘ARR’ is {6,1,2,1} and ‘K’ = 4. There exist 1 subset with sum = 4. That is {1,2,1}. Hence, return true.
                    In example 2, ‘ARR’ is {1,7,2,9,10} and ‘K’ = 6. There are no subsets with sum = 6. Hence, return false.`}
                />
            <Code file_link="array/array_21" />
        </div>
    </div>
}