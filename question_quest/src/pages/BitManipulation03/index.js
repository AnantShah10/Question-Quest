import { NavBar, Question, Code } from "../../components";

export default function BitManipulation03(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Count number of bits to be flipped to convert A to B"
                statement={`Ninja is learning the binary representation of the numbers. He wanted to practice the topic, so he picked a question. The problem statement says, two numbers, ‘A’ and ‘B’ are given. Find the number of bits of ‘B’ that should be flipped to convert it into ‘A’.Can you help Ninja to solve this problem?
                For Example:
                If ‘A’ is 13(1101) and ‘B’ is 7(0111), The number of bits that should be flipped is 2(0111). `}
                input={`The first line of the input contains an integer, 'T,’ denoting the number of test cases.
                The first line of each test case contains two integers, ‘A’ and ‘B’.`}
                output={`For each test case, print ‘an integer corresponding to the minimum number of swaps required.
                Print the output of each test case in a separate line.
                `}
                constraints={`1 <= T <= 10
                1 <= ‘A’,’B’ <= 10^9.
                Time limit: 1 sec `}
                sampleinput1={`2
                13 7
                15 20
                `}
                sampleoutput1={`2
                4
                `}
                explanation1={`For the first test case,
                The binary representation of 13 is 1101.
                The binary representation of 7 is 0111.
                So, we will change the 2nd and the 4th bit from the right to convert B into A.
                Hence, the answer is 2. 
                For the second test case.
                The binary representation of 20 is 10100.
                The binary representation of 15 is 01111.
                So, we will change the 1st,2nd,4th, and 5th bit from the right to convert B into A.
                Hence, the answer is 4. `}
                sampleinput2={`2
                3 10
                6 4`}
                sampleoutput2={`2
                1`}
                
                />
            <Code file_link="bit_manipulation/bit_manipulation_03" />
        </div>
    </>
}