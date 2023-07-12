import { useState } from "react";

const DiaryEditor = () => {
    
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
        console.log(state);

        alert("Successfuly submitted!");
    }

    return (
        <div className="JournalEditor">
            <h2>Today's journal</h2>
            <div>
                <input 
                    value={state.author}
                    onChange={handleChangeState}
                    name="author"
                    placeholder="Author"
                    type="text"
                />
            </div>
            <div>
                <textarea 
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

export default DiaryEditor;