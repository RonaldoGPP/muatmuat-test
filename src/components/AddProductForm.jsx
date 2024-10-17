import React, {useState} from 'react'

const AddProductForm = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && price && stock) {
            onAddProduct({id:Date.now(), name, price: parseFloat(price), stock: parseInt(stock) });
            setName('');
            setPrice('');
            setStock('');
        }
        else{
            alert('Form tidak boleh kosong')
        }
    };
  
  
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
    <button className='bg-green-500 hover:bg-green-700 rounded-lg text-white font-semibold py-1 px-4'>Tambah Produk</button>
    </form>
    </div>
  )
}

export default AddProductForm