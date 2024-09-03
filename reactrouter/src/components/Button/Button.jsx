import styles from './Button.module.scss';

export const Button = ({ text, onClick, className }) => {
    return (
      <button
        className={`${styles.button} ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };