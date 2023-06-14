import React, {useState} from "react";
import { Form } from "reactstrap";
function ControlledForm(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}`)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) =>setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}
export default ControlledForm