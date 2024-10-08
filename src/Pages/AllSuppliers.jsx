import React from 'react'
import SupplierComponent from '../Components/Suppliers/AllSupplierComponent'
const Suppliers = ({searchQuery}) => {
    return (
        <div className='ml-[16%]  w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
            <div className=''>
                <SupplierComponent searchQuery={searchQuery} />
            </div>
        </div>
    )
}

export default Suppliers