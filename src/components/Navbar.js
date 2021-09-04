import classes from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <header className={classes.header}>
            <h1>My Account</h1>
            <button onClick={props.click} className={classes.headerButton}>Edit</button>
        </header>
    );
}
 
export default Navbar;