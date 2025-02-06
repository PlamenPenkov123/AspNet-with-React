import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [users, setUsers] = useState([])
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")

  useEffect(() => {
    fetch("https://localhost:7118/api/People")
      .then(response => response.json())
      .then(json => setUsers(json))
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
        setUsers([...users, data])
        setNewName("")
        setNewEmail("")
      })
    }
  }

  const updateUser = id => {
    const user = users.find(user => user.id === id)

    fetch('https://localhost:7118/api/People/' + id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
  }

  const onChangeHandler = (id, key, value) => {
    setUsers(values => {
      return values.map(item =>
        item.id === id ? { ...item, [key]: value } : item
      )
    })
  }
  const deleteUser = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => {
        setUsers(values => {
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
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <input type="text" className="form-control" id="validationCustom01" placeholder="First name" defaultValue={user.fullName} onChange={value => onChangeHandler(user.id, "fullName", value)} required />
              </td>
              <td>
                <input type="text" className="form-control" id="validationCustom01" placeholder="First name" defaultValue={user.email} onChange={value => onChangeHandler(user.id, "email", value)} required />
              </td>
              <td>
                <button type="button" className="btn" onClick={() => updateUser(user.id)}>
                  Update
                </button>
                &nbsp;
                <button type="button" className="btn" onClick={() => deleteUser(user.id)}>Delete</button>
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