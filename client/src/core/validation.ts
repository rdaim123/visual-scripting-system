export function validateConnection(
  sourceType: string,
  targetType: string
): boolean {
  if (sourceType === "event" && targetType !== "event") return false;
  if (sourceType !== targetType && sourceType !== "event") return false;
  return true;
}
