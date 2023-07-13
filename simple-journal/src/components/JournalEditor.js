import { useState, useRef } from "react";

const JournalEditor = ({onCreate}) => {

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    const authorInput = useRef();
    const contentInput = useRef();

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {

        // Validation
        if(state.author.length < 1) {
            alert("Author must not be empty.");
            authorInput.current.focus();
            return;
        }

        if(state.content.length < 5) {
            alert("Content must be more than 5 characters.");
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);

        setState({
            author: "",
            content: "",
            emotion: 1
        });
    }

    return (
        <div className="JournalEditor">
            <h2>Today's journal</h2>
            <div>
                <input 
                    ref={authorInput}
                    value={state.author}
                    onChange={handleChangeState}
                    name="author"
                    placeholder="Author"
                    type="text"
                /><br/>
                <span className="notification">Please input author ( more than 1 character )</span>
            </div>
            <div>
                <textarea 
                    ref={contentInput}
                    value={state.content}
                    onChange={handleChangeState}
                    name="content"
                    placeholder="Journal"
                    type="text"
                /><br/>
                <span className="notification">Please input content ( more than 5 characters )</span>
            </div>
            <div>
                <select 
                    name="emotion"
                    value={state.emotion}
                    onChange={handleChangeState}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select><br/>
                <span className="notification">Please select emotion score</span>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default JournalEditor;