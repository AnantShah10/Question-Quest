import { NavBar, Question, Code } from "../../components";

export default function BitManipulation05(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Program to find whether a no is power of two"
                statement={`You have been given an integer 'N'. Your task is to return true if it is a power of two. Otherwise, return false.
                An integer 'N' is a power of two, if it can be expressed as 2 ^ 'K' where 'K' is an integer.
                For Example:
                'N' = 4,
                4 can be represented as 2^2. So, 4 is the power of two, and hence true is our answer. `}
                input={`The only line contains an integer 'N'.
                `}
                output={`The only line contains "true" if the integer 'N' is a power of 2 otherwise "false".
                `}
                constraints={`-2^31 <= 'N' <= 2^31 - 1
                Time Limit: 1sec `}
                sampleinput1={`16
                `}
                sampleoutput1={`true
                `}
                explanation1={`16 can be represented as 2^4. So, 16 is the power of two, and hence true is our answer.`}
                sampleinput2={`10`}
                sampleoutput2={`false`}
                
                />
            <Code file_link="bit_manipulation/bit_manipulation_05" />
        </div>
    </>
}