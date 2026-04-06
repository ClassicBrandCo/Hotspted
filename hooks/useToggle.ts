import { useCallback, useState } from 'react';

type UseToggle = {
  value: boolean;
  toggle: () => void;
};

export function useToggle(initialValue: boolean = false): UseToggle {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((current) => !current), []);
  return { value, toggle };
}
