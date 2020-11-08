import './styles.scss';

const DisplayDrink = ({ image, drink, next }) => (
    <>
        <h1 className="heading">Next Drink {drink.name}</h1>
        <img className="drink"  src={image} alt={drink.name} />
        {setTimeout(() => { next('BEGIN') }, 3000)}
    </>
)

export default DisplayDrink;