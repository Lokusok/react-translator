import { Dispatch, SetStateAction } from 'react';

export interface IInput {
  text: string;
  source: string;
}

export interface InputCompProps {
  placeholder: string;
  addLine?: boolean;
  disabled?: boolean;
  value: IInput;
  setValue: SetValueType;
}

export type SetValueType = Dispatch<SetStateAction<IInput>>;
