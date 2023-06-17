import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const TableForm = ({
  description, setDescription, quantity, setQuantity,
  price, setPrice, amount, setAmount, list, setList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    };
    setDescription('');
    setQuantity('');
    setPrice('');
    setAmount('');
    setList([...list, newItem]);
  };
  const calculateAmount = () => {
    setAmount(quantity * price);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:grid md:grid-cols-4 gap-10">
          <label htmlFor="description">
            Item Description
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Enter item description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-4 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">
              Quantity
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Enter item quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">
              Price
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Enter item price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">
              <p>{calculateAmount(amount)}</p>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mb-5 bg-blue-500 text-white font-bold py-2 px-8
            rounded shadow border-2 border-blue-500
            hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          Add table item

        </button>

      </form>

      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Item description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list && list.map((id, description, quantity, price, amount) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </>
  );
};

TableForm.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  quantity: PropTypes.string.isRequired,
  setQuantity: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  setPrice: PropTypes.func.isRequired,
  amount: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
};

export default TableForm;
