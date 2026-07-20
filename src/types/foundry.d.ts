declare const Hooks: HooksStatic;

interface HooksStatic {
    once(event: string, callback: (...args: any[]) => void): number;

    on(event: string, callback: (...args: any[]) => void): number;
}

declare const game: Game;

declare const CONFIG: {
    Actor: {documentClass: typeof FoundryActor;};
    Item: {documentClass: typeof FoundryItem;};
};

interface Game {
    user: User | null;
}

interface User {
    id: string;
    name: string;
}
