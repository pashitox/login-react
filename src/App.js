import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email:'', pass:''};
 
 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  
  handleSubmit(name) {
      console.log(name);

    alert(`The name you entered was: ${name}`);
    name.preventDefault();
  }
  

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <label >
      Email:
      <input type="email" name="email" email={this.state.email}
      onChange={this.handleChange} />
      Password:
      <input type="password" name="pass" pass={this.state.pass}
      onChange={this.handleChange} />
    </label>
    <button type="submit" value="Submit" > Add a new person!</button>
      </form>

  );
} }

export default App;
