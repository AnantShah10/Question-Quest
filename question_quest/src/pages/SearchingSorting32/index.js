import { NavBar, Question, Code } from "../../components";
import image from "../../images/ss03.png"

export default function SearchingSorting32(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="DoubleHelix SPOJ"
                statement={`You are given two sorted arrays of distinct integers, ‘ARR1’ and ‘ARR2’. If you find a common element in both arrays, you can switch from one array to another.
                Your task is to find a path through the intersections i.e common integers of ‘ARR1’ and ‘ARR2’, that produces maximum sum and return that maximum sum as the answer.
                For Example:
                Let ‘ARR1’ = [1, 5, 10, 15, 20]  and ‘ARR2’ = [2, 4, 5, 9, 15]
                In this example, common points are 5, 15.
                First, we start with ARR2 and take the sum till 5 (i.e. sum = 11). Then we will switch to ‘ARR1’ at element 10 and take the sum till 15. So sum = 36. Now no element is left in ‘ARR2’ after 15, so we will continue in array 1. Hence sum is 56. And the path is 2 -> 4 -> 5 -> 10 -> 15 -> 20.`}
                image = {image}
                input={`The first line of input contains an integer 'T' which denotes the number of test cases or queries to be run. Then the test cases follow.
                The first line of each test case contains two space-separated integers, ‘N’ and ‘M,’ representing the number of elements in ‘ARR1’ and ‘ARR2’.      
                The second line of each test case contains ‘N’ single space-separated integers denoting the values of ‘ARR1’.
                The third line of each test case contains ‘M’ single space-separated integers denoting the values of ‘ARR2’.
                `}
                output={`For each test case, print the maximum sum value.
                Print the output of each test case in a separate line.`}
                constraints={`1 <= ‘T’ <= 100
                1 <= ‘N’, ’M’ <= 10^4
                1 <= ‘ARR1[i]’, ‘ARR2[j]’ <= 10^5
                
                Time Limit: 1 second`}
                sampleinput1={`2
                5 4
                1 2 4 5 6
                2 3 4 7 
                5 5
                1 2 3 4 5
                1 2 3 4 5     `}
                sampleoutput1={`21
                15`}
                explanation1={`For sample test case 1: 
                Common points are: 2, 4
                
                First, we start with ‘ARR1’ and take the sum till 2 (i.e. sum = 3). Then we will switch to ‘ARR2’ at element 2 and take the sum till 4 (i.e. sum = 10). Then we will switch to ‘ARR1’ at element 4 and take the sum till the end of the ‘ARR1’. Hence sum is 21.
                
                The path is 1 -> 2 -> 3 -> 4 -> 5 -> 6.
                
                For sample test case 2: 
                Common points are : 1, 2, 3, 4, 5
                
                First, we start with ARR1 and take the sum till 1 (i.e. sum = 1). Then we again continue with ‘ARR1’  and take the sum till 2 (i.e., 3). Similarly, we continue with 'ARR1' and keep on adding elements until the last element. Hence sum is 15.
                
                And the path is 1 -> 2 -> 3 -> 4 -> 5.`}
                sampleinput2={`2
                5 4
                2 4 5 8 10
                4 6 8 9
                4 4
                1 2 3 4
                5 6 7 8  `}
                sampleoutput2={`30
                26`}

                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_32" />
        </div>
    </>
}