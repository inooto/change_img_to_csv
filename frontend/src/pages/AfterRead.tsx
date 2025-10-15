import { useNavigate } from 'react-router-dom';
import { Background } from '../components/background';
import { Header } from '../components/header';
import { Photo } from '../components/photo';
import { FoodsResult } from '../components/foodsResult';
import { Button } from '../components/buttons/button';
import '../scss/pages/AfterRead.scss';

export const AfterRead = () => {
  const number = 4;
  const test = {
    title: 'パン1_20251001',
    items: ['小麦粉', '砂糖', 'ベーキングパウダー', 'バニラエッセンス'],
    date: '2025-10-01'
  }

  const navigate = useNavigate();

  const toHistory = () => navigate('/history');

  const toEdit = () => navigate('/edit');

  const toBack = () => navigate(-1);
  
  return (
    <Background
    backgroundColor='white'
    >
      <Header
      mainText='読み取り内容確認'
      showBack={true}
      handleClick={toBack}
      />
      <div className='read-body'>
        <Photo />
        <div className='read-body--result-title'>
          <div className='read-body--result-title__main-text'>変換結果（CSV）</div>
          <div className='read-body--result-title__sub-text'>{number}項目</div>
        </div>
        <FoodsResult
        foodItems={test.items}
        />
        <div className='read-body--buttons'>
          <Button
          buttonType='save'
          text='保存'
          handleClick={toHistory}
          />
          <Button
          buttonType='change'
          text='内容を修正'
          handleClick={toEdit}
          />
        </div>
      </div>
    </Background>
  )
}