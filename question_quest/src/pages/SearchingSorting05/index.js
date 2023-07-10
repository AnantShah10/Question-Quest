import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting05(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Maximum and minimum of an array using minimum number of comparisons"
                statement={`You have been given three distinct integers ‘X’, ‘Y’ and ‘Z’. You need to find the number with a value in the middle.
                For Example:
                X = 4, Y = 6, Z = 2
                Here the element with value in the middle is 4, because 2 < 4 < 6.`}
                input={`The first line contains a single integer ‘T’ representing the number of test cases. 
                The first line of each test case will contain three space-separated distinct integers ‘X’, ‘Y’, and ‘Z’.`}
                output={`For each test case, print the number with a value in the middle.
                Output for every test case will be printed in a separate line.`}
                constraints={`1 <= T <= 50
                1 <= X, Y, Z <= 10^9
                Where ‘T’ is the number of test cases.
                Where ‘X’, ‘Y’, and ‘Z’ denote the distinct numbers.
                Time limit: 1 sec`}
                sampleinput1={`2
                2 3 1
                6 8 9   `}
                sampleoutput1={`2 8`}
                explanation1={`In the first test case, the three numbers are 2, 3 and 1. The middle element is 2, as 1 < 2 < 3
                In the second test case, the three numbers are 6, 8 and 9. The middle element is 8, as 6 < 8 < 9`}
                sampleinput2={`2
                15 2 3
                2 3 4`}
                sampleoutput2={`3
                    3`}
                explanation2 = {`In the first test case, the three numbers are 15, 2 and 3. The middle element is 3, as 2 < 3 < 15
                In the second test case, the three numbers are 2, 3 and 4. The middle element is 3, as 2 < 3 < 4`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_05" />
        </div>
    </>
}