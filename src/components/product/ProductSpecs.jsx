import "./ProductSpecs.css";

const ProductSpecs = ({ material, sizeOptions }) => {
  return (
    <div className="product-specs">
      <p>
        <strong>Material:</strong> {material}
      </p>

      {sizeOptions && (
        <p>
          <strong>Sizes:</strong> {sizeOptions.join(", ")}
        </p>
      )}
    </div>
  );
};

export default ProductSpecs;
