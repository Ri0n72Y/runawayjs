import { useEffect, useState } from "react";

export function useEventList() {
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    getEventList().then(setData);
  }, []);
  return { data };
}

/**
 * Retrieves the list of events from the server.
 * @returns {Promise<Array<string>>} A promise that resolves to an array of event IDs.
 */
export async function getEventList(): Promise<Array<string>> {
  const res = await fetch("/events.json");
  const data: Array<string> = await res.json();
  return data;
}

export async function getTextFile(url: string): Promise<string> {
  const res = await fetch(url);
  const data = await res.text();
  return data;
}
