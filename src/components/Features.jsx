import { features } from '../constant';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className=" relative z-10 flex h-fit items-center justify-center">
      <section className=" relative z-10 flex max-w-[1080px] flex-wrap items-center justify-around  ">
        {features.map((feat, index) => (
          <FeatureCard feat={feat} index={index} key={index} />
        ))}
      </section>
    </section>
  );
}
