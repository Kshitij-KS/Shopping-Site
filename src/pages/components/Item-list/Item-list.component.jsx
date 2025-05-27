import './Item-list.styles.css';
import Item from '../Item/Item.component';

const ItemList = ({ items }) => (
    <div className="item-list">
        {items.map((item) => {
            return (
                <Item items={item} />
            );
        })}
    </div>
);
//Using Implicit Return

export default ItemList;
// This component is responsible for rendering the list of items.
// It receives the items as props and maps over them to create a list of item components.