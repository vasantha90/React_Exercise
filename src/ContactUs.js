import React,{useEffect, useState} from 'react'
import styled from 'styled-components'

function ContactUsComponent() {

const data = {
    name : "",
    email : "",
    age : 0,
    currentRole : "",
    recommendation : "",
    favFeature : "",
    improve : "",
    comments : ""
  };

const [inputValues,setInputValues] = useState(data);

const handleSubmit = (e) => {
  e.preventDefault(e)
  setInputValues({
    ...inputValues,
    name : e.target.name.value,
    email : e.target.email.value,
    age : e.target.age.value,
    currentRole : e.target.currentRoleOption.value,
    recommendation : e.target.recommend.value,
    favFeature : e.target.feature.value,
    improve : e.target.improve.Value,
    comments : e.target.textarea.value
})
console.log(e)  
}

useEffect(()=>{
  console.log(
    "Name : ",inputValues.name,
    "Email : " , inputValues.email,
    "Age : " , inputValues.age,
    "CurrentRole : " , inputValues.currentRole,
    "Recommentation : " ,inputValues.recommendation,
    "FavFeature : " , inputValues.favFeature,
    "Improve : " , inputValues.improve,
    "Comments : " , inputValues.comments
        )       
},[inputValues])
  


const Button = styled.button`
background-color : green;
color : white;
cursor : pointer;
padding : 1% 15% 1% 15%;
width:90%;
border : 2px solid green;
`;

const FieldSet = styled.fieldset`
border : 0;
`;

const Header2 = styled.h2`
text-align : center;
`;

const Header3 = styled.h3`
text-align : center;
`;

const FormInput = styled.div`
margin : 1% 30% 1% 30%;
background-color : rgba(42,42,72,1);
padding : 20px 0 20px 50px;
font-family: 'Poppins', sans-serif;
font-size: 1rem;
font-weight: 400;
line-height: 1.4;
color: white;
`;

const Input = styled.input`
border : 2px solid white;
margin : 10px 0 10px 0;
width : 90%
`;

const Select = styled.select`
border : 2px solid white;
margin : 10px 0 10px 0;
width : 90%
`;

const Textarea =styled.textarea`
margin : 10px 0 10px 0;
width : 90%;
`; 

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Header2>freeCodeCamp Survey Form</Header2>
      <Header3>Thank you for taking the time to help us improve the platform</Header3>
      <FormInput>
      <div>
        <label for="name" >Name</label>
        <div><Input id="name" type="text" placeholder="Enter your Name" required/></div>
      </div>
      <div>
        <label for="email" >Email</label>
        <div><Input id="email" type="text" placeholder="Enter your Email" required/></div>
      </div>
      <div>
        <label for="age" >Age (optional)</label>
        <div><Input id="age" type="number" placeholder="Age" min="1" max="120" required/></div>
      </div>
      <div>
        <label>Which option best describes your current role?</label>
        <div>
        <Select id = "currentRoleOption" required>
          <option value="" disabled selected hidden>Select Current Role</option>
          <option value="Student">Student</option>
          <option value="Full Time Job">Full Time Job</option>
          <option value="Full Time Learner">Full Time Learner</option>
          <option value="Prefer not to say">Prefer not to say</option>
          <option value="Other">Other</option>
        </Select>
        </div>
      </div>
       <div>
        <label>Would you recommend freeCodeCamp to a friend?</label>
        <FieldSet id="recommend" required>  
          <div><input  id="recommend" type="radio" name="recommentationOptions" value="Definitely"/> <label>Definitely</label></div>
          <div><input  id="recommend" type="radio" name="recommentationOptions" value="Maybe" /><label>Maybe</label></div>
          <div><input  id="recommend" type="radio" name="recommentationOptions" value="Not Sure" /><label>Not Sure</label></div>
        </FieldSet>
      </div> 
      <div>
        <label>What is your favorite feature of freeCodeCamp?</label>
        <div>
          <Select id="feature" required>
            <option value="" disabled selected hidden>Select an Option</option>
            <option>Challenges</option>
            <option>Projects</option>
            <option>Community</option>
            <option>Open Source</option>
          </Select>
        </div>
      </div>
      <div>
        <label>What would you like to see improved? (Check all that apply)</label>
        <FieldSet id="improve" required>
        <div>        
          <input value="Front-end Projects" name="improveOptions" type="checkbox" selected/>Front-end Projects
        </div>
        <div>          
          <input value="Back-end Projects" name="improveOptions" type="checkbox" />Back-end Projects
        </div>
        <div>         
          <input value="Data Visualization" name="improveOptions" type="checkbox" />Data Visualization
        </div>
        <div>         
          <input value="Challenges" name="improveOptions" type="checkbox" />Challenges
        </div>
        <div>
          <input value="Open Source Community" name="improveOptions" type="checkbox" />Open Source Community
        </div>
        <div>
          <input value="Gitter help rooms" name="improveOptions" type="checkbox" />Gitter help rooms
        </div>
        <div>
          <input  value="Videos" name="improveOptions" type="checkbox" />Videos
        </div>
        <div>
          <input value="City Meetups" name="improveOptions" type="checkbox" />City Meetups
        </div>
        <div>
          <input value="Wiki" name="improveOptions" type="checkbox" />Wiki
        </div>
        <div>
          <input value="Forum" name="improveOptions" type="checkbox" />Forum
        </div>
        <div>
          <input value="Additional Courses" name="improveOptions" type="checkbox" />Additional Courses
        </div>
        </FieldSet>
      </div>
      <div>
        <label for="textarea">Any comments or suggestions?</label>
        <div><Textarea id="textarea" rows="5" cols="60" placeholder="Enter your comment here..."></Textarea></div>
      </div>
      
      <div>
        <Button type="submit">Submit</Button>
      </div>
      </FormInput>
      </form>
    </div>
  )
}

export default ContactUsComponent

