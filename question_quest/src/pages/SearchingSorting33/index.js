import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting33(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Subset Sums"
                statement={`Ninja is traveling to a Happy city where ‘N’ people reside. In the city, the happiness of each person is represented as a number ‘H’ where ‘H’ ranges from  -20,000,000 to 20,000,000 (both inclusive). The happiness of each person in the city is given in an array/list ‘HAPPINESS’ where  ‘HAPPINESS[i]’ represents the happiness of the i’th person.
                Ninja wants to make a group of people such that the overall happiness of the group (sum of happiness value of all the people in the group) ranges between ‘A’ and ‘B’ where -500,000,000 ≤ A ≤ B ≤ 500,000,000. Ninja wants to know in how many ways he can make this group.
                For Example:
                For the given ‘HAPPINESS[]’ = ‘[-1, 0, 3]’ and ‘A’ = 0 , ‘B’ = 2. Following are the ways to group people such that the overall happiness of the group is between ‘A’ and ‘B’:

                [-1, 0, 3], the sum of all the happiness values of this group is 2.

                [-1, 3], the sum of all the happiness values of this group is 2.

                [0], the sum of all the happiness values of this group is 0.

                [ ], the sum of all the happiness values of this empty group is 0.

                So the number of ways is 4.
                As Ninja is busy with some other task so he asks you for help. Can you help Ninja to find out the number of ways in which he can pick groups so that the overall happiness of the group must be in the range between ‘A’ and ‘B’?`}
                input={`The first line of input contains an integer ‘T’ which denotes the number of test cases or queries to be run. Then the test cases follow.
                The first line of each test case contains three single space-separated integers ‘N’, ’A’, and ‘B’ representing the number of elements in the array/list ‘HAPPINESS’ and the range in which happiness values of groups must reside respectively.
                The next line of each test case contains ‘N’ single space-separated integers denoting the  ‘HAPPINESS’ values.
                `}
                output={`For each test case, print the number of ways to pick groups so that the overall happiness of the group lies between ‘A’ and ‘B’ inclusive.
                Print the output of each test case in a separate line.`}
                constraints={`1 <= ‘T’ <= 100
                1 <= ‘N’ <= 34
                -20,000,000 ≤ ‘HAPPINESS[i]’ ≤ 20,000,000
                -500,000,000 ≤ ‘A’ ≤ ‘B’ ≤ 500,000,000
                
                Time Limit: 1 second`}
                sampleinput1={`2
                2 1 1 
                1 2
                3 -1 1
                -1 1 2  `}
                sampleoutput1={`1
                5`}
                explanation1={`For sample test case 1 : 

                Given ‘HAPPINESS[]’ = [1,2] , and ‘A’, and ‘B’ are 1 and 1 respectively. Following are all the possible groups with their overall happiness value:
                
                1. [1, 2], where the overall happiness value is 3.
                
                2. [1], where the overall happiness value is 1.
                
                3. [2], where the overall happiness value is 2.
                
                4. [ ], where the overall happiness value is 0.
                
                As we can see, there is only 1 way to make a group in which overall happiness value lies between 1 and 1 inclusive that is [1].
                
                
                For sample test case 2 : 
                
                Given ‘HAPPINESS[]’ = [-1,1,2] ,‘A’, and ‘B’ are -1 and 1 respectively. Following are all the possible groups with their overall happiness value:
                
                1. [-1], where the overall happiness value is -1.
                
                2. [1], where the overall happiness value is 1.
                
                3. [2], where the overall happiness value is 2.
                
                4. [-1,1], where the overall happiness value is 0.
                
                5. [-1,2], where the overall happiness value is 1.
                
                6. [1,2], where the overall happiness value is 3.
                
                7. [-1,1,2], where the overall happiness value is 0.
                
                As we can see there are 5 ways to make a group in which overall happiness value lies between -1 and 1 inclusive and that are  [-1], [1], [-1,1],  [-1,2], [-1,1,2].`}
                sampleinput2={`2
                3 -10 10
                1 3 5
                2 -4 -1 
                2 3  `}
                sampleoutput2={`8
                0`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_33" />
        </div>
    </>
}