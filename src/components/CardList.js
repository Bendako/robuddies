import Card from './Card';
import { robots } from "../robots";

const CardList = ({ robots }) => {
    return (
    <div className="tc">
    { robots.map((robot, i) => {
        return (
        <Card 
            key={i}
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
        />
        )
    }) }
    </div>
)
};

export default CardList;