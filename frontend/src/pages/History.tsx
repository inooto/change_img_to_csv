import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Background } from '../components/background';
import { HistoryList } from '../components/historyList';
import '../scss/pages/history.scss';

export const History = () => {
  const test = [
    {
      id: 1,
      title: 'パン1_20251001',
      items: ['小麦粉', '砂糖', 'ベーキングパウダー', 'バニラエッセンス'],
      date: '2025-10-01'},
    {
      id: 2,
      title: 'パン2_20251002',
      items: ['小麦粉', '砂糖', 'ベーキングパウダー', 'バニラエッセンス'],
      date: '2025-10-02'}
    ]
  
  return (
    <Background
    backgroundColor='gray'
    >
      <Header
      mainText='保存履歴'
      showMore={true}
      />
      <div className='history-body'>
        <div className='history-body--contents'>
          <HistoryList
          foodItems={test}
          />
        </div>
      </div>
      <Footer
      activePage='history'
      />

    </Background>
  )
}