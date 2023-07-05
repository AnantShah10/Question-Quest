import { NavBar, Question, Code } from "../../components";

export default function BitManipulation01(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Count set bits in an integer"
                statement={`Write a program to count the number of 1's in the binary representation of an integer.`}
                input={` The only line of input contains a single integer N.
                `}
                output={`The only line of the output prints the total number of 1.
                `}
                constraints={`1 <= N <= 100 `}
                sampleinput1={`9
                `}
                sampleoutput1={`2
                `}
                explanation1={`Binary Representation of 9 is 1001.`}
                sampleinput2={`13`}
                sampleoutput2={`3`}
                
                />
            <Code file_link="bit_manipulation/bit_manipulation_01" />
        </div>
    </>
}