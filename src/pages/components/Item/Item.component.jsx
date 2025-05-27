import "./Item.styles.css";

const Item = ({items}) => {
    const { id, name } = items;

    return (
        <div className="item-container" key={id}>
            <img alt={`${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} className="item-logo" />
            <h3>{name}</h3>
        </div>
    );
}
export default Item;