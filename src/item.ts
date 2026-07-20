// src/documents/item.ts

export class WFRPItem extends FoundryItem {


    override prepareData(): void {

        super.prepareData();

        this.prepareDerivedData();

    }



    override prepareDerivedData(): void {

        const data =
            this.system as WFRP1EItemData;


        if (data.quantity === undefined) {

            data.quantity = 1;

        }
    }
}