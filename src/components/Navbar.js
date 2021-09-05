import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <header className={classes.header}>
      <h1>My Account</h1>
      {props.disabled ? (
        <button onClick={props.handleInput} className={classes.headerButton}>
          Edit
        </button>
      ) : (
        <button
          form="my-account"
          onClick={props.handleInput}
          className={classes.headerButton}
          type="submit"
        >
          Save
        </button>
      )}
    </header>
  );
};

export default Navbar;
