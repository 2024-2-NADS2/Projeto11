import './contato.css';

const ContatoPage = () => {
    return (
        <div>
            <section className="contact section container" id="contact">
                <div className="contact__container grid">
                    {/* Informações de Contato */}
                    <div className="contact__box">
                        <h2 className="section__title">Entre em contato conosco</h2>
                        <p>Estamos à disposição para esclarecer qualquer dúvida.</p>

                        {/* WhatsApp Contact */}
                        <div className="contact__information">
                            <h3 className="contact__subtitle">
                                Fale com a Reciclotec pelo WhatsApp:
                            </h3>
                            <span className="contact__description">
                                <i className="ri-whatsapp-fill contact__icon"></i>
                                <a href="https://wa.me/5511970382953" target="_blank" className="contact__link">+55 11 97038-2953</a>
                            </span>
                        </div>

                        {/* Email Contact */}
                        <div className="contact__information">
                            <h3 className="contact__subtitle">
                                Envie-nos um email:
                            </h3>
                            <span className="contact__description">
                                <i className="ri-mail-send-fill contact__icon"></i>
                                <a href="mailto:projetoreciclotec@gmail.com" className="contact__link">projetoreciclotec@gmail.com</a>
                            </span>
                        </div>
                    </div>

                    {/* Formulário de Contato */}
                    <form action="" method="post" className="contact__form">
                        <div className="contact__inputs">
                            {/* Campo para Email */}
                            <div className="contact__content">
                                <input type="email" name="email" placeholder="" className="contact__input" required />
                                <label htmlFor="email" className="contact__label">Email</label>
                            </div>

                            {/* Campo para Assunto  */}
                            <div className="contact__content">
                                <input type="text" name="subject" placeholder="" className="contact__input" required />
                                <label htmlFor="subject" className="contact__label">Assunto</label>
                            </div>

                            {/* Campo para Mensagem */}
                            <div className="contact__content contact__area">
                                <textarea name="message" placeholder="" className="contact__input" required></textarea>
                                <label htmlFor="message" className="contact__label">Mensagem</label>
                            </div>
                        </div>

                        {/*  Botão de Enviar */}
                        <button type="submit" className="button button--flex">
                            Enviar
                            <i className="ri-arrow-right-up-line button__icon"></i>
                        </button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default ContatoPage;