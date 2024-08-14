import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './Pages/Navbar';
import TopNavbar from './Pages/TopNavbar';
import AllPurchase from './Pages/AllPurchase';
import AllCustomer from './Pages/AllCustomer';
import AllSupplier from './Pages/Suppliers';
import AddSupplier from './Components/AddForms/AddSupplier';
import AllStock from './Pages/AllStock';
import AllCategories from './Pages/AllCategories';
import Units from './Pages/Units';
import CustomerWiseReport from './Pages/CustomerWiseReport';
import CreditCustomer from './Pages/CreditCustomer';
import PrintInvoice from './Pages/PrintInvoice';
import AllProducts from './Pages/AllProducts';
import AllInvoice from './Pages/AllInvoice';
import AddForms from './Pages/AddForms';
import AddCategory from './Components/PopupBox/AddCategory';
import PopUpMain from './Components/PopupBox/PopUpMain';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './Components/AddForms/AddProduct';
import AddCustomer from './Components/AddForms/AddCustomer';
import PrintInvoiceComponent from './Components/Others/PrintInvoiceComponent';
import CustomerReport from './Pages/CustomerReport';
import AddUnit from './Components/PopupBox/AddUnit';
import AddPurchase from './Components/AddForms/AddPurchase';
import AddInvoice from './Components/AddForms/AddInvoice';
import InvoiceReport from './Pages/InvoiceReport';
import DailyInvoiceReport from './Pages/DailyInvoiceReport';
import PurchaseReport from './Pages/PurchaseReport';

function App() {
  {/* ------------- Figma ---------  */}
  // https://www.figma.com/design/sxn5pvw5PM59CHNTwBFjYn/Inventory-Management-Web-%2B-Android?node-id=0-1&t=keUplJRB88dke1HD-0
  return (
    <>
      <Router>
        <TopNavbar/>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="all-supplier" element={<AllSupplier />} />
            <Route path="add-supplier" element={<AddSupplier />} />
            <Route path="all-customer" element={<AllCustomer />} />
            <Route path="add-customer" element={<AddCustomer />} />
            <Route path="credit-customer" element={<CreditCustomer />} />
            <Route path="customer-wise-report" element={<CustomerWiseReport />} />
            <Route path="all-unit" element={<Units/>} />
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