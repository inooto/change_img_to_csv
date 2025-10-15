import React, { useState } from 'react';
import Trash from '../assets/Trash.svg';
import Dot from '../assets/Dot.svg';
import '../scss/components/foodItem.scss';

type FoodItemProps = {
  foodItem: { id: string, name: string},
  handleClick: () => void,
  handleChangeName: ( id: string, newName: string) => void,
}

export const FoodItem = (props: FoodItemProps) => {
  const { foodItem, handleClick, handleChangeName } = props;
  const [ foodName, setFoodName ] = useState(foodItem.name);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setFoodName(newName);
    handleChangeName(foodItem.id, newName);
  }

  return (
    <li className='food-item'>
      <img src={Dot} alt='dot-icon' className='food-item--dot-icon' />
      <input className='food-item--name' value={foodName} onChange={changeName} />
      <button onClick={handleClick}><img src={Trash} alt='trash-icon' /></button>
    </li>
  )
}