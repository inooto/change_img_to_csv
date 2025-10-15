import { useNavigate } from 'react-router-dom';
import Alert from '../assets/Alert.svg';
import { Button } from '../components/buttons/button';
import '../scss/modal/alertScreen.scss';

type AlertScreenProps = {
  showAlert: boolean,
  onClose: () => void,
  toBack: () => void,
}

export const AlertScreen = (props: AlertScreenProps) => {
  const { showAlert, onClose } = props;

  const navigate = useNavigate();

  const toBack = () => navigate(-1);
  
  return (
    <>
      {showAlert && (
      <div className='alert' onClick={onClose} >
        <div className='alert--content' onClick={(e) => e.stopPropagation()}>
          <div className='alert--content__icon'>
            <img src={Alert} alt='alert-icon' />
          </div>
          <div className='alert--content__texts'>
            <div className='alert--content__texts-main'>変更を破棄しますか？</div>
            <div className='alert--content__texts-sub'>編集した内容は全て失われ、<br />元に戻すことはできません。</div>
          </div>
          <div className='alert--content__buttons'>
            <Button
            buttonType='alert'
            text='変更を破棄'
            handleClick={toBack}
            />
            <Button
            buttonType='cancel'
            text='キャンセル'
            handleClick={onClose}
            />
          </div>
        </div>
      </div>
      )}
    </>
  )
}