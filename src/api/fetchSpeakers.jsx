const SANITY_URL = `https://facn3pk3.api.sanity.io/v2021-10-21/data/query/dev`;

export async function fetchSpeakers() {
  const query = encodeURIComponent(
    `*[_type == "eventSpeaker" && eventName == "case-study"]`
  );
  const url = `${SANITY_URL}/?query=${query}`;
  const res = await fetch(url);
  const json = await res.json();
  return json.result || [];
}
