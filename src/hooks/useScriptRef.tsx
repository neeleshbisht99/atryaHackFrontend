import { useEffect, useRef } from 'react';

// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

const useScriptRef = () => {
  const scripted = useRef<any>(true);

  useEffect(
    () => () => {
      scripted.current = false;
    },
    []
  );

  return scripted;
};

export default useScriptRef;
