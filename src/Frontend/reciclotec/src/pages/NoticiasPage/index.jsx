import './noticias.css';

const NoticiasPage = () => {
    return (
        <div>
            <section className="news" id="news">
                <div className="heading">
                    <span>Conscientização</span>
                    <h1>Notícias sobre Reciclagem de Lixo Eletrônico</h1>
                </div>
                <div className="news-container">
                    {/* <Notícia 1  */}
                    <div className="box">
                        <div className="box-img">
                            <img src="https://s2-g1.glbimg.com/pwQlfFpigQC8K1E-rMM27bqxZaA=/0x0:1567x880/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/C/A/ppvAHwQW6qSXPgtWaKeg/captura-de-tela-2024-04-27-203832.png" alt="Imagem da notícia 1 sobre reciclagem de lixo eletrônico" />
                        </div>
                        <h2>Brasil é o 5º país que mais produz resíduos eletrônicos, mas descarte correto ainda é pequeno</h2>
                        <p>BPor ano, o país produz 2,4 milhões de toneladas de lixo eletrônico e poderia ser muito mais. Segundo pesquisas, 85% dos brasileiros têm em casa algum aparelho que não usam e não sabem o que fazer com ele.</p>
                        <a href="https://g1.globo.com/jornal-nacional/noticia/2024/04/27/brasil-e-o-5o-pais-que-mais-produz-residuos-eletronicos-mas-descarte-correto-ainda-e-pequeno.ghtml" className="btn">Leia Mais</a>
                    </div>

                    {/* <Notícia 2  */}
                    <div className="box">
                        <div className="box-img">
                            <img src="https://i0.wp.com/oeco.org.br/wp-content/uploads/2024/03/51512135288_07e31681cc_k.jpg?resize=1536%2C1021&ssl=1" alt="Imagem da notícia 2 sobre reciclagem de lixo eletrônico" />
                        </div>
                        <h2>Produção mundial de lixo eletrônico é cinco vezes maior do que sua reciclagem, diz ONU</h2>
                        <p>Brasil está entre os maiores produtores de lixo eletrônico das Américas, na frente de países como Canadá e México. Reciclagem evitaria a extração de 900 milhões de toneladas de minério.</p>
                        <a href="https://oeco.org.br/noticias/producao-mundial-de-lixo-eletronico-e-cinco-vezes-maior-do-que-sua-reciclagem-diz-onu/" className="btn">Leia Mais</a>
                    </div>

                    {/* <Notícia 3  */}
                    <div className="box">
                        <div className="box-img">
                            <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/lixo-eletronico.jpg?w=1220&h=674&crop=1&quality=85" alt="Imagem da notícia 3 sobre reciclagem de lixo eletrônico" />
                        </div>
                        <h2>Lixo eletrônico chegou a nível recorde; entenda o problema</h2>
                        <p>E-lixo global aumentou 82% em 2022 em comparação com 2010, segundo um novo relatório.</p>
                        <a href="https://www.cnnbrasil.com.br/tecnologia/lixo-eletronico-chegou-a-nivel-recorde-entenda-o-problema/" className="btn">Leia Mais</a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default NoticiasPage;