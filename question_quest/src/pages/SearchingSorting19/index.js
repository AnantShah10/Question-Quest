import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting19(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Bishu and Soldiers"
                statement={`Bishu went to fight for Coding Club. There were N soldiers with various powers. There will be Q rounds to fight and in each round, Bishu's power will be varied. With power M, Bishu can kill all the soldiers whose power is less than or equal to M(<=M). After each round, All the soldiers who are dead in the previous round will reborn. Such that in each round there will be N soldiers to fight. As Bishu is weak in mathematics, help him to count the number of soldiers that he can kill in each round and the total sum of their powers.`}
                input={`The first line of the input contains N, the number of soldiers.
                The second line contains an array of N numbers denoting the power of each soldier
                This third line contains Q, which denotes the number of rounds.
                Q lines follow, each line having one number denoting the power of Bishu.`}
                output={`For each round, the output should be an array of two numbers. The first number should be the number of soldiers that Bishu can beat, and the second number denotes the cumulative strength of all the soldiers that Bishu can beat.`}
                constraints={`1<=N<=10000
                1<=power of each soldier<=100
                1<=Q<=10000
                1<=power of bishu<=100`}
                sampleinput1={`7
                1 2 3 4 5 6 7
                3
                3
                10
                2`}
                sampleoutput1={`3 6
                7 28
                2 3`}
                explanation1={`There are 7 soldiers, each with the indicated power.
                There are 3 rounds.
                In the first round, Bishu's power is 3, which is greater than 3 soldiers, with the cumulative power of 6. Hence, the answer is 3 6
                Similarly for the next round.`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_19" />
        </div>
    </>
}