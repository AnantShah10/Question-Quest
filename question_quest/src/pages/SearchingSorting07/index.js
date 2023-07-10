import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting07(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find the repeating and the missing"
                statement={`You are given an array 'nums' consisting of first N positive integers. But from the N integers, one of the integers occurs twice in the array, and one of the integers is missing. You need to determine the repeating and the missing integer.
                For Example:
                Let the array be [1, 2, 3, 4, 4, 5]. In the given array ‘4’ occurs twice and the number ‘6’ is missing.`}
                input={`The very first line of input contains an integer ‘T’ denoting the number of test cases. 
                The first line of every test case contains an integer ‘N’ denoting the number of elements present in the array.
                The second line of every test case contains ‘N’ space-separated integers denoting the elements present in the array.`}
                output={`For each test case, print the two space-separated integers denoting the repeating and the missing numbers, in the same order.`}
                constraints={`1 <= T <= 100 
                2 <= N <= 10^4
                1 <= nums[i] <= N
                Time Limit: 1 sec`}
                sampleinput1={`2
                5
                1 4 2 5 2
                2
                2 2    `}
                sampleoutput1={`2 3 
                2 1`}
                explanation1={`For the first test case we have, array: [1, 4, 2, 5, 2] and N = 5.
                In the given array ‘2’ occurs twice and the number ‘3’ is missing. Hence, we output 2 and 3 for the repeating and the missing number, respectively.               
                For the second test case we have, array: [2, 2] and N = 2.
                In the given array ‘2’ occurs twice and the number ‘1’ is missing. Hence, we output 2 and 1 for the repeating and the missing number, respectively.`}
                sampleinput2={`3
                4
                1 2 2 3
                10
                1 3 4 5 5 6 7 8 9 10
                3
                1 2 2`}
                sampleoutput2={`2 4 
                2 5 
                2 3 `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_07" />
        </div>
    </>
}