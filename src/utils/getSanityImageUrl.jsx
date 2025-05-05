export function getSanityImageUrl(ref) {
  if (!ref || typeof ref !== "string") return "";
  const [_, id, size, ext] =
    ref.match(/^image\-([a-zA-Z0-9]+)\-(\d+x\d+)\-(\w+)$/) || [];
  return id
    ? `https://cdn.sanity.io/images/facn3pk3/dev/${id}-${size}.${ext}`
    : "";
}
