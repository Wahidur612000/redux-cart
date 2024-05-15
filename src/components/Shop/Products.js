import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS=[
  {
    id:'w1',
    price:6,
    title:'My first Product',
    description:'First product i manufactured',
  },
  {
    id:'w2',
    price:10,
    title:'My second Product',
    description:'Second product i manufactured',
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(((product)=>
        <ProductItem
        key={product.id}
        id={product.id} 
        title={product.title}
        price={product.price}
        description={product.description}
      />
      ))}
      </ul>
    </section>
  );
};

export default Products;
