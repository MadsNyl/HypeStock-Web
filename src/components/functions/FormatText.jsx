export default function FormatText(text, length) {
    if (text.length > length) return `${text.slice(0, length)}...`;
    return text;
}