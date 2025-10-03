import { ReactNode } from 'react';
import '../scss/components/columnBox.scss';

type ColumnBoxProps = {
  boxColor: 'white' | 'gray';
  children: ReactNode;
};

export const ColumnBox = (props: ColumnBoxProps) => {
  const { boxColor, children } = props;
  
  return (
    <div className={`box ${boxColor === 'white' ? 'box--white' : boxColor === 'gray' ? 'box--gray' : ''}`}>
      {children}
    </div>
  )
}