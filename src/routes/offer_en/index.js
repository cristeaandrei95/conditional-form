import { h, Component } from 'preact';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import style from './style';
import axios from 'axios';

const Step = ({data, step, answerType1, answerType2, answerType3, answerType4, answerType5 }) => (
 <div class={style.conditional_wrapper}>
  {(() => {
   switch(step) {
    case 1:
     return ( 
      <div class={style.conditional_inner}>
       <div class={style.split}>
        <h3>Let's get to know each other*</h3>
        <br/>
        <h3>1/7</h3>
        <br/>
        <h5>*Field required</h5>
       </div>
       <div class={style.split}>
        <ul>
         <li><label>Name :</label><input type="text" name="name" /><hr/></li> 
         <li><label>Email address:</label><input type="text" name="email" /><hr/></li> 
         <li><label>Mobile no:</label><input type="text" name="phone" /><hr/></li>
         <li><label>Company name :</label><input type="text" name="company" /><hr/></li>
         <button onClick={answerType3} class={style.button}>Next step</button>
        </ul>
       </div>
      </div>
     )
    case 2:
     return ( 
      <div class={style.conditional_inner}>
       <div class={style.split}>
        <h3>What are you intereseted in?</h3>
        <br/>
        <h3>2/7</h3>
       </div>
       <div class={style.split}>
        <ul>
         <button onClick={answerType1} class={style.button}>Website</button>
         <button onClick={answerType1} class={style.button}>E-commerce</button>
         <button onClick={answerType1} class={style.button}>Web Application</button>
         <button onClick={answerType1} class={style.button}>SEO and Marketing online</button>
        </ul>
       </div>
      </div>
     )
    case 3:
     return ( 
      <div class={style.conditional_inner}>
       <div class={style.split}>
        <h3>Website</h3>
        <br/>
        <h3>3/7</h3>
       </div>
       <div class={style.split}>
        <ul>
         <button onClick={answerType1} class={style.button}>Web si graphic design</button>
         <button onClick={answerType1} class={style.button}>Front-end development</button>
         <button onClick={answerType1} class={style.button}>Back-end development</button>
         <button onClick={answerType1} class={style.button}>I don't know</button>
        </ul>
       </div>
      </div>
     )
    case 4:
     return ( 
      <div class={style.conditional_inner}>
       <div class={style.split}>
        <h3>Details of your project*</h3>
        <br/>
        <h3>3/7</h3>
        <br/>
        <h5>*Field required</h5>
       </div>
       <div class={style.split}>
        <ul>
         <textarea style={{resize: 'none'}}  rows="5" cols="50"></textarea>
         <button onClick={answerType2} class={style.button}>Next step</button>
        </ul>
       </div>
      </div>
     )
    case 5:
     return ( 
      <div class={style.conditional_inner}>
       <div class={style.split}>
        <h3>How do you want to be promoted on the web?</h3>
        <br/>
        <h3>3/7</h3>
       </div>
       <div class={style.split}>
        <ul>
         <button onClick={answerType1} class={style.button}>SEO</button>
         <button onClick={answerType1} class={style.button}>Facebook</button>
         <button onClick={answerType1} class={style.button}>Google Adwords</button>
         <button onClick={answerType1} class={style.button}>I don't know</button>
        </ul>
       </div>
      </div>
     )
    case 6:
     return ( 
      <div class={style.conditional_inner}>
       <div class={style.split}>
        <h3>Your budget for the project?*</h3>
        <br/>
        <h3>4/7</h3>
        <br/>
        <h5>*Required field</h5>
       </div>
       <div class={style.split}>
        <ul>
         <li><label>Budget:</label><input type="text" name="budget" /><hr/></li> 
         <button onClick={answerType4} class={style.button}>Next step</button>
        </ul>
       </div>
      </div>
     )
    case 7:
     return (
      <div class={style.conditional_inner}>
       <div class={style.split}>
        <h3>How long do we have to complete the project?</h3>
        <br/>
        <h3>5/7</h3>
       </div>
       <div class={style.split}>
        <ul>
         <button onClick={answerType1} class={style.button}>7 days</button>
         <button onClick={answerType1} class={style.button}>15 days</button>
         <button onClick={answerType1} class={style.button}>30 days</button>
         <button onClick={answerType1} class={style.button}>30+ days</button>
        </ul>
       </div>
      </div>
     )
    case 8:
     return (
      <div class={style.conditional_inner}>
       <div class={style.split}>
        <h3>Other details</h3>
        <br/>
        <h3>6/7</h3>
       </div>
       <div class={style.split}>
        <ul>
         <textarea style={{resize: 'none'}}  rows="5" cols="50"></textarea>
         <button onClick={answerType2} class={style.button}>Next step</button>
        </ul>
       </div>
      </div>
     )
    case 9:
     return (
      <div class={style.conditional_inner}>
       <div class={style.split}>
        <h3>Do you have any representative files?*</h3>
        <br/>
        <h3>7/7</h3>
        <h5>*Files can be transfered via <a href="https://www.wetransfer.com" target="_blank" rel="nofollow">Wetransfer</a>,<br/> a link will be generated and we will receive the files.</h5>
       </div>
       <div class={style.split}>
        <ul>
         <li><label>Link :</label><input type="text" name="link" /><hr/></li>
         <button onClick={answerType5} class={style.button}>Send</button>
        </ul>
       </div>
      </div>
     )
    default:
     return (
      <div class={style.conditional_inner}>
       <div class={style.full}>
        <h2>Message sent!</h2>
       </div>
      </div>
     );
   }
  })()}
 </div>
)  

export default class Offer extends Component {
 constructor(){
  super();
  this.state = {
   step : 1,
   answer: [],
  }
  this.answerType1 = this.answerType1.bind(this);
  this.answerType2 = this.answerType2.bind(this);
  this.answerType3 = this.answerType3.bind(this);
  this.answerType4 = this.answerType4.bind(this);
  this.answerType5 = this.answerType5.bind(this);
 }
//answerType1 = the type of answer for button clicked*
 answerType1 (e) {
  e.preventDefault()
  var choice = e.target.innerHTML;
  switch(choice) {
   case 'Website' : 
    this.setState({ step : this.state.step  += 1})
    this.setState({ answer : this.state.answer.concat(choice)})
    break;
   case 'E-commerce' : 
    this.setState({ step : this.state.step  += 2})
    this.setState({ answer : this.state.answer.concat(choice)})
    break;
   case 'Aplicatie web' : 
    this.setState({ step : this.state.step  += 2})
    this.setState({ answer : this.state.answer.concat(choice)})
    break;
   case 'SEO si Marketing online' : 
   case 'Web si graphic design' : 
   case 'Front-end development' : 
   case 'Back-end development' : 
   case 'Nu stiu' : 

    this.setState({ step : this.state.step  += 3})
    this.setState({ answer : this.state.answer.concat(choice)})
    break;
   default : 
    this.setState({ step : this.state.step  += 1})
    this.setState({ answer : this.state.answer.concat(choice)})
  }
 }
 answerType2 (e) {
  e.preventDefault()
  var message = document.querySelector('textarea').value;
  switch(this.state.step) {
   case 4 : 
    if (!message) {
     console.log('error, empty message')
    } else {
     this.setState({ step : this.state.step  += 2})
     this.setState({ answer : this.state.answer.concat(message)})
    }
    break;
   default : 
    this.setState({ step : this.state.step  += 1})
    this.setState({ answer : this.state.answer.concat(message)})
  }
 }
 answerType3 (e) {
  e.preventDefault()
  var name = document.querySelector('input[name="name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var phone = document.querySelector('input[name="phone"]').value;
  var company = document.querySelector('input[name="company"]').value;
  if (!name || !email || !phone || !company){
   console.log("error, form incomplete")
  } else {
   var newCustomer = {
    name : name,
    email : email,
    phone : phone,
    company : company
   }
   this.setState({answer : this.state.answer.concat(newCustomer)})
   this.setState({step : this.state.step += 1})
  }
 }
 answerType4 (e) {
  e.preventDefault()
  var budget = document.querySelector('input[name="budget"]').value;
  if (!budget){
   console.log("no budget defined")
  } else {
   this.setState({ answer : this.state.answer.concat(budget)})
   this.setState({ step : this.state.step  += 1})
  }
 }
 answerType5 (e) {
  e.preventDefault()
  var link = document.querySelector('input[name="link"]').value;
  this.setState({ answer : this.state.answer.concat(link)})
  this.setState({ step : this.state.step  += 1})
  var customerInfo = this.state.answer; 

axios.post('/mailPost', { customerInfo: customerInfo })
  .then(function(response){
    console.log('saved successfully')
  });   



}
 render() {
  console.log(this.state.answer.join(","));
  console.log(this.state.step);
  return (
   <div class={style.oferta}>
    <Grid>
     <Row>
      <Col xs={12} sm={12} md={12}><h1>OFFER BRIEF</h1></Col>
      <Col xs={12} sm={12} md={12}><h3>In order to estimate your project, please fill in the following brief</h3></Col>
      <Step step={this.state.step} data ={this.state} answerType1={this.answerType1} answerType2={this.answerType2} answerType3={this.answerType3 } answerType4={this.answerType4} answerType5={this.answerType5}/>
     </Row>
    </Grid>
    <Grid>
    </Grid>
   </div>
  );
 }
}
