// import MainPage from "./components/pages/MainPage.tsx";
import {BrowserRouter as Router} from "react-router-dom";
import MyRouting from "./components/routing/MyRouting.tsx";

function App() {
    return (
        <div>
            <div className={"min-h-screen bg-white scroll-smooth"}>
                <Router>
                    <MyRouting/>
                    {/*<MainPage/>*/}
                </Router>
            </div>
        </div>
    );
}

export default App
