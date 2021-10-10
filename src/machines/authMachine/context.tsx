import { useInterpret } from '@xstate/react';
import { createContext, ReactElement } from 'react';
import { Interpreter } from 'xstate';
import authMachine, { AuthMachineContextType, AuthMachineEvent, AuthMachineState } from './machine';

type Context = {
  service: Interpreter<AuthMachineContextType, any, AuthMachineEvent, AuthMachineState>
};

export const AuthMachineContext = createContext<Context>({
  service: {} as any,
});

export const AuthMachineProvider = ({ children }: { children: ReactElement }) => {
  const service = useInterpret(authMachine);
  return (
    <AuthMachineContext.Provider value={{ service }}>
      {children}
    </AuthMachineContext.Provider>
  );
};
