import classes from "./Navigation.module.scss";
import NavButton from "./NavButton";

const Navigation = (props) => {
    return (
        <>
            <hr id="navigation" />
            <h3>{props.title}</h3>
            <div className={classes.Navigation}>
                {
                    props.data.map((item) => {
                        return <NavButton name={item.name} tag={item.id} key={item.id} />
                    })
                }
            </div>
        </>
    );
}

export default Navigation;