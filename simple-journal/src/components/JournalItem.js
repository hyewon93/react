import {useRef, useState} from "react";
import './JournalItem.css';

const JournalItem = ({item, onUpdate, onDelete}) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContent, setLocalContent] = useState(item.content);
    const localContentInput = useRef();

    const handleDelete = () => {
        onDelete(item.id);
    }

    const handleUpdate = () => {
        if(localContent.length < 5) {
            alert("Content must be more than 5 characters.");
            localContentInput.current.focus();
            return;
        }

        onUpdate(item.id, localContent);
        toggleIsEdit();
    }

    const handleQuitUpdate = () => {
        setIsEdit(false);
        setLocalContent(item.content);
    }

    return (
        <div className="JournalItem">
            <div className="info">
                <span className="author_info">
                    | Author: {item.author} | Emotion Score: {item.emotion} |
                </span>
                <br />
                <span className="Date">{new Date(item.created_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {
                    isEdit
                    ? 
                    <>
                    <textarea ref={localContentInput} value={localContent} onChange= {(e) => setLocalContent(e.target.value)}></textarea><br/>
                    <span className="notification">Please input content ( more than 5 characters )</span>
                    </>
                    : <>{item.content}</>
                }
            </div>
            {
                isEdit
                ? 
                    <>
                        <button onClick={handleQuitUpdate}>Cancel</button>
                        <button onClick={handleUpdate}>Save</button>
                    </>
                :
                    <>
                        <button onClick={toggleIsEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </>
            }
        </div>
    )
}

export default JournalItem;