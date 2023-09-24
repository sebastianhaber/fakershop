import { useContext, useEffect, useMemo, useState } from "react";
import { IProduct, ShopContext } from "../../context/Context";
import Banner from "../../components/molecules/banner/Banner";
import ProductTile from "../../components/molecules/productTile/ProductTile";
import { StyledHomeWrapper } from "./Home.styles";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const { products } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const query = useMemo(
    () => searchParams.get("q")?.toLowerCase() || "",
    [searchParams]
  );
  const [displayedProducts, setDisplayedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (query) {
      const filtered = products.filter((el) =>
        el.name.toLowerCase().includes(query)
      );
      setDisplayedProducts(filtered);
      return;
    }
    setDisplayedProducts(products);
  }, [query, products]);

  return (
    <>
      <Banner />
      <StyledHomeWrapper>
        <h1>New arrivals</h1>
        <div className="products">
          {!displayedProducts.length && query ? (
            <p>
              Brak produktów zawierających <b>{query}</b>.
            </p>
          ) : (
            !displayedProducts.length && <p>Brak produktów.</p>
          )}
          {displayedProducts.map((product: IProduct, index) => {
            return <ProductTile key={index} product={product} />;
          })}
        </div>
      </StyledHomeWrapper>
    </>
  );
}
