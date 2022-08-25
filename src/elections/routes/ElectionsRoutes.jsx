import { Routes, Route, Navigate } from 'react-router-dom'
import { ElectionHome } from '../pages/ElectionHome'
import { ElectionPresident } from '../pages/ElectionPresident'

export const ElectionsRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<ElectionHome />} />
      <Route path='/presidencia' element={<ElectionPresident />} />
    </Routes>
  )
}
