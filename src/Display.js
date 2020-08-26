import React from 'react';
import './App.css';
class Display extends React.Component
{
constructor(props)
{
super(props);

this.state={

    services:null
   
}

}


componentDidMount(){
fetch('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services').then((resp) => {
resp.json().then((result) => {

    this.setState({services:result.data})

})

})

}


render()
{
return (
<div className="Display">

<h1>
    Fetch API data for service(Control)
    </h1>
{

    this.state.services ?
     this.state.services.map((item,i)=>
     <div>
         <p >
             {item.links.self}
            
         </p>
         </div>
     
     ):null
}


</div>
)}

}export default Display;