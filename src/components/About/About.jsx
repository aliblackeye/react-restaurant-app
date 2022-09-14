import './about.scss'

export default function About() {
  return (
    <section className="about">
      <div className="about-container container">
        <h1 className="title">HAKKIMIZDA</h1>
        <div className="about-wrapper">
          <div className="about-img">
            <img src="./images/hero/pizza2.jpg" alt="" />
          </div>
          <div className="about-info">
            <h1 className="about-info-title">Pizzalarımızın bu kadar lezzetli olmasının sırrı ne ?</h1>
            <p className="about-info-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit ipsum expedita, sit optio porro qui quidem beatae soluta dolor?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit ipsum expedita, sit optio porro qui quidem beatae soluta dolor?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit ipsum expedita, sit optio porro qui quidem beatae soluta dolor?
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
