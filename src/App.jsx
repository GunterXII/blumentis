import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import ChiSiamo from "./components/Hero"
import Prodotti from "./components/Prodotti"
import Industrie from "./components/Industrie"
import Contatti from "./components/Contatti"
import PrivacyPolicy from "./components/PrivacyPolicy"
import PrivacyPolicySonia from "./components/PrivacyPolicySonia"
import CookiePolicy  from "./components/CookiePolicy"
import ProLineAnalytics from "./components/Proline"
import Optimai from "./components/Optimai"
import PiattaformeAgentiche from "./components/PiattaformeAgentiche"
import SviluppiCustom from "./components/SviluppiCustom"
import Hardware from "./components/Hardware"
import AdminLogin from "./components/AdminLogin"
import AdminDashboard from "./components/AdminDashboard"
import ProtectedAdminRoute from "./components/ProtectedAdminRoute"
import { trackPageView, startHeartbeat, stopHeartbeat, track } from "./lib/analytics"

const ScrollToHash = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = setTimeout(() => {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
    return () => clearTimeout(id)
  }, [hash, pathname])

  return null
}

const PageTracker = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    trackPageView(pathname)
    if (pathname === '/') track.homeView()
  }, [pathname])
  return null
}

const App = () => {
  useEffect(() => {
    startHeartbeat()
    return stopHeartbeat
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Routes>
        {/* Admin routes — Navbar non mostrata */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Sito pubblico */}
        <Route path="/*" element={
          <>
            <Navbar />
            <ScrollToHash />
            <PageTracker />
            <Routes>
              <Route path="/"                    element={<ChiSiamo />} />
              <Route path="/prodotti"            element={<Prodotti />} />
              <Route path="/prodotti/proline"    element={<ProLineAnalytics />} />
              <Route path="/prodotti/optimai"    element={<Optimai />} />
              <Route path="/prodotti/agentiche"  element={<PiattaformeAgentiche />} />
              <Route path="/prodotti/custom"     element={<SviluppiCustom />} />
              <Route path="/prodotti/hardware"   element={<Hardware />} />
              <Route path="/industrie"           element={<Industrie />} />
              <Route path="/contatti"            element={<Contatti />} />
              <Route path="/privacy"             element={<PrivacyPolicy />} />
              <Route path="/privacy-sonia"       element={<PrivacyPolicySonia />} />
              <Route path="/cookie"              element={<CookiePolicy />} />
            </Routes>
          </>
        } />
      </Routes>
    </div>
  )
}

export default App