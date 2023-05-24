import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useRef } from 'react';

type Props = {
  refetch: () => Promise<unknown>;
};

const useRefreshOnFocus = (props: Props) => {
  const { refetch } = props;
  const firstTimeRef = useRef(true);

  useFocusEffect(
    useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }
      refetch();
    }, [refetch]),
  );
};

export default useRefreshOnFocus;
