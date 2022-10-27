import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Item from "./Item";


const AppContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
            .then(items => setProductos(items))
            .catch(e => console.log(e))
    }, [])


    return (
        <div className="products container d-flex">
            {productos.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        precio={producto.precio}
                        imagen={producto.imagen}
                    />
                );
            })}
        </div>
    );
}

















// return (
//     <div className="products">
//         {productos.map((producto) => {
//             return (
//                 <Item
//                     key={producto.id}
//                     titulo={producto.titulo}
//                     imagen={producto.imagen}
//                 />
//             );
//         })}
//     </div>
//     );



export default AppContainer;