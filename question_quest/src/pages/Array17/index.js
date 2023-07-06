import { NavBar, Question, Code } from "../../components";

export default function Array17(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Best time to buy and Sell stock"
                statement={`You are given an array/list 'prices' where the elements of the array represent the prices of the stock as they were yesterday and indices of the array represent minutes. Your task is to find and return the maximum profit you can make by buying and selling the stock. You can buy and sell the stock only once.
                    You can’t sell without buying first.
                    For the given array [ 2, 100, 150, 120], The maximum profit can be achieved by buying the stock at minute 0 when its price is Rs. 2 and selling it at minute 2 when its price is Rs. 150. So, the output will be 148.`}
                input={`The first line contains a single integer ‘T’ denoting the number of test cases to be run. Then the test cases follow.
                    The first line of each test case contains a single integer ‘N’, representing the size of the array.
                    The second line of each test case contains ‘N’ space-separated integers representing the elements of the given array.`}
                output={`For each test case, print a single integer representing the maximum profit you can achieve. If the maximum profit is negative, print 0.
                    Output for each test case will be printed in a separate line.`}
                constraints={`1 <= T <= 10
                    2 <= N <= 10^4
                    1 <= ARR[i] <= 10^9
                    Time Limit: 1 sec.`}
                sampleinput1={`2
                    4
                    1 2 3 4
                    4
                    2 2 2 2`}
                sampleoutput1={`3
                    0`}
                explanation1={`For the first test case, it’s optimal to buy the stock at minute 0 and sell it at minute 3 to get a maximum profit of 3.
                    For the second test case, the maximum profit will be 0 for all possible ways of buying and selling stock.`}
                sampleinput2={`2
                    6
                    17 20 11 9 12 6
                    4
                    98 101 66 72`}
                sampleoutput2={`3
                    6`}
                />
            <Code file_link="array/array_17" />
        </div>
    </div>
}