import { NavBar, Question, Code } from "../../components";

export default function BitManipulation04(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Count total set bits in all numbers from 1 to n"
                statement={`You are given a positive integer ‘N’. Your task is to find the total number of ‘1’ in the binary representation of all the numbers from 1 to N.
                Since the count of ‘1’ can be huge, you are required to return it modulo 1e9+7.`}
                input={`The first line of input contains an integer ‘T’ denoting the number of test cases to run. 
                Then the next ‘T’ lines represent the ‘T’ test cases.
                The first line of each test case contains a single integer ‘N’.
                `}
                output={`For each test case, return an integer that is equal to the count of set bits in all integers from 1 to n modulo 1e9+7.
                Output for each test case will be printed in a new line.
                `}
                constraints={`1 <= T <= 100
                1 <= N <= 10^9
                Time limit: 1 second `}
                sampleinput1={`2
                5
                3
                `}
                sampleoutput1={`7
                4
                `}
                explanation1={`In the first test case,

                DECIMAL    BINARY      SET BIT COUNT
                1            01                  1
                2            10                  1
                3            11                  2
                4            100                 1
                5            101                 2
                1 + 1 + 2 + 1 + 2 = 7 
                Answer = 7 % 1000000007 = 7
                
                
                In the second test case,
                
                DECIMAL    BINARY      SET BIT COUNT
                1            01                  1 
                2            10                  1
                3            11                  2
                1 + 1 + 2 = 4 
                Answer = 4 % 1000000007 = 4`}
                sampleinput2={`2
                6
                10`}
                sampleoutput2={`9
                17`}
                
                />
            <Code file_link="bit_manipulation/bit_manipulation_04" />
        </div>
    </>
}