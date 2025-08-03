# BadBoyz Invoice - Advanced Invoice Management System

A modern, professional invoice management web application built with React, TypeScript, and Tailwind CSS.

## Features

### 🧾 Invoice Management
- Create, edit, and delete invoices
- Professional invoice templates
- Multiple line items with automatic calculations
- Tax calculations
- Invoice status tracking (Draft, Sent, Paid, Overdue)
- Invoice numbering system

### 👥 Customer Management
- Add and manage customer database
- Customer profiles with contact information
- Company details and addresses
- Search and filter customers

### 📊 Dashboard & Analytics
- Overview of revenue and pending amounts
- Recent invoices display
- Quick action buttons
- Statistics cards

### ⚙️ Settings & Customization
- Company information management
- Invoice settings (tax rates, due dates, prefixes)
- Branding customization (colors, logo)
- Currency settings

### 🎨 Modern UI/UX
- Responsive design for all devices
- Clean, professional interface
- Intuitive navigation
- Tailwind CSS styling

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API
- **Date Handling**: date-fns
- **PDF Generation**: jsPDF (ready for implementation)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd badboyz-invoice
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Sidebar.tsx     # Navigation sidebar
├── context/            # React Context providers
│   └── InvoiceContext.tsx  # Invoice state management
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Invoices.tsx    # Invoice list
│   ├── CreateInvoice.tsx  # Invoice creation form
│   ├── Customers.tsx   # Customer management
│   └── Settings.tsx    # Application settings
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Features in Detail

### Invoice Creation
- Dynamic line item management
- Real-time total calculations
- Customer selection with quick add
- Flexible tax settings
- Notes and terms

### Customer Management
- Comprehensive customer profiles
- Search functionality
- Edit and delete operations
- Company and contact details

### Dashboard Analytics
- Revenue tracking
- Invoice status overview
- Quick access to common actions
- Recent activity display

## Sample Data

The application comes with sample customers and invoices to demonstrate functionality:
- 2 sample customers with complete profiles
- 2 sample invoices showing different statuses
- Realistic business data for testing

## Future Enhancements

- PDF invoice generation and download
- Email integration for sending invoices
- Payment tracking and reminders
- Recurring invoice templates
- Advanced reporting and analytics
- Multi-currency support
- Database integration (Supabase ready)
- User authentication and multi-tenancy

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.

---

Built with ❤️ by the BadBoyz team
