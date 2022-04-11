
export default function Result(props) {
    return (
        <div className="flex" dangerouslySetInnerHTML={{ __html: props.Data }}></div>
    )
}