import { useRef, useState, useEffect } from "react";
import './App.css';
import JournalEditor from "./components/JournalEditor"
import JournalList from "./components/JournalList"

const App = () => {

  const [data, setData] = useState([]);
  const dataId = useRef(1);

  const getData = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json());

    console.log(res);

    const initData = res.slice(0,20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++
      }
    });

    setData(initData);
  };

  useEffect(() => { getData(); }, []);

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
