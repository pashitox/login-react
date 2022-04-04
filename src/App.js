import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputs:""};
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

   handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value });
   
  };

 

  handleSubmit = (event) => {
 
      const datos = {
        name: this.state.name,
        pwd: this.state.pwd
      };
     
     event.preventDefault();
     console.log(datos);


  };
  


  //function Saludo(props) {
    //const isLoggedIn = props.isLoggedIn;
  //  if (isLoggedIn) {
    //  return <Bienvenida />;
   // }
   // return <UsuarioAnonimo />;
 // }
     
        //alert(`The User ${this.state.UserName} you entered the password was: ${this.state.pass}`);
      //evt.preventDefault();
      //this.setState({UserName: "", pass:"" });
    
  render() {
          
    const { name, pwd } = this.state;
       
    return (
      <form onSubmit={this.handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="name" 
        value={name || ''} 
        onChange={this.handleChange}
      />
      </label>
      <label>Enter your password:
        <input 
          type="password" 
          name="pwd" 
          value={pwd || ''} 
          onChange={this.handleChange}
        />
        </label>
        <input type="submit" />
    </form>

  );
} }

export default App;
