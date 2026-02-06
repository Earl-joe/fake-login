const API_BASE_URL = "/api/auth";

export async function login({ email, password }) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      // throw error to frontend
      throw new Error(data.message || "Login failed");
    }

    return data; // contains { message, user }
  } catch (err) {
    throw new Error(err.message || "Login failed");
  }
}
