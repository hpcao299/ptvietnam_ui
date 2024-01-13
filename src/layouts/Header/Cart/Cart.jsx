import config from '@/config';
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './Cart.module.css';
import { ShoppingCart, XCircle } from 'react-feather';
import Image from 'next/image';

const cx = classNames.bind(styles);

const Cart = () => {
    return (
        <div className={cx('header-cart')}>
            <Link href={config.routes.cart} className="invisible-link">
                <ShoppingCart size={26} />
                <div className={cx('header-cart-count')}>0</div>
            </Link>

            <div className={cx('cart-popup')}>
                <div className={cx('cart-item')}>
                    <Link href="/ao-khoac-wind-jacket-racing-club">
                        <div className={cx('cart-item-img')}>
                            <Image
                                src="/product_1.jpeg"
                                alt="Product image"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </Link>
                    <div className={cx('cart-item-details')}>
                        <Link href="/ao-khoac-wind-jacket-racing-club" className="invisible-link">
                            <div className={cx('cart-item-title')}>Áo khoác hoodie RACING CLUB</div>
                        </Link>
                        <div className="d-flex al-center">
                            <span className={cx('cart-item-quantity')}>2x</span>
                            <span className={cx('cart-item-price')}>450.000 ₫</span>
                        </div>
                    </div>
                    <button className={cx('cart-item-delete', 'blank')}>
                        <XCircle size={20} />
                    </button>
                </div>
                <div className={cx('cart-total')}>
                    Tạm tính: <span className={cx('cart-total-price')}>900.000 ₫</span>
                </div>
                <Link href={config.routes.cart}>
                    <button className={cx('btn', 'btn-filled', 'show-cart-btn')}>
                        xem giỏ hàng
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
