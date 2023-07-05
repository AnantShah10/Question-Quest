import { NavBar, Question, Code } from "../../components";

export default function BitManipulation09(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Calculate square of a number without using *, / and pow()"
                statement={`Given an integer ‘N’, you are supposed to return the square of the given integer without using multiplication (*), division (/) or power function (pow()).
                `}
                input={`The first line contains a single integer ‘T’ denoting the number of test cases.
                Each test case contains a single line with a single integer ‘N’ denoting the given number.`}
                output={`For each test case, print the square of the given number in a separate line.
                `}
                constraints={`1 <= T <= 50
                -10000 <= N <= 10000
                Time Limit: 1 sec. `}
                sampleinput1={`2
                3
                -4
                `}
                sampleoutput1={`9
                16
                `}
                explanation1={`In the first test case, the square of 3 is 9.
                In the second test case, the square of -4 is 16. `}
                sampleinput2={`2
                -13
                1`}
                sampleoutput2={`169
                1`}
                
                />
            <Code file_link="bit_manipulation/bit_manipulation_09" />
        </div>
    </>
}