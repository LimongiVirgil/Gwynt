export const getFactionCards = (faction) => {
	// Get the existing data
	var existing = localStorage.getItem(faction);

	return existing ? existing.split(',') : [];
}
