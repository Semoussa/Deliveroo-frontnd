function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={props.image} alt="logo deliveroo" />
        </div>
      </div>
    </header>
  );
}
export default Header;
