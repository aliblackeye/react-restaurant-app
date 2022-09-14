import MenuCard from './MenuCard';

import './menu.scss'

export default function Menu() {
    return (
        <section className="menu">
            <div className="menu-container container">
                <h1 className="title">MENÜLERİMİZ</h1>
                <div className="menu-cards">
                    <MenuCard image={"./images/menu/pizza.png"} title={"Orta Boy Pizza"} price={"80"} discount={"99.99"}/>
                    <MenuCard image={"./images/menu/hamburger.png"} title={"Hamburger"} price={"35"} discount={"45.00"}/>
                    <MenuCard image={"./images/menu/pide.png"} title={"Kuşbaşılı Pide"} price={"35"} discount={"45.00"}/>
                    <MenuCard image={"./images/menu/lahmacun.png"} title={"Lahmacun"} price={"12"} discount={"14"}/>
                </div>
            </div>
        </section>
    )
}
