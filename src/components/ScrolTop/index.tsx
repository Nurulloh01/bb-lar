import React, {useState} from 'react';
import Assets from '../../utils/requireAssats';
import styles from './index.module.css'


const ScrollTop = () => {
    const [visible, setVisible] = useState(false)
    
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <div className={styles.scrolTop}>
       <img className={styles.icon} src={Assets.scroltop} onClick={scrollToTop}/>
      </div>
    );
}

export default ScrollTop;
