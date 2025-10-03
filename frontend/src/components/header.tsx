import '../scss/components/Header.scss';

export type HeaderProps = {
  mainText: string,
  subText?: string,
  showBack: boolean
  showMore: boolean
};

export const Header = (props: HeaderProps) => {
  const { mainText, subText, showBack, showMore} = props;

  return (
    <header className="header">
      <div>
        {showBack && (
          <div>＜</div>
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