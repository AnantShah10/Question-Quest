import "./index.scss";

import { NavBar, Question, Code } from "../../components";

export default function Backtracking01(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Reverse an Array"
                statement={`Given an array/list 'ARR' of integers and a position ‘M’. You have to reverse the array after that position.
                    We have an array ARR = {1, 2, 3, 4, 5, 6} and M = 3 , considering 0 based indexing so the subarray {5, 6} will be reversed and our output array will be {1, 2, 3, 4, 6, 5}`}
                input={`The very first line of input contains an integer ‘T’ denoting the number of test cases. 
                    The first line of every test case contains one integer ‘N’ where ‘N’ denotes the number of elements and an integer ‘M’ which denotes after which position the array has to be reversed.
                    The second line of every test case contains ‘N’ space-separated integers which denote the elements of input of array/list.`}
                output={`For each test case, return the required array.
                    Output for each test case is printed on a separate line.`}
                notes={`You do not need to print anything, it has already been taken care of. Just implement the given function.
                    Consider 0-based indexing of the array.`}
                constraints={`1 <= T <= 10
                    0 <= M <= N <= 5*10^4
                    -10^9 <= ARR[i] <= 10^9
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    6 3
                    1 2 3 4 5 6
                    5 2
                    10 9 8 7 6`}
                sampleoutput1={`1 2 3 4 6 5
                    10 9 8 6 7`}
                explanation1={`For the first test case, Considering 0-based indexing we have M = 3 so the subarray[M+1 … N-1] has to be reversed.Therefore the required output will be {1, 2, 3, 4, 6, 5}.
                    For the second test case, Considering 0-based indexing we have M = 2 so the subarray[M+1 … N-1] has to be reversed.Therefore the required output will be {10, 9, 8, 6, 7}.`}
                sampleinput2={`2
                    7 3
                    1 4 5 6 6 7 7 
                    9 3
                    10 4 5 2 3 6 1 3 6`}
                sampleoutput={` 1 4 5 6 7 7 6
                    10 4 5 2 6 3 1 6 3 `}
                />
            <Code file_link="backtracking/backtracking_01" style={{position: "fixed"}}/>
        </div>
    </div>
}