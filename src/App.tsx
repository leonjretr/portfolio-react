import {BrowserRouter as Router} from "react-router-dom";
import MyRouting from "./components/routing/MyRouting.tsx";
import {Analytics} from "@vercel/analytics/react"
import {ThemeProvider} from "./context/ThemeContext.tsx";

function App() {
    return (
        <ThemeProvider>
            <div>
                <div className={"min-h-screen bg-white dark:bg-bgDarkColor scroll-smooth"}>
                    <Router>
                        <MyRouting/>
                        <Analytics/>
                    </Router>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App
