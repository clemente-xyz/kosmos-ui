import { CSSProperties, InputHTMLAttributes } from 'react';

export type TTextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variant?: TTextInputVariant;
  colors?: { base?: string; highlight?: string };
  error?: string;
  style?: TTextInputStyle;
};

export type TTextInputStyle = {
  root?: CSSProperties;
  input?: CSSProperties;
  bar?: CSSProperties;
  label?: CSSProperties;
  hightlight?: CSSProperties;
  error?: CSSProperties;
};

export type TTextInputVariant = 'standard' | 'filled';
