// TestimonialLoadingCard.tsx
import { Skeleton } from "antd";

const TestimonialLoadingCard = () => {
  return (
    <div className="testimonial-loading-card">
      <Skeleton.Avatar active size="large" shape="circle" />
      <Skeleton active title={false} paragraph={{ rows: 3 }} />
    </div>
  );
};

export default TestimonialLoadingCard;
