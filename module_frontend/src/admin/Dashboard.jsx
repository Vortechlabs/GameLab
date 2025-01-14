import React from 'react'
import { AdminSidebar } from '../components/Sidebar'
import GamesTable from '../data/GamesTable'

function Dashboard() {
  return (
    <div className='flex h-screen'>
    <div className='fixed inset-y-0 left-0 w-64'>
         <AdminSidebar />
    </div>
        
    <div className='flex-1 ml-64 overflow-auto'>
        <h1 className='text-center text-3xl font-semibold my-6'>
            DATA GAME ON GAMELAB
        </h1>
            <GamesTable />
    </div>
    </div>
  );
}

export default Dashboard