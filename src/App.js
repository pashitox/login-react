import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      pwd:"",
      errors:[],
   
  };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validation = this.validation.bind(this);
  };

   handleChange(evt) {


    this.setState({[evt.target.name]: evt.target.value });

  };

  

  handleSubmit = (event) => {    
     
    event.preventDefault()
        const name  = this.state.name;

       // const errors = this.state.errors;

        const  val = this.validation(name);

       console.log(val)
        
      //  if (name.length < 4) {
       
        //  errors.push("randon");
        
      //this.setState({ errors:errors});
        
        };
           
  
  
  validation = (name) =>{
    
    const errors = this.state.errors; 

    console.log(name);

    if (name.length < 4) {
       
      errors.push("please, tu password must be mayor 4 digits");
     
    this.setState({...this.state.errors, errors});

     return 1
       
  } 
  

 
  }


   


  render() {
          
    const { name, errors} = this.state;
   
            
    return (
      <form onSubmit={this.handleSubmit}>
      <label>Enter your name:
        <input
        id="name"
        type="text" 
        name="name" 
        value={name}
       
       onChange={this.handleChange} /> 
      </label>

      <div>{errors.map(error => <p key={error}>{error}</p>)}</div>       
 

      <label>Enter your password:
        <input 
        //  type="password" 
         // name="pwd" 
         // value={pwd || ''} 
          onChange={this.handleChange}          
        />
        </label>
        <div>{this.state.error}</div>
        <input type="submit" />
    </form>

  );
} }

export default App;
