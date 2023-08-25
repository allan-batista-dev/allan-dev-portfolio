"use client";

import { useState, useRef } from "react";
import { Button } from "./button";
import { Mail, Linkedin, Github, MessageCircle, Send, Laugh, HeartHandshake } from "lucide-react";
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function MyContacts() {
    let [message, setMessage] = useState('');
    const myContact = '44999692039'
    const [showTextArea, setShowTextArea] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const showTextMsg = () => {
        setShowTextArea(true);
        if (textareaRef.current) {
            textareaRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const iLovePortfolio = () => {
        const DefaultMsg = `Hi Allan, I loved your portfolio, can we talk?`;
        setMessage(DefaultMsg);
    }

    const nicePortfolio = () => {
        const DefaultMsg = `Wow, nice portfolio, shall we talk?`;
        setMessage(DefaultMsg);
    }

    const openLinkedin = () => {
        const link = 'https://www.linkedin.com/in/allan-batista-15bb8a165/'
        window.open(link);
    }

    const openEmail = () => {
        const email = 'allanbatistadev@gmail.com';
        window.location.href = `mailto:${email}`;
    }

    const openGithub = () => {
        const link = 'https://github.com/allan-batista-dev'
        window.open(link);
    }

    const handleSendMessage = () => {
        const contactPhoneFormatted = myContact.replace(/[^0-9]/g, '');
        const whatsappLink = `https://wa.me/${contactPhoneFormatted}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink);
    };

    return (
        <>
            <h2 className="text-center mb-10 text-3xl font-extrabold">
                My contacts.
            </h2>
            <div className="flex items-center justify-center gap-6">
                <div>
                    <Button onClick={openEmail}>
                        <Mail className="mr-2 h-4 w-4" /> Email
                    </Button>
                </div>
                <div>
                    <Button onClick={openLinkedin}>
                        <Linkedin className="mr-2 h-4 w-4" /> Linkedin
                    </Button>
                </div>
                <div>
                    <Button onClick={openGithub}>
                        <Github className="mr-2 h-4 w-4" /> Github
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5">
                <div className="relative group">
                    <Button onClick={showTextMsg} className="relative z-10">
                        <MessageCircle className="mr-2 h-6 w-6" /> WhatsApp
                    </Button>
                    <span className="absolute -top-1 z-10 -right-1 animate-ping inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
                    <span className="absolute -top-1 z-10 -right-1 inline-flex h-4 w-4 rounded-full bg-green-500"></span>
                </div>
            </div>
            {
                showTextArea && (
                    <div className="mt-10">
                        <p className="text-sm text-muted-foreground">
                            Choose a custom message or write it yourself
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4 my-3">
                            <div>
                                <Button onClick={iLovePortfolio} className="relative z-10">
                                    <Laugh className="mr-2 h-6 w-6" /> Hi Allan!
                                </Button>
                            </div>
                            <div>
                                <Button onClick={nicePortfolio} className="relative z-10">
                                    <HeartHandshake className="mr-2 h-6 w-6" /> Wow Allan!
                                </Button>
                            </div>
                        </div>
                        <Textarea
                            placeholder="Write your message"
                            value={message}
                            ref={textareaRef}
                        />
                        <div className="flex items-center justify-between mt-3">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    I will reply as soon as possible.
                                </p>
                            </div>
                            <div>
                                <Button onClick={handleSendMessage} className="relative z-10">
                                    <Send className="mr-2 h-6 w-6" /> Send
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}