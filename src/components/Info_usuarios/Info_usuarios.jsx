import { useEffect, useState } from 'react';
import styles from './info_usuarios.module.css'
import escolhaDoSexo from '../../assets/sexo.png'
import sexoMasculino from '../../assets/homem.png'
import sexoFeminino from '../../assets/mulher.png'
import imgTabImc from '../../assets/tabelaIMC.png'

function Info_usuarios() {

    const [idade, setIdade] = useState(0);
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [escSexo, setEscSex] = useState(escolhaDoSexo)
    const [imc, setimc] = useState("");

    function calculaImc(idade, peso, altura) {
        altura = altura / 100
        const respostaIMC = (peso / (altura * altura)).toFixed(2);
        let statusIMC = "";

        if (respostaIMC < 18.5) {
            statusIMC = "Baixo peso";
        } else if (respostaIMC >= 18.5 && respostaIMC <= 24.99) {
            statusIMC = "Normal";
        } else if (respostaIMC >= 25 && respostaIMC <= 29.99) {
            statusIMC = "Sobrepeso";
        } else {
            statusIMC = "Obesidade";
        }

        return `Seu IMC é de ${respostaIMC} - ${statusIMC}`;
    }

    function trocarImagem(imgMas, imgFem, nd, target) {
        const eventoSexo = target.value;
        let imagemescolhida = "";

        switch (eventoSexo) {
            case "nd":
                imagemescolhida = nd;
                break;
            case "masculino":
                imagemescolhida = imgMas;
                break;
            case "feminino":
                imagemescolhida = imgFem;
                break;
            default:
                break;
        }

        return imagemescolhida;
    }

    return (
        <form className={styles.formulario}>
            <h2 className={styles.subtitulo_formulario}>
                Coloque seus dados na calculadora e veja o seu 
                <a href="#"> <span className={styles.imc_oficial}>IMC</span></a>
            </h2>

            <section className={styles.container_sides}>
                <div className={styles.formulario_lado_esquerdo}>
                    <div>
                        <img src={escSexo} className={styles.image_person} alt="" />
                    </div>

                    <div className={styles.escolha}>
                        <span className={styles.escolhaSexoEspaco}>
                            Sexo: 
                        </span>
                        <select className={styles.selectSexo} onChange={({target}) => setEscSex(trocarImagem(sexoMasculino, sexoFeminino, escolhaDoSexo, target))}>
                            <option value="nd">Não Binário</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                        </select>
                    </div>
                </div>

                <div className={styles.formulario_lado_direito}>
                    <div className={styles.inputInfos}>
                        <div className={styles.idadeUsuario}>
                            <input type="number" placeholder='Idade' onChange={({target}) => setIdade(target.value)} required/> 
                            <span className={styles.escolhaSexoEspaco}> anos</span>
                        </div>

                        <div>
                            <input type="number" placeholder='Altura' onChange={({target}) => setAltura(target.value)} required/>
                            <span className={styles.escolhaSexoEspaco}> cm</span>
                        </div>

                        <div>
                            <input type="number" placeholder='Peso' onChange={({target}) => setPeso(target.value)} required/>
                            <span className={styles.escolhaSexoEspaco}> kg</span>
                        </div>
                    </div>

                    <div className={styles.containerBotaoCalcular}>
                        <button type='button' className={styles.botaoCalcular} onClick={() => setimc(calculaImc(idade, peso, altura))}>CALCULAR IMC</button>
                    </div>

                    <div className={styles.respostaImc}>
                        {imc}
                    </div>
                </div>
            </section>

            <div className={styles.tabImc}>
                <img src={imgTabImc} alt="" className={styles.imgTab} />
            </div>
        </form>
    )
};

export default Info_usuarios;