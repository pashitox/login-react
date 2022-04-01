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

  handleSubmit(evt) {
      


    alert(`The email ${this.state.email} you entered the password was: ${this.state.pass}`);
    evt.preventDefault();
    this.setState({email: "", pass:"" });
  }
  

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <label >

      Email:
      <input type="email" 
      name="email" email={this.state.email} 
      onChange={this.handleChange} />
      Password:

      <input type="password"
      name="pass" pass={this.state.pass}
      onChange={this.handleChange} />
    </label>
    <input type="submit" value="Submit" />
      </form>

  );
} }

export default App;
