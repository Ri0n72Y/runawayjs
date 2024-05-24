export function urlParams(key?: string | string[]) {
  const params = new URLSearchParams(window.location.search);
  if (typeof key === "string") {
    return params.get(key);
  } else if (Array.isArray(key)) {
    return key.map((k) => params.get(k));
  }
  return params;
}
