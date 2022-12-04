import { ChangeEvent, useCallback, useState } from 'react';

type onChangeType = ((text: string) => void) | undefined;

const useInput = (initValue = '') => {
  const [value, setValue] = useState(initValue);

  const handler = useCallback((e) => {
    if (typeof e === 'string') {
      setValue(e);
    } else {
      setValue(e.target.value);
    }
  }, []);
  return [value, handler, setValue] as [string, onChangeType, typeof setValue];
};

export default useInput;
