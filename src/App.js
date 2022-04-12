import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      envio: false,
      errors:["Your password must contain at least one digit.", "el pepe."]  
  };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validation = this.validation.bind(this);
   this.handleDelete = this.handleDelete.bind(this);
  };

   handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value });
  };

  
  handleDelete (index) {
  const errors = this.state.errors
  errors.splice(index, 1); 
 // const del = errors.filter(error => error.id !== error);
   console.log(errors);
  this.setState({ errors:errors });
  }

  handleSubmit = (e) => {      
   const name  = this.state.name;        
   // const errors = this.state.errors;
    const val = this.validation(name);
    console.log(val);    
 //  if (name.length < 4) {
//  errors.push("randon");
//  this.setState({ errors:[]});
      this.setState({name:""});
       e.preventDefault() 
        };
           
  
  
  validation = (e) => {    
    console.log(e);
      
    const anch = e.length
    console.log (anch);    
   if (anch < 4) {      
   const errors = this.state.errors;       
   const valor = errors.includes("please, tu password must be mayor 4 digits");         
   console.log(valor);
      
     if (valor === false)  {
     const errors = this.state.errors; 
     alert("qwe")
      errors.push("please, tu password must be mayor 4 digits"); 
     }
 
 //else {
   //   const errors = this.state.errors;          
   //   const index = errors.indexOf("please, tu password must be mayor 4 digits");    
   //   console.log(index);
   //   errors.splice(index, 1); 
//
   // }    
    } if (e.search(/^[a-zA-Z ]/i) < 0) {
         const errors = this.state.errors; 
              const valor = errors.includes("Your password must contain at least one letter.")
       if (valor === false)  {
        errors.push("Your password must contain at least one letter.");
      }
      }
      if (e.search(/[0-9]/i) < 0) {
      const errors = this.state.errors;       
      const valor = errors.includes("Your password must contain at least one digit.")
      if (valor === false)  {
      errors.push("Your password must contain at least one digit.");
      }
 
 
 
       //};
  

 // return 1
  };
 // this.setState({errors: errors});

  }


  render() {
 
    const errors = this.state.errors;
    const listerros = errors.map((errors,i) =>
      <li key={i}>{errors}
      <button onClick={()=>this.handleDelete(i)}>x</button>
      </li>
      
    );
            
    return (
   <div>   
     <form onSubmit={this.handleSubmit}>
      <label>Enter your name:
        <input
        id="name"
        type="text" 
        name="name" 
        value={this.state.name}       
        onChange={this.handleChange} /> 
      </label>     
      <button disabled={!this.state.name} type="submit">submit</button>
    </form>
    <ul>{listerros}</ul>
    </div>
    

  );
} }

export default App;
