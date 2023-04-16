/**
 * @author WMXPY
 * @namespace Views_Phrases
 * @description Phrases
 */

import { AppBar, Button, Card, CenteredLayout, NavigationLayout, SpinnerRectangle } from "@barksh/bark-design-react";
import { useAuthenticationToken } from "@barksh/client-authentication-react";
import * as React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { barkClient } from "../../util/bark-client";
import { PhrasesMenuView } from "./menu";

export const PhrasesView: React.FC = () => {

    const navigate = useNavigate();

    const authenticationToken = useAuthenticationToken(barkClient, () => {
        navigate('/loading');
    });

    if (authenticationToken.loading) {
        return (<CenteredLayout>
            <SpinnerRectangle />
        </CenteredLayout>);
    }

    return (<NavigationLayout
        navigation={<PhrasesMenuView />}
    >
        <AppBar
            title="Phrases"
        />
        <Card
            headerTitle={`Hello, ${authenticationToken.token.getAccountIdentifier()}`}
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
    </NavigationLayout>);
};
