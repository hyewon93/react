import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const New = () => {
    return (
        <div>
            <MyHeader headText="New Journal" leftChild={<MyButton text="<" onClick=""/>}/>
            <h1>New</h1>
        </div>
    );
}

export default New;