import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './ProductItem.module.css';
import Link from 'next/link';

const cx = classNames.bind(styles);

const ProductItem = () => {
    return (
        <div className={cx('item')}>
            <Link href="/ao-khoac-wind-jacket-racing-club" className="invisible-link">
                <Image
                    src="/product_4.jpeg"
                    alt="Product image"
                    width={287}
                    height={353}
                    className={cx('item-img')}
                    draggable={false}
                />
                <div className={cx('item-details')}>
                    <div className={cx('item-title')}>Áo khoác Wind Jacket RACING CLUB</div>
                    <div className={cx('item-price')}>450.000 ₫</div>
                </div>
            </Link>
        </div>
    );
};

export default ProductItem;
