import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const Home = () => {
    return (
        <div>
            <MyHeader headText="Home" leftChild={<MyButton text="<" onClick=""/>} rightChild={<MyButton text=">" onClick=""/>}/>
            <div>
                <h1>Home</h1>
            </div>
        </div>
    );
}

export default Home;