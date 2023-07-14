import './JournalItem.css';

const JournalItem = ({item, onDelete}) => {

    return (
        <div className="JournalItem">
            <div className="info">
                <span className="author_info">
                    | Author: {item.author} | Emotion Score: {item.emotion} |
                </span>
                <br />
                <span className="Date">{new Date(item.created_date).toLocaleString()}</span>
            </div>
            <div className="content">{item.content}</div>
            <button onClick={() => {onDelete(item.id);}}>Delete</button>
        </div>
    )
}

export default JournalItem;