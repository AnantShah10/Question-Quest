import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting14(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Merge 2 sorted arrays"
                statement={`Ninja has been given two sorted integer arrays/lists ‘ARR1’ and ‘ARR2’ of size ‘M’ and ‘N’. Ninja has to merge these sorted arrays/lists into ‘ARR1’ as one sorted array. You may have to assume that ‘ARR1’ has a size equal to ‘M’ + ‘N’ such that ‘ARR1’ has enough space to add all the elements of ‘ARR2’ in ‘ARR1’.
                For Example:
                ‘ARR1’ = [3 6 9 0 0]
                ‘ARR2’ = [4 10]
                After merging the ‘ARR1’ and ‘ARR2’ in ‘ARR1’. 
                ‘ARR1’ = [3 4 6 9 10]`}
                input={`The first line of input contains an integer ‘T’ which denotes the number of test cases or queries to be run. Then the test cases follow.
                The first line of each test case contains two space-separated integers ‘M’ and ‘N’, which represent the size of ‘ARR1’ and ‘ARR2’.                
                The next lines of each test case contain ‘M’ space-separated integers and ‘N’ zeros (i.e. 0) which represent the number of elements in ‘ARR1’.                
                The next lines of each test case contain ‘N’ space-separated integers which represent the number of elements in ‘ARR2’.`}
                output={`For each test case, return the ‘ARR1’ after merging.
                Print the output of each test case in a separate line.`}
                constraints={`1 <= ‘T’ <= 100
                1 <= ‘M’, ‘N’ <= 5000
                1 <= ‘ARR1[i], ARR2[i]’ <= 100000
                Time Limit: 1 second`}
                sampleinput1={`2
                3 2
                1 2 3 0 0 
                4 5
                4 2
                1 4 6 10 0 0
                2 5`}
                sampleoutput1={`1 2 3 4 5
                1 2 4 5 6 10`}
                explanation1={`For sample test case 1: 
                In this test case, After merging ‘ARR2’ into ‘ARR1’. 
                ‘ARR1’ = [1 2 3 4 5]
                For sample test case 2: 
                In this test case, After merging ‘ARR2’ into ‘ARR1’. 
                ‘ARR1’ = [1 2 4 5 6 10] `}
                sampleinput2={`2
                2 3
                1 10 0 0 0 
                3 8 11
                3 3
                3 4 6 0 0 0
                1 8 10`}
                sampleoutput2={`1 3 8 10 11
                1 3 4 6 8 10  `}
                explanation2 = {`For sample test case 1: 
                In this test case, After merging ‘ARR2’ into ‘ARR1’. 
                ‘ARR1’ = [1 3 8 10 11]
                For sample test case 2: 
                In this test case, After merging ‘ARR2’ into ‘ARR1’. 
                ‘ARR1’ = [1 3 4 6 8 10]`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_14" />
        </div>
    </>
}