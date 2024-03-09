import React from 'react'


export default function SearchBar() {

    async function getCompany(){
        try {
            const getCUser = await fetch('');
                return getCUser.json();
        } catch (error) {
            console.log(error)
        }
    }


   
  return (
    <div className='w-calc[100vw - 225px)] h-20 border-b-gray-600 border-2'>
        <h1>Companies</h1>
    </div>
  )
}
