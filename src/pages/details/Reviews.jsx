import { useOutletContext } from "react-router-dom";

export default function Reviews() {
  const product = useOutletContext();
  const reviews = product.reviews ?? [];

  if (reviews.length === 0) {
    return <p className="text-muted-foreground">No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div key={index} className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold">{review.reviewerName}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>

          <p className="text-yellow-500" aria-label={`${review.rating} out of 5`}>
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </p>

          <p className="mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}