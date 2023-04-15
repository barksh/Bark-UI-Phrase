/**
 * @author WMXPY
 * @namespace Phrase
 * @description Routes
 */

import * as React from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import { LoadingView } from "./views/loading/loading";
import { PhrasesView } from "./views/phrases/phrases";
import { SignInView } from "./views/sign-in/sign-in";

const routes = [
    {
        path: "/",
        element: <Navigate to="/loading" replace />
    },
    {
        path: "/sign-in",
        element: <SignInView /> as React.ReactElement,
    },
    {
        path: "/loading",
        element: <LoadingView /> as React.ReactElement,
    },
    {
        path: "/phrases",
        element: <PhrasesView /> as React.ReactElement,
    },
];

export const browserRouter = createHashRouter(routes, {
});
