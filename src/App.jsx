
import vendors from './data/vendors.js';
import Header from './components/Header.jsx';
import MenuList from './components/MenuList.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const selectedVendor = vendors[0];

  return (
    <>
      <Header />

      <main>
        <h2>Menu: {selectedVendor.name}</h2>

        <MenuList items={selectedVendor.menu} />
      </main>

      <Footer />
    </>
  );
}

export default App;
