import { NavBar, Question, Code } from "../../components";

export default function BitManipulation08(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Divide two integers without using multiplication, division and mod operator"
                statement={`You are given two integers ‘dividend’ and ‘divisor’. You are required is to divide the integers without using multiplication, division and modular operators. 
                Your task is to return the quotient after dividing ‘dividend’ by ‘divisor’. 
                For Example:
                If the answer is ‘9.333’ then return ‘9’ or if the answer is ‘-8.123’ then return ‘-8’.`}
                input={`The first line of input contains an integer ‘T’ denoting the number of test cases.
                The next ‘T’ lines represent the ‘T’ test cases.               
                The first line of every test case contains two space-separated integers ‘dividend’ and ‘divisor’. 
                `}
                output={`For each test case, return the floor value of the quotient.
                Output for each test case will be printed in a separate line.
                `}
                constraints={`1 <= T <= 10^5
                -10^9 <= dividend, divisor <= 10^9 
                divisor != 0  
                Time limit: 1 second`}
                sampleinput1={`2
                10 3
                -9 2
                `}
                sampleoutput1={`3
                -4
                `}
                explanation1={`In test Case 1:

                Given ‘dividend = 10’ and ‘divisor = 3’
                So the division is ‘10/3 = 3.3333……’.
                Return only integer part ‘3’
                
                
                In test Case 2:
                
                Given ‘dividend = -9’ and ‘divisor = 2’
                So the division is ‘-9/2 = -4.5’.
                Return only integer part ‘-4’`}
                sampleinput2={`3
                7 -3
                -9 -1
                -1 2`}
                sampleoutput2={`-2
                9
                0`}
                
                />
            <Code file_link="bit_manipulation/bit_manipulation_08" />
        </div>
    </>
}