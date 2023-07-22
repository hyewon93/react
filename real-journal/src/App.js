import React, { useReducer, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import New from './pages/New';
import Journal from './pages/Journal';
import Edit from './pages/Edit';

const reducer = (state, action) => {
  let newState = [];

  switch(action.type) {
    case "INIT": 
      return action.data;
    case "CREATE":
      newState = [action.data, ...state];
      break;
    case "REMOVE":
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    case "EDIT":
      newState = state.map((it) => it.id === action.data.id ? {...action.data} : it);
      break;
    default:
      return state;
  }

  return newState;
}

export const JournalStateContext = React.createContext();
export const JournalDispatchContext = React.createContext();

const dummyData = [
  { id:1, emotion:1, content:"독립 이래 최악의 외환위기를 겪어온 스리랑카가 결국 공식적인 디폴트(채무불이행) 상태라고 19일 로이터 통신이 보도했다.", date:"2023-07-13", },
  { id:2, emotion:2, content:"핀란드와 스웨덴이 북대서양조약기구 나토 가입을 위한 신청서를 제출했지만, 양국의 나토 가입을 반대해 온 터키의 입장은 여전히 강경합니다.", date:"2023-07-10", },
  { id:3, emotion:3, content:"전 세계 인구 절반 이상이 심장질환 발병 주요 위험요인 중 하나인 고혈압을 가지고 있다. 혈압 조절은 유전적 요인, 생활습관 요인, 체내 미생물군이 어떤 형태로 조화를 이뤄 기인하는 것으로 밝혀져 있다.", date:"2023-07-05", },
  { id:4, emotion:4, content:"로봇 산업은 공장과 같은 생산 현장에서 위험 작업을 대체하는 산업용과 의료·외식·숙박 등 부문에서 활용되는 서비스용으로 구분된다.", date:"2023-07-03", },
  { id:5, emotion:5, content:"칸 영화제에서 첫 선을 보인 배우 이정재의 감독 데뷔작 '헌트'가 상영 전회차 매진을 기록했다.", date:"2023-07-01", },
]

function App() {

  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  const onCreate = (journal) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: journal.date,
        content: journal.content,
        emotion: journal.emotion,
      }
    });
    dataId.current += 1;
  }

  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId
    });
  }

  const onUpdate = (journal) => {

    dispatch({
      type: "EDIT",
      data: {
        id: journal.id,
        date: journal.date,
        content: journal.content,
        emotion: journal.emotion,
      }
    });
  }

  return (
    <JournalStateContext.Provider value={data}>
      <JournalDispatchContext.Provider value={{onCreate, onUpdate, onRemove}}>
        <BrowserRouter>
          <div className='App'>
            <Routes>
              <Route path="/" element={<Home data={data}/>} />
              <Route path="/new" element={<New onCreate={onCreate}/>} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/edit" element={<Edit onUpdate={onUpdate} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </JournalDispatchContext.Provider>
    </JournalStateContext.Provider>
    
  )
}

export default App;
