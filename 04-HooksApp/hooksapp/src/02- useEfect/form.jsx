import { useEffect, useState } from "react";
import Mensage from "./mensage";

export default function Formpruba() {
    const [form, setForm] = useState({
        userName: 'demo',
        email: 'demo@example.com',
    });
    const{userName, email} = form;

    const inputChange = ({target}) => {
        const {name, value} = target;
        setForm({
            ...form,
            [name]:value,
        });
    }
  useEffect(() => {

//console.log("useEffect se llamo");
  }, []);
  // cambiar el estado de formulario 
  useEffect(() => {
   // console.log("useEffect se llamo el form");
  }, [form])
  useEffect(() => {
   // console.log("useEffect se llamo el email");
  }, [email]);
  return (
    <>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            name="userName"
            value={userName}
            onChange={inputChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={inputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {
          (userName === 'demo') && <Mensage/>
      }
    </>
  );
}
