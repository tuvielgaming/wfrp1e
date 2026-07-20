// src/types/datamodels.d.ts

declare namespace foundry {

    namespace abstract {

        class TypeDataModel<TSchema = any> {

            constructor(
                data?: Partial<TSchema>
            );


            static defineSchema(): Record<string, unknown>;


            prepareData(): void;

            prepareDerivedData(): void;
        }

    }
}