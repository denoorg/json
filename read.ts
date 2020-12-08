export async function readFileJSON(path: string) {
  const data = Deno.readTextFile(path);
  return JSON.parse(await data);
}

export function readFileSyncJSON(path: string) {
  const data = Deno.readTextFileSync(path);
  return JSON.parse(data);
}