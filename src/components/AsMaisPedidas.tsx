/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react"
//@ts-ignore
import { db } from "../config/firebase"
import { getDocs, collection } from "firebase/firestore"

import "./AsMaisPedidas.css"

export const AsMaisPedidas = () => {

    const [products, setProducts] = useState<{ id: string, name: string, description: string, img: string, price: number, sku: string[] }[]>([]);

    const productsCollection = collection(db, "products")

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await getDocs(productsCollection);
                const filteredData = data.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    img: doc.data().img,
                    price: doc.data().price,
                    sku: doc.data().sku
                }));

                setProducts(filteredData);
            } catch (err) {
                console.log(err)
            }
        }

        getProducts()
    }, [])

    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    function handleClick(index: number) {
        setSelectedButton(prevIndex => {
            if (prevIndex === index) {
                console.log('unchecked');
                return null;
            } else {
                console.log('checked');
                return index;
            }
        });
    }

    return (
        <>
            <div className="as-mais-pedidas">
                <div className="title-as-mais">
                    <h2>As Mais Pedidas</h2>
                </div>
                <div className="product-list">
                    {products.map((product) => (
                        <>
                            <div className="product-card" key={product.id}>
                                <img src={product.img} alt={product.name}></img>
                                <div className="product-info">
                                    <div className="sku" style={{ display: 'flex', width: '132px', justifyContent: 'space-around' }}>
                                        {product.sku.map((sku, index) => (
                                            <button
                                                onClick={() => handleClick(index)}
                                                className={selectedButton === index ? "checked" : "unchecked"}
                                                key={index}
                                                style={{
                                                    backgroundColor: sku,
                                                    width: '27px',
                                                    height: '27px',
                                                    borderRadius: '5px',
                                                    color: 'inherit',
                                                    border: 'none',
                                                    padding: 0,
                                                    font: 'inherit',
                                                    cursor: 'pointer',
                                                    outline: 'inherit'
                                                }} />
                                        ))}
                                    </div>
                                    <strong>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                                    <span>{product.name}</span>
                                    <p>{product.description}</p>
                                    <button className="add-to-cart">Adicionar</button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
