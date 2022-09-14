import './product.scss'



export default function Product({ title , productList}) {
  return (
    <div className="product">
      <div className="product-container container">
        <h1 className="title">{title}</h1>
        <div className="product-cards">
          {
            productList.map((burger,key) => (
              <div className="product-card"  key={key}>
                <div className="card-img">
                  <img src={burger.image} alt="" />
                </div>
                <div className="card-wrapper">
                  <h1 className="card-title">{burger.title}</h1>
                  <div className="card-infos">
                    <div className="price-and-calories">
                      <span className="price">{burger.price} TL</span>
                      <span className="calories">{burger.calories} TL</span>
                    </div>
                    <button className="add-to-card btn btn-add">+</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
