import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting22(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find pivot element in a sorted array"
                statement={`Ninja and his friend are playing a game of finding the largest element in an array/list ‘ARR’ consisting of ‘N’ unique elements. To make it difficult for Ninja to win, his friend rotates 'ARR' K(possibly zero) times to the left about the largest element. Now, it is Ninja’s turn to find and tell the largest element to his friend.
                For Example: 'ARR' = [1, 2, 3, 4, 5] after rotating 2 times to the left about its largest element (here, 5) becomes [3, 4, 5, 1, 2].
                Your task is to help Ninja determine the largest element in the sorted and rotated ‘ARR’.`}
                input={`The first line contains an integer 'T' which denotes the number of test cases or queries to be run. Then the test cases follow.
                The first line of each test case contains a single integer 'N’ denoting the number of elements in the ‘ARR’.
                The second line of each test case contains ‘N’ single space-separated integers, denoting the elements of the ‘ARR’.
                `}
                output={`For each test case, print the largest element in the given array/list.
                Print the output of each test case in a separate line.`}
                constraints={`1 <= T <= 100
                1 <= N <= 10^5
                1 <= ARR[i] <= 10^5
                Where ‘T’ is the number of test cases, ‘ARR’ is the given array and ‘N’ denotes the number of elements in the ‘ARR’.
                Time Limit: 1 sec `}
                sampleinput1={`2
                3
                2 3 1
                4
                1 2 3 4`}
                sampleoutput1={`3
                4`}
                explanation1={`For the first test case:
                The largest element in the given ‘ARR’ is 3 which is at index 1 (0 based indexing). 
                For the second test case:
                The largest element in the given ‘ARR’ is 4 which is at index 3. 
                `}
                sampleinput2={`2
                3
                3 1 2
                1
                10 `}
                sampleoutput2={`3 
                10`}
                explanation2={`For the first test case:
                3 is the largest element in ‘ARR’ which is at index 0.
                
                For the second test case:
                10 is the largest element in ‘ARR’ which is at index 0.    
                `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_22" />
        </div>
    </>
}