import React from 'react';
import './App.css';

class Provider extends React.Component
{
constructor()
{
super();
this.state={

    providers:null
}

}
componentDidMount(){
fetch('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10').then((resp) => {
resp.json().then((result) => {

    this.setState({providers:result.data})

})

})

}


render()
{
return (
<div className="Provider">

<h1>
    Fetch API data for Provider(Results)
    </h1>
{

    this.state.providers ?
     this.state.providers.map((item,i)=>
     <div>
         <table>
  <tr>
      <td>
      <p>
  <img src={item.attributes["profile-image"]}  /> 
  </p>
  </td>
  <td>
  
  <p>  
      {item.attributes.name}
   
  </p>
  <p>{item.attributes.subspecialties}</p>
  </td>
 
  
 
  </tr>


         </table>
        
         </div>
     
     ):null
}


</div>
)}

}export default Provider;