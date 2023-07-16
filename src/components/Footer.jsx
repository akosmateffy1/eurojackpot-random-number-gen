import {AiOutlineEuroCircle} from 'react-icons/ai'

export default function Footer(){


    return(
        <div className='footer bg-black h-100 d-flex'>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-white">
                        <AiOutlineEuroCircle size={30} /> Eurojackpot véletlenszám-generátor
                    </p>
                </footer>
            </div>
        </div>
    )
}