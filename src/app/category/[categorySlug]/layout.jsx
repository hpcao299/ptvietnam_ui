import React from 'react';
import Link from 'next/link';
import styles from './CategoryPage.module.css';
import { categoryLinks } from '@/constants';

const getCategoryInfo = categorySlug => {
    const category = categoryLinks.find(category => category.slug === categorySlug);
    return category;
};

const CategoryPageLayout = ({ children, params }) => {
    const category = getCategoryInfo(params.categorySlug);

    return (
        <div className="main-content" style={{ paddingTop: 'var(--padding-top-content)' }}>
            <div className="d-flex al-center jc-between">
                <div>
                    <h1 className={styles.heading}>{category.title}</h1>
                    <div className={styles.linkHistory}>
                        <Link href="/">Trang chủ</Link>
                        <span className={styles.linkDivider}>/</span>
                        <span className={styles.linkActive}>{category.title}</span>
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

            {/* Products List */}
            {children}
        </div>
    );
};

export default CategoryPageLayout;
