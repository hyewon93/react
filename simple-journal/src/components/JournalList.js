import './JournalList.css';
import JournalItem from './JournalItem.js';

const JournalList = ({journalList}) => {
    return (
        <div className="JournalList">
            <h2>Journal List</h2>
            <h4>Total {journalList.length} journals</h4>
            <div>
                {journalList.map((item) => {
                    return <JournalItem item={item} key={item.id}/>
                })}
            </div>
        </div>
    );
};

export default JournalList;