import JournalItem from "./JournalItem";

const JournalList = ({journalList}) => {
    return (
        <div>
            {journalList.map((journal) => {
                return <JournalItem journal={journal} key={journal.id}/>
            })}
        </div>
    )
}

export default JournalList;