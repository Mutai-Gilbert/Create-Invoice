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
  const [address, setAddress] = useState("");
  const [bankName, setBankName] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [website, setWebsite] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [notes, setNotes] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:max-auto bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails />
            <ClientsDetails />
            <Dates />
            <Table />
            <Notes />
            <Footer />
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
          <><>
              <div className="flex flex-col justify-center">
                <label htmlFor="name">Enter your name</label>
                <input
                  type="text"
                  name="text"
                  id="name"
                  placeholder="Enter your name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </>
              <label htmlFor="address">Enter name your name</label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)} />

              <label control="" htmlFor="email">Enter name your name</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

              <label control="" htmlFor="address">Enter name your name</label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)} />
            </><label control="" htmlFor="address">Enter name your name</label><input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)} /></>
            </>
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
    </>
  );
}

export default App;
