import Terminal from "../terminal/Terminal.tsx";

const ContactSection = () => {
    return (
        <div className={"flex flex-col mb-5 justify-center"}>
            <h1 className={"font-interFont text-5xl font-bold text-center mb-5"}>Contact me</h1>
            <div className={"flex justify-center"}>
                <div className={"flex flex-col px-5 rounded-lg"}>
                    {/*<h1 className={"font-interFont text-sm text-left font-medium p-4"}>*/}
                    {/*    Available commands: "name *your name*", "email *your email*", <br/>"message *your message*"<br/>*/}
                    {/*    To send: "send data", to clear the terminal: "clear"*/}
                    {/*</h1>*/}
                    {/*<div className={"flex gap-1 my-1 items-center"}>*/}
                    {/*    Please type: <KBD text={"name {your name}"}/>,*/}
                    {/*    <KBD text={"email {your email"}/>,*/}
                    {/*    <KBD text={"message {your message}"}/> in respective order.*/}
                    {/*</div>*/}
                    {/*<div className={"flex gap-1 mb-2 items-center"}>*/}
                    {/*    To send type: <KBD text={"send data"}/>*/}
                    {/*</div>*/}
                    <Terminal/>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;