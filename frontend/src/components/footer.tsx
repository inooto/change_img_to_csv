import Home from '../assets/Home.svg';
import Clock from '../assets/Clock.svg';
import Setting from '../assets/Settings.svg';
import '../scss/components/Footer.scss';

type FooterProp = {
  activePage: 'home' | 'history' | 'setting'
}

export const Footer = (props : FooterProp) => {
  const { activePage } = props;

  return (
    <footer className='footer'>
      <div className={`footer--item ${activePage === 'home' ? 'footer--active' : ''}`}>
        <img src={Home} alt='home-icon' />
        <div>ホーム</div>
      </div>
      <div className={`footer--item ${activePage === 'history' ? 'footer--active' : ''}`}>
        <img src={Clock} alt='clock-icon' />
        <div>履歴</div>
      </div>
      <div className={`footer--item ${activePage === 'setting' ? 'footer--active' : ''}`}>
        <img src={Setting} alt='setting-icon' />
        <div>設定</div>
      </div>
    </footer>
  )
};