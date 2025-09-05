export async function fetchDictionary(query) {
  const res = await fetch(`/api/dict/search?q=${encodeURIComponent(query)}`);
  return res.json();
}

export async function convertOldTurkic(text) {
  const res = await fetch(`/api/utils/convert?text=${encodeURIComponent(text)}`);
  return res.json();
}
