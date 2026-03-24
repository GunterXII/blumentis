import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import ChiSiamo from "./components/Hero"
import Prodotti from "./components/Prodotti"
import Industrie from "./components/Industrie"
import Contatti from "./components/Contatti"
import PrivacyPolicy from "./components/PrivacyPolicy"
import CookiePolicy  from "./components/CookiePolicy"
import ProLineAnalytics from "./components/Proline" // ← aggiunto
import Optimai from "./components/Optimai"
import PiattaformeAgentiche from "./components/PiattaformeAgentiche"
import SviluppiCustom from "./components/SviluppiCustom"
import Hardware from "./components/Hardware"

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

const App = () => {
  return (
<div className="min-h-screen w-full overflow-x-hidden">      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/"                   element={<ChiSiamo />} />
        <Route path="/prodotti"           element={<Prodotti />} />
        <Route path="/prodotti/proline"   element={<ProLineAnalytics />} /> 
        <Route path="/prodotti/optimai"   element={<Optimai />} />
        <Route path="/prodotti/agentiche"   element={<PiattaformeAgentiche />} />
        <Route path="/prodotti/custom"   element={<SviluppiCustom></SviluppiCustom>}></Route>
        <Route path="/prodotti/hardware"   element={<Hardware />} />
        <Route path="/industrie"          element={<Industrie />} />
        <Route path="/contatti"           element={<Contatti />} />
        <Route path="/privacy"            element={<PrivacyPolicy />} />
        <Route path="/cookie"             element={<CookiePolicy />} />
      </Routes>
    </div>
  )
}

export default App