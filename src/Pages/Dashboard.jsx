import React from 'react'
import "../Styles/Home.css"
import Card from '../Components/Dashboard/Card'
import Table from '../Components/Dashboard/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <>
      <div className='ml-[16%] w-[84%] h-[100vh] px-[2rem] mt-[2rem] mb-[4rem]'>
        <div className=''>
          <div className=' flex space-x-2 font-bold text-[20px] items-center'>
          <FontAwesomeIcon icon={faArrowLeft} />
          <h2 className="text-xl font-semibold">Dashboard</h2>
          </div>
          <Card />
          <Table />
        </div>
      </div>
    </>
  )
}

export default Dashboard