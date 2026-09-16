export function greeting(name: string): string {
  const normalizedName = name.trim();
  return `Hello, ${normalizedName || "world"}!`;
}
