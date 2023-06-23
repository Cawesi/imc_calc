import { useState, useEffect } from "react";

import styles from './header.module.css'

function Header() {


    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.titulo_header}>Calculadora IMC</h1>
                <p className={styles.descricao_imc}>
                    <small>
                        * IMC - Índice de massa corporal
                    </small>
                </p>
            </div>

            <div className={styles.mensagem_advertencia}>

                <div className={styles.mensagem_p1}>
                    <p className={styles.mensagem_sobre_beneficios}>
                        Ter um peso dentro do intervalo de peso ideal ajuda a evitar o aparecimento de doenças crônicas,
                    </p>

                    <p className={styles.mensagem_sobre}>
                        A classificação do IMC pode ajudar a identificar problemas de obesidade ou desnutrição, em crianças, adolescentes, adultos e idosos.
                    </p>
                </div>

                <p className={styles.mensagem_aviso}>
                    Advertimos: os resultados apresentados devem ser validados com seu médico antes de qualquer decisão.
                </p>
            </div>
        </header>
    )
}


export default Header;