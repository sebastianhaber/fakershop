import { useContext } from "react"
import { IProduct, ShopContext } from "../../context/Context"
import NoDataSVG from '../../assets/undraw_no_data_re_kwbl.svg'
import { StyledFavouriteWrapper } from "./FavouriteProducts.styles"
import { Link } from "react-router-dom"
import ProductTile from "../../components/molecules/productTile/ProductTile"

const Favourites = () => {
  const { favouriteProducts } = useContext(ShopContext);
  
  if(!favouriteProducts.length){
    return (
      <StyledFavouriteWrapper>
        <div className="noFavs">
          <p>You don't have selected your favourite products yet 😕</p>
          <img src={NoDataSVG} alt="" />
          <Link to='/' className="shopNow underline">Select now here</Link>
        </div>
      </StyledFavouriteWrapper>
    )
  }
  return (
    <StyledFavouriteWrapper>
      <div className="products">
          {favouriteProducts.map((product: IProduct, index) => {
            return (
              <ProductTile key={index} product={product} />
            )
          })}
        </div>
    </StyledFavouriteWrapper>
  )
}
export default Favourites