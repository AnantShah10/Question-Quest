import "./index.scss";

import { NavBar, Question, Code } from "../../components";

export default function Array06(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Find the Union and Intersection of the two sorted arrays"
                statement={`You have been given two arrays/list ‘ARR1’ and ‘ARR2’ consisting of ‘N’ and ‘M’ integers respectively. Your task is to return the number of elements common to ‘ARR1’ and ‘ARR2’ and the number of elements in the union of ‘ARR1’ and ‘ARR2’.
                    Let’s assume ‘ARR1’ is [1,2,3,4,5] and ‘ARR2’ is [2,4,6,8]. Elements common to ‘ARR1’ and ‘ARR2’ are [2,4] as they occur in both ‘ARR1’ and ‘ARR2’. Therefore the number of elements common to ‘ARR1’ and ‘ARR2’ is 2. Union of ‘ARR1’ and ‘ARR2’ is [1,2,3,4,5,6,8]. Therefore the number of distinct elements in the union of ‘ARR1’ and ‘ARR2’ is 7. So, the answer will be 2 7.
                    ‘ARR1’ consists of distinct integers i.e no number occurs twice in array/list.
                    ‘ARR2’ consists of distinct integers i.e no number occurs twice in array/list.`}
                input={`The first line contains a single integer ‘T’ representing the number of test cases.
                    The first line of each test case contains two single space-separated integers ‘N' and ‘M’ representing the size of the array/list ‘ARR1’ and ‘ARR2’ respectively.                 
                    The second line of input of each test case contains ‘N’ single space-separated integers representing the array/list elements of ‘ARR1’.
                    The third line and the last line of input of each test contains ‘M’ single space-separated integers representing the array/list elements of ‘ARR2’.`}
                output={`For each test case, return the number of elements common to ‘ARR1’ and ‘ARR2’ and the number of distinct elements in the union of ‘ARR1’ and ‘ARR2’.`}
                constraints={`1 <= T <= 10
                    1 <= N <= 1000
                    1 <= M <= 1000
                    1 <= ‘arr1[i]’ <= 10^5
                    1 <= ‘arr2[i]’ <= 10^5       
                    Time Limit: 1sec`}
                sampleinput1={`2
                    2 2
                    1 2
                    3 4  
                    2 1
                    2 3
                    3`}
                sampleoutput1={`0 4
                    1 2`}
                explanation1={`Test case 1:
                    ‘ARR1’ is [1,2]
                    ‘ARR2’ is [3,4] 
                    Elements common to ‘ARR1’ and ‘ARR2’ are []. Therefore the number of elements common to ‘arr’ and ‘brr’ is 0. 
                    The union of ‘ARR1’ and ‘ARR2’ is [1,2,3,4]. Therefore the number of distinct elements in the union of ‘ARR1’ and ‘ARR2’ is 4.
                    Therefore the answer is 0 4.
                    
                    Test case 2:
                    ‘ARR1’ is [2,3].
                    ‘ARR2’ is [3] 
                    Elements common to ‘ARR1’ and ‘ARR2’ are [3]. Therefore the number of elements common to ‘ARR1’ and ‘ARR2’ is 1. 
                    The union of ‘ARR1’ and ‘ARR2’ is [2,3]. Therefore the number of distinct elements in the union of ‘ARR1’ and ‘ARR2’ is 2.
                    Therefore the answer is 1 2.`}
                sampleinput2={`2
                    5 3
                    1 2 3 4 5
                    4 6 2
                    1 2
                    1
                    3 2`}
                sampleoutput2={`2 6
                    0 3`}
                />
            <Code file_link="array/array_06" />
        </div>
    </div>
}