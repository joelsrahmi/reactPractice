import React from 'react';

 class App extends React.Component {
     render(){
         let txt = this.props.txt
         return <h1>{this.props.txt}</h1>

         //return <h1>{this.props.txt}</h1>
     }
 }

 App.propTypes ={
     txt: React.PropTypes.string,
     cat: React.PropTypes.number.isRequired
 }

 App.defaultProps = {
     txt: "this is the default text"
 }

export default App