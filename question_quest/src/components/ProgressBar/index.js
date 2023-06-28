import "./index.scss";

export default function ProgressBar(props) {
    const { completed } = props;
    return <div className = "containerstyle">
      <div className = "fillerstyle">
        <span className = "labelstyle">{`${completed}%`}</span>
      </div>
    </div>
}