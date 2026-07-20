import { WFRPActor } from "./actor";
import { WFRPItem } from "./item";


Hooks.once(
    "init",
    () => {

        console.log(
            "WFRP1E | Initialising"
        );


        CONFIG.Actor.documentClass =
            WFRPActor;


        CONFIG.Item.documentClass =
            WFRPItem;

    }
);