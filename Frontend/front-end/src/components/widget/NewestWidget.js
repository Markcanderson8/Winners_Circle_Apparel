import style from "./NewestWidget.module.css";

const NewestWidget = () => {

    return (
        <>
            <br />
            <div className={style.container}>
                <div className={style.title}><h3>Check Out Our Newest Products!</h3></div>
                <br />
                <div className={style.grid_1}>
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
                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a754d153-ad88-43a2-b436-4c716297975b/vapor-edge-elite-360-flyknit-mens-football-cleats-jW4xrt.png" alt="" />
                        </div>
                        <div className={style.product_details}>
                            <h4><a href="">Exotic Football Cleats</a></h4>
                            <span className={style.product_catagory}>Men</span>
                            <div className={style.product_price}>$110.66</div>
                        </div>
                    </div>
                    <div className={style.product_card}>
                        <div className={style.product_tumb}>
                            <img src="https://img.freepik.com/free-psd/black-cap-front-view-mockup_125540-1038.jpg?w=1380&t=st=1665167059~exp=1665167659~hmac=a5c920dfa2347d53e03b353fdfafdd7565255e5c3486e9925dfc0d5daa647675" alt="" />
                        </div>
                        <div className={style.product_details}>
                            <h4><a href="">Heavy Duty Baseball Hat</a></h4>
                            <span className={style.product_catagory}>Kids</span>
                            <div className={style.product_price}>$64.19</div>
                        </div>
                    </div>
                </div>
                <div className={style.grid_2}>
                    <div className={style.product_card}>
                        <div className={style.product_tumb}>
                            <img src="https://previews.123rf.com/images/stefaninahill/stefaninahill1212/stefaninahill121200010/17000319-aviator-sunglasses.jpg" alt="" />
                        </div>
                        <div className={style.product_details}>
                            <h4><a href="">Stylish Golf Sunglasses</a></h4>
                            <span className={style.product_catagory}>Men</span>
                            <div className={style.product_price}>$49.99</div>
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

export default NewestWidget;