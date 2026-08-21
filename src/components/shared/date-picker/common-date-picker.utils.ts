export const formatDate = (date: Date | undefined) => {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const isValidDate = (date: Date | undefined) => {
  if (!date) {
    return false;
  }

  return !isNaN(date.getTime());
};

export const parseDateFieldValue = (value: unknown): Date | undefined => {
  if (value == null || value === "") return undefined;
  if (value instanceof Date) return isValidDate(value) ? value : undefined;
  if (typeof value === "string") {
    const parsed = new Date(value);
    return isValidDate(parsed) ? parsed : undefined;
  }

  return undefined;
};
