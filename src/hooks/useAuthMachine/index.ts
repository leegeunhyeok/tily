import { useContext } from 'react';
import { useActor } from '@xstate/react';

import { AuthMachineContext } from '~/machines/authMachine';

export const useAuthMachine = () => {
  const context = useContext(AuthMachineContext);
  const actor = useActor(context.service);
  return {
    service: context.service,
    actor,
  };
};
