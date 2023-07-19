import "./EmotionItem.css";
import Card from 'react-bootstrap/Card';

const EmotionItem = ({score , text, active, innerRef, onClick}) => {

    const activeClass = active ? active : "active";

    return (
        <div className={"emotion_wrapper " + activeClass} score={score} ref={innerRef} onClick={onClick}>
            <Card className="emotion_card" >
                <Card.Img variant="top" src={"img/emotion_" + score + ".png"} />
                <Card.Body>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default EmotionItem;