import { NavBar, Question, Code } from "../../components";

export default function Array14(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Merge Intervals"
                statement={`You are given N number of intervals, where each interval contains two integers denoting the start time and the end time for the interval.
                    The task is to merge all the overlapping intervals and return the list of merged intervals sorted by increasing order of their start time.
                    Two intervals [A,B] and [C,D] are said to be overlapping with each other if there is at least one integer that is covered by both of them.
                    For the given 5 intervals - [1, 4], [3, 5], [6, 8], [10, 12], [8, 9].
                    Since intervals [1, 4] and [3, 5] overlap with each other, we will merge them into a single interval as [1, 5].
                    Similarly, [6, 8] and [8, 9] overlap, merge them into [6,9].
                    Interval [10, 12] does not overlap with any interval.
                    Final List after merging overlapping intervals: [1, 5], [6, 9], [10, 12].`}
                input={`The first line of input contains an integer N, the number of intervals.
                    The second line of input contains N integers, i.e. all the start times of the N intervals.                   
                    The third line of input contains N integers, i.e. all the end times of the N intervals.`}
                output={`Print S lines, each contains two single space-separated integers A, and B, where S is the size of the merged array of intervals, 'A' is the start time of an interval and 'B' is the end time of the same interval.`}
                constraints={`1 <= N <= 10^5 
                    0 <= START, FINISH <= 10^9
                    Time Limit: 1sec`}
                sampleinput1={`2
                    1 3
                    3 5`}
                sampleoutput1={`1 5`}
                explanation1={`Since these two intervals overlap at point 3 so we merge them and the new interval becomes (1,5).`}
                sampleinput2={`5
                    1 3 6 8 10
                    4 5 8 9 12`}
                sampleoutput2={`1 5
                    6 9
                    10 12`}
                />
            <Code file_link="array/array_14" />
        </div>
    </div>
}