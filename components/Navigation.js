import data from "../data/menu.json";
import classes from "./Navigation.module.scss";
import NavButton from "./NavButton";
const Navigation = (props) => {
    return (
        <>
            <hr id="navigation" />
            <div className={classes.Navigation}>
                {
                    data.map((item) => {
                        return <NavButton name={item.name} tag={item.id} key={item.id} />
                    })
                }
            </div>
        </>
    );
}

export default Navigation;