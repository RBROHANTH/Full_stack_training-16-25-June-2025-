import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Travel Bucket List</h1>
        <p>Plan and track your dream destinations!</p>
      </header>
      <main>
        <section className="bucket-list-section">
          <h2>My Bucket List</h2>
          <ul className="bucket-list">
            <li>Paris, France</li>
            <li>Kyoto, Japan</li>
            <li>Grand Canyon, USA</li>
            <li>Great Barrier Reef, Australia</li>
            <li>Machu Picchu, Peru</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Travel Bucket List</p>
      </footer>
    </div>
  );
}

export default App;
