import React from 'react'

const ListPokemon = ({ pokemonList }) => {
  return (
    <div className='container'>
        <table className='table-auto w-full border-separate border-spacing-2 border border-slate-500 bg-gray-200 mx-auto rounded-lg'>
            <thead>
                <tr>
                    <th class="border border-slate-600 bg-gray-500 font-bold p-4">Nama Pokemon</th>
                </tr>
            </thead>
            <tbody>
                {pokemonList.map((pokemon, index) => (
                    <tr key={index}>
                        <td class="border border-slate-600 bg-slate-400 text-white font-semibold p-4">{pokemon.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListPokemon