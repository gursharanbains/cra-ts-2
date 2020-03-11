import * as React from 'react';

const styles = require('./StyledButton.module.scss');

export interface StyledButtonProps {
  primary?: boolean;
  disabled?: boolean;
}

const StyledButton: React.FC<StyledButtonProps> = props => {
  const { primary, disabled, children } = props;

  return (
    <button
      type="button"
      className={`${primary ? styles.primary : styles.secondary} 
      ${
        /* eslint-disable no-nested-ternary */
        disabled
          ? primary
            ? styles['primary-disabled']
            : styles['secondary-disabled']
          : ''
      }`}
    >
      {children}
    </button>
  );
};

export default StyledButton;
