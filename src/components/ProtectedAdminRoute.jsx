import { Navigate } from 'react-router-dom'
import { verifyAdminToken } from '../lib/adminAuth'

export default function ProtectedAdminRoute({ children }) {
  if (!verifyAdminToken()) {
    return <Navigate to="/admin/login" replace />
  }
  return children
}
