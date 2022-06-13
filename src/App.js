import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Goblin", id: "1e2t32wf1" },
        { name: "Troll", id: "871qwr581" },
        { name: "Orc", id: "w27g9re4" },
        { name: "Ogre", id: "ewghwf544" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}
export default App;
