import React, { createContext, useContext, useReducer, ReactNode } from 'react'

export interface Customer {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  company?: string
}

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

export interface Invoice {
  id: string
  invoiceNumber: string
  customerId: string
  customer: Customer
  items: InvoiceItem[]
  subtotal: number
  tax: number
  total: number
  status: 'draft' | 'sent' | 'paid' | 'overdue'
  issueDate: string
  dueDate: string
  notes?: string
  createdAt: string
  updatedAt: string
}

interface InvoiceState {
  invoices: Invoice[]
  customers: Customer[]
  loading: boolean
  error: string | null
}

type InvoiceAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_INVOICE'; payload: Invoice }
  | { type: 'UPDATE_INVOICE'; payload: Invoice }
  | { type: 'DELETE_INVOICE'; payload: string }
  | { type: 'ADD_CUSTOMER'; payload: Customer }
  | { type: 'UPDATE_CUSTOMER'; payload: Customer }
  | { type: 'DELETE_CUSTOMER'; payload: string }
  | { type: 'SET_INVOICES'; payload: Invoice[] }
  | { type: 'SET_CUSTOMERS'; payload: Customer[] }

// Sample data for demonstration
const sampleCustomers: Customer[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St\nAnytown, ST 12345',
    company: 'Smith Enterprises'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    phone: '+1 (555) 987-6543',
    address: '456 Business Ave\nTech City, TC 67890',
    company: 'TechCorp Solutions'
  }
]

const sampleInvoices: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-001',
    customerId: '1',
    customer: sampleCustomers[0],
    items: [
      {
        id: 'item-1',
        description: 'Web Development Services',
        quantity: 40,
        rate: 75,
        amount: 3000
      },
      {
        id: 'item-2',
        description: 'Domain & Hosting Setup',
        quantity: 1,
        rate: 200,
        amount: 200
      }
    ],
    subtotal: 3200,
    tax: 8.5,
    total: 3472,
    status: 'sent',
    issueDate: '2024-01-15',
    dueDate: '2024-02-14',
    notes: 'Payment due within 30 days',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    invoiceNumber: 'INV-002',
    customerId: '2',
    customer: sampleCustomers[1],
    items: [
      {
        id: 'item-3',
        description: 'Mobile App Development',
        quantity: 80,
        rate: 85,
        amount: 6800
      }
    ],
    subtotal: 6800,
    tax: 8.5,
    total: 7378,
    status: 'paid',
    issueDate: '2024-01-20',
    dueDate: '2024-02-19',
    notes: 'Thank you for your business!',
    createdAt: '2024-01-20T14:30:00Z',
    updatedAt: '2024-01-25T09:15:00Z'
  }
]

const initialState: InvoiceState = {
  invoices: sampleInvoices,
  customers: sampleCustomers,
  loading: false,
  error: null,
}

function invoiceReducer(state: InvoiceState, action: InvoiceAction): InvoiceState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'ADD_INVOICE':
      return { ...state, invoices: [...state.invoices, action.payload] }
    case 'UPDATE_INVOICE':
      return {
        ...state,
        invoices: state.invoices.map(invoice =>
          invoice.id === action.payload.id ? action.payload : invoice
        ),
      }
    case 'DELETE_INVOICE':
      return {
        ...state,
        invoices: state.invoices.filter(invoice => invoice.id !== action.payload),
      }
    case 'ADD_CUSTOMER':
      return { ...state, customers: [...state.customers, action.payload] }
    case 'UPDATE_CUSTOMER':
      return {
        ...state,
        customers: state.customers.map(customer =>
          customer.id === action.payload.id ? action.payload : customer
        ),
      }
    case 'DELETE_CUSTOMER':
      return {
        ...state,
        customers: state.customers.filter(customer => customer.id !== action.payload),
      }
    case 'SET_INVOICES':
      return { ...state, invoices: action.payload }
    case 'SET_CUSTOMERS':
      return { ...state, customers: action.payload }
    default:
      return state
  }
}

interface InvoiceContextType {
  state: InvoiceState
  dispatch: React.Dispatch<InvoiceAction>
  addInvoice: (invoice: Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateInvoice: (invoice: Invoice) => void
  deleteInvoice: (id: string) => void
  addCustomer: (customer: Omit<Customer, 'id'>) => void
  updateCustomer: (customer: Customer) => void
  deleteCustomer: (id: string) => void
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined)

export function InvoiceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(invoiceReducer, initialState)

  const addInvoice = (invoiceData: Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>) => {
    const invoice: Invoice = {
      ...invoiceData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    dispatch({ type: 'ADD_INVOICE', payload: invoice })
  }

  const updateInvoice = (invoice: Invoice) => {
    const updatedInvoice = {
      ...invoice,
      updatedAt: new Date().toISOString(),
    }
    dispatch({ type: 'UPDATE_INVOICE', payload: updatedInvoice })
  }

  const deleteInvoice = (id: string) => {
    dispatch({ type: 'DELETE_INVOICE', payload: id })
  }

  const addCustomer = (customerData: Omit<Customer, 'id'>) => {
    const customer: Customer = {
      ...customerData,
      id: Date.now().toString(),
    }
    dispatch({ type: 'ADD_CUSTOMER', payload: customer })
  }

  const updateCustomer = (customer: Customer) => {
    dispatch({ type: 'UPDATE_CUSTOMER', payload: customer })
  }

  const deleteCustomer = (id: string) => {
    dispatch({ type: 'DELETE_CUSTOMER', payload: id })
  }

  return (
    <InvoiceContext.Provider
      value={{
        state,
        dispatch,
        addInvoice,
        updateInvoice,
        deleteInvoice,
        addCustomer,
        updateCustomer,
        deleteCustomer,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  )
}

export function useInvoice() {
  const context = useContext(InvoiceContext)
  if (context === undefined) {
    throw new Error('useInvoice must be used within an InvoiceProvider')
  }
  return context
}
