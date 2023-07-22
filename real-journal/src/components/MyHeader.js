import './MyHeader.css';

const MyHeader = ({ headText, leftChild, rightChild }) => {
    return (
        <header>
            <div className="MyHeader">
                <div className="head_text">{headText}</div>
            </div>
        </header>
    )
}

export default MyHeader;