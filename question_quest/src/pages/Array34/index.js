import { NavBar, Question, Code } from "../../components";

export default function Array34(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Minimum no. of operations required to make an array palindrome"
                statement={`You are given an array ‘A’ of length ‘N’ consisting only of positive integers. Your task is to make the given array a palindrome by using a minimum number of operations. In one operation, you can select two adjacent indexes and merge them by adding their values. After every operation, the length of the array decreases by one.
                    Note: An array of length ‘1’ is a palindrome.
                    Let’s say the array ‘A’ = [1, 2, 3, 4, 5], then after merging indexes 2 and 3, the array ‘A’ will look like [1, 5, 4, 5].`}
                input={`First-line contains ‘T’, denoting the number of Test cases.
                    For each Test case:
                    The first line contains an integer, ‘N’, denoting the length of the array ‘A’.
                    The following line contains ‘N’ space-separated positive integers, representing the array’s values. `}
                output={`For each test case, you have to print an integer denoting the minimum number of operations required to turn the given array into a palindrome.`}
                constraints={`1 <= ‘T’ <= 5
                    1 <= ‘N’ <= 10^5 
                    1 <= A[i] <= 10^9, for 1 <= i <= ‘N’
                    Note- Sum of ‘N’ over all test cases does not exceed 10^5.
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    3
                    1 2 1
                    5
                    1 2 3 4 1`}
                sampleoutput1={`0
                    2`}
                explanation1={`For test case 1:
                    The given array is already a palindrome. Hence the answer is 0.
                    For test case 2:
                    We select indexes 3 and 4 to merge. The array will look like [1, 2, 7, 1].
                    We select indexes 2 and 3 to merge. The array will look like [1, 9, 1].
                    Now the array is a palindrome. Hence the answer will be 2.`}
                sampleinput2={`2
                    1
                    8
                    3
                    1 3 3`}
                sampleoutput2={`0
                    2`}
                />
            <Code file_link="array/array_34" />
        </div>
    </div>
}