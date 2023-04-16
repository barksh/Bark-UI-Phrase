/**
 * @author WMXPY
 * @namespace Views_Loading
 * @description Loading
 */

import { CenteredLayout, SpinnerRectangle } from "@barksh/bark-design-react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { barkClient } from "../../util/bark-client";

export const LoadingView: React.FC = () => {

    const navigate = useNavigate();

    const register = async () => {

        await barkClient.createStartUpRegisterer().register();
    };

    const verifyToken = async () => {

        const token = await barkClient.getAuthenticationToken();

        if (!token) {

            const queryRegisterer = barkClient.createQueryRegisterer(
                'expose-key',
            );

            queryRegisterer.addSucceedAction(() => {
                navigate('/phrases');
            });
            queryRegisterer.addNeutralAction(() => {
                navigate('/sign-in');
            });

            await queryRegisterer.register();
            return;
        }

        const verifyResult = token.verifyExpiration();

        if (verifyResult) {
            navigate('/phrases');
            return;
        } else {
            navigate('/sign-in');
            return;
        }
    };

    React.useEffect(() => {
        register();
        verifyToken();
    }, []);

    return (<CenteredLayout>
        <SpinnerRectangle />
    </CenteredLayout>);
};
