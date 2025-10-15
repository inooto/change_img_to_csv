import Plus from '../../assets/Plus.svg';
import '../../scss/components/buttons/subButton.scss'

type SubButtonProps = {
  text: string,
  handleClick: () => void,
}

export const SubButton = (props: SubButtonProps) => {
  const { text, handleClick } = props;

  return (
    <button className='sub-button' onClick={handleClick}>
      <img src={Plus} alt='plus-icon' />
      <p>{text}</p>
    </button>
  )
}