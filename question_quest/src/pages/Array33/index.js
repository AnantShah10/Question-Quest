import { NavBar, Question, Code } from "../../components";

export default function Array33(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Minimum swaps required bring elements less equal K together"
                statement={`During Endgame Natasha(Black Widow) sacrificed her life for the soul stone.
                    Hulk wants to bring Natasha back. So, he came to Goku for help. Goku told him he will help Hulk if he can solve the task given by him. Hulk accepts the challenge of Goku.
                    Goku gave Hulk a list of ‘N’ numbers and a number ‘K’. The task is to rearrange the elements of the list such that all elements less than or equal to ‘K’ become adjacent to each other. Hulk can only swap any two elements of the array/list multiple times. Goku wants Hulk to do the task using the minimum number of swaps.
                    As Hulk is not good at maths so he called you to solve the task given by Goku to save Natasha.The fate of Natasha lies in your hand.`}
                input={`The first line of input contains an integer 'T' representing the number of test cases.
                    The first line of each test case contains two space-separated integers ‘N’ and ‘K’. Here ‘N’ denotes the total number of elements present in Goku’s list and ‘K’ is the number given by Goku.
                    The next line contains ‘N’ single space-separated elements, representing the elements of the list given by Goku.`}
                output={`For each test case, print the minimum number of swaps required to make all elements less than or equal to ‘K’ adjacent to each other. The output of each test case will be printed in a separate line.`}
                constraints={`1 <= T <= 5
                    1 <= N <= 10^5
                    1 <= data,  K <= 10^9
                    Where 'data' is the value of elements of Goku’s list.
                    Time Limit: 1sec`}
                sampleinput1={`2
                    5 2
                    1 1 5 1 2
                    5 3 
                    1 3 2 7 7 `}
                sampleoutput1={`1
                    0`}
                explanation1={`Test Case 1 :  
                    Given array is [1, 1, 5, 1, 2,] and K = 2. 
                    Swapping 5 with 2 we will get the array as [1, 1, 2, 1, 5].
                    Here all elements less than or equal to 2 are adjacent to each other.
                    So, the minimum number of swaps required will be 1.
                    Test Case 2 : 
                    Given array is [1, 3, 2, 7, 7] and K = 3. 
                    Here all elements less than or equal to 3 are already adjacent to each other.
                    So the minimum number of swaps required will be 0.`}
                sampleinput2={`2
                    6 6 
                    5 4 3 2 6 1
                    7 2
                    1 2 3 7 7 2 2`}
                sampleoutput2={`0
                    2`}
                explanation2={`Test Case 1 :  
                    Given array is [5, 4, 3, 2, 6, 1] and k = 6. 
                    Here all elements less than or equal to 6 are already adjacent to each other.
                    So the minimum number of swaps required will be 0.
                    Test Case 2 : 
                    Given array is [1, 2, 3, 7, 7, 2, 2] and k = 2. 
                    Swapping 3 with 2 and 7 with 2, we will get the array as [1, 2, 2, 2, 7, 7, 3]. 
                    Here all elements less than or equal to 2 are adjacent to each other.
                    So, the minimum number of swaps required will be 2.`}
                />
            <Code file_link="array/array_33" />
        </div>
    </div>
}