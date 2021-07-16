export const split = (array: Array<any>, n: number) => {
    array.reduce(
        (a, c, i) =>
            i % n == 0
                ? [...a, [c]]
                : [...a.slice(0, -1), [...a[a.length - 1], c]],
        []
    );
};

export const formatDate = (date: any, format: string): string => {
    if (!format) {
        format = "YYYY/MM/DD hh:mm:ss";
    }

    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ("0" + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ("0" + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));

    return format;
};
