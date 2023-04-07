/**
 * @author WMXPY
 * @namespace Util
 * @description Bark Client
 */

import { BarkAuthenticationClient } from "@barksh/client-authentication-browser";

export const barkClient = BarkAuthenticationClient
    .create('phrase.bark.sh');

barkClient.addOnSignOutAction(() => {
    window.location.replace('/');
});
