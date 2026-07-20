import { WFRPActor } from "./documents/actor";
import { WFRPItem } from "./documents/item";


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