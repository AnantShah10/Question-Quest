import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting23(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="K-th Element of Two Sorted Arrays"
                statement={`You're given two sorted arrays 'arr1' and 'arr2' of size 'n' and 'm' respectively and an element k
                Find the element that would be at the 'kth' position of the combined sorted array.
                Position 'k' is given according to 1 - based indexing, but arrays 'arr1' and 'arr2' are using 0 - based indexing.
                For Example:
                Input: 'arr1' = [2, 3, 45], 'arr2' = [4, 6, 7, 8] and 'k' = 4
                Output: 6
                Explanation: The merged array will be [2, 3, 4, 6, 7, 8, 45]. The element at position '4' of this array is 6. Hence we return 6.   `}
                input={`The first line contains ‘n’ denoting the number of elements in ‘arr1’.
                The second line contains ‘n’ space-separated integers denoting the elements of ‘arr1’.
                The third line contains ‘m’ denoting the number of elements in ‘arr2’.
                The fourth line contains ‘m’ space-separated integers denoting the elements of ‘arr2’.
                The fifth line contains an integer ‘k’.
                `}
                output={`Return the 'kth' element of the combined sorted array.`}
                constraints={`1 <= 'n' <= 5000
                1 <= 'm' <= 5000
                0 <= 'arr1[i]', 'arr2[i]' <= 10^9
                1 <= 'k' <= 'n' + 'm'
                'n' and 'm' denote the size of 'arr1' and 'arr2'.
                Time limit: 1 second`}
                sampleinput1={`5
                2 3 6 7 9
                4
                1 4 8 10
                4`}
                sampleoutput1={`4`}
                explanation1={`The merged array will be: [1, 2, 3, 4, 6, 7, 8, 9, 10]
                The element at position '4' is 4 so we return 4.`}
                sampleinput2={`5
                1 2 3 5 6
                5
                4 7 8 9 100  
                6`}
                sampleoutput2={`6
                `}
                explanation2={`The merged array will be: [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]

                The element at position '6'  is 6, so we return 6.`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_23" />
        </div>
    </>
}