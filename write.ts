export async function writeFileJSON(path: string, data: string) {
  return await Deno.writeTextFile(path, data);
}

export function writeFileSyncJSON(path: string, data: string) {
  return Deno.writeTextFileSync(path, data);
}