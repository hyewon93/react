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

  return (
    <div className="App">
      <JournalEditor onCreate={onCreate}/>
      <JournalList journalList={data}/>
    </div>
  )
}

export default App;
