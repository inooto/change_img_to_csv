import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Background } from '../components/background';
import { Header } from '../components/header';
import { FoodItem } from '../components/FoodItem';
import { Button } from '../components/buttons/button';
import { SubButton } from '../components/buttons/subButton';
import { AlertScreen } from '../modal/alertScreen';
import '../scss/pages/edit.scss';

export const Edit = () => {
  const [test, setTest] = useState([{id: '0', name:'小麦粉'}, {id: '1', name:'砂糖'}, {id: '2', name:'ベーキングパウダー'}, {id: '3', name:'バニラエッセンス'}]);

  const [ alert, setAlert ] = useState<boolean>(false);
  const showAlert = () => setAlert(true);
  const closeAlert = () => setAlert(false);

  const navigate = useNavigate();

  const toHome = () => {
    navigate('/home');
  };

  const toBack = () => {
    navigate(-1);
  };

  const handleDelete = (id: string) => {
    setTest((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setTest((prev => [...prev, {id: crypto.randomUUID(), name: ''}]));
    console.log(test);
  }

  const handleNameChange = (id: string, newName: string) => {
    setTest((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  }

  return (
    <>
      <Background
      backgroundColor='white'
      >
        <Header
        mainText='内容修正'
        showBack={true}
        handleClick={showAlert}
        />
        <div className='edit-body'>
          <div className='edit-body--lists'>
            <ul className='edit-body--lists__items'>
              {test.map((test) =>
                <FoodItem
                key={test.id}
                foodItem={test}
                handleClick={() => handleDelete(test.id)}
                handleChangeName={handleNameChange}
                />
              )}
            </ul>
            <SubButton
            text='追加'
            handleClick={handleAdd}
            />
          </div>
          <div className='edit-body--buttons'>
            <Button
            buttonType='save'
            text='修正を保存'
            handleClick={toHome}
            />
            <Button
            buttonType='delete'
            text='修正を破棄'
            handleClick={showAlert}
            />
          </div>
        </div>
      </Background>
      <AlertScreen
      showAlert={alert}
      onClose={closeAlert}
      toBack={toBack}
      />
    </>
  )
}