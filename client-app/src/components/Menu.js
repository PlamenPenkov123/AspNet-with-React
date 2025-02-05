const Menu = () => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                <li><a className="dropdown-item" href="App.js">GetAll</a></li>
                <li><a className="dropdown-item" href="Update.js">Update</a></li>
                <li><a className="dropdown-item" href="Delete.js">Delete</a></li>
            </ul>
        </div>
    )
}

export default Menu;