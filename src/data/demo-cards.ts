import { IPost } from "@/interfaces/IPost";

export const posts: IPost[] = [
    {
        id: 1,
        title: "This is a card",
        tags: ["card", "demo"],
        time: new Date(),
    },
    {
        id: 2,
        title: "This is another card",
        tags: ["card", "demo", "example"],
        time: new Date(),
    },
    {
        id: 3,
        title: "This is a third card",
        tags: ["card", "demo", "tutorial"],
        time: new Date(),
    },
    {
        id: 4,
        title: "This is a fourth card",
        tags: ["card", "demo", "question"],
        time: new Date(),
    },
    {
        id: 5,
        title: "This is a fifth card",
        tags: ["card", "demo", "answer"],
        time: new Date(),
    },
];
