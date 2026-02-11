import '../Footer/Footer.css';
import Logo from '../../assets/dnc-logo 1.svg';
import Linkedin from '../../assets/linkedin.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';
import { Link } from "react-router-dom";



function Footer() {
    return(
        <>
        <footer>
            
            <section className="footer-info">
                <div className="footer-intro">
                    <img src={ Logo } alt="" />
                    <p>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                    <div className='footer-icons'>
                        <img src={ Linkedin } alt="" />
                        <img src={ Instagram } alt="" />
                        <img src={ Twitter } alt="" />
                    </div>
                </div>

                <div className="footer-pages">
                    <h3 id='title-footer-pages'>Páginas</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about Us'>Sobre </Link></li>
                        <li><Link to='/projects'>Projetos</Link></li>
                        <li><Link to='/contact'>Contato</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3 id='title-footer-contact'>Contato</h3>
                    <p>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                    <p>suporte@escoladnc.com.br</p>
                    <p>(19) 99187-4342</p>
                </div>

            </section>
        </footer>
        </>
    )
}

export default Footer;