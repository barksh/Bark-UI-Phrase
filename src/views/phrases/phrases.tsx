/**
 * @author WMXPY
 * @namespace Views_Phrases
 * @description Phrases
 */

import { Button, Card } from "@barksh/bark-design-react";
import { BarkAuthenticationToken, BarkRefreshToken } from "@barksh/token-browser";
import * as React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { barkClient } from "../../util/bark-client";
import { PhrasesContainer } from "./styles/container";

export const PhrasesView: React.FC = () => {

    const [authenticationToken, setAuthenticationToken] = React.useState<BarkAuthenticationToken | null>(null);
    const [refreshToken, setRefreshToken] = React.useState<BarkRefreshToken | null>(null);

    const navigate = useNavigate();

    const verifyToken = async () => {

        const aToken = await barkClient.getAuthenticationToken();
        const rToken = await barkClient.getRefreshToken();

        if (!aToken || !rToken) {
            navigate('/loading');
            return;
        }

        setAuthenticationToken(aToken);
        setRefreshToken(rToken);
    };

    React.useEffect(() => {
        verifyToken();
    }, []);

    if (authenticationToken && refreshToken) {
        return (<PhrasesContainer>
            <Card
                headerTitle={`Hello, ${authenticationToken.getAccountIdentifier()}`}
                minWidth="min(512px, 100vw)"
                maxWidth="768px"
                noPadding
                actions={<Button
                    actionPrefix
                    prefix={<HiOutlineLogout
                        size={18}
                    />}
                    onClick={() => {
                        barkClient.signOut();
                    }}
                >
                    Sign Out
                </Button>}
            >
            </Card>
        </PhrasesContainer>);
    }

    return (<PhrasesContainer>
        Loading
    </PhrasesContainer>);
};
