'use client'
import styles from '../prueba/PruebaPage.module.css';

import { useEffect, useState } from 'react';
import Modal from '../components/modal/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faPercent, faFileLines, faFileInvoiceDollar, faFileSignature, faMoneyCheckDollar, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';



export default function second() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [modalExtra, setModalExtra] = useState([]);


    useEffect(() => {
        if (showModal) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';

        } else {
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';

        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [showModal]);


    // Función para abrir el modal
    const handleVerPaquetes = () => {
        setModalContent([{ title: 'Emprendedor', price: '1,000', iva: ' + iva/mes', movements: '1-30 movimientos bancarios al mes' },
        { title: 'Emprendedor Plus', price: '2,000', iva: ' + iva/mes', movements: '31-100 movimientos bancarios al mes' },
        { title: 'Empresarial', price: '3,000', iva: ' + iva/mes', movements: '101-300 movimientos bancarios al mes' },
        ]);
        setShowModal(true);
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.contaContainer}>
                    <div>
                        <div>
                            <h1 >Tu <span className={styles.contatitle} >Conta</span> </h1>
                        </div>
                        <div style={{ width: '100%' }} >
                            <p style={{ textAlign: 'end', fontSize: '.75rem' }} >Tu contador en línea</p>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center', flexDirection: 'column', marginBlockStart: '20px', lineHeight: '135%'
                    }} >
                        <p>¡Nuevo Servicio!</p>
                        <p>Encárgate de tu negocio, nosotros de tu contabilidad</p>
                    </div>
                </div>
                <section className={styles.cardContainer}>
                    <div className={styles.card} >
                        <FontAwesomeIcon icon={faCalculator} className={styles.icon} fixedWidth />
                        <p>Hacemos tu contabilidad mensual</p>
                    </div>
                    <div className={styles.card} >
                        <FontAwesomeIcon icon={faPercent} className={styles.icon} />
                        <p>Calculamos tus impuestos</p>
                    </div>
                    <div className={styles.card} >
                        <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
                        <p>Presentamos tus declaraciones SAT</p>
                    </div>
                    <div className={styles.card} >
                        <FontAwesomeIcon icon={faFileInvoiceDollar} className={styles.icon} />
                        <p>Cálculo, timbrado y envío de nómina</p>
                    </div>
                </section>
                <section className={styles.videoSection} >
                    <div className={styles.videoContainer} >
                        <iframe

                            src="https://www.youtube.com/embed/D0UnqGm_miA?autoplay=1"

                            allow="autoplay; encrypted-media"
                        >
                        </iframe>
                    </div>
                    <div className={styles.benefitsContainer} >
                        <h4>Beneficios</h4>
                        <div className={styles.benefits} >
                            <ul >
                                <li>
                                    <span style={{ fontWeight: '800' }} > Automático</span> <br />
                                    Ahorra tiempo al eliminar la tarea de enviar facturas a tu contador
                                    ¡El proceso es automático!.
                                </li>
                                <li>
                                    <span style={{ fontWeight: '800' }} > Servicio Oportuno</span> <br />
                                    Comunicación más fácil con tu contador personal.
                                </li>
                                <li>
                                    <span style={{ fontWeight: '800' }} > Simplicidad</span> <br />
                                    Información contable en tiempo real.
                                </li>
                                <li>
                                    <span style={{ fontWeight: '800' }}> Confiable</span> <br />
                                    Cálculos hechos por uno de nuestros contadores expertos asignado especialmente a
                                    tu negocio.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.bannerContainer} >
                    <div className={styles.banner} >
                        <FontAwesomeIcon icon={faFileSignature} color="tomato" className={styles.icon} />
                        <p className={styles.steps} >PASO 1</p>
                        <p>Agrega tu <br />FIEL</p>

                    </div>
                    <div className={styles.banner} >
                        <FontAwesomeIcon icon={faMoneyCheckDollar} color="tomato" className={styles.icon} />
                        <p className={styles.steps} >PASO 2</p>
                        <p>Sincroniza tus cuentas bancarias</p>

                    </div>
                    <div className={styles.banner} >
                        <FontAwesomeIcon icon={faFileArrowDown} color="tomato" className={styles.icon} />
                        <p className={styles.steps} >PASO 3</p>
                        <p>Recibe mensualmente tu declaración de impuestos</p>

                    </div>
                </section>
                <div className={styles.modalContainer} >
                    <div className={styles.modalParragraph} >
                        <p>¿Quieres cambiar a tu Conta? Nosotros nos encargamos de llevar a cabo la transición
                            de toda tu contabilidad hasta el día de hoy.
                        </p>
                    </div>
                    {showModal && <Modal content={modalContent} onClose={() => setShowModal(false)} />}
                    {modalExtra.length > 0 && <Modal content={modalExtra} onClose={() => setShowModal(false)} />}
                    <div className={styles.modalButtonsContainer} >
                        <div className={styles.packageTypes}   >
                            <button onClick={handleVerPaquetes} >Ver Paquetes</button>
                        </div>
                        <div className={styles.Appointment}>
                            <button  >Agenda una cita con un contador experto</button>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    );
}