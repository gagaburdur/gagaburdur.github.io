import Image from "next/image";
import classes from "./Hero.module.scss";
import logo from "../public/logo.svg";
import swipe from "../public/arrow.png";
const Hero = (props) => {
    return ( 
        <div className={classes.Hero}>
            <Image src={logo} alt="gaGa Logo" className={classes.Logo}/>
            <h2>MENÜ</h2>
            <a href="tel:0555-055-6699">
                <h3>0555-055-6699 :phone:</h3>
            </a>
            <div className={classes.Swipe}>
                <Image src={swipe} alt="swipe" className={classes.Arrow}/>
                <p>Aşağı Kaydır</p>
            </div>
        </div>
     );
}
 
export default Hero;