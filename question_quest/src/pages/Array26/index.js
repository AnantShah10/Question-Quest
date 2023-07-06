import { NavBar, Question, Code } from "../../components";

export default function Array26(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Maximum profit by buying and selling a share at most twice"
                statement={`You are Harshad Mehta’s friend. He told you the price of a particular stock for the next ‘N’ days. You can either buy or sell a stock. Also, you can only complete at most 2-transactions. Find the maximum profit that you can earn from these transactions. You can take help from Mr. Mehta as well.
                    1. Buying a stock and then selling it is called one transaction. 
                    2. You are not allowed to do multiple transactions at the same time. This means you have to sell the stock before buying it again.`}
                input={`The first line contains a single integer 'T' representing the number of test cases.      
                    Then 'T' test cases follow:
                    The first line of each test case contains an integer 'N' denoting the number of days. 
                    The second line of each test case contains 'N' space-separated integers, where the 'i-th' element is the price of the particular stock on the 'i-th' day. `}
                output={`For each test case, the first and only line of output contains an integer denoting the maximum profit. 
                    The output of every test case is printed in a separate line.`}
                constraints={`1 <= T <= 10
                    1 <= N <= 5 * 10^4
                    0 <= price <= 10^3
                    Where ‘price’ is the price of the stock on each day. 
                    Time Limit: 1 sec`}
                sampleinput1={`1
                    7
                    3 3 5 0 3 1 4`}
                sampleoutput1={`6`}
                explanation1={`The maximum profit can be earned by:
                    Transaction 1: Buying the stock on day 4 ( price 0 ) and then selling it on day 5 ( price 3 ). 
                    Transaction 2: Buying the stock on day 6 ( price 1 ) and then selling it on day 6 ( price 4 ).
                    Total profit earned will be (3 - 0) + ( 4 - 1) = 6.`}
                sampleinput2={`1 
                    5
                    5 4 3 2 1`}
                sampleoutput2={`0`}
                explanation2={`It's better to not do any transaction as the prices of the stock are decreasing.`}
                />
            <Code file_link="array/array_26" />
        </div>
    </div>
}