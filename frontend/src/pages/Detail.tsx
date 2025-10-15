import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Background } from '../components/background';
import { ColumnBox } from '../components/columnBox';
import { FoodsResult } from '../components/foodsResult';
import '../scss/pages/detail.scss';

export const Detail = () => {

  const test = {
    title: 'パン1_20251001',
    items: ['小麦粉', '砂糖', 'ベーキングパウダー', 'バニラエッセンス'],
    date: '2025-10-01'
  }

  const navigate = useNavigate();

  const toBack = () => navigate(-1);
  
  return (
    <Background
    backgroundColor='gray'
    >
      <Header
      mainText='原材料名'
      showBack={true}
      showMore={true}
      handleClick={toBack}
      />
      <div className='detail-body'>
        <ColumnBox
        boxColor='white'
        >
          <div className='detail-body--titles'>
            <p className='detail-body--titles__left-side'>ファイル名</p>
            <p className='detail-body--titles__right-side'>{test.title}</p>
          </div>
          <div className='detail-body--titles'>
            <p className='detail-body--titles__left-side'>項目数</p>
            <p className='detail-body--titles__right-side'>{test.items.length}項目</p>
          </div>
          <div className='detail-body--titles'>
            <p className='detail-body--titles__left-side'>保存時刻</p>
            <p className='detail-body--titles__right-side'>{test.date}</p>
          </div>
        </ColumnBox>
        <ColumnBox
        boxColor='white'
        >
          <div className='detail-body--items'>原材料一覧</div>
          <FoodsResult
          foodItems={test.items}
          />
        </ColumnBox>
      </div>
    </Background>
  )
}