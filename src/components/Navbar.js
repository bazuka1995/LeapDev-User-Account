import classes from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <header className={classes.header}>
            <h1>My Account</h1>
            <button onClick={props.handleInput} className={classes.headerButton}>{props.disabled ? 'Edit' : 'Save' }</button>
        </header>
    );
}
 
export default Navbar;