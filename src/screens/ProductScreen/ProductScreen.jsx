import Product from "../../components/Product/Product";


export default function ProductScreen({ burgers, pizzas }) {
    return (
        <div className="product-screen" style={{margin:"150px"}}>
            <Product title="BURGERLER" productList={burgers} />
            <Product title="PİZZALAR" productList={pizzas} />
        </div>
    )
}
