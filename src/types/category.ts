export type CategoryAccent = "cian" | "rosado" | "amarillo";

export interface Category {
  id: string;
  title: string;
  accent: CategoryAccent;
}
