import { ReactNode } from 'react';
import '../scss/components/background.scss'

type BackgroundProps = {
  backgroundColor: 'white' | 'gray';
  children: ReactNode;
};

export const Background = (props: BackgroundProps) => {
  const { backgroundColor, children } = props;
  
  return (
    <div className={`background ${backgroundColor === 'white' ? 'background--white' : backgroundColor === 'gray' ? 'background--gray' : ''}`}>
      {children}
    </div>
  )
}