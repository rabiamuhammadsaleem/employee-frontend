const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5012/api";

export async function api(path, options = {}) {
  const token = localStorage.getItem("employee-token");
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers },
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.message || `Request failed (${response.status})`);
  }
  return response.status === 204 ? null : response.json();
}

export const saveSession = (result) => { localStorage.setItem("employee-token", result.token); localStorage.setItem("employee-user", JSON.stringify(result.user)); };
