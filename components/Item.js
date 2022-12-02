import classes from "./Item.module.scss";
import { DiAndroid } from "react-icons/di";

const Item = (props) => {
    var string = "mystring";
    string.toUpperCase
    return ( 
        <div className={classes.Item}>
            <div className={classes.Info}>
                <h3>{`${props.name}`}</h3>
                <p>{props.desc}</p>
            </div>
            <div className={classes.Price}>
                <p>{props.price}₺</p>
            </div>
        </div>
     );
}
 
export default Item;