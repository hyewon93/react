import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";

import Container from "react-bootstrap/esm/Container";
import MyHeader from "../components/MyHeader";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import EmotionItem from "../components/EmotionItem";

import "./page.css";
import "../resources/css/journal.css";

const New = ({onCreate}) => {

    const navigate = useNavigate();

    const emotionItems = useRef([]);

    const [journal, setJournal] = useState({
        content: "",
        date: "",
        emotion: 0,
    });
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

            setValidated(false);

        } else {

            if(journal.emotion < 1) {
                document.querySelector('.emotion_feedback').style.display = "block";

                event.preventDefault();
                event.stopPropagation();

                setValidated(false);

            } else {
                setValidated(true);

                onCreate(journal);
                navigate("/");
            }
        }
    };

    const changeJournal = (e) => {

        if(e.target.name === "content") {
            if(e.target.value === "" || e.target.value.length < 5) {
                e.target.classList.add("is-invalid");
            } else {
                e.target.classList.remove("is-invalid");
            }

        } else if(e.target.name === "date") {
            let inputDate = new Date(e.target.value);
            let currentDate = new Date();

            if(inputDate > currentDate) {
                e.target.classList.add("is-invalid");
            } else {
                e.target.classList.remove("is-invalid");
            }
        }

        setJournal({
            ...journal,
            [e.target.name]: e.target.value
        })
    }

    const selectEmotionCard = (idx) => {

        for(let i=0; i<emotionItems.current.length; i++) {
            emotionItems.current[i].classList.remove("active");
        }

        emotionItems.current[idx].classList.add("active");

        setJournal({
            ...journal,
            emotion: emotionItems.current[idx].attributes.getNamedItem('score').value
        })
    }

    return (
        <div>
            <MyHeader headText="New Journal"/>
            <Form className="new_form" validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="form_group" controlId="validationDate">
                    <Form.Label className="journal-label">Date</Form.Label>
                    <Form.Control required type="date" placeholder="Choose a date" name="date" onChange={changeJournal}/>
                    <Form.Control.Feedback type="invalid">Please choose a date.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form_group emotion_items">
                    <Form.Label className="journal-label">Emotion</Form.Label>
                    <Container>
                        <Row>
                            <Col><EmotionItem score="5" text="Very Good" innerRef={el => emotionItems.current[0] = el} onClick={() => selectEmotionCard(0)}/></Col>
                            <Col><EmotionItem score="4" text="Good" innerRef={el => emotionItems.current[1] = el} onClick={() => selectEmotionCard(1)}/></Col>
                            <Col><EmotionItem score="3" text="Normal" innerRef={el => emotionItems.current[2] = el} onClick={() => selectEmotionCard(2)}/></Col>
                            <Col><EmotionItem score="2" text="Bad" innerRef={el => emotionItems.current[3] = el} onClick={() => selectEmotionCard(3)}/></Col>
                            <Col><EmotionItem score="1" text="Very Bad" innerRef={el => emotionItems.current[4] = el} onClick={() => selectEmotionCard(4)}/></Col>
                        </Row>
                    </Container>
                    <Form.Control.Feedback type="invalid" className="emotion_feedback">Please choose an emotion.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form_group" controlId="validation">
                    <Form.Label className="journal-label">Content</Form.Label>
                    <Form.Control required as="textarea" rows={10} name="content" onChange={changeJournal}/>
                    <Form.Control.Feedback type="invalid">Please input content at least 5 characters.</Form.Control.Feedback>
                </Form.Group>
                <Button className="margin-right-40" type="button" variant="light" onClick={() => {navigate("/")}}>Cancel</Button>
                <Button type="submit">Save</Button>
            </Form>
        </div>
    );
}

export default New;