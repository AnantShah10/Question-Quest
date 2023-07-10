import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting04(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Square root of an integer"
                statement={`You are given a positive integer n 
                Your task is to find and return its square root. If n is not a perfect square, then return the floor value of squareroot n `}
                input={`The first line of input contains the Integer ‘n’.`}
                output={`Return a single line containing an integer denoting the square root of ‘n’.`}
                constraints={`0 <= n <= 10 ^ 9
                Time Limit: 1 sec.`}
                sampleinput1={`6`}
                sampleoutput1={`2`}
                explanation1={`The square root of the given number 6 lies between 2 and 3, so the floor value is 2.`}
                sampleinput2={`100`}
                sampleoutput2={`10`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_04" />
        </div>
    </>
}