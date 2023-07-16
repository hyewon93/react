import { useState } from "react";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import JournalList from "../components/JournalList";

const Home = ({data}) => {

    const [curDate, setCurDate] = useState(new Date());
    const headText = `${["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG", "SEP","OCT","NOV","DEC"][curDate.getMonth()]}, ${curDate.getFullYear()}`;

    const nextMonth = () => {
        let nextMonth = new Date();
        nextMonth.setMonth(curDate.getMonth() + 1);

        setCurDate(nextMonth);
    };

    const prevMonth = () => {
        let prevMonth = new Date();
        prevMonth.setMonth(curDate.getMonth() - 1);

        setCurDate(prevMonth);
    };

    return (
        <div>
            <MyHeader headText={headText} leftChild={<MyButton text="<" onClick={prevMonth}/>} rightChild={<MyButton text=">" onClick={nextMonth}/>}/>
            <div>
                <JournalList journalList={data} />
            </div>
        </div>
    );
}

export default Home;