import TipBar01 from "../assets/tipbar-01.png"
import TipBar02 from "../assets/tipbar-02.png"
import TipBar03 from "../assets/tipbar-03.png"
import TipBar04 from "../assets/tipbar-04.png"
import TipBar05 from "../assets/tipbar-05.png"

import "./Tipbar.css"

export const TipBar = () => {
    return (
    <>
        <div className="tipbar">
            <h3>Por que comprar na Maeztra?</h3>
            <div className="tipbar-content">
                <div className="tipbar-item">
                    <div className="tipbar-item-img">
                        <img src={TipBar01} alt="" />
                    </div>
                    <div className="tipbar-item-text-box">
                        <div className="tipbar-item-title">
                            Produtos importados
                        </div>
                        <div className="tipbar-item-text">
                            Produto de Alta Qualidade
                        </div>
                    </div>
                </div>
                <div className="tipbar-item">
                    <div className="tipbar-item-img">
                        <img src={TipBar02} alt="" />
                    </div>
                    <div className="tipbar-item-text-box">
                        <div className="tipbar-item-title">
                            Produtos importados
                        </div>
                        <div className="tipbar-item-text">
                            Produto de Alta Qualidade
                        </div>
                    </div>
                </div>
                <div className="tipbar-item">
                    <div className="tipbar-item-img">
                        <img src={TipBar03} alt="" />
                    </div>
                    <div className="tipbar-item-text-box">
                        <div className="tipbar-item-title">
                            Produtos importados
                        </div>
                        <div className="tipbar-item-text">
                            Produto de Alta Qualidade
                        </div>
                    </div>
                </div>
                <div className="tipbar-item">
                    <div className="tipbar-item-img">
                        <img src={TipBar04} alt="" />
                    </div>
                    <div className="tipbar-item-text-box">
                        <div className="tipbar-item-title">
                            Produtos importados
                        </div>
                        <div className="tipbar-item-text">
                            Produto de Alta Qualidade
                        </div>
                    </div>
                </div>
                <div className="tipbar-item">
                    <div className="tipbar-item-img">
                        <img src={TipBar05} alt="" />
                    </div>
                    <div className="tipbar-item-text-box">
                        <div className="tipbar-item-title">
                            Produtos importados
                        </div>
                        <div className="tipbar-item-text">
                            Produto de Alta Qualidade
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
