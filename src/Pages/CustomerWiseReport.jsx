import React from 'react'
import CustomersReportComponent from '../Components/Customers/CustomerWiseReportComponent'

const CustomersReport = ({searchQuery}) => {
  return (
    <div className='ml-[16%]  w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
            <div className=''>
                <CustomersReportComponent searchQuery={searchQuery}/>
            </div>
        </div>
  )
}

export default CustomersReport