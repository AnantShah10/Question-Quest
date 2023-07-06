import { NavBar, Question, Code } from "../../components";

export default function Array09(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Minimize the maximum difference between heights"
                statement={`You are given an array ‘A’ of length ‘N’ consisting only of positive integers and an integer ‘K’. You have to update every element of the array by increasing or decreasing its value by ‘K’ only once. Your task is to minimize the difference between maximum and minimum elements of the array after performing the increment or decrement on every element of the array.
                    After the operation, every value of the array should remain non-negative.
                    Let’s say the array ‘A’ = [1, 2, 3, 4, 5] and ‘K’ = 2, then after increasing each element by ‘K’. The array ‘A’ will become [3, 4, 5, 6, 7]. So the maximum - minimum will be 7 - 3 = 4. `}
                input={`First-line contains ‘T’, denoting the number of Test cases.
                    For each Test case:
                    The first line contains two space-separated integers, ‘N’ and ‘K’, denoting the length of the array ‘A’ and the amount you must increase or decrease, respectively.
                    The following line contains ‘N’ space-separated positive integers, representing the array’s values. `}
                output={`For each test case, you have to print an integer denoting the minimum difference between maximum and minimum elements of the array after performing the increment or decrement on every element of the array.`}
                constraints={`1 <= ‘T’ <= 5
                    1 <= ‘N’ <= 10^5
                    1 <= ‘K’ <= 10^9
                    1 <= A[i] <= 10^9, for 1 <= i <= ‘N’
                    Note- Sum of ‘N’ over all test cases does not exceed 10^5.
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    4 2
                    1 5 8 10
                    5 2
                    1 2 3 4 5`}
                sampleoutput1={`5
                    3`}
                explanation1={`For test case 1:
                    The final array will look like [3, 3, 6, 8]. So the difference between maximum and minimum is 8 - 3 = 5.
                    For test case 2:
                    The final array will look like [3, 4, 1, 2, 3]. So the difference between maximum and minimum is 4 - 1 = 3.`}
                sampleinput2={`2
                    1 2
                    8
                    3 2
                    1 3 3`}
                sampleoutput2={`0
                    2`}
                />
            <Code file_link="array/array_09" />
        </div>
    </div>
}