import { NavBar, Question, Code } from "../../components";

export default function Array01(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find shortest unique prefix for every word in a given list"
                statement={`You are given an array containing ‘N’ words. For each word, you need to find its shortest prefix which can uniquely identify it. For example “abcd” and “abdc” both have the prefix “ab” in common so we can’t uniquely find a word using the prefix “ab”. To uniquely identify both the words we need the prefix “abc” from “abcd” and “abd” from “abdc”.
                    You can assume that the words are unique. It means that it is always possible to find a unique prefix for each word.`}
                input={`The very first line of input contains an integer ‘T’ denoting the number of test cases. 
                    The first line of every test case contains one integer ‘N’ where ‘N’ denotes the number of elements and an integer ‘M’ which denotes after which position the array has to be reversed.
                    The second line of every test case contains ‘N’ space-separated integers which denote the elements of input of array/list.
                    You can assume that the words are unique. It means that it is always possible to find a unique prefix for each word.`}
                output={`The output of each test case should contain 'N' lines, in the ith line you need to print the shortest unique prefix for ith word.
                    Print the output of each test case in a separate line.
                `}
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
                sampleoutput2={`1 4 5 6 7 7 6
                    10 4 5 2 6 3 1 6 3 `}
                />
            <Code file_link="array/array_01" />
        </div>
    </>
}