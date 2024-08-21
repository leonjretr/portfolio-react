import React, {useState, useEffect, useRef} from 'react';
import emailjs from "@emailjs/browser";
import {PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID} from "../../config/constants.ts";
import ToastStore from "../../stores/ToastStore.ts";
import {observer} from "mobx-react-lite";

const Terminal: React.FC = observer(() => {
    const welcomingTitle = 'Welcome to LeoTerm3000.';
    const helpTitle = "Available commands: name *your name*, email *your email*, message *your message*; To send: send data, to clear the terminal: clear"
    const terminalTitle = 'leonterminal $ ';

    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const terminalRef = useRef<HTMLDivElement>(null);
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formMessage, setFormMessage] = useState("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            executeCommand(input);
            setInput('');
        }
    };

    const executeCommand = (command: string) => {
        let output: string = "";
        switch (command.toLowerCase()) {
            case 'help':
                output = 'Available commands: name {your name}, email {your email}, message {your message}. It will automatically be sent off';
                break;
            case 'clear':
                setHistory([]);
                return;
            default:
                if (command.startsWith('name ')) {
                    const nameValue = command.slice(5).trim();
                    setFormName(nameValue);
                    output = `Your name has been saved: ${command.slice(5)}`;
                } else if (command.startsWith('email ')) {
                    if (formName) {
                        const emailValue = command.slice(6).trim();
                        setFormEmail(emailValue);
                        output = `Your email has been saved: ${command.slice(6)}`;
                    } else {
                        output = "You haven't given your name. Please, do so primarily"
                    }
                } else if (command.startsWith('message ')) {
                    if (formName && formEmail) {
                        const messageValue = command.slice(8).trim();
                        setFormMessage(messageValue);
                        output = `Your message has been saved: ${command.slice(8)}. Type "send data" to send your request.`;
                    } else {
                        output = "You haven't given your name or email. Please, do so primarily(in respective order)"
                    }
                } else if (command.startsWith('send data')) {
                    if (formName && formEmail && formMessage) {
                        sendEmail();
                        output = "Your inquiry has been successfully sent to Leonid.";
                    } else {
                        output = "You haven't given some of the information. Please, do so primarily(in respective order)"
                    }
                } else {
                    output = `Command not found: ${command}`;
                }
        }
        setHistory([...history, `leonterminal $ ${command}`, output]);
    };

    useEffect(() => {
        terminalRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [history]);

    const sendEmail = () => {
        const templateParams = {
            from_name: formName,
            from_email: formEmail,
            message: `Name: ${formName}\nE-mail: ${formEmail}\nMessage: ${formMessage}`
        };
        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                ToastStore.setToastSuccessful();
                ToastStore.setShowToast();
            })
            .catch(() => {
                    ToastStore.setToastUnsuccessful();
                    ToastStore.setShowToast();
                },
            );
        setFormName("");
        setFormEmail("");
        setFormMessage("");
    }

    return (
        <div className="flex flex-col bg-indigo-950 text-white text-sm font-terminalFont w-96 h-64 xl:w-130 xl:h-80 p-4 rounded-lg">
            <div className={"flex flex-col"}>
                <div>
                    {welcomingTitle}
                </div>
                <div>
                    {helpTitle}
                </div>
                <div className={"flex items-center mt-2 gap-3"}>
                    <div className={"text-gray-400"}>
                        {terminalTitle}
                    </div>
                    <input
                        className="flex justify-self-start bg-transparent text-white outline-none w-72"
                        type="text"
                        value={input}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                </div>
            </div>
            <div className="overflow-y-auto h-full mt-2">
                {history.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
                <div ref={terminalRef}></div>
            </div>
        </div>
    );
});

export default Terminal;