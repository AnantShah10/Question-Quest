import { NavBar, Question, Code } from "../../components";

export default function BitManipulation07(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Copy set bits in a range"
                statement={`Ninja is learning the binary representation and bit manipulation. He found an interesting question but had no hints on how to solve it. The question statement says two numbers, ‘A’ and ‘B’ are given, and a range ‘X’ to ‘Y’ is given. You have to copy the set bits of ‘A’ in the range ‘X’ to ‘Y’ in ‘B’ and print the modified value of ‘B’.Can you help Ninja in solving this problem? 
                For Example:
                If ‘A’ is 13(1101) and ‘B’ is 7(0111), and the range is 2 to 4. So, we will copy the set bits in the range 2 to 4 from the left. The set bits in this range are the 3rd bit and the 4th bit. So, we will copy these bits to ‘B’.Now, the modified B will be 15(1111) as we copied the 4th bit. `}
                input={`The first line of the input contains an integer, 'T,’ denoting the number of test cases.
                The first line of each test case contains four integers, ‘A’ and ‘B’, and the range ‘X’ and ‘Y.’
                `}
                output={`For each test case, print ‘an integer corresponding to the modified value of ‘B’.
                Print the output of each test case in a separate line.
                `}
                constraints={`1 <= T <= 10
                1 <= ‘A’,’B’ <= 10^9.
                1 <= ‘X’,’Y’ <= 30.
                Time limit: 1 sec `}
                sampleinput1={`2
                13 7 2 4
                10 18 2 3
                `}
                sampleoutput1={`15
                18
                `}
                explanation1={`For the first test case,
                The binary representation of 13 is 1101.
                The binary representation of 7 is 0111.
                So, the set bits of ‘A’ in the given range are the 3rd bit and the 4th bit.
                So, we will copy these set bits in ‘B’.B will become 15(1111).
                Hence, the answer is 15.
                For the second test case:
                The binary representation of 10 is 01010.
                The binary representation of 18 is 10010.
                So, the set bits of ‘A’ in the given range is the 2nd bit only.
                So, we will copy these set bits in ‘B’.B will become 18(10010).
                Hence, the answer is 18.`}
                sampleinput2={`2
                6 19 1 3
                3 2 2 4`}
                sampleoutput2={`23
                2`}
                
                />
            <Code file_link="bit_manipulation/bit_manipulation_07" />
        </div>
    </>
}