import { playerHandlers } from '../lib/player/mocks/handlers';
import { usersHandlers } from '../lib/users/mocks/handlers';

export const handlers = [...playerHandlers, ...usersHandlers];
