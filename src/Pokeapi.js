import React, { Component } from "react";

class Pokeapi extends Component {
  state = {
    data: []
  };

  // Code is called after the component is mounted/inserted into the DOM.
  componentDidMount() {
    // Change the end of the link to get different data
    // Some API may request a token, check their documentation !
    let url = "https://pokeapi.co/api/v2/pokemon/ditto";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
  }

  render() {
    const { data } = this.state;
    // Forced to use ? because not all fields contain sprites
    console.log(data.sprites?.front_default);

    return (
      <ul>
        <li>
          <h3>Id</h3>
          <h3>{data.id}</h3>
        </li>
        <li>
          <h3>Name</h3>
          <h3>{data.name}</h3>
        </li>
        <li>
          <img src={data.sprites?.front_default} />
        </li>
        <li>
          <h3>Weight</h3>
          <h3>{data.weight}</h3>
        </li>
      </ul>
    );
  }
}

export default Pokeapi;
