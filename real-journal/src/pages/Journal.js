import { useContext, useEffect, useState } from "react";
import MyHeader from "../components/MyHeader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { JournalStateContext } from "../App";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import './page.css';
import EmotionItem from "../components/EmotionItem";

const Journal = () => {

    const [originData, setOriginData] = useState();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const journalList = useContext(JournalStateContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(journalList.length>=1){
          const targetJournal = journalList.find((it)=>parseInt(it.id) === parseInt(id));

          if(targetJournal) {
            setOriginData(targetJournal);
          }
          else {
            navigate('/', {replace:true});
          }
        }
      }, [id, journalList, navigate]);
    

    return (
        <div>
            <MyHeader headText="Journal"/>
            <Container className="journal-details">
                <Row>
                    <Col>
                        <h3>Date</h3>
                        <span className="journal-detail">{originData && originData.date}</span>
                    </Col>
                </Row>
                <Row className="emotion-container">
                    <Col>
                        <h3>Emotion</h3>
                        <Container className="journal-detail">
                            <Row>
                                <Col><EmotionItem score="5" text="Very Good" active="inactive"/></Col>
                                <Col><EmotionItem score="4" text="Good" active="active"/></Col>
                                <Col><EmotionItem score="3" text="Normal" active="inactive"/></Col>
                                <Col><EmotionItem score="2" text="Bad" active="inactive"/></Col>
                                <Col><EmotionItem score="1" text="Very Bad" active="inactive"/></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Content</h3>
                        <p className="journal-detail content-container">{originData && originData.content}</p>
                    </Col>
                </Row>
            </Container>
            <Button className="margin-right-40" type="button" variant="light" onClick={() => {navigate("/")}}>Back</Button>
            <Button type="button" onClick={() => {navigate("/edit?id" + originData.id)}}>Edit</Button>
        </div>
    );
}

export default Journal;