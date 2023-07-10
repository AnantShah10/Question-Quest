import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting17(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Sort array according to count of set bits"
                statement={`You are given an array consisting of N positive integers, and your task is to sort the array in decreasing order of count of set bits in the binary representation of the integers present in the array.
                In other words, you have to modify the array such that an integer with more number of set bits should appear before the integer which has lesser number of set bits in its binary representation.
                The number of set bits is nothing but the number of 1s present in the binary representation of the integer. For example, the number of set bits in 5(0101) is equal to 2.`}
                input={`The first line of input contains the integer T, denoting the number of test cases.
                The first line of each test case contains an integer N, denoting the size of the array.
                The second line of each test case contains N space-separated integers denoting the array elements.`}
                output={`The only line of output of each test case consists of N space-separated integers, the elements of the array in the order as described in the problem statement`}
                constraints={`1 <= T <= 50
                1 <= N <= 10^4
                1 <= arr[i] <= 10^9`}
                sampleinput1={`1
                3
                2 4 8 `}
                sampleoutput1={`2 4 8`}
                explanation1={`The binary representation of 2,4 and 8 will be {10, 100, 1000}, respectively. The count of set bits is one for all the three numbers so the sorted order will be {2, 4, 8}.`}
                sampleinput2={`1
                3
                4 3 8`}
                sampleoutput2={`3 4 8`}
                explanation2={`The binary representation of 3,4 and 8 will be {11, 100, 1000}, respectively. The count of set bits for 3,4, and 8 is 2,1 and 1 respectively. So the sorted order will be {3, 4, 8}.`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_17" />
        </div>
    </>
}