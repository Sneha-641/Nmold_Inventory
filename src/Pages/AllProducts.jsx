import React from 'react'
import AllProductsComponent from '../Components/Products/AllProductsComponent'

const AllProducts = ({searchQuery}) => {
    return (
        <div className='ml-[16%]  w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
            <div className=''>
                <AllProductsComponent searchQuery={searchQuery} />
            </div>
        </div>
    )
}

export default AllProducts