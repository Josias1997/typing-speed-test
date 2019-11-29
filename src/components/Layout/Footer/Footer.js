import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer class="py-5 background-primary" style={{
            fontWeight: 'none'
        }}>
        <div class="container">
          <p class="m-0 text-center text-white"><strong>Arckade.fr</strong> &copy; 2019</p><br/>
          
            <center>
                <a href='http://help.arckade.fr/mentions-legales'>
                   {"Mentions légales"} 
                </a>
                <span>{" - "}</span>
                <a href='http://help.arckade.fr/charte-parentale'>
                   {"Pour les parents"}
                </a>  
                <span>{" - "}</span>
                <a href='http://help.arckade.fr/envoyer-jeu'>
                    {"Envoyer un jeu"}
                </a> 
                <span>{" - "}</span> 
                <a href='http://help.arckade.fr/faq'>
                    {"FAQ"}
                </a> 
                <span>{" - "}</span>
                <a href='http://clicker.arckade.fr'>
                    Click Test
                </a> 
            </center>
        </div>
      </footer>
    );
};

export default Footer;