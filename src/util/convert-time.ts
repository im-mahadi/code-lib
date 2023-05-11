export function convertTime(date: Date) {
    const day = date.getDate();
    const year = date.getFullYear();
    const monthName = new Date(date).toLocaleString("en-US", {
        month: "long",
    });

    return `${day}th ${monthName} ${year}`;
}
