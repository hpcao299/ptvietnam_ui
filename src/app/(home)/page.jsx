import { ProductItem } from '@/components';
import { Banner } from '@/layouts';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className="main-content">
            <div className={styles.bannerContainer}>
                <Banner />
            </div>
            <section className={styles.section}>
                <h2 className={styles.heading}>NEW ARRIVALS</h2>
                <div className="products-list">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
                <div className="flex-center" style={{ marginTop: '36px' }}>
                    <button className="btn btn-outline" style={{ padding: '10px 30px' }}>
                        Xem tất cả
                    </button>
                </div>
            </section>
            <section className={styles.section}>
                <h2 className={`${styles.heading} ${styles.subHeading}`}>áo</h2>
                <div className="products-list">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
                <div className="flex-center" style={{ marginTop: '36px' }}>
                    <button className="btn btn-outline" style={{ padding: '10px 30px' }}>
                        Xem tất cả
                    </button>
                </div>
            </section>
            <section className={styles.section}>
                <h2 className={`${styles.heading} ${styles.subHeading}`}>áo khoác</h2>
                <div className="products-list">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
                <div className="flex-center" style={{ marginTop: '36px' }}>
                    <button className="btn btn-outline" style={{ padding: '10px 30px' }}>
                        Xem tất cả
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
