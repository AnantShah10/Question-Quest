import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting18(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Minimum no. of swaps required to sort the array"
                statement={`Given an array 'arr' of size 'N', find the minimum number of swaps required to be made between any two elements to sort the array in ascending order. The array does not contain duplicates i.e all the elements of the array are distinct.
                For Example:
                Let the given array be [1,5,4,3,2]  we swap index 1 with 4 i.e. 5 -> 2 and 2 with 3 i.e. 4 -> 3 to form the sorted array {1, 2, 3, 4, 5}.`}
                input={`The first line of input contains an integer ‘T’ representing the number of test cases. Then the test cases follow.
                The first line of each test case contains an integer ‘N’ representing the size of the input array.
                The second line of each test case contains the 'N' elements of the array separated by a single space.`}
                output={`For each test case, print a single line containing a single integer which represents the minimum no. of swaps required to sort the array.
                The output for each test case is in a separate line.`}
                constraints={`1 <= T <= 100
                1 <= N <= 1000
                0 <= ARR[i] <= 10 ^ 9
                Where 'ARR[i]' is the value of the input array elements.
                Time Limit: 1 sec
                `}
                sampleinput1={`2
                5
                2 4 5 1 3
                4
                9 1 8 4`}
                sampleoutput1={`3
                2`}
                explanation1={`For the first test case, swap index 0 with 3 i.e. 2 -> 1 and 1 with 3 i.e. 4 -> 2 and finally index 2 with index 4 i.e 5 ->3 
                to form the sorted array {1, 2, 3, 4,5}. Hence one swap is needed
                For the second test case, swap index 0 with 1 i.e. 9 -> 1 and index 1 with 3 i.e. 9 -> 4 to form the sorted array {1, 4,8,9}. Hence 2 swaps are needed.`}
                sampleinput2={`2
                4
                1 2 3 4
                6
                3 5 2 4 6 8`}
                sampleoutput2={`0
                3 `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_18" />
        </div>
    </>
}