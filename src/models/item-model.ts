export interface WFRPItemSchema {
    description: string;

    quantity: number;

    weight: number;
}

export class WFRPItemDataModel extends foundry.abstract.TypeDataModel<WFRPItemSchema> {
    declare description: string;

    declare quantity: number;

    declare weight: number;

    static override defineSchema() {
        return {
            description: {},

            quantity: {},

            weight: {},
        };
    }

    override prepareDerivedData() {
        if (this.quantity < 1) {
            this.quantity = 1;
        }
    }
}
