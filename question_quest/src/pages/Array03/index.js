import { NavBar, Question, Code } from "../../components";

export default function Array03(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Find the “Kth” max and min element of an array"
                statement={`You are given an array ‘Arr’ consisting of ‘N’ distinct integers and a positive integer ‘K’. Find out Kth smallest and Kth largest element of the array. It is guaranteed that K is not greater than the size of the array.
                    Let ‘N’ = 4,  ‘Arr’ be [1, 2, 5, 4] and ‘K’ = 3 then the elements of this array in ascending order is [1, 2, 4, 5].  Clearly, the 3rd smallest and largest element of this array is 4 and 2 respectively.`}
                input={`The first line of input contains an integer ‘T’ denoting the number of test cases.
                    The next 2*T lines represent the ‘T’ test cases.
                    The first line of each test case contains two space-separated integers  ‘N’ and ‘K’ respectively.
                    The second line of the test case contains ‘N’ space-separated integers representing elements of the array ‘Arr’.`}
                output={`For each test case, print a line consisting of two space-separated integers that represent the Kth smallest and Kth largest elements of the array.`}
                constraints={`1 <= T <= 50
                    1 <= N <= 10^4
                    1 <= K <= N
                    -10^9 <= Arr[i] <= 10^9
                    Where ‘T’ is the total number of test cases, ‘N’ is the size of array ‘Arr’ and Arr[i] is the element of the given array.
                    Time limit: 1 sec`}
                sampleinput1={`2
                    4 4
                    5 6 7 2
                    4 3
                    1 2 5 4`}
                sampleoutput1={`7 2 
                    4 2`}
                explanation1={`Test case 1:
                    Here, ‘N’ = 4, ‘Arr’ = [5, 6, 7, 2] and ‘K’ = 4.
                    Elements of the array in ascending order are [2, 5, 6, 7]
                    Thus the 4rd smallest and 4rd largest elements of this array are 7 and 2 respectively.
                    Test case 2:
                    See problem statement for an explanation.`}
                sampleinput2={` 2
                    1 1
                    2
                    5 1
                    5 4 3 2 1`}
                sampleoutput2={`2 2
                    1 5`}
                />
            <Code file_link="array/array_03" />
        </div>
    </div>
}