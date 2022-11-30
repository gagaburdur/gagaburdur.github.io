import classes from "./NavButton.module.scss";

const NavButton = (props) => {
    return ( 
        <a href={"#" + props.tag} className={classes.NavButton}>
            {props.name}
        </a>
     );
}
 
export default NavButton;