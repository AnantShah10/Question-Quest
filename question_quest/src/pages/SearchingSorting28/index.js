import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting28(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Missing Number in AP"
                statement={`You are given a sorted array of ‘N’ distinct integers that are in the Arithmetic Progression sequence except for one element which is missing from the sequence. You have to find that missing number from the given sequence.`}
                input={`The first line of the input contains an integer ‘T’ denoting the number of test cases.
                The first line of each test case contains a single positive integer ‘N’ denoting the number of the elements present in the sequence.               
                The second line of each test case contains ‘N’ space-separated integers.
                `}
                output={`The only line of output of each test case should contain an integer denoting the missing element in the given sequence.
                Print the output of each test case in a separate line.`}
                constraints={`1 <= T <= 50
                3 <= N <= 10 ^ 4   
                -10 ^ 9 <= Arr[i] <= 10 ^ 9 
                
                Where ‘T’ is the number of test cases, ‘N’ is the size of the array and ‘Arr[i]’ is the size of the array elements.
                
                Time Limit: 1 sec`}
                sampleinput1={`2
                3
                1 4 10
                4
                5 10 20 25    `}
                sampleoutput1={`7
                15`}
                explanation1={`Test case 1:
                The arithmetic sequence present in the first test case will have its first term as 4 and common difference as 3. So, the complete sequence will look like this ....- 1 4 7 10... Hence 7 is the missing element in the given sequence.
                Test case 2:             
                The first term and common difference will be 5. The complete sequence will be ...5 10 15 20 25.... Hence 15 is the missing element from the given sequence.`}
                sampleinput2={`3
                3
                -1 0 2
                5 
                10 20 30 50 60
                4
                12 18 21 24`}
                sampleoutput2={`1
                40
                15`}

                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_28" />
        </div>
    </>
}