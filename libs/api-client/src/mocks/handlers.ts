import { usersHandlers } from '../lib/users/mocks/handlers';
import { playlistsHandlers } from '../lib/playlists/mocks/handlers';

export const handlers = [...usersHandlers, ...playlistsHandlers];
