import { useNavigate, useSearchParams } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Edit = () => {

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    console.log("id : " + id);

    const mode = searchParams.get("mode");
    console.log("mode: " + mode);

    return (
        <div>
            <MyHeader headText="Edit Journal" leftChild={<MyButton text="<" onClick=""/>} rightChild={<MyButton text="Delete" type="negative" onClick=""/>}/>
            <h1>Edit</h1>
            <button onClick={ () => setSearchParams({who: "winterlood"}) }>QS Change</button>

            <button onClick={ () => {navigate("/home")}}>Home</button>
            <button onClick={ () => {navigate(-1)}}>Back</button>
        </div>
    );
}

export default Edit;