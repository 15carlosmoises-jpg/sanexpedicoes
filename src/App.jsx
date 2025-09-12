
import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo-san-expedicoes.png';
import lencois1 from './assets/lencois1.jpg';
import lencois2 from './assets/lencois2.jpg';
import lencois3 from './assets/lencois3.jpg';
import iconQuadriciclo from './assets/icon-quadriciclo.png';
import icon4x4 from './assets/icon-4x4.png';
import iconCavalgada from './assets/icon-cavalgada.jpg';
import iconPiquenique from './assets/icon-piquenique.png';
import iconTrekking from './assets/icon-trekking.png';

// Importar as novas imagens da galeria fornecidas pelo usuário
import gallery12 from './assets/gallery12.jpeg';
import gallery13 from './assets/gallery13.jpeg';
import gallery14 from './assets/gallery14.jpeg';
import gallery15 from './assets/gallery15.jpg';
import gallery16 from './assets/gallery16.jpg';
import gallery17 from './assets/gallery17.jpg';
import gallery18 from './assets/gallery18.jpg';
import gallery19 from './assets/gallery19.jpg';
import gallery20 from './assets/gallery20.jpg';
import gallery21 from './assets/gallery21.jpg';
import gallery22 from './assets/gallery22.jpg';
import gallery23 from './assets/gallery23.jpg';
import gallery24 from './assets/gallery24.jpg';

const App = () => {
  const [activeTab, setActiveTab] = useState('aventurasPrincipais');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const galleryImages = [
    gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24
  ];

  const services = {
    aventurasPrincipais: [
      {
        title: 'Passeios de Quadriciclos',
        description: 'Aventure-se pelas dunas dos Lençóis Maranhenses em quadriciclos potentes e seguros. Saindo de Atins e Santo Amaro (Privativo).',
        icon: iconQuadriciclo,
      },
      {
        title: 'Passeios de Carro 4x4',
        description: 'Explore os Lençóis com conforto e segurança em nossos veículos 4x4. Saindo de Atins e Santo Amaro (Privativo).',
        icon: icon4x4,
      },
      {
        title: 'Cavalgada nos Lençóis',
        description: 'Viva uma experiência única cavalgando pelas paisagens deslumbrantes. Saindo de Atins (Privativo).',
        icon: iconCavalgada,
      },
    ],
    experienciasEspeciais: [
      {
        title: 'Travessia a partir de 3 noites',
        description: 'Aventure-se em travessias inesquecíveis pelos Lençóis Maranhenses, com roteiros personalizados a partir de 3 noites (Privativo).',
        icon: iconTrekking,
      },
      {
        title: 'Piquenique nos Lençóis',
        description: 'Desfrute de um piquenique exclusivo em meio às dunas e lagoas, com paisagens de tirar o fôlego (Privativo).',
        icon: iconPiquenique,
      },
      {
        title: 'Luau nos Lençóis',
        description: 'Uma noite mágica sob as estrelas, com fogueira e a beleza dos Lençóis Maranhenses (Privativo).',
        icon: iconTrekking,
      },
      {
        title: 'Plânctons Noturno e Mirar nas Estrelas',
        description: 'Experiência única de observação de plânctons bioluminescentes e contemplação do céu estrelado dos Lençóis (Privativo).',
        icon: iconTrekking,
      },
    ],
    servicosPersonalizados: [
      {
        title: 'Experiências em Grupos',
        description: 'Roteiros e atividades personalizadas para grupos, garantindo diversão e aventura para todos (Privativo).',
        icon: iconTrekking,
      },
      {
        title: 'Pacotes Personalizados',
        description: 'Crie seu próprio roteiro com a San Expedições, adaptado aos seus desejos e necessidades (Privativo).',
        icon: iconTrekking,
      },
      {
        title: 'Eventos Fechados',
        description: 'Organizamos eventos exclusivos nos Lençóis Maranhenses, com toda a estrutura e suporte necessários (Privativo).',
        icon: iconTrekking,
      },
      {
        title: 'Transfer',
        description: 'Serviço de transfer privativo para sua comodidade, garantindo segurança e pontualidade em seus deslocamentos (Privativo).',
        icon: icon4x4,
      },
    ],
    opcaoEconomica: [
      {
        title: 'Passeios e Serviços Compartilhados',
        description: 'Opções de passeios e serviços compartilhados para quem busca uma experiência mais econômica (Verificar disponibilidade).',
        icon: iconTrekking,
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    let message = "Olá, San Expedições! Gostaria de solicitar um orçamento com as seguintes informações:\n\n";

    for (let [key, value] of formData.entries()) {
      if (key === 'dateFrom' && value) {
        const dateTo = formData.get('dateTo');
        message += `Período disponível para a viagem: ${value} até ${dateTo || 'Não informado'}\n`;
      } else if (key !== 'dateTo') {
        message += `${form.elements[key].labels[0].innerText}: ${value}\n`;
      }
    }

    const whatsappUrl = `https://wa.me/5598991961572?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="App">
      <header className="hero-section" style={{ backgroundImage: `url(${lencois1})` }}>
        <div className="overlay"></div>
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="San Expedições Logo" className="logo" />
            <span className="company-name">San Expedições</span>
          </div>
          <div className="social-icons-header">
            <a href="https://www.instagram.com/sanexpedicoes" target="_blank" rel="noopener noreferrer">
              <button className="btn-instagram">Instagram</button>
            </a>
            <a href="http://wa.me/5598991961572" target="_blank" rel="noopener noreferrer">
              <button className="btn-whatsapp">WhatsApp</button>
            </a>
          </div>
        </nav>
        <div className="hero-content">
          <h1>San Expedições - Aventuras nos Lençóis Maranhenses</h1>
          <p>Atins - Lençóis Maranhenses</p>
          <a href="#contact-form" className="btn-primary">Fale Conosco</a>
          <a href="#services" className="btn-secondary">Ver Experiências</a>
        </div>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>Descubra os Lençóis Maranhenses</h2>
          <p>Viva aventuras inesquecíveis em Atins com a San Expedições. Explore as dunas, lagoas cristalinas e paisagens únicas do paraíso maranhense com experiências exclusivas e personalizadas.</p>
          <div className="about-cards">
            <div className="card">
              <h3>Sua Aventura nos Lençóis Maranhenses</h3>
              <p>A San Expedições é especializada em proporcionar experiências únicas e seguras nos Lençóis Maranhenses. Com guias experientes, equipamentos de qualidade e atendimento personalizado, garantimos que sua aventura seja inesquecível.</p>
            </div>
            <div className="card">
              <h4>Localização Privilegiada</h4>
              <p>Baseados em Atins, porta de entrada dos Lençóis</p>
            </div>
            <div className="card">
              <h4>Segurança Garantida</h4>
              <p>Equipamentos certificados e guias experientes</p>
            </div>
            <div className="card">
              <h4>Experiência Comprovada</h4>
              <p>Anos de experiência em turismo de aventura</p>
            </div>
            <div className="card">
              <h4>Atendimento 24h</h4>
              <p>Suporte completo antes, durante e após o passeio</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <h2>Nossas Experiências</h2>
        <p>Escolha entre nossas opções de aventura e descubra os Lençóis Maranhenses da forma que mais combina com você. Todos os nossos serviços são privativos para garantir uma experiência exclusiva.</p>
        <div className="tabs-container">
          <div className="tabs-header">
            <button
              className={activeTab === 'aventurasPrincipais' ? 'active' : ''}
              onClick={() => setActiveTab('aventurasPrincipais')}
            >
              Aventuras Principais
            </button>
            <button
              className={activeTab === 'experienciasEspeciais' ? 'active' : ''}
              onClick={() => setActiveTab('experienciasEspeciais')}
            >
              Experiências Especiais
            </button>
            <button
              className={activeTab === 'servicosPersonalizados' ? 'active' : ''}
              onClick={() => setActiveTab('servicosPersonalizados')}
            >
              Serviços Personalizados
            </button>
            <button
              className={activeTab === 'opcaoEconomica' ? 'active' : ''}
              onClick={() => setActiveTab('opcaoEconomica')}
            >
              Passeios Compartilhados
            </button>
          </div>
          <div className="tabs-content">
            {services[activeTab].map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.icon} alt={service.title} className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="http://wa.me/5598991961572" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-small">
                  Solicitar Orçamento
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Galeria de Momentos</h2>
        <p>Inspire-se com a beleza dos Lençóis Maranhenses e as aventuras que esperam por você.</p>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Lençóis Maranhenses ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section id="contact-form" className="contact-form-section">
        <h2>Planeje Sua Aventura Conosco</h2>
        <p>Preencha o formulário abaixo para nos ajudar a criar a experiência perfeita para você nos Lençóis Maranhenses.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="howDidYouKnow">Como conheceu a San Expedições?</label>
            <select id="howDidYouKnow" name="howDidYouKnow">
              <option value="">Selecione</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="indicacao">Indicação</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="preferredContact">Como prefere ser atendido?</label>
            <select id="preferredContact" name="preferredContact">
              <option value="">Selecione</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">E-mail</option>
              <option value="telefone">Telefone</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="destination">Destino de Interesse</label>
            <input type="text" id="destination" name="destination" value="Lençóis Maranhenses" readOnly />
          </div>

          <div className="form-group">
            <label htmlFor="numPeople">Quantas pessoas?</label>
            <input type="number" id="numPeople" name="numPeople" min="1" />
          </div>

          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Celular</label>
            <input type="tel" id="mobile" name="mobile" required />
          </div>

          <div className="form-group">
            <label htmlFor="age">Sua idade?</label>
            <input type="number" id="age" name="age" min="0" />
          </div>

          <div className="form-group">
            <label htmlFor="children">Crianças?</label>
            <input type="number" id="children" name="children" min="0" />
          </div>

          <div className="form-group">
            <label htmlFor="budget">Valor estimado para investir por pessoa na viagem?</label>
            <input type="text" id="budget" name="budget" placeholder="Ex: R$ 1000-2000" />
          </div>

          <div className="form-group">
            <label htmlFor="accommodation">Qual tipo de hospedagem prefere?</label>
            <select id="accommodation" name="accommodation">
              <option value="">Selecione</option>
              <option value="pousada">Pousada</option>
              <option value="hotel">Hotel</option>
              <option value="camping">Camping</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div className="form-group date-range">
            <label>Período disponível para a viagem:</label>
            <div className="date-inputs">
              <input type="date" id="dateFrom" name="dateFrom" />
              <span>até</span>
              <input type="date" id="dateTo" name="dateTo" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Sua Mensagem</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>

          <button type="submit" className="btn-primary">Enviar Solicitação</button>
        </form>
      </section>

      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="San Expedições Logo" className="logo" />
            <p>San Expedições</p>
          </div>
          <div className="footer-contact">
            <h3>Contato</h3>
            <p>Email: <a href="mailto:sanexpedicoes@gmail.com">sanexpedicoes@gmail.com</a></p>
            <p>WhatsApp: <a href="http://wa.me/5598991961572" target="_blank" rel="noopener noreferrer">(98) 99196-1572</a></p>
            <p>Telefone: (98) 99613-4307</p>
            <p>Avalie-nos no Google: <a href="https://photos.google.com/share/AF1QipN7WObjrKPmcW_80iEY8SsrlNKbFW4t-AupBxG9xzJyXbnm5VxLnd5IsFz4xDUu9g?key=MHBlUDV0VEtKR1JNNEZFREtRSXdjLTYzNl9rWm1n" target="_blank" rel="noopener noreferrer">Clique aqui</a></p>
          </div>
          <div className="footer-social">
            <h3>Siga-nos</h3>
            <a href="https://www.instagram.com/sanexpedicoes" target="_blank" rel="noopener noreferrer">
              <button className="btn-instagram">Seguir no Instagram</button>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} San Expedições. Todos os direitos reservados.</p>
        </div>
      </footer>

      <a href="http://wa.me/5598991961572" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default App;


