import styles from './Button.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Button(props) {
  const isLink = (input) => Object.prototype.hasOwnProperty.call(input, 'to');
  if (isLink(props)) {
    return (
      <Link
        to={props.to}
        className={clsx(styles.anchor, styles.button, props.className)}
      >
        <span className={clsx(styles.content)}>{props.children}</span>
      </Link>
    );
  }
  return (
    <button type={props.type} className={clsx(styles.button, props.className)}>
      <span className={clsx(styles.content)}>{props.children}asdasdads</span>
    </button>
  );
}

export default Button;

Button.propTypes = {
  to: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
