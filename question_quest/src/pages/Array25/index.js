import { NavBar, Question, Code } from "../../components";

export default function Array25(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Given an array of size n and a number k, find all elements that appear more than “ n/k ” times"
                statement={`You are given an array ‘ARR’ and another integer number ‘K’. Your task is to find the all elements of ‘ARR’ which occur more than or equals to ‘N/K’ times in ‘ARR’ and ‘N’ is the length of array ‘ARR’.
                    Given array ‘ARR = { 1, 2, 3, 3, 3, 3, 4, 4, 4, 1, 2 ,0}’ and ‘K = 4’
                    Answer is {3, 4} because ‘3’ occurs ‘4’ times and ‘4’ occurs ‘3’ times which is more than or equals to ‘12/ 4 =3’.`}
                input={`The first line of input contains an integer ‘T’ denoting the number of test cases.
                    The next ‘T’ lines represent the ‘T’ test cases.
                    The first line of input contains two space-separated integers ‘N’ and ‘K’. Where ‘N’ denotes the number of elements in array ‘ARR’ and ‘K’ is given integer number.
                    The second line of input contains the ‘N’ space-separated integer which denotes the element of array ‘ARR’ and ‘K’ is given a second integer number.`}
                output={`For every test case, print all elements of ‘ARR’ which occur more than or equals to ‘N/K’ times in ‘ARR’.
                    Output for each test case will be printed in a separate line.`}
                constraints={`1 <= T <= 10^2
                    1 <= K <= N <= 5*10^3 ( N is multiple of K)
                    -10^9 <= ARR[i] <= 10^9
                    Where ‘T’ represents the number of test cases, ‘N’ is the number of elements in array ‘ARR’ , ‘K’ denotes an integer. ‘ARR[i]’ represents the value of the number at ‘i’ position in ‘ARR’.
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    8 4
                    1 1 2 1 2 4 3 4
                    6 6
                    1 1 1 2 2 2`}
                sampleoutput1={`1 2 4
                    1 2`}
                explanation1={`Test Case 1:
                    Given array ‘ARR = { 1, 1, 2, 1, 2, 4, 3, 4 }’ and ‘K = 2’.
                    Only 1, 2, 4 has frequency more than or equal to ‘N/K' = 8/4= 2.
                    Test Case 2:
                    Given array ‘ARR = { 1, 1, 1, 2, 2, 2 }’ and ‘K = 6’.
                    ‘N/K = 6/6 = 1’ so ‘1’ and ‘2’ both have frequency more than ‘1’.`}
                sampleinput2={`2
                    9 3
                    1 1 1 2 2 2 2 2 2
                    6 6
                    1 2 1 2 3 4`}
                sampleoutput2={`1 2
                    1 2 3 4`}
                explanation2={`Test Case 1:
                    Given array ‘ARR = { 1, 1, 1, 2, 2, 2, 2, 2, 2 }’ and ‘K = 3’.
                    Both 1, 2 has frequency more than or equal to ‘N/K' = 9/3= 3.
                    Test Case 2:
                    Given array ‘ARR = { 1, 2, 1, 2, 3, 4 }’ and ‘K = 6’.
                    ‘N/K = 6/6 = 1’ so ‘1’, '2', '3' and ‘4' all have frequency more than ‘1’.`}
                />
            <Code file_link="array/array_25" />
        </div>
    </div>
}