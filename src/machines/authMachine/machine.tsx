import { createMachine, assign } from 'xstate';

export type AuthMachineContextType = {
  token: null | string;
  user: null | any;
};

export type AuthMachineEvent = { type: 'LOGIN', token: string } | { type: 'LOGOUT' };

export type AuthMachineState = {
  value: 'idle' | 'authorized' | 'notAuthorized';
  context: AuthMachineContextType;
};

const TOKEN_KEY = 'token';

const authMachine = createMachine<
  AuthMachineContextType,
  AuthMachineEvent,
  AuthMachineState
>(
  {
    id: 'auth',
    initial: 'idle',
    context: {
      token: null,
      user: null,
    },
    states: {
      idle: {
        invoke: {
          id: 'get_token',
          src: async () => {
            // @TODO: Get token from IDB
            const token = localStorage.getItem(TOKEN_KEY);
            if (!token) {
              throw new Error('token not found');
            }
            return token;
          },
          onDone: {
            target: 'validating',
            actions: assign({
              token: (_context, { data: token }) => token,
            }),
          },
          onError: {
            target: 'notAuthorized',
            actions: 'error',
          },
        },
      },
      validating: {
        invoke: {
          id: 'fetch_me',
          src: async (context, event) => {
            // @TODO: Fetch GitHub profile
            const token = event.type === 'LOGIN' ? event.token : context.token;
            return {
              token,
              user: {}, // user
            };
          },
          onDone: {
            target: 'authorized',
            actions: [
              assign((_context, { data }) => ({
                token: data.token,
                user: data.user,
              })),
              'setToken',
            ],
          },
          onError: {
            target: 'notAuthorized',
            actions: 'error',
          },
        },
      },
      authorized: {
        on: {
          LOGOUT: 'notAuthorized',
        },
      },
      notAuthorized: {
        entry: ['clearToken'],
        on: {
          LOGIN: 'validating',
        },
      },
    },
  },
  {
    actions: {
      setToken: ({ token }) => {
        console.log('setToken');
        if (!token) return;
        localStorage.setItem(TOKEN_KEY, token);
      },
      clearToken: () => {
        console.log('clearToken');
        localStorage.removeItem(TOKEN_KEY);
      },
      error: (_, event) => {
        console.log('error', event);
      },
    },
  },
);

export default authMachine;
