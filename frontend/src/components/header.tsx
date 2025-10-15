import BackButton from '../assets/BackButton.svg';
import '../scss/components/Header.scss';

export type HeaderProps = {
  mainText: string,
  subText?: string,
  showBack?: boolean,
  showMore?: boolean,
  handleClick?: () => void,
};

export const Header = (props: HeaderProps) => {
  const {
    mainText,
    subText,
    showBack=false,
    showMore=false,
    handleClick,
  } = props;

  return (
    <header className="header">
      <div>
        {showBack && (
          <button onClick={handleClick}><img src={BackButton} alt='back-button-icon' /></button>
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