import styles from './ShoppingCart.module.css';

const ShoppingCartLayout = ({ children }) => {
    return (
        <div className="main-content">
            <div className={styles.content}>
                <h1 className={styles.heading}>Giỏ hàng</h1>
                {children}
            </div>
        </div>
    );
};

export default ShoppingCartLayout;
