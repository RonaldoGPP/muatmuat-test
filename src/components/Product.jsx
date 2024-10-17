import React from 'react'

const Product = ({ products, onEdit, onDelete}) => {
  return (
    <section id='product'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {products.map((product) => (
            <div key={product.id} className='p-4 border border-black rounded-lg shadow-lg bg-white m-4 grid w-full'>
                <h1 className='text-3xl font-bold h-full p-4'>{product.name}</h1>
                <p className='text-gray-600 p-4 font-semibold'>Harga: {product.price}</p>
                <p className={product.stock > 0 ? 'text-green-500 p-4 mb-3' : 'text-red-500 p-4 mb-3'}>Stok: {product.stock}</p>
                {/* <h2 className='text-xl font-semibold h-full p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptatum. Quibusdam tempora totam dolorum quam laudantium veniam expedita nostrum suscipit commodi ratione possimus adipisci vitae, fuga blanditiis, ex temporibus voluptatem.</h2>
                <p className='text-gray-600 p-4'>Harga: XXXXXXX</p>
                <p className='text-gray-600 p-4'>Stok: XX</p> */}
                <div>
                    <button onClick={() => onEdit(product)} className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-lg mr-2'>Edit</button>
                    <button onClick={() => onDelete(product.id)} className='bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded-lg'>Hapus</button>
                </div>
            </div>
        ))}
    </div>
    </section>
  )
}

export default Product