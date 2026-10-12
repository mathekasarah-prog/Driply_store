import { useOutletContext } from "react-router-dom";

export default function Specifications() {
  const product = useOutletContext();
  const { dimensions } = product;

  const specs = [
    { label: "Brand", value: product.brand ?? "N/A" },
    { label: "SKU", value: product.sku },
    { label: "Weight", value: product.weight ? `${product.weight} oz` : null },
    {
      label: "Dimensions",
      value: dimensions
        ? `${dimensions.width} × ${dimensions.height} × ${dimensions.depth}`
        : null,
    },
    { label: "Warranty", value: product.warrantyInformation },
    { label: "Shipping", value: product.shippingInformation },
    { label: "Availability", value: product.availabilityStatus },
    { label: "Return policy", value: product.returnPolicy },
    { label: "Minimum order", value: product.minimumOrderQuantity },
  ].filter((spec) => spec.value !== null && spec.value !== undefined);

  return (
    <dl className="divide-y rounded-lg border">
      {specs.map((spec) => (
        <div key={spec.label} className="grid grid-cols-3 gap-4 p-3 text-sm">
          <dt className="font-semibold">{spec.label}</dt>
          <dd className="col-span-2 text-muted-foreground">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}