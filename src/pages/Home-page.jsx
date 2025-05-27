import { useState, useEffect } from "react";

import ItemList from "./components/Item-list/Item-list.component.jsx";
import SearchBox from "./components/Search-box/Search-box.component";

const HomePage = () => {

    const [searchField, setSearchField] = useState("");
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => {
                setItems(users);
            });
    }, []);

    useEffect(() => {
        const newFilteredItems = items.filter((item) => {
            return item.name.toLowerCase().includes(searchField);
        });

        setFilteredItems(newFilteredItems);
    }, [items, searchField]);

    const onSearchChange = (event) => {
        console.log(event.target.value);
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };


    return (
        <div className="App">
            <header className="App-header">
                <h2>Hi there! This is a shopping site.</h2>
                <div className="search-div">
                    <SearchBox
                        onChangeHandler={onSearchChange}
                        Placeholder="Search for items"
                        Classname="search-box-items"
                    />
                </div>
            </header>
            <ItemList items={filteredItems} />
        </div>
    );
}

export default HomePage