
import useForm from "../hooks/useForm";

function FormCustomhOok() {
    const {formState,inputChange,resetform} = useForm({
        userName: '',
        email: '',
        pasword: '',
    });
    const{userName, email,pasword} = formState;


    return (<>
     <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            user
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
          <label  className="form-label">
            correo
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={inputChange}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="pasword"
            value={pasword}
            onChange={inputChange}
          />
        </div>

        <button  className="btn btn-primary" onClick={resetform}>
          Borrar
        </button>
      </form>
    </>  );
}

export default FormCustomhOok;