import { NavBar, Question, Code } from "../../components";

export default function BitManipulation06(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find position of the only set bit"
                statement={`You are given a single non-negative integer ‘N’ who’s binary representation consists of a single ‘1’ digit and the rest of the digits are ‘0’s. Your task is to find the position of the only ‘1’ digit. In other words, your task is to find the position of the only set bit in the binary representation of the input integer ‘N’.
                The position of the set bit must be counted from the LSB (Least Significant Bit) end of the Binary number. If the count of set bits in the Binary number is not equal to 1, then your function should return ‘-1’ as output.
                For Example:
                INPUT   : N = 4
                OUTPUT  : 3
                In the above example, N = 4, whose Binary representation is “0100”. It is clearly visible that the binary number contains a single set bit, at a position 3 from the LSB end. Hence the output is 3
                INPUT : N = 8
                OUTPUT: 4
                In the above example, N = 8, whose Binary representation is “1000”. It is clearly visible that the binary number contains a single set bit, at a position 4 from the LSB end. Hence the output is 4
                INPUT   : N = 9
                OUTPUT  : -1
                In the above example, N = 9, whose Binary representation is “1001”.  Now, the binary number contains 2 set bits, at a position 4 and 1 from LSB end. Hence the output is -1.
                INPUT   : N = 0
                OUTPUT  : -1
                In the above example, N = 0, whose Binary representation is “0000”.  Now, the binary number contains no set bits at all. Hence the output will be -1. `}
                input={`The first line of input contains an integer 'T' representing the number of the test case. Then the test case follows.
                The first and the only line of each test case contains a single integer ‘N’.
                `}
                output={`For every test case, print a single integer, which is the position of the lone set bit in the binary representation of the input integer ‘N’.
                `}
                constraints={`1 <= T <= 100    
                0 <= N <= 10^5
                Time limit: 1 second `}
                sampleinput1={`4
                2
                8
                11
                0
                `}
                sampleoutput1={`2
                4
                -1
                -1
                `}
                explanation1={`In the first test case, N = 2, whose Binary equivalent is “10”. The set bit is at position 2 from the LSB end. Hence the output is 2
                In the second test case, N = 8, whose Binary equivalent is “1000”. The set bit is at position 4 from the LSB end. Hence the output is 4
                In the third test case, K = 11, whose Binary equivalent is “1011”. The count of the total number of set bits is 3 which is not equal to 1. Hence the output is -1
                In the fourth test case, K = 0, whose Binary equivalent is “0000”, which contains no set bits at all. Hence the output is -1.`}
                sampleinput2={`5
                16
                21
                32
                58
                64`}
                sampleoutput2={`5
                -1
                6
                -1
                7 `}
                
                />
            <Code file_link="bit_manipulation/bit_manipulation_06" />
        </div>
    </>
}