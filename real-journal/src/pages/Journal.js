import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useSearchParams } from "react-router-dom";

const Journal = () => {

    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");

    return (
        <div>
            <MyHeader headText="Journal" leftChild={<MyButton text="<" onClick=""/>} rightChild={<MyButton text="Edit" type="positive" onClick=""/>}/>
            <h1>Journal</h1>
            <p>{id}</p>
        </div>
    );
}

export default Journal;