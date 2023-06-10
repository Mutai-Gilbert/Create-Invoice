import React from 'react';
import PropTypes from 'prop-types';

const Dates = ({ invoiceNumber, invoiceDate, dueDate }) => (
  <>
    {/* Dates */}
    <article className="my-5 flex items-end justify-end">
      <ul>
        <li>
          <span className="font-bold">
            invoiceNumber:
          </span>
          {invoiceNumber}
        </li>
        <li>
          <span className="font-bold bg-gray-100">
            invoiceDate:
          </span>
          {invoiceDate}
        </li>
        <li>
          <span className="font-bold">
            dueDate:
          </span>
          {dueDate}
        </li>

      </ul>
    </article>
    {/* End of Dates  */}

  </>
);

Dates.propTypes = {
  invoiceNumber: PropTypes.string.isRequired,
  invoiceDate: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
};

export default Dates;
