import { useState } from 'react';
import './App.css';
import headerImg from './assets/image.png';

function App() {
  const [places, setPlaces] = useState([]);
  const [newPlace, setNewPlace] = useState('');
  const [gallery, setGallery] = useState({ open: false, images: [], index: 0 });

  const handleAddPlace = (e) => {
    e.preventDefault();
    if (!newPlace.trim()) return;
    setPlaces([
      ...places,
      { id: Date.now(), name: newPlace, date: '', visited: false, images: [] },
    ]);
    setNewPlace('');
  };

  const handleDelete = (id) => {
    setPlaces(places.filter((place) => place.id !== id));
  };

  const handleVisited = (id) => {
    setPlaces(
      places.map((place) =>
        place.id === id ? { ...place, visited: !place.visited } : place
      )
    );
  };

  const handleDateChange = (id, date) => {
    setPlaces(
      places.map((place) =>
        place.id === id ? { ...place, date } : place
      )
    );
  };

  const handleImagesChange = (id, files) => {
    const fileArr = Array.from(files);
    const readers = fileArr.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        })
    );
    Promise.all(readers).then((images) => {
      setPlaces((prev) =>
        prev.map((place) =>
          place.id === id ? { ...place, images: [...place.images, ...images] } : place
        )
      );
    });
  };

  const openGallery = (images, index) => {
    setGallery({ open: true, images, index });
  };

  const closeGallery = () => {
    setGallery({ open: false, images: [], index: 0 });
  };

  const nextImage = () => {
    setGallery((g) => ({ ...g, index: (g.index + 1) % g.images.length }));
  };

  const prevImage = () => {
    setGallery((g) => ({ ...g, index: (g.index - 1 + g.images.length) % g.images.length }));
  };

  return (
    <div className="app-container">
      <header>
        <img src={headerImg} alt="Travel Header" className="header-image" />
        <h1 >Travel Bucket List</h1>
        <p style={{color:'black'}} >Plan and track your dream destinations!</p>
      </header>
      <main>
        <section className="bucket-list-section">
          <h2>My Bucket List</h2>
          <form onSubmit={handleAddPlace} className="add-place-form">
            <input
              type="text"
              placeholder="Add a new place..."
              value={newPlace}
              onChange={(e) => setNewPlace(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
          <ul className="bucket-list">
            {places.map((place) => (
              <li key={place.id} className={place.visited ? 'visited' : ''}>
                <div className="place-header">
                  <span>{place.name}</span>
                  <button onClick={() => handleDelete(place.id)} title="Delete">🗑️</button>
                </div>
                <div className="place-controls">
                  <label>
                    Date:
                    <input
                      type="date"
                      value={place.date}
                      onChange={(e) => handleDateChange(place.id, e.target.value)}
                    />
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={place.visited}
                      onChange={() => handleVisited(place.id)}
                    />
                    Visited
                  </label>
                  {place.visited && (
                    <label className="image-upload">
                      <span>Add Photos: </span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleImagesChange(place.id, e.target.files)}
                      />
                      {place.images.length > 0 && (
                        <div className="gallery-preview">
                          {place.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={place.name + ' ' + (idx + 1)}
                              className="gallery-thumb"
                              onClick={() => openGallery(place.images, idx)}
                            />
                          ))}
                        </div>
                      )}
                    </label>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
        {gallery.open && (
          <div className="gallery-modal" onClick={closeGallery}>
            <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
              <button className="gallery-close" onClick={closeGallery}>&times;</button>
              <button className="gallery-nav left" onClick={prevImage}>&lt;</button>
              <img src={gallery.images[gallery.index]} alt="Gallery" className="gallery-main-img" />
              <button className="gallery-nav right" onClick={nextImage}>&gt;</button>
              <div className="gallery-count">{gallery.index + 1} / {gallery.images.length}</div>
            </div>
          </div>
        )}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Travel Bucket List</p>
      </footer>
    </div>
  );
}

export default App;
