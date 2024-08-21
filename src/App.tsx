import MainPage from "./components/pages/MainPage.tsx";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div>
            <div className={"min-h-screen bg-white"}>
                <Router>
                    <MainPage/>
                </Router>
            </div>
        </div>
    );
}

export default App
