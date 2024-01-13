import classNames from 'classnames/bind';
import React from 'react';
import styles from './ProductPage.module.css';
import Image from 'next/image';
import { ProductItem } from '@/components';

const cx = classNames.bind(styles);

const ProductPage = () => {
    return (
        <div className="main-content" style={{ paddingTop: 'var(--padding-top-content)' }}>
            <div className="d-flex">
                <div className={cx('productImageContainer')}>
                    <div className={cx('productImage')}>
                        <Image
                            src="/product_4.jpeg"
                            alt="Product image"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className={cx('productImageSlideshow')}>
                        <div className={cx('productImageSlide')}>
                            <Image
                                src="/product_4.jpeg"
                                alt="Product image"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className={cx('productImageSlide')}>
                            <Image
                                src="/product_2.jpeg"
                                alt="Product image"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className={cx('productImageSlide')}>
                            <Image
                                src="/product_1.jpeg"
                                alt="Product image"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className={cx('productImageSlide')}>
                            <Image
                                src="/product_5.jpeg"
                                alt="Product image"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className={cx('productImageSlide')}>
                            <Image
                                src="/product_6.jpeg"
                                alt="Product image"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('productDetails')}>
                    <h1 className={cx('productTitle')}>Áo khoác Wind Jacket RACING CLUB</h1>
                    <div className={cx('productPrice')}>450.000 ₫</div>
                    <div className={cx('productOptions')}>
                        <button className={cx('btn', 'btn-outline')}>Size XS</button>
                        <button className={cx('btn', 'btn-outline')}>Size S</button>
                        <button className={cx('btn', 'btn-outline')}>Size M</button>
                        <button className={cx('btn', 'btn-outline')}>Size L</button>
                    </div>
                    <button className={cx('btn', 'btn-outline', 'actionBtn')}>thêm vào giỏ</button>
                    <div style={{ marginTop: '10px' }}>
                        <button className={cx('btn', 'btn-filled', 'actionBtn')}>mua ngay</button>
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <div className={cx('otherPlatform')}>Mua trực tiếp trên sàn TMĐT:</div>
                        <div className={cx('otherPlatformLinks')}>
                            <a
                                href="https://shopee.vn/%C3%81o-kho%C3%A1c-Wind-Jacket-RACING-CLUB-i.329424860.22031250497?xptdk=d19f339b-6f52-432d-8db0-9f1bc631c674"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/shopee_icon.svg"
                                    alt="Shopee Icon"
                                    width={32}
                                    height={32}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={cx('productDesc')}>
                        <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                            Chi tiết sản phẩm:
                        </div>
                        <ul>
                            <li>
                                <span className={cx('dot')}>•</span> Chất liệu: vải dù trượt nước (
                                có thể chống mưa nhẹ)
                            </li>
                            <li>
                                <span className={cx('dot')}>•</span> Chữ thêu phía sau lưng, tag cao
                                su trước ngực
                            </li>
                            <li>
                                <span className={cx('dot')}>•</span> Có 2 lỗ hút gió trước ngực và 1
                                lỗ thoáng khí sau lưng
                            </li>
                            <li>
                                <span className={cx('dot')}>•</span> Bên trong có lót lưới
                            </li>
                            <li>
                                <span className={cx('dot')}>•</span> Áo có 2 túi ngoài và 2 túi ẩn
                                bên trong
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('relatedProducts')}>
                <h2>sản phẩm tương tự</h2>
                <div className="products-list" style={{ marginTop: '24px' }}>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
