// Places I've traveled. Add a new place by copying one of these lines.
// lon/lat place the pin on the map (look them up on Google Maps: right-click → coordinates are lat, lon).
// Optional: add photos: ["/travel/prague-1.jpg", "/travel/prague-2.jpg"] (files go in public/travel/).
// Aim for 3–5 per place, resized to ~1000px so the page stays fast.

export const places = [
  { name: "Metz", country: "France", lon: 6.18, lat: 49.12, note: "Home base — lived here all semester at GT-Europe", home: true,
    photos: ["/travel/metz-1.jpg", "/travel/metz-2.jpg", "/travel/metz-3.jpg", "/travel/metz-4.jpg",
             "/travel/metz-5.jpg", "/travel/metz-6.jpg", "/travel/metz-7.jpg"] },
  { name: "Paris", country: "France", lon: 2.35, lat: 48.86, note: "Twice — once more for the Christmas markets" },
  { name: "Strasbourg", country: "France", lon: 7.75, lat: 48.57 },
  { name: "Colmar", country: "France", lon: 7.36, lat: 48.08 },
  { name: "La Bresse", country: "France", lon: 6.88, lat: 48.0 },
  { name: "Lyon", country: "France", lon: 4.84, lat: 45.76 },
  { name: "Verdun", country: "France", lon: 5.38, lat: 49.16, note: "Verdun Memorial & Museum" },
  { name: "Fort Douaumont", country: "France", lon: 5.44, lat: 49.22 },
  { name: "Manderen", country: "France", lon: 6.44, lat: 49.46, note: "Château de Malbrouk" },
  { name: "Trier", country: "Germany", lon: 6.64, lat: 49.75 },
  { name: "Cologne", country: "Germany", lon: 6.96, lat: 50.94 },
  { name: "Luxembourg City", country: "Luxembourg", lon: 6.13, lat: 49.61 },
  { name: "Brussels", country: "Belgium", lon: 4.35, lat: 50.85 },
  { name: "Amsterdam", country: "Netherlands", lon: 4.9, lat: 52.37 },
  { name: "Interlaken", country: "Switzerland", lon: 7.86, lat: 46.69 },
  { name: "Bern", country: "Switzerland", lon: 7.45, lat: 46.95 },
  { name: "Lucerne", country: "Switzerland", lon: 8.31, lat: 47.05 },
  { name: "Lake Como", country: "Italy", lon: 9.2, lat: 45.98 },
  { name: "Venice", country: "Italy", lon: 12.32, lat: 45.44 },
  { name: "Pisa", country: "Italy", lon: 10.4, lat: 43.72 },
  { name: "Florence", country: "Italy", lon: 11.26, lat: 43.77 },
  { name: "Rome", country: "Italy", lon: 12.5, lat: 41.9 },
  { name: "Amalfi Coast", country: "Italy", lon: 14.6, lat: 40.63 },
  { name: "Vatican City", country: "Vatican City", lon: 12.45, lat: 41.9 },
  { name: "Prague", country: "Czech Republic", lon: 14.42, lat: 50.08 },
  { name: "Barcelona", country: "Spain", lon: 2.17, lat: 41.39 },
];
