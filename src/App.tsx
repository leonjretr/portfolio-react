import {BrowserRouter as Router} from "react-router-dom";
import MyRouting from "./components/routing/MyRouting.tsx";
import {Analytics} from "@vercel/analytics/react"

function App() {
    return (
        <div>
            <div className={"min-h-screen h-screen bg-white dark:bg-bgDarkColor scroll-smooth"}>
                <Router>
                    <MyRouting/>
                    <Analytics/>
                </Router>
            </div>
        </div>
    );
}

export default App
