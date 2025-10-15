import Next from '../assets/Next.svg';
import '../scss/components/historyItem.scss';

type HistoryItemProps = {
  title: string,
  date: string,
  counts: number,
  handleClick: () => void,
}

export const HistoryItem = (props: HistoryItemProps) => {
  const { title, date, counts, handleClick } = props;
  
  return (
    <button className='history-item' onClick={handleClick}>
      <div>
        <p className='history-item--title'>{title}</p>
        <div className='history-item--buttom'>
          <p>{date}</p>・
          <p>{counts}項目</p>
        </div>
      </div>
      <img src={Next} alt='next-icon' />
    </button>
  )
}