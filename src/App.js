import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      errors:[]  
  };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validation1 = this.validation1.bind(this);
    this.validation2 = this.validation2.bind(this);
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
    this.validation1(this.state.name)
    this.validation2(this.state.name)  
    const count = this.state.errors;

    const envio = count.length;

    console.log(envio);
    
    if ( envio === 0) {    
      alert ("enviado")
      } else {
       alert("no enviado")
      };
    this.setState({name:""});    
    e.preventDefault()
  };
           
  
  
  validation1 = (e) => {     
    const len = e.length
      console.log(len);
    if (len < 4) { 
      const errors = this.state.errors;
      const valor = errors.includes("please, tu password must be mayor 4 digits")
      console.log(valor);
        if (valor === false)  {    
      const errors = this.state.errors;        
      errors.push("please, tu password must be mayor 4 digits");
        }
        } else {         
      var ary = this.state.errors;
     var index = ary.indexOf('please, tu password must be mayor 4 digits'); 
    if (index > -1) { 
      ary.splice(index, 1);
    }    // this.setState({errors:[]}); 
     //  e.preventDefault();
      
      }
    
    }

validation2 = (a) =>{

 if(a.search(/[0-9]/i) < 0) {   
  const errors = this.state.errors;
  const valor = errors.includes("Your password must contain at least one digit.")
   
  console.log(valor);
        if (valor === false)  {    
      const errors = this.state.errors;        
      errors.push("Your password must contain at least one digit.");
   } } else {         
      var ary = this.state.errors;
     var index = ary.indexOf("Your password must contain at least one digit."); 
    if (index > -1) { 
      ary.splice(index, 1);
    }    // this.setState({errors:[]}); 
     //  e.preventDefault();
      }

    }
  
  
       
      
        
  
 
  render() {
     const errors = this.state.errors;    
    const listerros = errors.map((errors,i) =>
      <li key={i}>{errors}
      <button onClick={()=>this.handleDelete(i)}>x</button>
       </li>);

     console.log(listerros);
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
