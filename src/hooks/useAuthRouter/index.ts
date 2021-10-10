import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { AuthMachineState } from '~/machines/authMachine';
import { useAuthMachine } from '../useAuthMachine';

export const useAuthRouter = (targetState: AuthMachineState['value'], redirectUrl: string) => {
  const router = useRouter();
  const { actor: [state] } = useAuthMachine();

  useEffect(() => {
    if (state.matches(targetState)) {
      router.replace(redirectUrl);
    }
  }, [router, state, targetState, redirectUrl]);
};
