import daniele1 from '../assets/images/daniele1.png'
import daniele2 from '../assets/images/daniele2.png'
import jonny1 from '../assets/images/jonny1.png'
import jonny2 from '../assets/images/jonny2.png'
import fulvio1 from '../assets/images/fulvio1.png'
import fulvio2 from '../assets/images/fulvio2.png'

function BeforeAfter() {
  const examples = [
    {
      name: 'Daniele',
      before: daniele1,
      after: daniele2,
    },
    {
      name: 'Jonny',
      before: jonny1,
      after: jonny2,
    },
    {
      name: 'Fulvio',
      before: fulvio1,
      after: fulvio2,
    },
  ]

  return (
    <section className="before-after">
      <div className="container">
        <h2 className="section-title">Da una foto a PocketMe</h2>

        <p className="section-subtitle">
          Guarda alcuni esempi reali: dalla foto originale alla mini figura 3D.
        </p>

        <div className="before-after-grid">
          {examples.map((item) => (
            <div className="before-after-card" key={item.name}>
              <div className="images">
                <div className="image-box">
                  <span>Prima</span>
                  <img src={item.before} alt={`${item.name} prima`} />
                </div>

                <div className="arrow">→</div>

                <div className="image-box">
                  <span>Dopo</span>
                  <img src={item.after} alt={`${item.name} dopo`} />
                </div>
              </div>

              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
