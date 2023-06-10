import { useState } from 'react';
import ClientsDetails from './components/ClientsDetails';
import Dates from './components/Dates';
import Footer from './components/Footer';
import Header from './components/Header';
import MainDetails from './components/MainDetails';
import Notes from './components/Notes';
import Table from './components/Table';

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [website, setWebsite] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [notes, setNotes] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handlePrint = () => {
    window.print();
  };
  return (
    <main className="m-5 p-5 md:max-w-xl md:mx-auto xl:max-w-2xl bg-white rounded shadow">
      {showInvoice ? (
        <div>
          <Header handlePrint={handlePrint} />
          <MainDetails name={name} address={address} />
          <ClientsDetails clientName={clientName} clientAddress={clientAddress} />
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
          <Table />
          <Notes notes={notes} />
          <Footer
            name={name}
            address={address}
            website={website}
            email={email}
            phone={phone}
            bankName={bankName}
            bankAccount={bankAccount}
          />
          <button
            onClick={() => setShowInvoice(false)}
            type="button"
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8
            rounded shadow border-2 border-blue-500
            hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            {' '}
            Edit Information

          </button>
        </div>
      ) : (

        <>

          <div className="flex flex-col justify-center">

            <label htmlFor="name">
              Enter your name
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="address">
              Enter name your name

              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>

            <label htmlFor="email">
              Enter name your name
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label htmlFor="website">
              Enter name your name
              <input
                type="url"
                name="website"
                id="website"
                placeholder="Enter your website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>

            <label htmlFor="phone">
              Enter your phone number
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label htmlFor="address">
              Enter name your name
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>

            <label htmlFor="bankName">
              Enter your bank name
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your bank name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </label>

            <label htmlFor="bankAccount">
              Enter name your bank account
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your bank account"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />
            </label>
            <label htmlFor="phone">
              Enter your phone number
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>

            <label htmlFor="clientName">
              Enter your client name
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your client name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </label>

            <label htmlFor="clientAddress">
              Enter your client Address
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter your client address number"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
            </label>

            <label htmlFor="invoiceNumber">
              Enter your invoice number
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Enter your invoicenumber"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </label>

            <label htmlFor="invoiceDate">
              Enter your invoice date
              <input
                type="text"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Enter your invoice date number"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </label>

            <label htmlFor="notes">
              Enter your notes
              <input
                type="text"
                name="notes"
                id="notes"
                placeholder="Enter your notes"
                autoComplete="off"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>

            <label htmlFor="dueDate">
              Enter your due date
              <input
                type="text"
                name="dueDate"
                id="dueDate"
                placeholder="Enter your due date number"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </label>

            <label htmlFor="notes">
              Additional notes
              <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)} />
            </label>
            <button
              onClick={() => setShowInvoice(true)}
              type="button"
              className="bg-blue-500 text-white font-bold py-2 px-8
            rounded shadow border-2 border-blue-500
            hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Previous Invoice
            </button>
          </div>
        </>

      )}
    </main>
  );
}

export default App;
