import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting24(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Aggressive cows"
                statement={`Chess tournament is going to be organized in Ninjaland. There will be C chess players going to attend the tournament. All the players will be staying in a hotel. The hotel has N free rooms available for the players, where one player will choose one room to live in.  The ith room is at position[i] in the hotel. All rooms are in distinct positions.
                Focus level of a chess player is defined as the minimum distance between his room and the room of another player. The overall focus of a tournament is defined as the minimum focus level among all players. You as an organizer obviously want the overall focus as high as possible so you assign the rooms to players such that the overall focus is as high as possible.
                For Example:
                let say we have 3 players and 5 rooms available and the rooms are at positions:  1 2 3 4 6
                Here the optimal allocation is in rooms 1 3 6 and the overall focus level is 2.`}
                input={`The first line of input contains a single integer T, representing the number of test cases or queries to be run. 
                Then the T test cases follow.
                The first line of each test case contains two positive integers N and C, which represent the number of rooms in the hotel and the number of chess players.
                The next line contains N space-separated positive integers representing the position of available room in the hotel.
                `}
                output={`For each test case, print a single integer, representing the maximum overall focus of the tournament.
                Print the output of each test case in a separate line.`}
                constraints={`1 <= T <= 10
                2 <= N <= 10 ^ 4
                2 <= C <= N
                1 <= positions[i] <= 10 ^ 9
                Time Limit: 1 sec`}
                sampleinput1={`1
                5 3
                1 2 3 4 6`}
                sampleoutput1={`2`}
                sampleinput2={`2
                4 2
                5 4 2 1
                6 4
                6 7 9 13 15 11`}
                sampleoutput2={`4
                2`}
                explanation2={`In test case 1, 
                we only have to allocate rooms to 2 players so we can assign rooms that are first and last which are 1 and 5, so our answer is 5 - 1 = 4.
                
                In test case 2, 
                there is no way by which we can allocate rooms such that every player will have the 3 or more as its least distance to other players. So the answer is 2 and one possible allocation of rooms is as follows.
                    Player1 = 6
                    Player2 = 9
                    Player3 = 11
                    Player4 = 13 
                `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_24" />
        </div>
    </>
}