import React, {useState, useEffect} from 'react'

const EditProductForm = ({ product, onEditProduct}) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);

    const handleSubmit = (e) => {
        e.preventDefault();
        onEditProduct({id: product.id, name, price, stock: parseInt(stock) });
    }
  return (
    <div className='p-4'>
    <form onSubmit={handleSubmit} className='p-4 border rounded-lg bg-gray-300 mx-auto'>
    <div className='mb-4'>
        <label className='block mb-2'>Nama Produk</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='p-2 border w-full rounded-md' placeholder='Nama Produk' />
    </div>
    <div className='mb-4'>
        <label className='block mb-2'>Harga</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className='p-2 border w-full rounded-md' placeholder='Harga'/>
    </div>
    <div className='mb-4'>
        <label className='block mb-2'>Stok</label>
        <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} className='p-2 border w-full rounded-md' placeholder='Stok'/>
    </div>
    <button className='bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-semibold py-1 px-4'>Edit Produk</button>
    </form>
    </div>
  )
}

export default EditProductForm