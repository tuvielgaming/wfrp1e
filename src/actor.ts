// src/documents/actor.ts

export class WFRPActor extends FoundryActor {


    override prepareData(): void {

        super.prepareData();

        this.prepareDerivedData();
    }



    override prepareDerivedData(): void {

        const data =
            this.system as WFRP1EActorData;


        const wounds =
            data.attributes?.wounds;


        if (!wounds) {
            return;
        }


        if (wounds.value > wounds.max) {

            wounds.value =
                wounds.max;

        }
    }
}