import * as React from 'react';
const styles = require('./StyledButton.module.scss');

export interface StyledButtonProps {
  primary?: boolean;
  disabled?: boolean;
}

const StyledButton: React.FC<StyledButtonProps> = props => {
  const { primary, disabled } = props;

  return (
    <button
      className={`${primary ? styles.primary : styles.secondary} 
      ${
        disabled
          ? primary
            ? styles['primary-disabled']
            : styles['secondary-disabled']
          : ''
      }`}
    >
      {props.children}
    </button>
  );
};

export default StyledButton;
