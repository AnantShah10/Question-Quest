import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting31(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="ROTI-Prata SPOJ"
                statement={`In Ninja Land, there is a famous restaurant named ‘CookingNinjas’.  There are ‘N’ cooks in ‘CookingNinjas’ numbered from 0 to N-1.  Each cook has rank ‘R’ (1 <= R <= 10).
                A cook with a rank ‘R’ can prepare 1 dish in the first ‘R’ minutes, 1 more dish in the next ‘2R’ minutes, 1 more dish in next ‘3R’ minutes, and so on (A cook can only make complete dishes)  For example if a cook is ranked 2. He will prepare one dish in 2 minutes, one more dish in the next 4 mins and one more in the next 6 minutes hence in a total of 12 minutes he can make 3 dishes, Note, In 13 minutes also he can make only 3 dishes as he does not have enough time for the 4th dish).
                One day ‘CookingNinjas’ receive an order of ‘M’ dishes that they need to complete as early as possible. You are given an integer array ‘rank’ of size ‘N’ in which ‘rank[i]’ gives ‘rank’ of ith cook and an integer ‘M’, You need to find out the minimum times required to complete this order of ’M’ dishes.
                For Example:
                Let ‘N’ = 4,  ‘ranks’ = [1, 2, 3, 4] and ‘M’ = 11.  Then the minimum time required to cook 11 dishes will be 12 minutes.  The cooks should prepare dishes in the following manner -:
                Cook-0 prepare 4 dishes in 10 minutes i.e (1 dish in 1 minute, 1 more dish in next 2 minutes, 1 more dish in next 3 minutes, 1 more dish in next 4 minutes).
                Cook-1 prepare 3 dishes in 12 minutes i.e (1 dish in 2 minutes, 1 more dish in 4 minutes, 1 more dish in 6 minutes).
                Cook-2 prepare 2 dishes in 9 minutes i.e (1 dish in 3 minutes, 1 more dish in the next 6 minutes).
                Cook-3 prepare 2 dishes in 12 minutes i.e (1 dish in 4 minutes, 1 more dish in the next 8 minutes).
                If all four cooks work simultaneously then they can prepare(4 + 3 + 2 + 2 = 11) dishes in 12 minutes. And it is the minimum possible time.`}
                input={`The first line of input contains an integer ‘T’ denoting the number of test cases.
                The next 2*T lines represent the ‘T’ test cases.
                The first line of each test case contains two space-separated integers  ‘N’ and ‘M’ representing the number of cooks and dishes respectively.
                The second line of the test case contains ‘N’ space-separated integers representing ‘ranks’ of cooks
                `}
                output={`For each test case, print a line consisting of a single integer that represents the minimum times required to complete the order of ’M’ dishes. `}
                constraints={`1 <= T <= 50
                1 <= N <= 20
                1 <= M <= 10^4
                1 <= rank[i] <= 10
                
                Time Limit: 1 sec`}
                sampleinput1={`2
                1 1
                10
                4 11
                1 2 3 4 `}
                sampleoutput1={`10
                12`}
                explanation1={`Test case 1:
                There is only one chef with rank 10, so he will cook one dish in 10 minutes.
                
                Test case 2
                See the problem statement for an explanation.`}
                sampleinput2={`2
                4 10
                1 2 3 4
                8 8
                1 1 1 1 1 1 1 1 `}
                sampleoutput2={`12
                1`}

                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_31" />
        </div>
    </>
}