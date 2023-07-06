import { NavBar, Question, Code } from "../../components";

export default function Array15(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Next Permutation"
                statement={`You have been given a permutation of ‘N’ integers. A sequence of ‘N’ integers is called a permutation if it contains all integers from 1 to ‘N’ exactly once. Your task is to rearrange the numbers and generate the lexicographically next greater permutation.
                    To determine which of the two permutations is lexicographically smaller, we compare their first elements of both permutations. If they are equal — compare the second, and so on. If we have two permutations X and Y, then X is lexicographically smaller if X[i] < Y[i], where ‘i’ is the first index in which the permutations X and Y differ.
                    For example, [2, 1, 3, 4] is lexicographically smaller than [2, 1, 4, 3].`}
                input={`The first line contains a single integer ‘T’ representing the number of test cases. 
                    The first line of each test case will contain an integer ‘N’ representing the length of the permutation.
                    The second line contains ‘N’ space-separated integers which are the elements of the permutation.`}
                output={`For each test case, print the elements of the lexicographically next greater permutation with a single space-separated. If lexicographically next greater permutation doesn’t exist, print the lexicographically smallest permutation.
                    Output for every test case will be printed in a separate line.`}
                constraints={`1 <= T <= 50
                    1 <= N <= 10000
                    1 <= P[i] <= N
                    Time limit: 1 sec`}
                sampleinput1={`2
                    3
                    1 2 3
                    5
                    2 3 1 4 5`}
                sampleoutput1={`1 3 2
                    2 3 1 5 4`}
                explanation1={`In the first test case, the lexicographically next greater permutation is [1, 3, 2].
                    In the second test case, the lexicographically next greater permutation is [2, 3, 1, 4, 5].`}
                sampleinput2={`2
                    2
                    1 2
                    3
                    3 1 2`}
                sampleoutput2={`2 1
                    3 2 1`}
                explanation2={`In the first test case, the lexicographically next greater permutation is [2, 1].
                    In the second test case, the lexicographically next greater permutation is [3, 2, 1].`}
                />
            <Code file_link="array/array_15" />
        </div>
    </div>
}