import { NavBar, Question, Code } from "../../components";

export default function Array10(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Minimum no. of Jumps to reach end of an array"
                statement={`Bob lives with his wife in a city named Berland. Bob is a good husband, so he goes out with his wife every Friday to ‘Arcade’ mall.
                    ‘Arcade’ is a very famous mall in Berland. It has a very unique transportation method between shops. Since the shops in the mall are laying in a straight line, you can jump on a very advanced trampoline from the shop i, and land in any shop between (i) to (i + Arr[i]), where Arr[i] is a constant given for each shop.
                    There are N shops in the mall, numbered from 0 to N-1. Bob's wife starts her shopping journey from shop 0 and ends it in shop N-1. As the mall is very crowded on Fridays, unfortunately, Bob gets lost from his wife. So he wants to know, what is the minimum number of trampoline jumps from shop 0 he has to make in order to reach shop N-1 and see his wife again. If it is impossible to reach the last shop, return -1.`}
                input={`The first line of input contains a single integer T, representing the number of test cases or queries to be run. 
                    Then the T test cases follow.
                    The first line of each test case contains a positive integer N, which represents the number of shops.
                    The next line contains 'N' single space-separated positive integers representing a constant given for each shop.`}
                output={`For each test case, print the minimum number of jumps or -1, if it is impossible to reach the last shop.`}
                constraints={`1 <= T <= 10
                    1 <= N <= 5 * 10^4
                    0 <= Arr[i] <= N
                    Where T is the number of test cases, N is the size of the array and Arr[i] is the ith element in the array.`}
                sampleinput1={`2
                    5
                    2 1 3 2 4
                    3
                    3 2 1`}
                sampleoutput1={`2
                    1`}
                explanation1={`In the 1st test case, Bobs jumps from shop 0 to shop 2 and then jumps from shop 2 to shop 4, so he needs two jumps to reach the last shop.
                    In the 2nd test case, Bobs jumps from shop 0 to shop 2, so he needs only one jump to reach the last shop.`}
                sampleinput2={`2
                    5
                    1 0 3 2 1
                    4
                    1 1 1 1`}
                sampleoutput2={`-1
                    3`}
                />
            <Code file_link="array/array_10" />
        </div>
    </div>
}