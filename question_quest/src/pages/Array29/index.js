import { NavBar, Question, Code } from "../../components";

import array29 from "../../images/array29.png";

export default function Array29(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Trapping Rain water problem"
                statement={`You have been given a long type array/list 'ARR' of size 'N'. It represents an elevation map wherein 'ARR[i]' denotes the elevation of the 'ith' bar. Print the total amount of rainwater that can be trapped in these elevations.
                    The width of each bar is the same and is equal to 1.`}
                input={`The first line contains an integer 'T' which denotes the number of test cases. Then the test cases follow.
                    The first line of each test case contains an integer 'N' representing the size of the array/list.
                    The second line contains 'N' single space-separated integers representing the elevation of the bars.`}
                output={`For each test case, print in a single line a single integer denoting the total water that can be trapped.
                    The output of each test case will be printed in a separate line.`}
                constraints={`1 <= T <= 10
                    0 <= N <= 10^4
                    0 <= ARR[i] <= 10^9
                    Time Limit : 1 sec`}
                sampleinput1={`1
                    6
                    3 0 0 2 0 4`}
                sampleoutput1={`10`}
                explanation1={`Refer to the image for better comprehension:`}
                image2 = {array29}
                sampleinput2={`2
                    1
                    100
                    3
                    5 1 5`}
                sampleoutput2={`0
                    4`}
                />
            <Code file_link="array/array_29" />
        </div>
    </div>
}