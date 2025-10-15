import Download from '../../assets/Download.svg';
import X from '../../assets/X.svg';
import Edit from '../../assets/Edit.svg';
import '../../scss/components/buttons/button.scss';

type ButtonProps = {
  buttonType: 'save' | 'delete' | 'change' | 'cancel' | 'alert',
  text: string,
  handleClick: () => void,
}

export const Button = (props: ButtonProps) => {
  const { buttonType, text, handleClick } = props;

  return (
    <>
    { buttonType === 'save' ? (
      <button className='main-button main-button--save' onClick={handleClick}>
        <img src={Download} alt='download-icon' />
        <p>{text}</p>
      </button>
    ): buttonType === 'delete' ? (
      <button className='main-button main-button--delete' onClick={handleClick}>
        <img src={X} alt='x-icon' />
        <p>{text}</p>
      </button>
    ): buttonType === 'change' ? (
      <button className='main-button main-button--change' onClick={handleClick}>
        <img src={Edit} alt='edit-icon' />
        <p>{text}</p>
      </button>
    ): buttonType === 'cancel' ? (
      <button className='main-button main-button--cancel' onClick={handleClick}>
        <p>{text}</p>
      </button>
    ): buttonType === 'alert' ? (
      <button className='main-button main-button--alert' onClick={handleClick}>
        <p>{text}</p>
      </button>
    ): null}
    </>
  )
}