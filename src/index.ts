export default function (maxLen: number, text: string): string {
  const out = [];
  let nextStart = 0;
  let lastSpace: number | null = null;
  for (let i = 0; i < text.length; i++) {
    // newlines get maintained
    if (text[i] === '\n') {
      out.push(text.substring(nextStart, i));
      nextStart = i + 1;
      lastSpace = null;
      continue;
    }

    // keep track of the last known space
    if (text[i] === ' ') {
      lastSpace = i;
    }

    // time to break
    if (i - nextStart >= maxLen) {
      const end = lastSpace || i;
      out.push(text.substring(nextStart, end));
      // nextStart drops the space if there was one
      nextStart = lastSpace === null ? i : lastSpace + 1;
      lastSpace = null;
    }
  }
  out.push(text.substring(nextStart));
  return out.join('\n');
}
