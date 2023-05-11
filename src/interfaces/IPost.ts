export interface IPost {
    id: number,
    title: string,
    tags: string[],
    time: Date,
    content?: string
}