function App() {
  const handlePrint = () => {

  };
  return (
    <>
      <main className="m-5 p-5 lg:max-w-xl lg:max-auto bg-white rounded shadow">
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3"> Invoicer</h1>
          </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <button onClick={handlePrint} type="button" className=" btn btn-print">Print</button>
              <button type="button" className="btn btn-download">Download</button>
              <button type="button" className="btn btn-send">Send</button>
            </ul>
          </div>
        </header>
        {/* End of Header */}

        {/* Youir details */}
        <section className="flex flex-col items-end justify-end">
          {/* <input type="text" name="text" id="text" placeholder="Enter your name" required /> */}
          <h2 className="text-xl uppercase">Gilbert Mutai</h2>
          <p>Your Address</p>
        </section>
        {/* End Your details */}

        {/* Clients details */}
        <section className="mt-5">
          {/* <input type="text" name="text" id="text" placeholder="Enter your name" required /> */}
          <h2 className="text-xl uppercase">Clients Name</h2>
          <p>Clients Address</p>
        </section>
        {/* End of clients details */}

        {/* Dates */}
        <article className="my-5 flex items-end justify-end">
          <ul>
            <li><span className="font-bold">Invoicer number:</span></li>
            <li><span className="font-bold">Invoicer Date:</span></li>
            <li><span className="font-bold">Due date: </span></li>

          </ul>
        </article>
        {/* End of Dates  */}

        {/* Table  */}
        <div className="my-5">
          this is a table
        </div>

        {/* End of Table */}

        {/* Notes  */}
        <section className="mb-5">
          {/* Textarea */}
          <p> Notes to the client</p>
        </section>

        {/* End of Notes */}

        {/* Footer  */}
        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span>Your Name:</span>
              {' '}
              Gilbert Mutai
            </li>
            <li>
              <span>Your Email Address:</span>
              {' '}
              mutaigilbert85@gmail.com
            </li>
            <li>
              <span>Your Phone Number:</span>
              {' '}
              +254703252051
            </li>
            <li>
              <span>Your Bank:</span>
              {' '}
              Access Bank
            </li>
            <li>
              <span>Bank Account Name:</span>
              {' '}
              Gilbert Mutai
            </li>
            <li>
              <span>Bank Account:</span>
              {' '}
              1234567890
            </li>
            <li>
              <span>Your Website:</span>
              {' '}
              pkoech.mutaigilbert.com
            </li>
          </ul>
        </footer>
        {/* End of Footer  */}
      </main>
    </>
  );
}

export default App;
