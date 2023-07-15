import { useRef, useState } from "react";
import './App.css';
import JournalEditor from "./components/JournalEditor"
import JournalList from "./components/JournalList"

const App = () => {

  const [data, setData] = useState([]);
  const dataId = useRef(1);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };

    dataId.current += 1;

    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {

    const newJournalList = data.filter((it) => it.id !== targetId);
    setData(newJournalList);

  };

  const onUpdate = (targetId, newContent) => {

    setData(
      data.map( (it) =>
        it.id === targetId
        ? {...it, content: newContent}
        : it
      )
    );
  };

  return (
    <div className="App">
      <JournalEditor onCreate={onCreate}/>
      <JournalList journalList={data} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App;
