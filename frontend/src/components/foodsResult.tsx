import '../scss/components/foodsResult.scss';

type FoodResultProps = {
  foodItems: string[]
}

export const FoodsResult = (props: FoodResultProps) => {
  const { foodItems } = props;
  
  return (
    <div className='foods-results'>
      {foodItems.map(foodItem =>
      <div className='foods-results--elements'>{foodItem}</div>
      )}
    </div>
  )
}