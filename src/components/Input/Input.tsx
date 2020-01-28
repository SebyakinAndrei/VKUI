import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import FormField from '../FormField/FormField';
import { HasAlign, HasFormStatus, HasRef, HasRootRef } from '../../types/props';

export interface InputProps extends
  InputHTMLAttributes<HTMLInputElement>,
  HasRef<HTMLInputElement>,
  HasRootRef<HTMLDivElement>,
  HasFormStatus,
  HasAlign {}

const Input: FunctionComponent<InputProps> = ({
  align,
  status,
  getRef,
  className,
  getRootRef,
  ...restProps
}: InputProps) => {
  return (
    <FormField
      className={classNames('Input', className, { [`Input--${align}`]: !!align })}
      status={status}
      getRootRef={getRootRef}
    >
      <input {...restProps} className="Input__el" ref={getRef} />
    </FormField>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
