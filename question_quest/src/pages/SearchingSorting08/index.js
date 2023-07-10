import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting08(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find majority element"
                statement={`You have been given an array/list 'ARR' consisting of 'N' integers. Your task is to find the majority element in the array. If there is no majority element present, print -1.`}
                input={`The first line of input contains an integer 'T' representing the number of test cases.
                The first line of each test case contains a single positive integer ‘N’ representing the size of the array/list.
                The second line of each test case contains ‘N’ single space-separated integers representing the array elements of 'ARR'.`}
                output={`For each test case, print an integer denoting the majority element present in the array. Print-1 in case of no majority element.`}
                constraints={`1 <= T <= 100
                1 <= N <= 5 * 10^3
                -10^5 <= ARR[i] <= 10^5
                Where 'ARR[i]' denotes the element at the 'i'th index in the array/list 'ARR'.
                Time limit: 1 sec`}
                sampleinput1={`2
                5
                2 3 9 2 2
                4
                8 5 1 9 `}
                sampleoutput1={`2
                -1`}
                explanation1={`In test case 1, frequencies of occurrences of different elements are:
                2 → 3 times
                3 → 1 time
                9 → 1 time
                As 2 occurs more than floor(5/2) (i.e. floor(2.5) = 2) times, it is the majority elements
                In test case 2, frequencies of occurrences of different elements are:
                8 → 1 time
                5 → 1 time
                1 → 1 time
                9 → 1 time
                As no element occurs more than floor(4/2) = 2 times. Thus No majority element is present.`}
                sampleinput2={`2
                7
                8 8 8 8 8 9 1 
                4
                2 2 3 3`}
                sampleoutput2={`9
                    -1 `}
                explanation2 = {`In test case 1, frequencies of occurrences of different elements are:
                8 → 5 times
                9 → 1 time
                1 → 1 time
                As 8 occurs more than floor(7/2) (i.e. floor(3.5) = 3) times, it is the majority element.
                In test case 2, frequencies of occurrences of different elements are:
                2 → 2 times
                3 → 2 times
                As no element occurs more than floor(4/2) = 2 times. Thus No majority element is present.`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_08" />
        </div>
    </>
}