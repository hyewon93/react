import { useState, useRef } from "react";

const JournalEditor = () => {

    const authorInput = useRef();
    const contentInput = useRef();
    
    const [ state, setState ] = useState({
        author: "",
        content: "",
        emotion: 1
    });

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

        alert("Success!");
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
                />
            </div>
            <div>
                <textarea 
                    ref={contentInput}
                    value={state.content}
                    onChange={handleChangeState}
                    name="content"
                    placeholder="Journal"
                    type="text"
                />
            </div>
            <div>
                <span>Today's emotion score :</span>
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
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default JournalEditor;