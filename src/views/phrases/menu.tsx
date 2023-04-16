/**
 * @author WMXPY
 * @namespace Views_Phrases
 * @description Menu
 */

import { Menu, MenuItem } from "@barksh/bark-design-react";
import * as React from "react";

export const PhrasesMenuView: React.FC = () => {

    return (<Menu
        maximizeWidth
        maximizeHeight
        minHeight="100vh"
        noBorder
    >
        <MenuItem
            title="Phrases"
        >
        </MenuItem>
    </Menu>);
};
