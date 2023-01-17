export default function TruncateInator(char, str) {
  const start = 0;
  const len = char;
  let description = str;

  if (description.length > len) {
    let newString = description.substring(start, len);
    return newString + "...";
  } else {
    return description;
  }
}
