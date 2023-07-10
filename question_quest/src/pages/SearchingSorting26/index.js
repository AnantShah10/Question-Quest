import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting26(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="EKOSPOJ"
                statement={`Kevin has ‘N’ buckets each consisting of some fruits. Kevin wants to eat at least ‘M’ fruits and so, he decided to set a marker (integer) as maximum as possible such that if he eats “number of fruits in the i-th bucket - marker” fruits then it must be at least ‘M’.
                For Example:
                Let’s assume, we have 5 buckets each having 10, 40, 30, and 20 fruits respectively. And, Kevin wants to eat at least 30 fruits. 
                Now, if we set our marker at 20 then Kevin can eat: (10 - 20) = -10 => 0 (fruit’s count can’t be negative) fruits from 1st bucket, (40 - 20) = 20 fruits from 2nd bucket, (30 - 20) = 10 fruits from the third bucket, and (20 - 20) = 0 fruits from the last bucket.
                So, he can eat 0 + 20 + 10 + 0 = 30 fruits in total.`}
                input={`The first line contains a single integer ‘T’ representing the number of test cases. 
                The first line of each test case will contain two space-separated integers ‘N’ and ‘M’ where ‘N’ is the total number of buckets, and ‘M’ is the minimum number of fruits that Kevin wants to eat.
                The second line of each test case will contain ‘N’ space-separated integers which denote the number of fruits in the i-th bucket.
                `}
                output={`For each test case, print the required marker.
                Output for every test case will be printed in a separate line.`}
                constraints={`1 <= T <= 10
                1 <= N <= 10^4
                1 <= M <= 10^6
                0 <= ARR[i] <= 10^4
                Where ‘T’ is the number of test cases.
                Where 'N' is the number of buckets and ‘M’ is the integer representing the minimum number of fruits Kevin wants to eat. And, ARR[i] denotes the number of fruits in the i-th bucket.
                Time limit: 1 sec`}
                sampleinput1={`2
                4 30
                10 40 30 20
                4 16
                5 8 20 1   `}
                sampleoutput1={`20
                6`}
                explanation1={`In the first test case, if we set the marker at 20 then Kevin can eat following fruits from each bucket: 0 (1st bucket) + 20 (2nd bucket) + 10 (3rd bucket) + 0 (4th bucket) = 30 (K)
                In the second test case, if we set the marker at 6 then Kevin can eat following fruits from each bucket: 0 (1st bucket) + 2 (2nd bucket) + 14 (bucket) + 0 (4th bucket) = 16 (K)`}
                sampleinput2={`3
                3 2
                2 2 2
                4 1
                2 0 1 0
                5 15
                1 2 3 4 5 `}
                sampleoutput2={`1
                1
                0`}
                explanation2={`In the first test case, for the marker at 1 Kevin has to eat,  1 + 1 + 1 = 3 fruits.
                In the second test case, for the marker at 1 Kevin has to eat, 1 + 0 + 0 + 0 = 1 fruit.
                In the third test case, for the marker at 0 Kevin has to eat, 1 + 2 + 3 + 4 + 5 = 15 fruits.`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_26" />
        </div>
    </>
}