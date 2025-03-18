import styles from './modal.module.css';  // Importa los estilos

const Modal = ({ content, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <div className={styles.modalBody}>
          <div className={styles.packageTitle} style={{ textAlign: 'center' }}>
            <h3> <span style={{ color: '#333' }} >Conoce nuestros</span> Paquetes </h3>
          </div>
          <div className={styles.modalCard}>
            {content.map((item, index) => (
              <div key={index} className={styles.modalItem}>
                <h4>{item.title}</h4>
                <hr style={{ borderTop: '1px solid #387ab2' }} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
                  <p className={styles.price}>${item.price}</p>
                  <p style={{ textAlign: 'end' }}>{item.iva}</p>
                </div>
                <p className={styles.movements}>{item.movements}</p>
                <div className={styles.buttonContainer}>
                  <button>Elegir</button>
                </div>
              </div>
            ))}
            <div className={styles.modalItem}>
              <h4>Select</h4>
              <hr style={{ borderTop: '1px solid #387ab2' }} />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', marginBlockStart:'5px' }}>
                <p className={styles.priceExtra}>
                  Contáctanos para hacer un paquete a tus necesidades
                </p>
              </div>
              <p className={styles.movements}>+ de 300 movimientos bancarios al mes</p>
              <div className={styles.buttonContainer}>
                <button>Cotizar Paquete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;