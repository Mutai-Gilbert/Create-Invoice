import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
  name, email, website, phone, bankName, bankAccount,
}) => (
  <>
    {/* Footer  */}
    <footer>
      <ul className="flex flex-wrap items-center justify-center">
        <li>
          <span>Your Name:</span>
          {' '}
          {name}
        </li>
        <li>
          <span>Your Email Address:</span>
          {' '}
          {email}
        </li>
        <li>
          <span>Your Phone Number:</span>
          {' '}
          {phone}
        </li>
        <li>
          <span>Bank Account Name:</span>
          {' '}
          {bankName}
        </li>
        <li>
          <span>Bank Account:</span>
          {' '}
          {bankAccount}
        </li>
        <li>
          <span>Your Website:</span>
          {' '}
          <a href={website}>{website}</a>
        </li>
      </ul>
    </footer>
    {/* End of Footer  */}

  </>
);

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  bankAccount: PropTypes.string.isRequired,
};

export default Footer;
