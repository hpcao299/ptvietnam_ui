import config from '@/config';
import classNames from 'classnames/bind';
import Link from 'next/link';
import CartItem from './CartItem';
import styles from './ShoppingCart.module.css';

const cx = classNames.bind(styles);

const ShoppingCartPage = () => {
    return (
        <div className={cx('cartContainer')}>
            <div className={cx('cartContent')}>
                <div className={cx('gridCartItems', 'cartTitleContainer')}>
                    <div className={cx('cartTitle')}>Sản phẩm</div>
                    <div className={cx('cartTitle')}>Số lượng</div>
                    <div className={cx('cartTitle')}>Tổng tiền</div>
                    <div className={cx('cartTitle')}>Xoá</div>
                </div>
                <div>
                    <CartItem />
                </div>
            </div>
            <div className={cx('totalContent')}>
                <div className={cx('subtotal')}>
                    <span>Tổng tiền</span>
                    <span>450.000 ₫</span>
                </div>
                <div className={cx('payment')}>
                    <Link href={config.routes.checkout}>
                        <button>thanh toán</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
