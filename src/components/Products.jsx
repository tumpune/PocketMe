function Products() {
  return (
    <section className="products-page">
      <div className="container">
        <div className="page-hero">
          <p className="page-label">Prodotti</p>
          <h1 className="page-title">
            Collezioni iconiche e creazioni personalizzate
          </h1>
          <p className="page-description">
            PocketMe unisce mini figure ispirate ai personaggi più amati
            a prodotti personalizzati creati a partire da una foto reale.
          </p>
        </div>

        <div className="products-category-block">
          <div className="products-category-header">
            <h2>Prodotti base</h2>
            <p>
              Collezioni dedicate a personaggi iconici del mondo degli eroi
              e delle serie TV.
            </p>
          </div>

          <div className="products-showcase-grid">
            <article className="showcase-card">
              <h3>Categoria Eroi</h3>
              <p>
                Mini figure ispirate ai personaggi più iconici come Spider-Man,
                Iron Man, Superman, Batman e altri eroi riconoscibili.
              </p>
            </article>

            <article className="showcase-card">
              <h3>Categoria Serie TV</h3>
              <p>
                Mini figure dedicate ai protagonisti più importanti delle serie TV
                più amate, come Prison Break, La Casa di Carta e altre.
              </p>
            </article>
          </div>
        </div>

        <div className="products-category-block special-block">
          <div className="products-category-header">
            <h2>Prodotti speciali personalizzati</h2>
            <p>
              Le creazioni più originali di PocketMe, realizzate su misura
              a partire da una foto.
            </p>
          </div>

          <div className="products-showcase-grid">
            <article className="showcase-card special-card">
              <h3>PocketMe</h3>
              <p>
                Trasforma il tuo volto in una mini figura 3D personalizzata,
                unica e pensata per rappresentarti davvero.
              </p>
            </article>

            <article className="showcase-card special-card">
              <h3>PocketMe Pet</h3>
              <p>
                Trasforma il tuo animale domestico in una mini figura 3D
                personalizzata, da portare sempre con te.
              </p>
            </article>
          </div>
        </div>

        <div className="products-cta">
          <h2>Scegli la tua collezione o crea il tuo PocketMe</h2>
          <p>
            PocketMe ti permette di collezionare personaggi iconici oppure
            trasformare ciò che ami in qualcosa di unico.
          </p>

          <a href="/richiedi-preventivo" className="btn btn-primary">
            Richiedi informazioni
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products