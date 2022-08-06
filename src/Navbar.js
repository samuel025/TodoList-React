const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Todo List</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>New Todo</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;