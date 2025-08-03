import React, { useState } from 'react'
import { 
  Building, 

  Save, 
  Upload,
  Palette,
  DollarSign
} from 'lucide-react'

export default function Settings() {
  const [companyInfo, setCompanyInfo] = useState({
    name: 'BadBoyz Invoice',
    email: 'contact@badboyz.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Street\nSuite 100\nCity, State 12345',
    website: 'www.badboyz.com',
    taxId: 'TAX123456789',
  })

  const [invoiceSettings, setInvoiceSettings] = useState({
    defaultTax: 8.5,
    defaultDueDays: 30,
    invoicePrefix: 'INV',
    currency: 'USD',
    currencySymbol: '$',
  })

  const [branding, setBranding] = useState({
    primaryColor: '#2563eb',
    logoUrl: '',
  })

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save company info
    alert('Company information saved successfully!')
  }

  const handleInvoiceSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save invoice settings
    alert('Invoice settings saved successfully!')
  }

  const handleBrandingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save branding settings
    alert('Branding settings saved successfully!')
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your application settings and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Company Information */}
        <div className="card">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Building className="h-6 w-6 text-gray-400 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Company Information</h2>
            </div>
            <p className="text-gray-600 mt-1">Update your company details that appear on invoices</p>
          </div>
          
          <form onSubmit={handleCompanySubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyInfo.name}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
                  className="input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={companyInfo.email}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                  className="input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={companyInfo.phone}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                  className="input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={companyInfo.website}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, website: e.target.value })}
                  className="input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax ID / EIN
                </label>
                <input
                  type="text"
                  value={companyInfo.taxId}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, taxId: e.target.value })}
                  className="input"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Address
                </label>
                <textarea
                  value={companyInfo.address}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
                  className="input"
                  rows={4}
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button type="submit" className="btn btn-primary">
                <Save className="h-4 w-4 mr-2" />
                Save Company Info
              </button>
            </div>
          </form>
        </div>

        {/* Invoice Settings */}
        <div className="card">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <DollarSign className="h-6 w-6 text-gray-400 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Invoice Settings</h2>
            </div>
            <p className="text-gray-600 mt-1">Configure default invoice settings and preferences</p>
          </div>
          
          <form onSubmit={handleInvoiceSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Tax Rate (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={invoiceSettings.defaultTax}
                  onChange={(e) => setInvoiceSettings({ ...invoiceSettings, defaultTax: parseFloat(e.target.value) || 0 })}
                  className="input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Due Days
                </label>
                <input
                  type="number"
                  min="1"
                  value={invoiceSettings.defaultDueDays}
                  onChange={(e) => setInvoiceSettings({ ...invoiceSettings, defaultDueDays: parseInt(e.target.value) || 30 })}
                  className="input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Invoice Number Prefix
                </label>
                <input
                  type="text"
                  value={invoiceSettings.invoicePrefix}
                  onChange={(e) => setInvoiceSettings({ ...invoiceSettings, invoicePrefix: e.target.value })}
                  className="input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <select
                  value={invoiceSettings.currency}
                  onChange={(e) => setInvoiceSettings({ ...invoiceSettings, currency: e.target.value })}
                  className="input"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button type="submit" className="btn btn-primary">
                <Save className="h-4 w-4 mr-2" />
                Save Invoice Settings
              </button>
            </div>
          </form>
        </div>

        {/* Branding */}
        <div className="card">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Palette className="h-6 w-6 text-gray-400 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Branding</h2>
            </div>
            <p className="text-gray-600 mt-1">Customize the appearance of your invoices</p>
          </div>
          
          <form onSubmit={handleBrandingSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Color
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={branding.primaryColor}
                    onChange={(e) => setBranding({ ...branding, primaryColor: e.target.value })}
                    className="h-10 w-20 rounded border border-gray-300"
                  />
                  <input
                    type="text"
                    value={branding.primaryColor}
                    onChange={(e) => setBranding({ ...branding, primaryColor: e.target.value })}
                    className="input flex-1"
                    placeholder="#2563eb"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Logo
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="url"
                    value={branding.logoUrl}
                    onChange={(e) => setBranding({ ...branding, logoUrl: e.target.value })}
                    className="input flex-1"
                    placeholder="https://example.com/logo.png"
                  />
                  <button
                    type="button"
                    className="btn btn-outline"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Recommended size: 200x80px, PNG or JPG format
                </p>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button type="submit" className="btn btn-primary">
                <Save className="h-4 w-4 mr-2" />
                Save Branding
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
