import { useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('');
  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Role</h1>

      <SearchBox
        className="monsters-search-box"
        onSearchHandler={onSearchChange}
        placeholder="search monsters"
      />
      {/* <CardList monsters={fileteredMonsters} /> */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(() => {
//         return { monsters: users };
//       })
//     );
// }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//   });
// };

// render() {
//   const { monsters, searchField } = this.state;
//   const { onSearchChange } = this;

//   const fileteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLowerCase().includes(searchField);
//   });

// return (
//   <div className="App">
//     <h1 className="app-title">Monsters Role</h1>
//     <SearchBox
//       className="monsters-search-box"
//       onSearchHandler={onSearchChange}
//       placeholder="search monsters"
//     />
//     <CardList monsters={fileteredMonsters} />
//   </div>
// );
// }
// }
export default App;
