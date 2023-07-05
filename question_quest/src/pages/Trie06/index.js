import { NavBar, Question, Code } from "../../components";

export default function Trie06(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Print unique rows in a given boolean matrix"
                statement={`You are given a binary matrix 'MATRIX' of 'N' rows and 'M' columns.
                    Your task is to return all the unique rows in the order they appear in the matrix.
                    Note: In the binary matrix, all the entries are either 0 or 1.`}
                input={`The first line of input contains an integer 'T’ denoting the number of test cases to run. Then the test case follows.
                    The first line of each test case contains two single space-separated integers ‘N’, ‘M’, denoting the number of rows and number of columns in the matrix, respectively.                     
                    The next ‘N’ lines of each test case contain ‘M’ space-separated integers denoting the elements of the binary matrix.`}
                output={`For each test case, print all the unique rows in the order they appear in the matrix.
                    The output for each test case will be printed in a separate line.`}
                constraints={`1 <= T <= 10 
                    1 <= N <= 3000
                    1 <= M <= 40                
                    where ‘N’ and ‘M’ are the number of rows and columns of the matrix, respectively.                
                    Time Limit: 1 sec.`}
                sampleinput1={`2
                    1 1
                    1
                    3 2
                    1 0
                    1 1
                    0 0`}
                sampleoutput1={`1
                    1 0
                    1 1
                    0 0`}
                explanation1={`For the first case, there is only one row in the matrix [ [1] ].
                    For the second test case, all the rows are unique, and they are printed in the order they appear in the matrix.`}
                sampleinput2={`2
                    2 5
                    0 0 0 0 0
                    1 0 0 0 0
                    5 2
                    0 1
                    0 0
                    0 0
                    0 0
                    0 0`}
                sampleoutput2={`0 0 0 0 0
                    1 0 0 0 0
                    0 1
                    0 0 `}
                />
            <Code file_link="trie/trie_06" />
        </div>
    </>
}