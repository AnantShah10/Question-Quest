import { NavBar, Question, Code } from "../../components";

export default function Array22(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Find factorial of a large number"
                statement={`Given an integer ‘N’, you are supposed to return the factorial of the given integer in the form of a string.`}
                input={`The first line contains a single integer ‘T’ denoting the number of test cases.
                    Each test case contains a single line with a single integer ‘N’ denoting the given number.`}
                output={`For each test case, print a string denoting the factorial of the given number in a separate line.`}
                constraints={`1 <= T <= 50
                    1 <= N <= 500
                    Time Limit: 1 sec.`}
                sampleinput1={`2
                    3
                    4`}
                sampleoutput1={`6
                    24`}
                explanation1={`In the first test case, the factorial of 3 is 1x2x3 = 6.
                    In the second test case, the factorial of 4 is 1x2x3x4 = 24. `}
                sampleinput2={`2
                    5
                    1`}
                sampleoutput2={`120
                    1`}
                />
            <Code file_link="array/array_22" />
        </div>
    </div>
}