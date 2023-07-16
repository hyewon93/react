import './MyHeader.css';

const MyHeader = ({ headText, leftChild, rightChild }) => {
    return (
        <header>
            <div className="MyHeader">
                <div className="head_btn_left">{leftChild}</div>
                <div className="head_text">{headText}</div>
                <div className="head_btn_right">{rightChild}</div>
            </div>
        </header>
    )
}

export default MyHeader;