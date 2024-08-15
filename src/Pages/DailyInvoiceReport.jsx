import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DailyInvoiceReport = () => {
  return (
    <>
      <div className='ml-[16%]'>
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <h2 className="text-xl font-semibold">Back</h2>
                </div>
                
            </div>
            <div className='home-table2-type3 rounded-xl flex justify-center'>
                <div className='pt-[1.6rem] flex flex-col items-center w-full '>
                    <div className='font-bold text-[25px]'>
                        Daily Invoice Report
                    </div>
                    <div className='mt-4 w-[95%]'>
                        <div className=''>
                            <form className='flex flex-col gap-4'>
                                <div className='flex space-x-2'>
                                <div className='add-items-class w-1/2'>
                                    <label className='px-[10px] text-[15px]'>Start Date</label>
                                    <div className='mt-1'>
                                        <input type='date' placeholder='Unit' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class w-1/2'>
                                    <label className='px-[10px] text-[15px]'>End Date</label>
                                    <div className='mt-1'>
                                        <input type='date' placeholder='Category' className='login-input4 w-full' />
                                    </div>
                                </div>
                                </div>
                            </form>
                            <div className='flex justify-center items-center mt-8 mb-6'>
                                <div className='btn w-[200px] h-[40px] items-center shadow-sm shadow-[#5884FF]'onClick={() => { }}> Set Date</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </>
  )
}

export default DailyInvoiceReport
