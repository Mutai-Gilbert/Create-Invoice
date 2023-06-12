import React from 'react';
import PropTypes from 'prop-types';

const TableForm = ({ description, setDescription }) => (
  <>
  <div className="f;ex flex-col">
  <label htmlFor="description">Item Description></label>
    <input type="text" name="description" id="description" placeholder="Enter item description" value={description} onChange={(e) => setDescription(e.target.value)} />
    <label htmlFor="quantity">Quantity</label>
    <input type="number" name="quantity" id="quantity" />
    <label htmlFor="price">Price</label>
    <input type="number" name="price" id="price" />
  </div>

  </>
);

TableForm.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default TableForm;
