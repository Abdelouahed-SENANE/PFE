export function truncate(string, n = 100) {
    if (string.length > n) {
        return string.slice(0, n) + ' ...';
    } else {
        return string;
    }
}