export function formatDate(value) {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const returnMonth = month > 9 ? month : `0${month}`;
    const day = date.getDate();
    const hours = date.getHours();
    const returnHours = hours > 9 ? hours : `0${hours}`;
    const minutes = date.getMinutes();
    return `${year}-${returnMonth}-${day} ${returnHours}:${minutes}`;
}

export function filterDate(value) {
    const year = value.getFullYear();
    const month = value.getMonth() + 1;
    const returnMonth = month > 9 ? month : `0${month}`;
    const day = value.getDate();

    return `${year}-${returnMonth}-${day}`;
}
