export interface WFRPActorSchema {
    characteristics: {
        ws: number;
        bs: number;
        s: number;
        t: number;
        ag: number;
        int: number;
        wp: number;
        fel: number;
    };

    wounds: {
        value: number;

        max: number;
    };

    fate: number;

    fortune: number;

    insanity: number;

    corruption: number;

    career: {
        name: string;

        level: number;
    };
}

export class WFRPActorDataModel extends foundry.abstract.TypeDataModel<WFRPActorSchema> {
    declare characteristics: WFRPActorSchema["characteristics"];

    declare wounds: WFRPActorSchema["wounds"];

    declare fate: number;

    declare fortune: number;

    declare insanity: number;

    declare corruption: number;

    declare career: WFRPActorSchema["career"];

    static override defineSchema() {
        return {
            characteristics: {},

            wounds: {},

            fate: {},

            fortune: {},

            insanity: {},

            corruption: {},

            career: {},
        };
    }

    override prepareDerivedData() {
        if (this.wounds.value > this.wounds.max) {
            this.wounds.value = this.wounds.max;
        }
    }
}
