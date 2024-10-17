import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProducts, editProducts, deleteProducts } from './redux/reducer/productReducer';
import Product from './components/Product';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';
import ListPokemon from './components/ListPokemon';


function App() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState(null);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('price-asc');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  }

  const sortedProduct = [...products].sort((a, b) => {
    if (sort === 'price-asc') {
      return a.price - b.price;
    }
    if (sort === 'price-desc') {
      return b.price - a.price;
    }
    if (sort === 'stock-asc') {
      return a.stock - b.stock;
    }
    if (sort === 'stock-desc') {
      return b.stock - a.stock;
    }
    return 0;
  });

  const filterProducts =  sortedProduct.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddProduct = (product) => {
    dispatch(addProducts(product));
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleUpdateProduct = (updatedProduct) => {
    dispatch(editProducts(updatedProduct));
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProducts(id));
  };

  const [pokemon,setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(data => setPokemon(data.results))
  }, []);

  return (
    <div className='mx-auto p-4 container'>
      <div className='flex justify-between items-center mb-4 mx-auto'>
      <input type='text' placeholder='Cari Produk' value={search} onChange={handleSearch} className='p-2 border w-1/2 rounded-md m-4'/>
      <select onChange={handleSort} value={sort} className='p-2 border rounded-md w-1/2 m-4'>
        <option value='price-asc'>Harga Terendah</option>
        <option value='price-desc'>Harga Tertinggi</option>
        <option value='stock-asc'>Stok Terendah</option>
        <option value='stock-desc'>Stok Tertinggi</option>
      </select>
      </div>
      
      {editingProduct ?(
        <EditProductForm product={editingProduct} onEditProduct={handleUpdateProduct} />
      ): (
        <AddProductForm onAddProduct={handleAddProduct}/>
      )}
     <Product products={filterProducts} onEdit={handleEditProduct} onDelete={handleDeleteProduct}/>
     <ListPokemon pokemonList={pokemon}/>
    </div>
  );
}

export default App;
