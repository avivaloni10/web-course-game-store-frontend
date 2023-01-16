import {useEffect, useRef, useState} from "react";

import {Slide} from "@mui/material";
import {Box} from "@mui/system";

import {MessageText, PromotionsContainer} from "../../../styles/promotions";
import {getGamesForPromotions} from "../../../services";

export default function Promotions() {
    const containerRef = useRef();
    const [messages, setMessages] = useState([]);
    const [show, setShow] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000);
        const intervalId = setInterval(() => {
            setMessageIndex((i) => (i + 1) % messages.length);

            setShow(true);

            setTimeout(() => {
                setShow(false);
            }, 3000);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, [messages]);

    useEffect(() => {
        async function fetchGamesForPromotions() {
            setMessages((await getGamesForPromotions()).map(gameForPromotion =>
                "We got " + gameForPromotion.count + " different " + gameForPromotion._id + " stars games in stock!"
            ));
        }

        fetchGamesForPromotions();
    }, []);

    return (
        <PromotionsContainer ref={containerRef} overflow="hidden">
            <Slide
                direction={show ? "left" : "right"}
                in={show}
                container={containerRef.current}
                timeout={{
                    enter: 500,
                    exit: 100,
                }}
            >
                <Box display="flex" justifyContent="center" alignItems="center">
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    );
}
