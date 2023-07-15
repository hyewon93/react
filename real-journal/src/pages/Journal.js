import { useParams } from "react-router";

const Journal = () => {

    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <h1>Journal</h1>
        </div>
    );
}

export default Journal;