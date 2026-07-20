interface WFRP1EActorData {

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


    attributes: {

        wounds: {

            value: number;
            max: number;

        };


        fate: number;

        fortune: number;

        insanity: number;

        corruption: number;

    };


    career: {

        name: string;

        level: number;

    };

}



interface WFRP1EItemData {

    description: string;

    quantity?: number;

    weight?: number;

}