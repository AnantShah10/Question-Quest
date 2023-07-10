import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting29(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Smallest number with atleast n trailing zeroes in factorial"
                statement={`You are given a positive integer N. Your task is to find the smallest number whose factorial contains at least N trailing zeroes.`}
                input={`TThe very first line of input contains an integer ‘T’ denoting the number of test cases. 
                The first line and only line of every test case contain an integer ‘N’ denoting the number of trailing zeros.
                `}
                output={`For each test case, the smallest number whose factorial contains at least N trailing zeroes is printed.
                Output for each test case is printed on a separate line.`}
                constraints={`1 <= T <= 10
                0 <= N <= 10^8
                Time Limit: 1 sec`}
                sampleinput1={`2
                1
                2 `}
                sampleoutput1={`5
                10`}
                explanation1={`For the first test case, refer to the example explained above.
                For the second test case, we have, N = 2.
                The smallest number whose factorial contains at least 2 trailing zeros is 10 as 10! = 36,28,800.`}
                sampleinput2={`2
                3 
                0 `}
                sampleoutput2={`15
                0`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_29" />
        </div>
    </>
}