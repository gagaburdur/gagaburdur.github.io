import classes from "./Category.module.scss";
import Item from "./Item";

const Category = (props) => {
    return ( 
        <>
        <hr id={props.tag}/>
        <div className={classes.Category}>
            <h2>{props.name}</h2>
            {props.items.map((item) => {
                return <Item name={item.name} price={item.price} key={item.id} desc={item.desc}/>
            })}
        </div>
        </>
     );
}
 
export default Category;