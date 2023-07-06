import { NavBar, Question, Code } from "../../components";

export default function Array18(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Find all pairs on integer array whose sum is equal to given number"
                statement={`You are given an array/list ‘ARR’ consisting of ‘N’ distinct integers arranged in ascending order. You are also given an integer ‘TARGET’. Your task is to count all the distinct pairs in ‘ARR’ such that their sum is equal to ‘TARGET’.
                    1. Pair (x,y) and Pair(y,x) are considered as the same pair. 
                    2. If there exists no such pair with sum equals to 'TARGET', then return -1.
                    Let ‘ARR’ = [1 2 3] and ‘TARGET’ = 4. Then, there exists only one pair in ‘ARR’ with a sum of 4 which is (1, 3). (1, 3) and (3, 1) are counted as only one pair.`}
                input={`The first line of input contains an integer ‘T’ which denotes the number of test cases. 
                    The first line of each test case contains two single space-separated integers ‘N’ and ‘TARGET’ representing the number of elements in the array/list ‘ARR’ and the required pair-sum respectively.
                    The next line of each test case contains ‘N’ single space-separated integers denoting the elements of  ‘ARR’.`}
                output={`For each test case, return the numbers of pairs in  ‘ARR’ whose sum is equal to ‘TARGET’.`}
                constraints={`1 <= ‘T’ <= 100
                    2 <= ‘N’ <= 5000
                    1 <= ‘ARR[i]’, ‘TARGET’ <= 10^5
                    Where ARR[i]’ represents the elements of array/list ‘ARR’.                     
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    5 6
                    1 2 3 4 5
                    6 7
                    1 2 3 4 5 6`}
                sampleoutput1={`2
                    3`}
                explanation1={`In test case 1, there exist only 2 pairs whose sum is equal to ‘TARGET’ i.e (1, 5) and (2, 4).
                    In test case 2, there are 3 pairs whose sum is equal to ‘TARGET’ which are  (1, 6), (2, 5), and (3, 4).`}
                sampleinput2={`2
                    4 10
                    1 3 5 6
                    5 12
                    1 3 6 9 11`}
                sampleoutput2={`-1
                    2`}
                explanation2={`In test case 1, there is not a pair whose sum is equal to ‘TARGET’. So we return -1.
                    In test case 2, there are 2 pairs whose sum is equal to ‘TARGET’, (1, 11) and (3, 9) respectively.`}
                />
            <Code file_link="array/array_18" />
        </div>
    </div>
}