import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Journal = () => {

    return (
        <div>
            <MyHeader headText="Journal" leftChild={<MyButton text="<" onClick=""/>} rightChild={<MyButton text="Edit" type="positive" onClick=""/>}/>
            <h1>Journal</h1>
        </div>
    );
}

export default Journal;