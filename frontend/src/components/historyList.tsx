import { useNavigate } from 'react-router-dom';
import { HistoryItem } from './historyItem';
import '../scss/components/historyList.scss';

type FoodItem = {
  id: number,
  title: string,
  items: string[],
  date: string,
}

type HistoryListProps = {
  foodItems: FoodItem[]
}

export const HistoryList = (props: HistoryListProps) => {
  const { foodItems } = props;

  const navigate = useNavigate();

  const toDetail = () => navigate('/detail');

  return (
    <div className='history-list'>
      {foodItems.map(foodItem => 
        <HistoryItem
        title={foodItem.title}
        date={foodItem.date}
        counts={foodItem.items.length}
        handleClick={toDetail}
        />
      )}
    </div>
  )
}