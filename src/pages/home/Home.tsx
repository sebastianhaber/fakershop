import { useContext } from 'react'
import { IProduct, ShopContext } from '../../context/Context'
import Banner from '../../components/molecules/banner/Banner'
import ProductTile from '../../components/molecules/productTile/ProductTile';
import { StyledHomeWrapper } from './Home.styles'

export default function Home() {
  const { products } = useContext(ShopContext);

  return (
    <>
        <Banner />
        <StyledHomeWrapper>
          <h1>New arrivals</h1>
          <div className="products">
            {products.map((product: IProduct, index) => {
              return (
                <ProductTile key={index} product={product} />
              )
            })}
          </div>
        </StyledHomeWrapper>
    </>
  )
}
