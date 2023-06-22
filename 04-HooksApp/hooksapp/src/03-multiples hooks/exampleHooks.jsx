import useCounter from "../hooks/useCounter";
import useEfectApi from "../hooks/useFech";
export default function Api() {
  const {counter
    , increment}=useCounter(1);
  const { data, isloading, error } = useEfectApi(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}` );
  console.log({ data, isloading, error });
   const { author, quote } = !!data && data[0]; // extrae los valores de la data si restorna algo de lo contrario  undefine
  return (
    <>
      <h1>Api breaking bad</h1>
      <hr />
      {isloading ? (
        <div className="alert alert-info text-center">loading..... </div>
      ) : 
         (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer"> <cite title="Source Title">{author}</cite>
          </footer>

        </blockquote>
      
        )

      
      }
       <button disabled={isloading} className="btn btn-primary" onClick={increment}>Next</button>
    </>
  );
}
