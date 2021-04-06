import classes from './preloader.module.css';
import preloader from '../../../assets/images/preloader.svg';

let Preloader  = (props) =>{
    return (
         <img className={classes.preloader} alt="preloader" src={preloader}/>
    )
}
export default Preloader;