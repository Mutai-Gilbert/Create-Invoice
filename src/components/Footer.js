import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
  name, email, website, phone, bankName, bankAccount,
}) => (
  <>
    {/* Footer  */}
    <footer className="footer border-t-2 border-gray pt-5">
      <ul className="flex flex-wrap items-center justify-center">
        <li>
          <span><strong>Your Name:</strong></span>
          {' '}
          {name}
        </li>
        <li>
          <span><strong>Your Email Address:</strong></span>
          {' '}
          {email}
        </li>
        <li>
          <span><strong>Your Phone Number:</strong></span>
          {' '}
          {phone}
        </li>
        <li>
          <span><strong>Bank Account Name:</strong></span>
          {' '}
          {bankName}
        </li>
        <li>
          <span><strong>Bank Account:</strong></span>
          {' '}
          {bankAccount}
        </li>
        <li>
          <span><strong>Your Website:</strong></span>
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
