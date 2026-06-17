const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

/**
 * Cliente fetch tipado centralizado. Punto único de integración con
 * backends futuros (FastAPI / Spring Boot). Hoy no hay endpoints reales:
 * los componentes de la landing usan datos estáticos vía props.
 */
export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...init?.headers },
    ...init,
  });

  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
