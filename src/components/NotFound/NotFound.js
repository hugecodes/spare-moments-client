import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

const NotFound = () => {
  return (
    <div>
      <p>Not Found</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default NotFound;
