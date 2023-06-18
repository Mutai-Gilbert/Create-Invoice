import { useState } from 'react';
import ClientsDetails from './components/ClientsDetails';
import Dates from './components/Dates';
import Footer from './components/Footer';
import Header from './components/Header';
import MainDetails from './components/MainDetails';
import Notes from './components/Notes';
import Table from './components/Table';
import TableForm from './components/TableForm';

function App() {
  const [showInvoice, setShowInvoice] = useState(true);

  const [name, setName] = useState('Gilbert Mutai');
  const [email, setEmail] = useState('pkoech@mutaigilbert.com');
  const [phone, setPhone] = useState('0703252051');
  const [address, setAddress] = useState('Kiphamba street');
  const [bankName, setBankName] = useState('Access Bank');
  const [bankAccount, setBankAccount] = useState('1234 567 890');
  const [website, setWebsite] = useState('https://pkoech.netlify.app');
  const [clientName, setClientName] = useState('Bomet County');
  const [clientAddress, setClientAddress] = useState('29-20400');
  const [invoiceNumber, setInvoiceNumber] = useState('1001');
  const [invoiceDate, setInvoiceDate] = useState('12/06/2023');
  const [dueDate, setDueDate] = useState('31/12/2023');
  const [notes, setNotes] = useState('Pay the bank account above');

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [list, setList] = useState([]);

  const handlePrint = () => {
    window.print();
  };
  return (
    <main className="m-5 p-5 md:max-w-xl md:mx-auto xl:max-w-4xl bg-white rounded shadow">
      {showInvoice ? (
        <div>
          <Header handlePrint={handlePrint} />
          <MainDetails name={name} address={address} />
          <ClientsDetails clientName={clientName} clientAddress={clientAddress} />
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
          <Table
            description={description}
            quantity={quantity}
            price={price}
            amount={amount}
            list={list}
            setList={setList}
          />
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
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name">
                  Your full name
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
              </div>
              <div className="flex flex-col">
                <label htmlFor="address">
                  Your address
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
              </div>
            </article>
            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="email">
                  Enter your email
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
              </div>
              <div className="flex flex-col">
                <label htmlFor="website">
                  Enter your website
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
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">
                  Your phone number
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
              </div>
            </article>
            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="bankName">
                  Your bank name
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
              </div>
              <div className="flex flex-col">
                <label htmlFor="bankAccount">
                  Your bank account
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
              </div>
            </article>
            <article className="md:grid grid-cols-3 gap-10 md:mt-16">
              <div className="flex flex-col">
                <label htmlFor="clientName">
                  Your clients name
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

              </div>
              <div className="flex flex-col">
                <label htmlFor="clientAddress">
                  Your clients Address
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

              </div>
            </article>

            <article className="md:grid grid-cols-4 gap-10">
              <div className="flex flex-col">
                <label htmlFor="invoiceNumber">
                  Your invoice number
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

              </div>
              <div className="flex flex-col">
                <label htmlFor="invoiceDate">
                  Invoice date
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Enter your invoice date number"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </label>

              </div>
              <div className="flex flex-col">
                <label htmlFor="dueDate">
                  Due date
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Enter your due date number"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </label>

              </div>
            </article>

            {/* This is a table */}
            <article>
              <TableForm
                description={description}
                setDescription={setDescription}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount}
                list={list}
                setList={setList}
              />
            </article>

            <label htmlFor="notes">
              Additional notes
              {' '}

            </label>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              placeholder="Additional notes to the client"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <button
              onClick={() => setShowInvoice(true)}
              type="button"
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8
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
