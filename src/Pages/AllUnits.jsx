import React from 'react'
import AllUnitsComponent from '../Components/Units/AllUnitsComponent'

const Units = () => {
    return (
        <div className='ml-[16%]  w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'> {/*h-[100vh]*/}
            <div className=''>
                <AllUnitsComponent />
            </div>
        </div>
    )
}

export default Units