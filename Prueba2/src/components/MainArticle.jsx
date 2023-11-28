import imageMobile from '../assets/img/img1-mobile.png';
import imageDesktop from '../assets/img/img1-web.png';

export const MainArticle = () => {
  const buttonStyle = {
    padding: '8px 15px',
    backgroundColor: '#EFB810',
    border: 'none',
    borderRadius: '15px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#153d6c',
    position: 'absolute',
    top: '72%',
  };

  const rectangleStyle = {
    position: 'absolute',
    top: '50%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    width: '45%',
    height: '70%',
    background: 'linear-gradient(#153D6C, #153D6C00)',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px', // Añadido espacio alrededor del texto
  };

  const mainTextStyle = {
    fontFamily: ['roboto'], // Cambio de la fuente a Roboto
    fontSize: '20px', // Tamaño de fuente para el texto principal
    color: '#ffffff',
    marginBottom: '10px', // Espacio debajo del texto principal
    fontWeight: 'bold', // Hacer el texto en negrita
    position: 'absolute',
    top: '20%',
    left: '8%',
  };

  const secondaryTextStyle = {
    fontFamily: ['roboto'], // Cambio de la fuente a Roboto
    fontSize: '12px', // Tamaño de fuente para el texto secundario
    color: '#ffffff',
    textAlign: 'left',
    position: 'absolute',
    top: '40%',
    left: '8%',
  };
  

  return (
    <section style={{ position: 'relative' }}>
      <picture style={{ position: 'relative', display: 'block' }}>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Imagen Principal" style={{ width: '100%', height: 'auto' }} />
        <div style={rectangleStyle}>
          <button style={buttonStyle}>Ingresar</button>
          <div style={mainTextStyle}>
            Capacítate con nosotros <br /> para el éxito financiero
          </div>
          <div style={secondaryTextStyle}>
            <br /> La Cámara de Comercio de Loja se complace en incentivar a los nuevos emprendedores a embarcarse en un viaje de conocimiento y crecimiento empresarial.
          </div>
        </div>
      </picture>
    </section>
  );
};
