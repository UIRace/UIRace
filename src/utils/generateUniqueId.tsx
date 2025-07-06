//
// This utility function generates a unique ID string.
// It can optionally take a prefix string, which will be prepended to the generated ID.

export function generateUniqueId(prefix = ""): string {
  const id = "xxxx-xxxx-xxxx-xxxx".replace(/[x]/g, () =>
    Math.floor(Math.random() * 36).toString(36)
  );
  return prefix ? `${prefix}-${id}` : id;
}

export default generateUniqueId;
