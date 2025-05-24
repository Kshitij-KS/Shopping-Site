import { useState, useEffect } from "react";
import ItemList from "./components/Item-list/Item-list.component";
import SearchBox from "./components/Search-box/Search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [items, setItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState(items)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {setItems(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchField);
  });

  setFilteredItems(newFilteredItems)

}, [items, searchField]);


  const onSearchChange = (event) => {
    console.log(event.target.value);
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-left">
          <div className="nav-logo">
            <a href="#">Logo</a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
      {/* {filteredItems.map((item) => {
          return (
            <div className="item" key="item.id">
              <img src="./item" className="item-logo" alt="Item-Img" />
              <p>{item.name}</p>
            </div>
          );
        })} */}
      <ItemList items={filteredItems} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       items: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState({ items: users });
//       });
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   //This function is just initialized once instead of everytime the input changes like when we put it directly in onChange{}.

//   render() {

//     const filteredItems = this.state.items.filter((item) => {
//       return item.name.toLowerCase().includes(this.state.searchField);
//     });

//     return (
//       <div className="App">
//         <nav className="navbar">
//           <div className="nav-left">
//             <div className="nav-logo">
//               <a href="#">Logo</a>
//             </div>
//           <ul class="nav-links">
//             <li>
//               <a href="#" class="active">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Services</a>
//             </li>
//             <li>
//               <a href="#">Portfolio</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//           </div>

//           <div className="nav-right">
//             <ul class="nav-links">
//             <li>
//               <a href="#">
//                 Cart
//               </a>
//             </li>
//             <li><a href="#" class="active">
//                 Login
//               </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         <header className="App-header">
//           <h2>Hi there! This is a shopping site.</h2>
//           <div className="search-div">
//             <SearchBox
//               onChangeHandler={this.onSearchChange}
//               Placeholder="Search for items"
//               Classname="search-box-items"
//             />
//           </div>
//         </header>
//         {/* {filteredItems.map((item) => {
//           return (
//             <div className="item" key="item.id">
//               <img src="./item" className="item-logo" alt="Item-Img" />
//               <p>{item.name}</p>
//             </div>
//           );
//         })} */}
//         <ItemList items={filteredItems} />
//       </div>
//     );
//   }
// }

export default App;
