import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2 } from 'react-feather';
import cartStyles from '../ShoppingCart.module.css';
import styles from './CartItem.module.css';

const CartItem = () => {
    return (
        <div className={classNames(cartStyles.gridCartItems, styles.item)}>
            <div className={styles.itemProduct}>
                <Link href="/ao-khoac-wind-jacket-racing-club">
                    <Image src="/product_4.jpeg" alt="Product" width={150} height={150} />
                </Link>
                <div className={styles.itemDetails}>
                    <Link href="/ao-khoac-wind-jacket-racing-club" className="invisible-link">
                        <h4>Áo khoác Wind Jacket RACING CLUB</h4>
                    </Link>
                    <div>Size L</div>
                    <div className={styles.itemPrice}>450.000 ₫</div>
                </div>
            </div>
            <div className={styles.itemQuantity}>
                <button aria-label="Giảm số lượng" className={styles.decreaseBtn}>
                    -
                </button>
                <div className={styles.displayQuantity}>2</div>
                <button aria-label="Tăng số lượng" className={styles.increaseBtn}>
                    +
                </button>
            </div>
            <div className={classNames(styles.itemTotal, 'd-flex al-center')}>450.000 ₫</div>
            <div className={classNames(styles.itemDelete, 'd-flex al-center')}>
                <button>
                    <Trash2 />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
