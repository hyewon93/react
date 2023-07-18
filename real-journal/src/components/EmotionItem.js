import "./EmotionItem.css";
import Card from 'react-bootstrap/Card';

const EmotionItem = ({score , text, innerRef, onClick}) => {

    return (
        <div>
            <div className="emotion_wrapper active" score={score} ref={innerRef} onClick={onClick}>
                <Card className="emotion_card" >
                    <Card.Img variant="top" src={"img/emotion_" + score + ".png"} />
                    <Card.Body>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Card>
                <div className="emotion_cover"></div>
            </div>
        </div>
    )
}

export default EmotionItem;