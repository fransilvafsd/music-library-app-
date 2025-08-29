# Aplicativo Profissional de Músicas (80s–2025) — Protótipo React

```jsx
import React, { useState, useEffect } from "react";

export default function App() {
  const [library, setLibrary] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [filter, setFilter] = useState("");

  // Biblioteca de músicas fictícia (1980–2025)
  useEffect(() => {
    setLibrary([
      { id: 1, title: "Sweet Child O' Mine", artist: "Guns N' Roses", year: 1987, genre: "Rock in roll" },
      { id: 2, title: "Juicy", artist: "The Notorious B.I.G.", year: 1994, genre: "Rap gangsta" },
      { id: 3, title: "Nuthin' but a G Thang", artist: "Dr. Dre", year: 1992, genre: "Hip Hop Old School" },
      { id: 4, title: "Around the World", artist: "Daft Punk", year: 1997, genre: "Eletrônica (house)" },
      { id: 5, title: "No Woman No Cry", artist: "Bob Marley", year: 1980, genre: "Reggae roots" },
      { id: 6, title: "Shape of You", artist: "Ed Sheeran", year: 2017, genre: "Pop" }, // exemplo pós 2000
      { id: 7, title: "Blinding Lights", artist: "The Weeknd", year: 2020, genre: "Pop" },
      { id: 8, title: "New Era Song", artist: "Future Artist", year: 2025, genre: "Rap gangsta" }
    ]);
  }, []);

  const addToPlaylist = (song) => {
    if (!playlist.find((s) => s.id === song.id)) {
      setPlaylist([...playlist, song]);
      localStorage.setItem("playlist", JSON.stringify([...playlist, song]));
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("playlist");
    if (saved) setPlaylist(JSON.parse(saved));
  }, []);

  const filteredLibrary = filter
    ? library.filter((song) => song.genre.toLowerCase().includes(filter.toLowerCase()))
    : library;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🎵 Music Hits Pro (1980–2025)</h1>
      <p className="mb-6">Todos os hits de 1980 a 2000 + sucessos até 2025</p>

      {/* Filtros */}
      <div className="mb-4 flex gap-2 flex-wrap">
        {["Rock in roll", "Rap gangsta", "Hip Hop Old School", "Eletrônica (house)", "Reggae roots", "Pop"].map((g) => (
          <button
            key={g}
            className={`px-3 py-1 rounded-xl border ${filter === g ? "bg-white text-black" : "bg-gray-800"}`}
            onClick={() => setFilter(g)}
          >
            {g}
          </button>
        ))}
        <button className="px-3 py-1 rounded-xl border bg-red-800" onClick={() => setFilter("")}>
          Limpar
        </button>
      </div>

      {/* Biblioteca */}
      <h2 className="text-xl font-semibold mb-2">Biblioteca</h2>
      <ul className="space-y-2">
        {filteredLibrary.map((song) => (
          <li key={song.id} className="flex justify-between bg-gray-800 rounded-xl p-3">
            <div>
              <p className="font-bold">{song.title}</p>
              <p className="text-sm text-gray-400">{song.artist} • {song.year} • {song.genre}</p>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg"
              onClick={() => addToPlaylist(song)}
            >
              + Playlist
            </button>
          </li>
        ))}
      </ul>

      {/* Playlist */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Minha Playlist</h2>
      <ul className="space-y-2">
        {playlist.map((song) => (
          <li key={song.id} className="bg-gray-700 rounded-xl p-3">
            <p className="font-bold">{song.title}</p>
            <p className="text-sm text-gray-400">{song.artist} • {song.year} • {song.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```
