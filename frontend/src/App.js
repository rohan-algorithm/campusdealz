import Navbar  from './components/common/Navbar';
import Footer  from './components/common/Footer';
import Categories from './components/items/Categories';
import ItemList from './components/items/ItemList';
import ItemPage from './components/items/ItemPage';
import Sidebar from './components/common/Sidebar';
function App() {
  return (
    <div className="App">
       <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
          <Categories/>
          <ItemList/>
          <ItemPage/>
          <Sidebar/>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
