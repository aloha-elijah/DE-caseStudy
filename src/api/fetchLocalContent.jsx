export async function fetchLocalContent() {
  const res = await fetch("/data/localContent.json");
  if (!res.ok) throw new Error("Failed to load local content");
  return await res.json();
}
