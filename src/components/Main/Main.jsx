import { useState } from "react";
import './Main.css';
import banner from '../../assets/images/image-web-3-desktop.jpg'

const Main = ()=>{
    const[select, setSelect] = useState(0)
    return(
        <div id="main">
            <img className='banner' src={banner} alt='logo'/>
            <div className='main-header'>
                <p>
                    The Bright Future of Web 3.0?
                </p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Main;