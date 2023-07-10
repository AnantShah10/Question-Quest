import { NavBar, Question, Code } from "../../components";
import ss01 from "../../images/ss01.png";

export default function SearchingSorting06(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Optimum location of point to minimize total distance"
                statement={`You are given a straight line on a 2D plane in the form of (ax + by + c = 0) and an array of points of the form (Xi, Yi). Your task is to find a point on the given line for which the sum of distances from this point to the given array/list of points is minimum.
                Here the equation for the given line is x - y = 0, i.e. a = 1, b = -1 and c = 0. 
                There are two points, i.e. (-1, 1) and (1, -1).
                So, the point on the line that has minimum distances from the points is (0, 0). The sum of distances is sqrt(1 + 1) + sqrt(1 + 1) = sqrt(2) + sqrt(2) = 2.83 (rounding to 2 decimal digits).`}
                image={ss01}
                input={`The first line contains an integer 'T', which denotes the number of test cases or queries to be run. Then, the T test cases follow.
                The first line of each test case contains three space-separated integers denoting a, b and c, respectively, representing the equation of the given line as mentioned above.
                The second line of each test case contains a single integer N, denoting the number of coordinates.
                Then N lines follow. Each line contains two space-separated integers denoting the x-coordinate and the y-coordinate of the point, respectively.`}
                output={`For each test case, print the minimum possible distance.
                Your answer will be considered correct if its absolute or relative error doesn’t exceed 10^-6.
                Output for each test case will be printed in a separate line.`}
                constraints={`1 <= T <= 100
                1 <= N <= 3000
                -100 <= a, b, c, points[i].x, points[i].y <= 100 and (a != 0, b != 0) 
                Time limit: 1 second`}
                sampleinput1={`2
                3 2 5
                5
                1 -1
                2 3
                4 4
                5 -1
                3 2
                3 1 -4
                4
                1 2
                4 -2
                5 -3
                7 -6`}
                sampleoutput1={`24.94
                15.32`}
                explanation1={`For the first test case, the optimum point is (-0.72, -1.42). 
                For the second test case, the optimum point is (2.29, -2.87).`}
                sampleinput2={`2
                -1 2 -4
                4
                -2 1
                2 3
                0 2
                -4 0
                2 -5 4
                5
                2 1
                7 -9
                4 -3
                -5 2
                8 -6`}
                sampleoutput2={`8.94
                33.83 `}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_06" />
        </div>
    </>
}