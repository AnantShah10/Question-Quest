import { NavBar, Question, Code } from "../../components";

export default function Array27(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Find whether an array is a subset of another array"
                statement={`You are given two integer arrays ARR1 and ARR2 of length N and M respectively. You have to return true if ARR2 is a subset of ARR1, otherwise, return false.
                    If the given arrays are [1, 2, 3] and [1, 2] then you need to return true as ARR2 is a subset of ARR1, but if the given arrays are [1, 2, 3] and [1, 2, 2] then you need to return false since ARR2 is not a subset of ARR1.`}
                input={`The first line of input contains a single integer T, representing the number of test cases or queries to be run. 
                    Then the T test cases follow.
                    The first line of each test case contains an integer N representing the length of the first array i.e ARR1.
                    The second line contains N single space-separated integers representing elements of the array ARR1.
                    The third line of input contains an integer M representing the length of the second array i.e ARR2.
                    The fourth line contains M single space-separated integers representing elements of the array ARR2.`}
                output={`For each test case, print "true" if ARR2 is a subset of ARR1, otherwise, print "false".
                    The output of each test case will be printed in a separate line.`}
                constraints={`1 <= T <= 10
                    1 <= N <= 10^5
                    0 <= ARR1[i] <= 10^9
                    1 <= M <= 10^5
                    0 <= ARR2[i] <= 10^9
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    4
                    1 2 4 6
                    3
                    1 2 6
                    5
                    9 3 6 5
                    3
                    1 3 3`}
                sampleoutput1={`true
                    false`}
                explanation1={`For the first test case:
                    Here, all the elements of ARR2 are present in ARR1.
                    For the second test case:
                    All the elements of ARR2 are not present in ARR1, because there are two 3 in the ARR2 but only a single 3 in ARR1.`}
                sampleinput2={`2
                    3
                    2 3 4
                    2
                    4 3
                    4 
                    4 4 2 4
                    4
                    2 4 5 3`}
                sampleoutput2={`true
                    false`}
                />
            <Code file_link="array/array_27" />
        </div>
    </div>
}