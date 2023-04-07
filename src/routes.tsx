/**
 * @author WMXPY
 * @namespace Phrase
 * @description Routes
 */

import * as React from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import { PhrasesView } from "./views/phrases/phrases";

const routes = [
    {
        path: "/",
        element: <Navigate to="/loading" replace />
    },
    {
        path: "/phrases",
        element: <PhrasesView /> as React.ReactElement,
    },
];

export const browserRouter = createHashRouter(routes, {
});
