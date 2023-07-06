import { NavBar, Question, Code } from "../../components";

export default function Array35(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Median of 2 sorted arrays of equal size"
                statement={`You have been given an array/list ‘ARR’ of integers consisting of ‘N’ integers. You are also given a size ‘M’. You need to display the median of all the subarrays of size ‘M’ and it is starting from the very left of the array.
                    Median is the middle value in an ordered integer array/list. If the size of the array/list is even there is no middle element. So the median is the mean of two middle values in an even size array/list.
                    Your task is to return the median of all the subarrays whose size is ‘M’.
                    Let’s say you have an array/list [1,4,3,5] and ‘M’ is 3.Then the first subarray of size 3 is [1,4,3] whose median is 3.Then the second subarray of size 3 is [4,3,5] whose median is 4. Therefore the median of all the subarrays of size 3 is [3.0,4.0].`}
                input={`The first line contains a single integer ‘T' representing the number of test cases.
                    The first line of each test case contains two single space-separated integers ‘N’ and ‘M’ representing the size of the array/list ‘ARR’ and size of subarray for which you need to calculate median respectively.
                    The second line and the last line of input contain ‘N’ single space-separated integers representing the array/list elements.`}
                output={`For each test case, return the median of all the subarrays whose size is ‘M’. `}
                constraints={`1 <= T <= 10
                    1 <= N <= 1000
                    1 <= M <= N
                    1 <= ‘ARR[i]’ <= 10^6
                    Time Limit: 1sec`}
                sampleinput1={`2
                    4 3
                    1 2 3 4  
                    4 4 
                    1 2 3 4`}
                sampleoutput1={`2.0 3.0
                    2.5`}
                explanation1={`Test case 1:
                    All the possible subarrays of size 3 are:-
                    [1,2,3] → Middle element of the subarray(in sorted manner) is 2. Therefore the median is 2.
                    [2,3,4] → Middle element of the subarray(in sorted manner) is 3. Therefore the median is 3.
                    Therefore the answer is [2.0,3.0].
                    Test case 2:
                    All the possible subarrays of size 4 are:-
                    [1,2,3,4] → Middle elements of the subarray are 2 and 3. Therefore the median is 2.5.
                    Therefore the answer is [2.5].`}
                sampleinput2={`2
                    4 1
                    1 2 3 4
                    8 4
                    1 2 3 4 4 3 2 1`}
                sampleoutput2={`1.0 2.0 3.0 4.0
                    2.5 3.5 3.5 3.5 2.5`}
                />
            <Code file_link="array/array_35" />
        </div>
    </div>
}