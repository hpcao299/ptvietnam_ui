import React from 'react';
import styles from './CategoryPage.module.css';
import Link from 'next/link';
import classNames from 'classnames';
import { ProductItem } from '@/components';

const CategoryPage = () => {
    return (
        <div className="main-content" style={{ paddingTop: 'var(--padding-top-content)' }}>
            <div className="d-flex al-center jc-between">
                <div>
                    <h1 className={styles.heading}>áo</h1>
                    <div className={styles.linkHistory}>
                        <Link href="/">Trang chủ</Link>
                        <span className={styles.linkDivider}>/</span>
                        <span className={styles.linkActive}>Áo</span>
                    </div>
                </div>
                <div className={styles.resultSort}>
                    <div style={{ marginRight: '18px' }}>Hiển thị tất cả 11 kết quả</div>
                    <select name="orderBy" defaultValue="date" className={styles.resultSelect}>
                        <option value="popularity">Thứ tự theo mức độ phổ biến</option>
                        <option value="date">Mới nhất</option>
                        <option value="price-asc">Thứ tự theo giá: thấp đến cao</option>
                        <option value="price-desc">Thứ tự theo giá: cao đến thấp</option>
                    </select>
                </div>
            </div>
            <div className={classNames(styles.productsList, 'products-list')}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    );
};

export default CategoryPage;
