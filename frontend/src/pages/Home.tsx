import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Background } from '../components/background';
import { ColumnBox } from '../components/columnBox';
import Camera from '../assets/Camera.svg';
import Upload from '../assets/Upload.svg';
import '../scss/pages/Home.scss';

export const Home = () => {
  return (
    <Background
    backgroundColor='gray'
    >
      <Header
      mainText='原材料読み取り'
      subText='写真から原材料をCSVに変換'
      />

      <div className='home-body'>
        <ColumnBox
        boxColor='white'
        >
          <img className='home-body--select-img__camera-icon' src={Camera} alt='Camera-icon' />
          <div className='home-body--select-img__main'>写真を撮影</div>
          <div className='home-body--select-img__sub'>原材料が記載された紙を撮影してください</div>
        </ColumnBox>
        <div className='home-body--or'>または</div>
        <ColumnBox
        boxColor='white'
        >
          <img className='home-body--select-file__upload-icon' src={Upload} alt='Upload-icon' />
          <div className='home-body--select-file__text'>ファイルから選択</div>
        </ColumnBox>
      </div>
      
      <Footer
      activePage='home'
      />
    </Background>
  );
}
