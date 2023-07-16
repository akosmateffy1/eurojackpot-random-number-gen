import {AiOutlineEuroCircle} from 'react-icons/ai'

export default function Navbar(){


    return(
        <div className="navbar bg-black" style={{height:'70px'}}>
            <div className="container">
                <a href="/" className="navbar-brands text-white text-decoration-none">
                    <AiOutlineEuroCircle size={30} /> EuroJackpot szám generátor
                </a>
            </div>
        </div>
    )
}