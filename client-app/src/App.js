import { useEffect, useState } from "react"
import "./App.css"
import CircularJSON from "circular-json"

function App() {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")

  useEffect(() => {
    fetch("https://localhost:7118/api/People")
      .then(response => response.json())
      .then(json => setPeople(json))
  }, []);

  const addUser = () => {
    const fullName = newName.trim()
    const email = newEmail.trim()

    if(fullName && email){
      fetch("https://localhost:7118/api/People", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          fullName,
          email
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(data => {
        setPeople([...people, data])
        setNewName("")
        setNewEmail("")
      })
    }
  }

  const updateUser = id => {
    const person = people.find(user => user.id === id)

    console.log(person);

    fetch(`https://localhost:7118/api/People/${id}`, {
      method: "PUT",
      body: CircularJSON.stringify(person),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  const onChangeHandler = (id, key, value) => {
    setPeople(values => {
      return values.map(person =>
        person.id === id ? { ...person, [key]: value } : person
      )
    })
  }
  const deleteUser = id => {
    fetch(`https://localhost:7118/api/People/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPeople(values => {
          return values.filter(item => item.id !== id)
        })
      })
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>
                <input type="text" className="form-control" id="validationCustom01" placeholder="Name" defaultValue={person.fullName} onChange={e => onChangeHandler(person.id, "fullName", e.target.value)} required />
              </td>
              <td>
                <input type="text" className="form-control" id="validationCustom01" placeholder="Email" defaultValue={person.email} onChange={e => onChangeHandler(person.id, "email", e.target.value)} required />
              </td>
              <td>
                <button type="button" className="btn btn-primary" onClick={() => updateUser(person.id)}>
                  Update
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={() => deleteUser(person.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Add name here..."
              />
            </td>
            <td>
              <input
                placeholder="Add email here..."
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
              />
            </td>
            <td>
              <button intent="success" onClick={addUser}>
                Add user
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default App