import React from 'react'

const UpdateSupplier = ({ ids, setids }) => {
    return (
        <>
            <div className={`${ids === 19 ? "" : "hidden"}`}>
                <div className='bg-white m-auto w-[379px] p-4 flex flex-col gap-4 rounded-xl border-2 border-[#5884FF]'>
                    <div className='' onClick={() => { setids(0) }}>
                        <h1 className='text-[1.5rem] text-center'>Update Customer</h1>
                    </div>
                    <div className=''>
                            <form className='flex flex-col gap-6'>
                            <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Customer Name</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Name' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Customer Mobile</label>
                                    <div className='mt-1'>
                                        <input type='number' placeholder='Contact Number' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Customer Email</label>
                                    <div className='mt-1'>
                                        <input type='email' placeholder='Email' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Customer Address</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Address' className='login-input4 w-full' />
                                    </div>
                                </div>
                            </form>
                            <div className='flex justify-center items-center mt-8 mb-6'>
                                <div className='btn' onClick={() => { setids(0) }}>Add</div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateSupplier