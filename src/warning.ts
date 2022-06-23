// deno-lint-ignore-file no-explicit-any
export function warn(msg: string, ...args: any[]) {
  console.warn(`[Vue warn] ${msg}`, ...args)
}
