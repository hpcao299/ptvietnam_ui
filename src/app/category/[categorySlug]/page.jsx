import { ProductItem } from '@/components';
import classNames from 'classnames';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
    return (
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
    );
};

export default CategoryPage;
