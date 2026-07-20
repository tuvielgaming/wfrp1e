// src/types/documents.d.ts

declare class FoundryDocument {

    id: string | null;

    name: string;

    system: Record<string, unknown>;


    constructor(
        data?: Record<string, unknown>
    );


    update(
        data: Record<string, unknown>
    ): Promise<this>;


    delete(): Promise<this>;
}



declare class FoundryActor extends FoundryDocument {

    items: FoundryCollection<FoundryItem>;


    constructor(
        data?: Record<string, unknown>
    );


    prepareData(): void;


    prepareDerivedData(): void;
}



declare class FoundryItem extends FoundryDocument {

    type: string;


    constructor(
        data?: Record<string, unknown>
    );


    prepareData(): void;


    prepareDerivedData(): void;
}



interface FoundryCollection<T> {

    contents: T[];


    get(
        id: string
    ): T | undefined;
}