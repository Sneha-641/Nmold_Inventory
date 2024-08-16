import React from 'react'
import CustomerReportComponent from '../Components/Customers/CustomerReportComponent'

const CustomerReport = ({ids, setShowPopup}) => {
  return (
    <div className='ml-[16%]  w-[84%] h-[100vh] px-[2rem] mt-[2rem]'>
            <div className=''>
            <CustomerReportComponent ids={ids} setids={() => setShowPopup(false)}/>
            </div>
        </div>
  )
}

export default CustomerReport