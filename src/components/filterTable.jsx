import MockData from "../MOCK_DATA.json";
import { useState } from "react";

const SearchTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLastName, setSearchLastName] = useState("");

  return (
    <div className="container">
        <div className='d-flex justify-content-around'>
        <input
        type="text"
        placeholder="search Name"
        className="form-control"
        style={{ marginTop: 50, marginBottom: 20, width: "30%" }}
        onChange = {(e)=> {
            setSearchTerm(e.target.value)
        }}
      />
        <input
        type="text"
        placeholder="search Last Name.."
        className="form-control"
        style={{ marginTop: 50, marginBottom: 20, width: "30%" }}
        onChange = {(e)=> {
            setSearchLastName(e.target.value)
        }}
      />
        </div>
     
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {MockData.filter((val)=> {
              if(setSearchTerm ===''|| setSearchLastName ===''){
                  return val;
              }else if(
                  val.first_name.toLocaleLowerCase().includes(searchTerm.toLowerCase())?
                  val.last_name.toLocaleLowerCase().includes(searchLastName.toLowerCase()):null
              

              ){
                  return val;
              }
          }).map((m) => (
            <tr key={m.id}>
              <td>{m.first_name}</td>
              <td>{m.last_name}</td>
              <td>{m.email}</td>
              <td>{m.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTable;
