import { registerHooks } from "./hooks";

Hooks.once("init", () => {
    registerHooks();
});