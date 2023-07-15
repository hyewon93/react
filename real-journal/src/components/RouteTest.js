import { Link } from "react-router-dom";

const RouteTest = () => {
    return (
        <div>
            <Link to={"./"}>Home</Link><br/>
            <Link to={"./new"}>New</Link><br/>
            <Link to={"./journal"}>Journal</Link><br/>
            <Link to={"./edit"}>Edit</Link><br/>
        </div>
    )
}

export default RouteTest;