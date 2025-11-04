import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gov-blue-dark text-white mt-12">
      <div className="gov-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">CGENet</h3>
            <p className="mb-4">
              Portal de Transparência e Gestão de Documentos do Estado de Rondônia
            </p>
            <p className="text-sm">
              <strong>Endereço:</strong> Av. Farquar, 2986 - Pedrinhas<br />
              Palácio Rio Madeira, Ed. Rio Jamari<br />
              Porto Velho - RO, 78903-037
            </p>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://transparencia.ro.gov.br"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Portal da Transparência
                </a>
              </li>
              <li><Link to="/contato" className="hover:underline">Fale Conosco</Link></li>
              <li><Link to="/acessibilidade" className="hover:underline">Acessibilidade</Link></li>
              <li><Link to="/privacidade" className="hover:underline">Aviso de Privacidade</Link></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">Contato</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:contato@cge.ro.gov.br" className="hover:underline">
                  contato@cge.ro.gov.br
                </a>
              </li>
              <li>
                <span className="font-semibold">Telefone:</span>{' '}
                <a href="tel:+556921824100" className="hover:underline">
                  (69) 2182-4100
                </a>
              </li>
              <li className="flex items-center space-x-4 pt-4">
                <a
                  href="https://www.facebook.com/controladoriaro"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gov-blue-light transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/controladoria.ro"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gov-blue-light transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@CGERondonia"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gov-blue-light transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.912-.262-1.683-1.036-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.914.262 1.684 1.037 1.938 2.022z" />
                    <path d="M10 15.5l6-3.5-6-3.5v7z" fill="white" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm">
          <p>
            © {currentYear} CGENet - Controladoria Geral do Estado de Rondônia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
