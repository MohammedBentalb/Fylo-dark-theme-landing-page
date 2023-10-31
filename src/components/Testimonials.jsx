import { testimonials } from '../constant';
import Testimonial from './Testimonial';

function Testimonials() {
  return (
    <section className="testimonial mb-20 mt-40 flex flex-wrap items-center justify-center gap-11">
      {testimonials.map((testimonial, index) => (
        <Testimonial data={testimonial} key={index} />
      ))}
    </section>
  );
}

export default Testimonials;
