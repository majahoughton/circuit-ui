import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Button.scss';

const Button = ({ onClick, label, className, disabled = false, children }) => {
  if (!(onClick && (label || children))) {
    return null;
  }
  const content = children || label;
  const classes = classNames(
    {
      btn: true,
      'btn--disabled': disabled
    },
    className
  );

  debugger;

  return (
    <button onClick={onClick} title={content} className={classes}>
      {content}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
};

export default withStyles(styles)(Button);