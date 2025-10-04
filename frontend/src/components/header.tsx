import { useNavigate } from 'react-router-dom';
import BackButton from '../assets/BackButton.svg';
import '../scss/components/Header.scss';

export type HeaderProps = {
  mainText: string,
  subText?: string,
  showBack: boolean
  showMore: boolean
};

export const Header = (props: HeaderProps) => {
  const { mainText, subText, showBack, showMore} = props;

  const navigate = useNavigate();
  const clickBack = () => {
    navigate(-1);
  };

  return (
    <header className="header">
      <div>
        {showBack && (
          <button onClick={clickBack}><img src={BackButton} alt='back-button-icon' /></button>
        )}
      </div>

      <div className='header--center'>
        <div className='header--center__main'>{mainText}</div>
        <div className='header--center__sub'>{subText}</div>
      </div>

      <div>
        {showMore && (
          <div>+</div>
        )}
      </div>
    </header>
  )
};