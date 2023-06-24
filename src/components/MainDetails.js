import React from 'react';
import PropTypes from 'prop-types';

const MainDetails = ({ name, address }) => (
  <>
    <section className="flex flex-col items-end justify-end">
      <h2 className="font-bold text-xl uppercase mb-1 md:text-4xl">{name}</h2>
      <p>{address}</p>
    </section>

  </>
);

MainDetails.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
export default MainDetails;
