import { LoaderWrapper, PulseDot } from './PulseDots.styles';

export const PulseDots = () => (
  <LoaderWrapper data-testid="pulse-dots">
    <PulseDot $delay="0s" />
    <PulseDot $delay="0.5s" />
    <PulseDot $delay="1s" />
  </LoaderWrapper>
);
