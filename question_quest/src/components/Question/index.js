import "./index.scss";

export default function Question(props) {
    return <div className="question">
        <div className="title">
            {props.name}
        </div>
        { 
            props.statement &&
            <div className="hr" />
        }
        <QuestionSection data={props.statement} title="Problem Statement: "/>
        {
            props.image && 
            <div className="questioncontent"><img src={props.image} alt="Example" /> </div>
        } 
        {
            props.input &&
            <div className="hr" />
        }
        <QuestionSection data={props.input} title="Input Format: "/>
        <QuestionSection data={props.output} title="Output Format: "/>
        {
            props.constraints &&
            <div className="hr" />
        } 
        <QuestionSection data={props.constraints} title="Constraints: "/> 
        <QuestionSection data={props.sampleinput1} title="Sample Input 1: "/>
        <QuestionSection data={props.sampleoutput1} title="Sample Output 1: "/>
        <QuestionSection data={props.explanation1} title="Explanation 1: "/>
        {
            props.image2 && 
            <div className="questioncontent"><img src={props.image2} alt="Example" /> </div>
        } 
        <QuestionSection data={props.sampleinput2} title="Sample Input 2: "/>
        <QuestionSection data={props.sampleoutput2} title="Sample Output 2: "/>
        <QuestionSection data={props.explanation2} title="Explanation 2: "/>
        <QuestionSection data={props.sampleinput3} title="Sample Input 3: "/>
        <QuestionSection data={props.sampleoutput3} title="Sample Output 3: "/>
        <QuestionSection data={props.explanation3} title="Explanation 3: "/>
        <div className="hr" />
    </div>
}

function QuestionSection(props) {
    return <>{
        props.data &&
            <div>
                <div className="questiontitle">{props.title}</div>
                {
                    props.data.split('\n').map((line, index) => (
                        <div key={index} className="questioncontent">
                            {line}
                        </div>
                    ))
                }
            </div>
    }
    </>
}