import { Checkbox, Slider, SwitchWrapper } from './Switch.styles';

interface SwitchProps {
  isToggled: boolean;
  onToggle: () => void;
}

export const Switch = ({ isToggled, onToggle }: SwitchProps) => {
  return (
    <SwitchWrapper>
      <Checkbox type="checkbox" checked={isToggled} readOnly onClick={onToggle} />
      <Slider />
    </SwitchWrapper>
  );
};
