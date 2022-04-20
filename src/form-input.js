
import  React from "react";
import './from.css';


export default class Login extends React.Component {
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
    //this.valname = this.valname.bind(this);
    this.valpass = this.valpass.bind(this);
    this.valpass2 = this.valpass2.bind(this);
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
  };
 
    
  handleSubmit = (e) => {   
    this.valname(this.state.name)
    this.valpass(this.state.password) 
    this.valpass2(this.state.password) 


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
         
 valname (e){ 
     
    alert(e);
    console.log(e, "juan")
    const len = e.length      
    if (len < 4) { 
      const errorsn = this.state.errorsn;
      const val1 = errorsn.includes("please, tu name must be mayor 4 digits")
      console.log(val1);
        if (val1 === false)  {    
      const errorsn = this.state.errorsn;        
      errorsn.push("please, tu name must be mayor 4 digits");
        }
        } else {         
      var ary = this.state.errorsn;
     var index = ary.indexOf('please, tu name must be mayor 4 digits'); 
    if (index > -1) { 
      ary.splice(index, 1);
    }    // this.setState({errors:[]}); 
     //  e.preventDefault();
      
      }
    
    };  

    valpass =(a)=> {     
      const lena = a.length      
      if (lena < 4) { 
        const errorsp = this.state.errorsp;
        const vala = errorsp.includes("please, tu password must be mayor 4 digits")
       // console.log(vala);
          if (vala === false)  {    
        const errorsp = this.state.errorsp;        
        errorsp.push("please, tu password must be mayor 4 digits");
          }
          } else {         
        var ary = this.state.errorsp;
       var index = ary.indexOf('please, tu password must be mayor 4 digits'); 
      if (index > -1) { 
        ary.splice(index, 1);
      }    // this.setState({errors:[]}); 
       //  e.preventDefault();
        
        }
      
      }

     valpass2=(b)=>{      
    const re = /^[A-Za-z0-9]*([A-Za-z][0-9]|[0-9][A-Za-z])[A-Za-z0-9]*$/i;
    const letter = re.test(b);    
     // console.log(letter);
      alert(letter);
       if(letter === false) {   
        const errorsp = this.state.errorsp;
        const val3 = errorsp.includes("Your password must contain at least one letter and one Number")         
     //   console.log(val3);
              if (val3 === false)  {    
            const errorsp = this.state.errorsp;        
            errorsp.push("Your password must contain at least one letter and one Number");
         } } else {         
            var ary = this.state.errorsp;
           var index = ary.indexOf("Your password must contain at least one letter and one Number"); 
          if (index > -1) { 
            ary.splice(index, 1);
          }    // this.setState({errors:[]}); 
           //  e.preventDefault();
            }      
          }
        
  render() {
     const errorsn = this.state.errorsn;
     const errorsp = this.state.errorsp;        
    const listerros = errorsn.map((errors,i) =>
      <div>
      <li key={i}>{errors}
      <button onClick={()=>this.handleDelete(i)}>x</button>
       </li> </div> );

    const listerrop = errorsp.map((errors,i) =>
    <div>
    <li key={i}>{errors}    
   <button onClick={()=>this.handleDelete(i)}>x</button>
     </li> </div> );

     console.log(listerros);
    return (
      
     <div className='App'>   
     <h2 className="title">Login Form</h2>
      <form className="form" onSubmit={this.handleSubmit}>
     <div>
     <label>Enter your name:
      <input
        id="name"
        type="text" 
        name="name" 
        value={this.state.name}       
        onChange={this.handleChange} /> 
      </label> 
      </div>
      
       <ul>{listerros}</ul>
       <div>
      <label>Enter your password:
        <input
        id="password"
        type="password" 
        name="password" 
        value={this.state.password}       
        onChange={this.handleChange} /> 
      </label> 
        </div>
      <ul>{listerrop}</ul>     
      <div>
        <button className="button" disabled={!this.state.name || !this.state.password } type="submit">submit</button>
      </div>     
    </form>    
    </div>    
  );
} }

 