import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { JournalStateContext } from "../App";

import MyHeader from "../components/MyHeader";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import EmotionItem from "../components/EmotionItem";

import './page.css';
import '../resources/css/journal.css';

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
                        <span className="journal-label">Date</span>
                        <span className="journal-detail">{originData && originData.date}</span>
                    </Col>
                </Row>
                <Row className="emotion-container">
                    <Col>
                        <span className="journal-label">Emotion</span>
                        <Container>
                            <Row>
                                <Col><EmotionItem score="5" text="Very Good" active={originData && originData.emotion === 5 ? "active" : "inactive"}/></Col>
                                <Col><EmotionItem score="4" text="Good" active={originData && originData.emotion === 4 ? "active" : "inactive"}/></Col>
                                <Col><EmotionItem score="3" text="Normal" active={originData && originData.emotion === 3 ? "active" : "inactive"}/></Col>
                                <Col><EmotionItem score="2" text="Bad" active={originData && originData.emotion === 2 ? "active" : "inactive"}/></Col>
                                <Col><EmotionItem score="1" text="Very Bad" active={originData && originData.emotion === 1 ? "active" : "inactive"}/></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="journal-label">Content</span>
                        <p className="journal-detail content-container">{originData && originData.content}</p>
                    </Col>
                </Row>
            </Container>
            <Container className="padding-20">
                <Row>
                    <Col className="text-align-right"><Button className="margin-right-40" type="button" variant="light" onClick={() => {navigate("/")}}>Back</Button></Col>
                    <Col className="text-align-left"><Button type="button" onClick={() => {navigate("/edit?id=" + originData.id)}}>Edit</Button></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Journal;