import React from 'react';
import PropTypes from 'prop-types';

const ClientsDetails = ({ clientName, clientAddress }) => (
  <>
    {/* Clients details */}
    <section className="mt-10">
      {/* */}
      <h2 className="text-xl uppercase font-bold text-2xl mb-1">{clientName}</h2>
      <p>{clientAddress}</p>
    </section>
    {/* End of clients details */}

  </>
);

ClientsDetails.propTypes = {
  clientName: PropTypes.string.isRequired,
  clientAddress: PropTypes.string.isRequired,
};

export default ClientsDetails;
