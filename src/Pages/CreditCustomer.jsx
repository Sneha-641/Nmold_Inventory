import React from 'react'
import DueCustomersComponent from '../Components/Customers/CreditCustomerComponent'

const DueCustomers = ({searchQuery}) => {
  return (
    <div className='ml-[16%]  w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
            <div className=''>
                <DueCustomersComponent searchQuery={searchQuery} />
            </div>
        </div>
  )
}

export default DueCustomers