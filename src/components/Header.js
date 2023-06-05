import React from 'react';

const Header = ({handlePrint}) => (
  <>
    {/* Header */}
    <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
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

  </>
);



export default Header;
