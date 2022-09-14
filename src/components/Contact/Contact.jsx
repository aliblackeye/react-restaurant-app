/* eslint-disable jsx-a11y/iframe-has-title */
import {BsFillPersonFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhone} from 'react-icons/fi'

import './contact.scss'

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-container container">
                <h1 className="title">İLETİŞİM</h1>
                <div className="contact-wrapper">
                    <div className="google-map-container">
                        <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Istanbul Ümraniye+(Restoran%20Adresi)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href="https://maps-generator.com/de"></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=12486f74c7c2c7a819dd8a5fab750b5658aea0cd'></script>
                    </div>
                    <div className="contact-infos">
                        <h1 className="contact-infos-title">BİZE ULAŞIN</h1>
                        <form className="contact-form">
                            <div className="input-item">
                                <BsFillPersonFill color='#fff'/> <input type="text" placeholder='İsim'/>
                            </div>
                            <div className="input-item">
                              <AiOutlineMail color='#fff'/>  <input type="text" placeholder='E-Posta'/>
                            </div>
                            <div className="input-item">
                                <FiPhone color='#fff'/> <input type="text" placeholder='Telefon Numarası'/>
                            </div>
                            <button className="btn btn-light">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
