import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting02(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find a Fixed Point [Value equal to index] in a given array"
                statement={`Ninja and his friend are playing a game in which his friend selects an integer 'N'. He then picks 'N' random numbers and places them in an array/list ‘NUMARRAY’.
                He asks Ninja to find all those numbers which are equal to their index values i.e. 'NUMARRAY[i]' = ‘i’ where ‘i’ ranges from 0 to 'N' - 1.
                Can you help Ninja find all such numbers?
                For Example:
                Let ‘NUMARRAY’ = [-4, -2, 2, 5]. Here, only 'NUMARRAY[2]' = 2. So, our answer is 2.`}
                input={`The first line of input contains an integer, 'T,’ which denotes the number of test cases or queries to be run. Then the test cases follow.
                The first line of each test case contains a single integer ‘N’.
                The next line of each test case contains ‘N’ single space-separated integers denoting the numbers in ‘NUMARRAY.’.`}
                output={`For each test case, print all the numbers which satisfy the given condition.
                Print the output of each test case in a separate line.`}
                constraints={`1 <= ‘T’ <= 100
                0 <= ‘N’ <= 5000
                -5000 <= ‘NUMARRAY[i]’ <= 5000
                Where 'T' denotes the number of test cases.
                ‘N’ is the number of elements in the array/list ‘NUMARRAY’.    
                Time Limit: 1 second`}
                sampleinput1={`2
                4
                -4 -2 2 5
                4
                -4 -3 -2 -1`}
                sampleoutput1={`2 
                -1`}
                explanation1={`For sample test case 1: 
                For ‘i’ = ‘0’, 'NUMARRAY[0]' = -4 which is not equal to index ‘i’, So we don’t include this number in our answer.
                For ‘i’ = ‘1’ 'NUMARRAY[1]' = -2 which is not equal to index ‘i’, So we don’t include this number in our answer.
                For ‘i’ = ‘2’ 'NUMARRAY[2]' = 2 which is equal to index ‘i’, So we include this number in our answer.
                For ‘i’ = ‘3’ 'NUMARRAY[3]' = 5 which is not equal to index ‘i’, So we don’t include this number in our answer.
                For sample test case 2: 
                For ‘i’ = ‘0’ 'NUMARRAY[0]' = -4 which is not equal to index ‘i’, So we don’t include this number in our answer.
                For ‘i’ = ‘1’ 'NUMARRAY[1]' = -3 which is not equal to index ‘i’, So we don’t include this number in our answer.
                For ‘i’ = ‘2’ 'NUMARRAY[2]' = -2 which is not equal to index ‘i’, So we don’t include this number in our answer.
                For ‘i’ = ‘3’ 'NUMARRAY[3]' = -1 which is not equal to index ‘i’, So we don’t include this number in our answer.
                In this sample test case, we didn’t find any such index. So we return ‘-1’. `}
                sampleinput2={`2
                4
                0 1 2 3
                4
                -1 1 2 5`}
                sampleoutput2={`0 1 2 3
                1 2  `}
                explanation2 = {`For sample test case 1: 
                For ‘i’ = ‘0’ 'NUMARRAY[0]' = 0 which is equal to index ‘i’, So we include this number in our answer.
                For ‘i’ = ‘1’ 'NUMARRAY[1]' = 1 which is equal to index ‘i’, So we include this number in our answer.
                For ‘i’ = ‘2’ 'NUMARRAY[2]' = 2 which is equal to index ‘i’, So we include this number in our answer.
                For ‘i’ = ‘3’ 'NUMARRAY[3]' = 3 which is equal to index ‘i’, So we include this number in our answer.
                For sample test case 2: 
                For ‘i’ = ‘0’ 'NUMARRAY[0]' = -1 which is not equal to index ‘i’, So we don’t include this number in our answer.
                For ‘i’ = ‘1’ 'NUMARRAY[1]' = 1 which is equal to index ‘i’, So we include this number in our answer.
                For ‘i’ = ‘2’ 'NUMARRAY[2]' = 2 which is equal to index ‘i’, So we include this number in our answer.
                For ‘i’ = ‘3’ 'NUMARRAY[3]' = 5 which is not equal to index ‘i’, So we don’t include this number in our answer.`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_02" />
        </div>
    </>
}