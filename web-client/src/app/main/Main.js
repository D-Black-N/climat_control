import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GreenHouses from './GreenHouses';
import '../../styles/main.css';
import GreenHouse from './GreenHouse';
import GreenHouseMonitoring from './GreenHouseMonitoring';
import GreenHouseSettings from './GreenHouseSettings';
import GreenHouseIndex from './GreenHouseIndex';
import GreenHouseHeader from './GreenHouseHeader';

function Main() {
  return (
    <div className='main'>
      <Routes>
        <Route path='greenhouses'>
          <Route index path='' element={<GreenHouses />} />
          <Route path=':id' element={<GreenHouse />}>
            <Route index path='' element={<GreenHouse />} />
            <Route path='monitoring' element={<GreenHouseMonitoring />} />
            <Route path='settings' element={<GreenHouseSettings />} />
          </Route>
        </Route>
        <Route path='/' element={<Navigate to='greenhouses' replace />} />
      </Routes>
    </div>
  )
}

export default Main;