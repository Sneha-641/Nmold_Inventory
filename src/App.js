import './App.css';
import TopNavbar from './Pages/TopNavbar';
import Navbar from './Pages/Navbar';
import Dashboard from './Pages/Dashboard';
import AllSuppliers from './Pages/AllSuppliers';
import AddSupplier from './Components/Suppliers/AddSupplier';
import AllCustomers from './Pages/AllCustomers';
import AddCustomer from './Components/Customers/AddCustomer';
import CreditCustomer from './Pages/CreditCustomer';
import CustomerWiseReport from './Pages/CustomerWiseReport';
import AllUnits from './Pages/AllUnits';
import AddUnit from './Components/Units/AddUnit';
import AllCategories from './Pages/AllCategories';
import AddCategory from './Components/Categories/AddCategory';
import AllProducts from './Pages/AllProducts';
import AddProduct from './Components/Products/AddProduct';
import AllPurchase from './Pages/AllPurchase';
import AddPurchase from './Components/Purchases/AddPurchase';
import PurchaseReport from './Pages/PurchaseReport';
import AllInvoice from './Pages/AllInvoice';
import AddInvoice from './Components/Invoices/AddInvoice';
import PrintInvoice from './Pages/PrintInvoice';
import DailyInvoiceReport from './Pages/DailyInvoiceReport';
import AllStock from './Pages/AllStock';
import Login from './Pages/Login';
import AddForms from './Pages/AddForms';
import PopUpMain from './Components/PopupBox/PopUpMain';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrintInvoiceComponent from './Components/Invoices/PrintInvoiceComponent';
import CustomerReport from './Pages/CustomerReport';
import InvoiceReport from './Pages/InvoiceReport';
import UpdateCategory from './Components/PopupBox/UpdateCategory';
import UpdateSupplier from './Components/PopupBox/UpdateSupplier';




function App() {
  {/* ------------- Figma ---------  */}
  // https://www.figma.com/design/sxn5pvw5PM59CHNTwBFjYn/Inventory-Management-Web-%2B-Android?node-id=0-1&t=keUplJRB88dke1HD-0
  return (
    <>
      <Router>
        <TopNavbar/>
        <Navbar/>
        {/* <PopUpMain ids={18}/> */}
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="all-suppliers" element={<AllSuppliers />} />
            <Route path="add-supplier" element={<AddSupplier />} />
            <Route path="all-customers" element={<AllCustomers />} />
            <Route path="add-customer" element={<AddCustomer />} />
            <Route path="credit-customer" element={<CreditCustomer />} />
            <Route path="customer-wise-report" element={<CustomerWiseReport />} />
            <Route path="all-unit" element={<AllUnits/>} />
            <Route path="add-unit" element={<AddUnit ids={7}/>} />
            <Route path="all-category" element={<AllCategories/>} />
            <Route path="add-category" element={<AddCategory ids={10}/>} />
            <Route path="all-product" element={<AllProducts/>} />
            <Route path="add-product" element={<AddProduct/>} />
            <Route path="all-purchase" element={<AllPurchase/>} />
            <Route path="add-purchase" element={<AddPurchase/>} />
            <Route path="purchase-report" element={<PurchaseReport/>} />
            <Route path="all-invoice" element={<AllInvoice/>} />
            <Route path="add-invoice" element={<AddInvoice/>} />
            <Route path="print-invoice" element={<PrintInvoice/>} />
            <Route path="daily-invoice-report" element={<DailyInvoiceReport/>} />
            <Route path="all-stock" element={<AllStock/>} />    
            {/* <Route path="invoice-report" element={<InvoiceReport/>} />     */}
        </Routes>
      </Router>

      {/* ------------- Dashboard ---------  */}
      {/* <Dashboard/> */}


      {/* ------------- Manage Supplier ---------  */}
      {/* <AllSupplier/> */}
      {/* <AddSupplier/> */}


      {/* ------------- Manage Customers ---------  */}
      {/* <AllCustomer/> */}
      {/* <AddCustomer/> */}
      {/* <CreditCustomer/> */}
      {/* <CustomerWiseReport/> */}
      {/* <CustomerReport/> */}
      
      {/* ------------- Manage Units ---------  */}
      {/* <Units/> */}

      {/* ------------- Manage Categories ---------  */}
      {/* <AllCategories/> */}

      {/* ------------- Manage Products ---------  */}
      {/* <AllProducts/> */}
      {/* <AddProduct/> */}

      {/* ------------- Manage Purchase ---------  */}
      {/* <AllPurchase/> */}
      {/* <AddPurchase/> */}
      {/* <PurchaseReport/> */}

      {/* ------------- Manage Invoice ---------  */}
      {/* <AllInvoice/> */}
      {/* <AddInvoice/> */}
      {/* <PrintInvoice/> */}
      {/* <InvoiceReport/> */}
      {/* <DailyInvoiceReport/> */}

      {/* ------------- Manage Stock ---------  */}
      {/* <AllStock/> */}
      

      </>
  );
}

export default App;