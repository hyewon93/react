import './JournalItem.css';
import '../resources/fonts/font.css';
import MyButton from './MyButton';
import { useNavigate } from 'react-router-dom';



const JournalItem = ({journal}) => {

    const navigate = useNavigate();

    const printDate = (date) => {

        let inputDate = new Date(date);
        let printedDate = 
            inputDate.getFullYear() + "-" 
            + ((inputDate.getMonth() + 1) > 9 ? (inputDate.getMonth() + 1) : '0' + (inputDate.getMonth() + 1)) + "-" 
            + inputDate.getDate()
        ;
    
        return printedDate;
    }

    return (
        <div className="journal_container">
            <div className="journal_item emotion_image" style={{backgroundImage: `url('img/emotion_${journal.emotion}.png')`}}></div>
            <div className="journal_item journal_summary">
                <h4>{printDate(journal.date)}</h4>
                <p>{journal.content.substr(0, 25)} ...</p>
            </div>
            <div className="journal_item detail_btn"><MyButton text="DETAIL" type="light" onClick={ () => {navigate("/journal?id=" + journal.id)} } /></div>
        </div>
    )
}

export default JournalItem;