import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const TableForm = ({
  description, setDescription, quantity, setQuantity,
  price, setPrice, amount, setAmount, list, setList, total, setTotal,
}) => {
  const [editing, setEditing] = React.useState(false);

  const handleSubmit = (e) => {
    if (!description || !quantity || !price) {
      e.preventDefault();
    } else {
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
      setEditing(false);
    }
  };

  // Calculate function
  const calculateAmount = () => {
    setAmount(quantity * price);
  };
  // calculate total amount in tables
  useEffect(() => {
    const rows = document.querySelectorAll('.amount');
    let sum = 0;
    rows.forEach((row) => {
      sum += Number(row.textContent);
      setTotal(sum);
    });
  });
  // edit functioon
  const editRow = (id) => {
    const editedItem = list.find((item) => item.id === id);
    setList(list.filter((item) => item.id !== id));
    setDescription(editedItem.description);
    setQuantity(editedItem.quantity);
    setPrice(editedItem.price);
    setAmount(editedItem.amount);
    setEditing(true);
  };

  // Delete function
  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
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
          {editing ? 'Editing row item' : 'Add table item'}

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
        {list && list.map((item) => (
          <React.Fragment key={item.id}>
            <tbody>
              <tr>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td className="amount">{item.amount}</td>
                <td>
                  <button type="button" onClick={() => deleteItem(item.id)} aria-label="Delete">
                    <AiOutlineDelete className="font-bold text-red-500 text-xl" />
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => editRow(item.id)} aria-label="Delete">
                    <AiOutlineEdit className="font-bold text-green-500 text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-600 text-4xl">
          Kshs
          {' '}
          {total.toLocaleString()}
        </h2>
      </div>
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
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
};

export default TableForm;
