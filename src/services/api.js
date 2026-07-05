const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log("BASE_URL", BASE_URL);

// Get a list of hotels. Pass a search term to filter by name/location.
export async function getHotels(search = "") {
  const url = search
    ? `${BASE_URL}?limit=30&search=${encodeURIComponent(search)}`
    : `${BASE_URL}?limit=30`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch hotels");

  const result = await response.json();
  return result.data;
}

// Get a single hotel by its id.
export async function getHotelById(id) {
  const response = await fetch(`${BASE_URL}${id}/`);
  if (!response.ok) throw new Error("Failed to fetch hotel");

  const result = await response.json();
  return result.data;
}
