import styled from "styled-components";
import { Delete } from "../icons";
import { useGlobalContext } from "../context/context";
import PropTypes from "prop-types";

const SingleCartItem = ({
  productId,
  productName,
  productPrice,
  isOnSale,
  salePercent,
  amount,
  images,
}) => {
  const { removeItem } = useGlobalContext();

  const actualPrice = isOnSale
    ? (productPrice * salePercent).toFixed(2)
    : productPrice.toFixed(2);

  const totalPrice = (actualPrice * amount).toFixed(2);

  return (
    <SingleItemWrapper>
      <img src={images[0].url} alt={images[0].alt} />
      <div className="item-info">
        <p className="name">{productName}</p>
        <p className="total">
          ${actualPrice}
          &nbsp;x&nbsp;{amount}&nbsp;
          <span>${totalPrice}</span>
        </p>
      </div>
      <button onClick={() => removeItem(productId)}>
        <Delete />
      </button>
    </SingleItemWrapper>
  );
};

const SingleItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  img {
    border-radius: 0.4rem;
    width: 5rem;
    height: 5rem;
  }

  .item-info {
    gap: 1.6rem;
    .name {
      font-size: 1.6rem;
      color: black;
      margin-bottom: 0.4rem;
    }
    .total {
      font-size: 1.6rem;

      span {
        margin-left: 0.5rem;
        font-weight: 700;
      }
    }
  }
`;

SingleCartItem.propTypes = {
  productId: PropTypes.number,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  amount: PropTypes.number,
  isOnSale: PropTypes.bool,
  images: PropTypes.array,
};

SingleCartItem.defaultProps = {
  productPrice: 0,
  amount: 0,
  isOnSale: false,
  images: [],
};

export default SingleCartItem;
