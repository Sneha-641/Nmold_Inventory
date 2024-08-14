import "../Styles/Navbar.css"
import Expand from "../Assets/sidebarexp.png"
import A from "../Assets/Customers.png"
import B from "../Assets/Outsourcing.png"
import C from "../Assets/fluent-mdl2_product-list.png"
import D from "../Assets/Dashboard.png"
import E from "../Assets/tabler_category-filled.png"
import F from "../Assets/mage_tag-check.png"

import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {


  // State to manage dropdown visibility
  const [isSupplierDropdownOpen, setSupplierDropdownOpen] = useState(false);
  const [isCustomerDropdownOpen, setCustomerDropdownOpen] = useState(false);
  const [isUnitsDropdownOpen, setUnitsDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isPurchasesDropdownOpen, setPurchasesDropdownOpen] = useState(false);
  const [isInvoicesDropdownOpen, setInvoicesDropdownOpen] = useState(false);
  const [isStocksDropdownOpen, setStocksDropdownOpen] = useState(false);

  // Toggles for dropdowns
  const toggleSupplierDropdown = () => setSupplierDropdownOpen(!isSupplierDropdownOpen);
  const toggleCustomerDropdown = () => setCustomerDropdownOpen(!isCustomerDropdownOpen);
  const toggleUnitsDropdown = () => setUnitsDropdownOpen(!isUnitsDropdownOpen);
  const toggleCategoriesDropdown = () => setCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  const toggleProductsDropdown = () => setProductsDropdownOpen(!isProductsDropdownOpen);
  const togglePurchasesDropdown = () => setPurchasesDropdownOpen(!isPurchasesDropdownOpen);
  const toggleInvoicesDropdown = () => setInvoicesDropdownOpen(!isInvoicesDropdownOpen);
  const toggleStocksDropdown = () => setStocksDropdownOpen(!isStocksDropdownOpen);


  return (
    <div className="w-[16%] min-h-screen bg-[#5884FF] text-white flex flex-col p-4 space-y-2 absolute left-0  top-0">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-6 justify-center">
        <img src={D} alt="Logo" className="h-10 w-10" />
        <span className="text-xl font-bold">Nvento</span>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col space-y-4">
        {/* Dashboard */}
        <div className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
          <img src={D} alt="Dashboard" className="h-5 w-5 " />
          <Link to="/"><span>Dashboard</span></Link>
        </div>

        {/* Manage Suppliers Dropdown */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer"
            onClick={toggleSupplierDropdown}>
            <img src={B} alt="Manage Suppliers" className="h-5 w-5" />
            <span>Manage Suppliers</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-auto transition-transform ${isSupplierDropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </div>
          {isSupplierDropdownOpen && (
            <div className="ml-8 flex flex-col space-y-1">
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer" >
                <Link to="/all-supplier"><span>All Suppliers</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/add-supplier"><span>Add Supplier</span></Link>
              </div>
            </div>
          )}
        </div>

        {/* Manage Customers Dropdown */}
        <div className="flex flex-col">
          <div
            className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer"
            onClick={toggleCustomerDropdown}
          >
            <img src={A} alt="Manage Customers" className="h-5 w-5" />
            <span>Manage Customers</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-auto transition-transform ${isCustomerDropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isCustomerDropdownOpen && (
            <div className="ml-8 flex flex-col space-y-1">
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/all-customer"><span>All Customers</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/add-customer"><span>Add Customer</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
              <Link to="/credit-customer"><span>Credit Customers</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/customer-wise-report"><span>Customer Wise Report</span></Link>
              </div>
            </div>
          )}
        </div>

        {/* Manage Units Dropdown */}
        <div className="flex flex-col">
          <div
            className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer"
            onClick={toggleUnitsDropdown}
          >
            <img src={F} alt="Manage Units" className="h-5 w-5" />
            <span>Manage Units</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-auto transition-transform ${isUnitsDropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isUnitsDropdownOpen && (
            <div className="ml-8 flex flex-col space-y-1">
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/all-unit"><span>All Units</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/add-unit"><span>Add Units</span></Link>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div
            className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer"
            onClick={toggleCategoriesDropdown}
          >
            <img src={E} alt="Manage Customers" className="h-5 w-5" />
            <span>Manage Categories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-auto transition-transform ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isCategoriesDropdownOpen && (
            <div className="ml-8 flex flex-col space-y-1">
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/all-category"><span>All Categories</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/add-category"><span>Add Categories</span></Link>
              </div>
            </div>
          )}
        </div>

        {/* Manage Products Dropdown */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer"
            onClick={toggleProductsDropdown}>
            <img src={C} alt="Manage Suppliers" className="h-5 w-5" />
            <span>Manage Products</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-auto transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </div>
          {isProductsDropdownOpen && (
            <div className="ml-8 flex flex-col space-y-1">
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/all-product"><span>All Products</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/add-product"><span>Add Product</span></Link>
              </div>
            </div>
          )}
        </div>
        
        {/* Manage Purchase Dropdown */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer"
            onClick={togglePurchasesDropdown}>
            <img src={B} alt="Manage Suppliers" className="h-5 w-5" />
            <span>Manage Purchase</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-auto transition-transform ${isPurchasesDropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </div>
          {isPurchasesDropdownOpen && (
            <div className="ml-8 flex flex-col space-y-1">
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/all-purchase"><span>All Purchases</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/add-purchase"><span>Add Purchase</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/purchase-report"><span>Purchase Report</span></Link>
              </div>
            </div>
          )}
        </div>

        {/* Manage Invoice Dropdown */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer"
            onClick={toggleInvoicesDropdown}>
            <img src={B} alt="Manage Suppliers" className="h-5 w-5" />
            <span>Manage Invoice</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-auto transition-transform ${isInvoicesDropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </div>
          {isInvoicesDropdownOpen && (
            <div className="ml-8 flex flex-col space-y-1">
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/all-invoice"><span>All Invoice</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/add-invoice"><span>Add Invoice</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/print-invoice"><span>Print Invoice</span></Link>
              </div>
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/daily-invoice-report"><span>Daily Invoice Report</span></Link>
              </div>
            </div>
          )}
        </div>

        {/* Manage Invoice Dropdown */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer"
            onClick={toggleStocksDropdown}>
            <img src={B} alt="Manage Suppliers" className="h-5 w-5" />
            <span>Manage Stock</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-auto transition-transform ${isStocksDropdownOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </div>
          {isStocksDropdownOpen && (
            <div className="ml-8 flex flex-col space-y-1">
              <div className="flex items-center p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                <Link to="/all-stock"><span>All Stocks</span></Link>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 p-2 hover:bg-blue-500 rounded-lg cursor-pointer">
          <img src={D} alt="Dashboard" className="h-5 w-5 " />
          <span>Help/Support</span>
        </div>
        {/* Repeat for other menu items */}
        {/* Additional sections here */}
      </div>
    </div>
  );
};

export default  Navbar;
