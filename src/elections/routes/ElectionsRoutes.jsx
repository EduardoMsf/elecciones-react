import { Routes, Route, Navigate } from 'react-router-dom'
import { ElectionDragQueen } from '../pages/ElectionDragQueen'
import { ElectionHome } from '../pages/ElectionHome'
import { ElectionPresident } from '../pages/ElectionPresident'
import { ElectionResults } from '../pages/ElectionResults'
import { ElectionSenators } from '../pages/ElectionSenators'
import { ElectionGraphs } from '../pages/ElectionsGraphs'
import { ElectionVicePresident } from '../pages/ElectionVicePresident'



export const ElectionsRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<ElectionHome />} />
      <Route path='/presidencia' element={<ElectionPresident />} />
      <Route path='/senadores' element={<ElectionSenators />} />
      <Route path='/vice' element={<ElectionVicePresident />} />
      <Route path='/drag' element={<ElectionDragQueen />} />
      <Route path='/graphs' element={<ElectionGraphs />} />
      <Route path='/results' element={<ElectionResults />} />
    </Routes>
  )
}
