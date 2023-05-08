function Headline() {
    return (
      <div>
      <nav>
        <img
          id="nav-img"
          src='src/assets/images/ironhack-logo-xs.png'
          alt="ironhack-logo"
        />
        <img
          id="nav-img-menu"
          src='src/assets/images/menu-top-xs.png'
          alt="menu"
        />
      </nav>
      <header>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular library, and become a super Ninja Developer.</p>
        <button className="btn">Awesome!</button>
        </header>
      </div>
    );
  }
  
  export default Headline;