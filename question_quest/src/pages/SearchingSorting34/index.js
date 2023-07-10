import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting34(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find the inversion count"
                statement={`You are given an integer array ‘ARR’ of size ‘N’ which is a permutation of the integers in the range [0, N-1].
                Global inversions are defined as the number of unique pairs of the form ‘(i, j)’ where:
                ‘0 <= i < j < N’.
                ‘ARR[i] > ARR[j]’.
                Local inversions are defined as the number of indexes ‘i’ where:
                ‘0 <= i < N - 1’.
                ‘ARR[i] > ARR[i + 1]’
                Your task is to return ‘True’ if the number of global inversions is equal to the number of local inversions. Otherwise, return ‘False’.
                For Example:
                ‘N = 6’
                ‘ARR’ = [2, 0, 1, 5, 6, 3]’   

                Pair of indexes that are global inversions: ‘(0, 1)’, ‘(0, 2)’, ‘(3, 5)’, ‘(4, 5)’.
                Indexes that are local inversions: ‘0’, ‘4’.
                Thus, you should return ‘False’ as the answer as the number of global inversions, and the number of local inversions is not equal. `}
                input={`The first line of input contains an integer ‘T’ which denotes the number of test cases. 
                Then, the ‘T’ test cases follow.
                The first line of each test case contains an integer ‘N’ denoting the size of the array ‘ARR’.       
                The second line of each test case contains ‘N’ integers representing the array ‘ARR’.
                `}
                output={`For every test case, return ‘True' if the number of global inversions is equal to the number of local inversions. Otherwise, return ‘False’.
                Output for every test case will be printed in a separate line.`}
                constraints={`1 <= T <= 100
                1 <= N <= 1000
                Elements of ‘ARR’ are in the range [0, N - 1].
                Time limit: 1 sec`}
                sampleinput1={`2
                4
                1 0 3 2 
                3
                1 2 0   `}
                sampleoutput1={`True
                False`}
                explanation1={`Test Case 1:

                Pair of indexes that are global inversions: ‘(0, 1)’, ‘(2, 3)’.
                Indexes that are local inversions: ‘0’, ‘2’.
                Thus, you should return ‘True’ as the answer as the global inversions, and the local inversions are equal. 
                
                Test Case 2:
                
                Pair of indexes that are global inversions: ‘(0, 2)’, ‘(1, 2)’.
                Indexes that are local inversions: ‘1’.
                Thus, you should return ‘False’ as the answer as the number of global inversions and the local inversions are not equal. `}
                sampleinput2={`2
                4
                3 0 2 1 
                3
                0 1 2  `}
                sampleoutput2={`False
                True`}

                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_34" />
        </div>
    </>
}