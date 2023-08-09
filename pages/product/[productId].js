import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

import products from "../catalog/products.json";
import styles from "./Product.module.scss";
import { currencyFormat } from "../../utils/numericFormatters";

export default function Product() {
  const router = useRouter();
  const { productId } = router.query;
  const product = products.find((product) => product._id === productId);

  if (!product) return null;

  return (
    <div className={styles.product}>
      <div className={styles.title}>
        {product.title}: {currencyFormat(product.price)}
      </div>
      <div className={styles.image}>
        <Image
          src={`/images/albums/${product.imageName}`}
          width={750}
          height={750}
          alt={product.title}
        />
      </div>
    </div>
  );
}

Product.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
