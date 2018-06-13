import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ text }) => (
    <span style={{ color: '#ae5856' }}>{text}</span>
);

// typechecking validation
InlineError.propTypes = {
    text: PropTypes.string
};

export default InlineError;