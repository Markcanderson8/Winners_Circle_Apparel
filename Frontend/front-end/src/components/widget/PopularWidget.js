import style from "./PopularWidget.module.css";

const PopularWidget = () => {

    return (
        <>
            <br />
            <div className={style.container}>
                <div className={style.title}><h3>Popular Products of the Week!</h3></div>
                < br/>
                <div className={style.grid}>
                    <div className={style.product_card}>
                        <div className={style.product_tumb}>
                            <img src="https://media.istockphoto.com/photos/hat-on-white-background-picture-id526131500?k=20&m=526131500&s=612x612&w=0&h=_Z7gpMWhUtuf1jPgjp-Lv6FL2ne9xHzvG9jZUco4-J0=" alt="" />
                        </div>
                        <div className={style.product_details}>
                            <h4><a href="">Heavy Duty Baseball Hat</a></h4>
                            <span className={style.product_catagory}>Women</span>
                            <div className={style.product_price}>$341.46</div>
                        </div>
                    </div>
                    <div className={style.product_card}>
                        <div className={style.product_tumb}>
                            <img src="https://www.thetrophytrolley.com/wp-content/uploads/2018/02/224183_045.jpg" alt="" />
                        </div>
                        <div className={style.product_details}>
                            <h4><a href="">Exotic Weightlifting Jacket</a></h4>
                            <span className={style.product_catagory}>Men</span>
                            <div className={style.product_price}>$10.60</div>
                        </div>
                    </div>
                    <div className={style.product_card}>
                        <div className={style.product_tumb}>
                            <img src="https://cdn.shopify.com/s/files/1/0320/3277/products/Rainbow_Cotton_Headband_5c8bf39b-b8fe-49e1-a9c8-14466f05dded.jpg?v=1561062632" alt="" />
                        </div>
                        <div className={style.product_details}>
                            <h4><a href="">Colorful Hockey Headband</a></h4>
                            <span className={style.product_catagory}>Kids</span>
                            <div className={style.product_price}>$484.10</div>
                        </div>
                    </div>
                    <div className={style.product_card}>
                        <div className={style.product_tumb}>
                            <img src="https://c1.neweggimages.com/ProductImage/AT9XS2105175CtVV.jpg" alt="" />
                        </div>
                        <div className={style.product_details}>
                            <h4><a href="">Slim Football Sunglasses</a></h4>
                            <span className={style.product_catagory}>Women</span>
                            <div className={style.product_price}>$41.70</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PopularWidget;