import NextHead from 'next/head';
import { ReactNode } from 'react';

type HeadProps = {
  title?: string;
  children?: ReactNode;
};

export const Head = ({ title, children }: HeadProps) => {
  return (
    <NextHead>
      <title>{`Shayan Ur Rehman - ${title ?? 'Portfolio'}`}</title>
      {children}
    </NextHead>
  );
};
