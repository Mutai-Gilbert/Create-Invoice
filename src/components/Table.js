import React from 'react';

const Table = () => (
  <>
    <table width="100%">
      <thead>
        <tr className="bg-gray-100 p-1">
          <td>Item description</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Some really long description</td>
          <td>20</td>
          <td>50</td>
          <td>1000</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default Table;
