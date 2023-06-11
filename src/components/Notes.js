import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({ notes }) => (
  <>
    {/* Notes  */}
    <section className="mb-5">
      {/* Textarea */}
      <p className="lg:w-1/2 text-justify">{notes}</p>
    </section>

    {/* End of Notes */}

  </>
);

Notes.propTypes = {
  notes: PropTypes.string.isRequired,
};

export default Notes;
