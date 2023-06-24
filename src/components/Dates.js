import React from 'react';
import PropTypes from 'prop-types';

const Dates = ({ invoiceNumber, invoiceDate, dueDate }) => (
  <>
    {/* Dates */}
    <article className="mt-10 mb-40 flex items-end justify-end">
      <ul>
        <li className="p-1">
          <span className="font-bold">
            Invoice number:
          </span>
          {invoiceNumber}
        </li>
        <li className="p-1">
          <span className="font-bold bg-gray-100">
            Invoice date:
          </span>
          {invoiceDate}
        </li>
        <li className="p-1">
          <span className="font-bold">
            Due date:
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
