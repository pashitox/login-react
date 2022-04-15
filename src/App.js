import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      password:"",
      errorsn:[],
      errorsp:[]  
  };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valname = this.valname.bind(this);
    this.valpass1 = this.valpass1.bind(this);
   // this.valpass2 = this.valpass2.bind(this);
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
    this.valname(this.state.name)
    this.valpass1(this.state.password) 
   // this.valpass2(this.state.password) 
    const countn = this.state.errorsn;
    const countp = this.state.errorsp;

    const envion = countn.length;
    const enviop = countp.length;
    const enviox = 0;

    console.log(envion);
    console.log(enviop);
    
    if ( envion === enviop && enviop === enviox) { 
     
      alert ("enviado")
      } else {
       alert("no enviado")
      };
    this.setState({name:"", password:""});    
    e.preventDefault()
  };
           
  
  
  valname =(e)=> {     
    const len = e.length
      console.log(len);
      alert(len)
    if (len < 4) { 
      const errorsn = this.state.errorsn;
      const val1 = errorsn.includes("please, tu password must be mayor 4 digits")
      console.log(val1);
        if (val1 === false)  {    
      const errorsn = this.state.errorsn;        
      errorsn.push("please, tu password must be mayor 4 digits");
        }
        } else {         
      var ary = this.state.errorsn;
     var index = ary.indexOf('please, tu password must be mayor 4 digits'); 
    if (index > -1) { 
      ary.splice(index, 1);
    }    // this.setState({errors:[]}); 
     //  e.preventDefault();
      
      }
    
    }

valpass1=(a)=>{
 if(a.search(/[0-9]/i) < 0) {   
  const errorsp = this.state.errorsp;
  const val2 = errorsp.includes("Your password must contain at least one digit.")
   
  console.log(val2);
        if (val2 === false)  {    
      const errorsp = this.state.errorsp;        
      errorsp.push("Your password must contain at least one digit.");
   } } else {         
      var ary = this.state.errorsp;
     var index = ary.indexOf("Your password must contain at least one digit."); 
    if (index > -1) { 
      ary.splice(index, 1);
    }    // this.setState({errors:[]}); 
     //  e.preventDefault();
      }

    }

   // valpass2=(b)=>{
//
   //   const regex = /[A-Z]/g;
   // const letter = b.match(regex);
//
   //   if(letter < 0) {   
   //    const errorsp = this.state.errorsp;
   //    const val3 = errorsp.includes("Your password must contain at least one letter")
   //     
   //    console.log(val3);
   //          if (val3 === false)  {    
   //        const errorsp = this.state.errorsp;        
   //        errorsp.push("Your password must contain at least one letter");
   //     } } else {         
   //        var ary = this.state.errorsp;
   //       var index = ary.indexOf("Your password must contain at least one letter"); 
   //      if (index > -1) { 
   //        ary.splice(index, 1);
   //      }    // this.setState({errors:[]}); 
   //       //  e.preventDefault();
   //        }
   //  
   //      }
  //
  //
   //    
      
        
  
 
  render() {
     const errorsn = this.state.errorsn;
     const errorsp = this.state.errorsp;        
    const listerros = errorsn.map((errors,i) =>
      <li key={i}>{errors}
      <button onClick={()=>this.handleDelete(i)}>x</button>
       </li>);

    const listerrop = errorsp.map((errors,i) =>
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
       <ul>{listerros}</ul>
      <label>Enter your password:
        <input
        id="password"
        type="password" 
        name="password" 
        value={this.state.password}       
        onChange={this.handleChange} /> 
      </label>   
      <ul>{listerrop}</ul>     
     <button disabled={!this.state.name || !this.state.password } type="submit">submit</button>
    </form>
    
    </div>
    

  );
} }

export default App;
