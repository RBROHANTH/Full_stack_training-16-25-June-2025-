import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import headerImg from './assets/image.png';

const API = 'https://final-project-backend-badp.onrender.com/api/bucketlist'; // Change as needed

const BucketList = () => {
  const [place, setPlace] = useState('');
  const [bucketList, setBucketList] = useState([]);
  const [editing, setEditing] = useState(null);
  const [gallery, setGallery] = useState({ open: false, images: [], index: 0 });

  const fetchBucketList = async () => {
    const response = await axios.get(API);
    setBucketList(response.data);
  };

  useEffect(() => {
    fetchBucketList();
  }, []);

  const handleAddOrEdit = async (e) => {
    e.preventDefault();
    if (editing) {
      await axios.put(`${API}/edit/${editing._id}`, { place });
      setEditing(null);
    } else {
      await axios.post(API, { place });
    }
    setPlace('');
    fetchBucketList();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/delete/${id}`);
    fetchBucketList();
  };

  const handleToggleVisited = async (item) => {
    await axios.put(`${API}/edit/${item._id}`, {
      place: item.place,
      visited: !item.visited,
      notes: item.notes,
      image: item.image
    });
    fetchBucketList();
  };

  const handleImagesChange = async (id, files) => {
    const fileArr = Array.from(files);
    const readers = fileArr.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        })
    );
    const images = await Promise.all(readers);

    // Find the item to update
    const item = bucketList.find((item) => item._id === id);

    // Update the backend with the new images
    await axios.put(`${API}/edit/${id}`, {
      ...item,
      images: [...(item.images || []), ...images],
    });

    fetchBucketList();
  };

  const openGallery = (images, index) => {
    setGallery({ open: true, images, index });
  };

  const closeGallery = () => {
    setGallery({ open: false, images: [], index: 0 });
  };

  const nextImage = () => {
    setGallery(g => ({ ...g, index: (g.index + 1) % g.images.length }));
  };

  const prevImage = () => {
    setGallery(g => ({ ...g, index: (g.index - 1 + g.images.length) % g.images.length }));
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
          <form onSubmit={handleAddOrEdit} className="add-place-form">
            <input
              type="text"
              placeholder="Enter a place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <button type="submit">{editing ? 'Update' : 'Add'}</button>
          </form>
          <ul className="bucket-list">
            {bucketList.map(item => (
              <li key={item._id} className={item.visited ? 'visited' : ''}>
                <div className="place-header">
                  <span
                    onClick={() => handleToggleVisited(item)}
                    style={{
                      cursor: 'pointer',
                      textDecoration: item.visited ? 'line-through' : 'none'
                    }}
                  >
                    {item.place}
                  </span>
                  <button onClick={() => handleDelete(item._id)} title="Delete">🗑️</button>
                </div>
                <div className="place-controls">
                  <label>
                    Date:
                    <input
                      type="date"
                      value={item.date}
                      onChange={(e) => {
                        // Handle date change
                      }}
                    />
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={item.visited}
                      onChange={() => handleToggleVisited(item)}
                    />
                    Visited
                  </label>
                  {item.visited && (
                    <label className="image-upload">
                      <span>Add Photos: </span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={e => handleImagesChange(item._id, e.target.files)}
                      />
                      {Array.isArray(item.images) && item.images.length > 0 && (
                        <div className="gallery-preview">
                          {item.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={item.place + ' ' + (idx + 1)}
                              className="gallery-thumb"
                              onClick={() => openGallery(item.images, idx)}
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
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Travel Bucket List</p>
      </footer>
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
    </div>
  );
};

export default BucketList;
