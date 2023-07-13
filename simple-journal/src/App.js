import './App.css';
import JournalEditor from "./components/JournalEditor"
import JournalList from "./components/JournalList"

const App = () => {

  JournalList.defaultProps = {journalList: []}

  const dummyList = [
    {
      id: 1,
      author: "PERSON 1",
      content: "CONTENT 1",
      emotion: 5,
      create_date: new Date().getTime()
    },
    {
      id: 2,
      author: "PERSON 2",
      content: "CONTENT 2",
      emotion: 3,
      create_date: new Date().getTime()
    },
    {
      id: 3,
      author: "PERSON 3",
      content: "CONTENT 3",
      emotion: 1,
      create_date: new Date().getTime()
    }
  ];

  return (
    <div className="App">
      <JournalEditor />
      <JournalList journalList={dummyList}/>
    </div>
  )
}

export default App;
