import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import JournalItem from "./JournalItem";
import MyButton from './MyButton';

import './JournalList.css';
import { useNavigate } from 'react-router';

const JournalList = ({journalList}) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='menu_wrapper'>
                <Container>
                    <Row>
                        <Col className='menu_sort'>
                            <DropdownButton title="Sort by Date" variant="secondary">
                                <Dropdown.Item>Newest</Dropdown.Item>
                                <Dropdown.Item>Oldest</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col className='menu_sort'>
                            <DropdownButton title="Sort by Emotion" variant="secondary">
                                <Dropdown.Item>All</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Emotion 5</Dropdown.Item>
                                <Dropdown.Item>Emotion 4</Dropdown.Item>
                                <Dropdown.Item>Emotion 3</Dropdown.Item>
                                <Dropdown.Item>Emotion 2</Dropdown.Item>
                                <Dropdown.Item>Emotion 1</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col className='menu_new'>
                            <MyButton text="New" type="success" onClick={ () => {navigate("/new")}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                {journalList.map((journal) => {
                    return <JournalItem journal={journal} key={journal.id}/>
                })}
            </div>
        </div>
    )
}

export default JournalList;