import './JournalItem.css';

const JournalItem = ({item}) => {

    return (
        <div className="JournalItem">
            <div className="info">
                <span className="author_info">
                    | Author: {item.author} | Emotion Score: {item.emotion} |
                </span>
                <br />
                <span className="Date">{new Date(item.create_date).toLocaleString()}</span>
            </div>
            <div className="content">{item.content}</div>
        </div>
    )
}

export default JournalItem;