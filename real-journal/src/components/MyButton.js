import './MyButton.css';
import Button from 'react-bootstrap/Button';

const MyButton = ({text, type, onClick}) => {
    const btnType = ["primary", "secondary", "success", "danger", "light"].includes(type) ? type : "primary";

    return (
        <Button variant={btnType} onClick={onClick}>{text}</Button>
    )
}

MyButton.defaultProps = {type: "default"};

export default MyButton;