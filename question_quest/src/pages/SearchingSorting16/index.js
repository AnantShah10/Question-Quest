import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting16(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Count Inversion"
                statement={`You have been given an integer array/list (ARR) of size N. You have to return an array/list PRODUCT such that PRODUCT[i] is equal to the product of all the elements of ARR except ARR[i]`}
                input={`The first line contains an integer 'T' which denotes the number of test cases or queries to be run. Then the test cases follow.
                The first line of each test case or query contains an integer 'N' representing the size of the array/list.   
                The second line contains 'N' single space-separated integers representing the elements in the array/list.`}
                output={`For each test case, print the elements of the 'PRODUCT' array separated by a single space. 
                Output for every test case will be printed in a separate line.`}
                constraints={`1 <= T <= 100
                0 <= N <= 10^5
                0 <= ARR[i] <= 10^5
                Time Limit: 1 sec`}
                sampleinput1={`2
                3
                1 2 3
                3
                5 2 2`}
                sampleoutput1={`6 3 2
                4 10 10`}
                explanation1={` Test case 1 : Given array = {1, 2, 3] 
                    Required array = [2 * 3, 1 * 3, 1 * 2] = [6, 3, 2]
                    Test case 2 : Given array = {5, 2, 2] 
                    Required array = [2 * 2, 5 * 2, 5 * 2] = [4, 10, 10]`}
                sampleinput2={`2
                1
                100
                2
                1 2`}
                sampleoutput2={`1
                2 1 `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_16" />
        </div>
    </>
}