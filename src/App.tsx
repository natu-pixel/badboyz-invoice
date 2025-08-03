import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Invoices from './pages/Invoices'
import Customers from './pages/Customers'
import Settings from './pages/Settings'
import CreateInvoice from './pages/CreateInvoice'
import { InvoiceProvider } from './context/InvoiceContext'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  useEffect(() => {
    // Check if running inside Telegram Web App
    if ((window as any).Telegram?.WebApp) {
      // Initialize Telegram Web App
      (window as any).Telegram.WebApp.ready()
      ;(window as any).Telegram.WebApp.expand()

      // Set theme colors
      ;(window as any).Telegram.WebApp.setHeaderColor('#2563eb')
      ;(window as any).Telegram.WebApp.setBackgroundColor('#f3f4f6')
    }
  }, [])

  return (
    <InvoiceProvider>
      <Router>
        <div className="flex h-screen bg-gray-100">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="bg-white shadow-sm border-b border-gray-200">
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="text-gray-500 hover:text-gray-600 lg:hidden"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <h1 className="ml-4 text-2xl font-bold text-gray-900 lg:ml-0">
                    BadBoyz Invoice
                  </h1>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-500">
                    Welcome back, Admin
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">A</span>
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/invoices/create" element={<CreateInvoice />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </InvoiceProvider>
  )
}

export default App
