# @spotify-mfe-app/api-client

Typescript-based API Client for calling Spotify Web API.


## API Reference

#### UsersApi

```
import { UsersApi } from '@spotify-mfe-app/api-client';

const usersApi = new UsersApi({ token: 'token' });
```

| Method | Web API Reference                |
| :-------- | :------------------------- |
| `getCurrentUserProfile()` | [Get Current User's Profile](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile) |


## Running unit tests

Run `yarn test:api-client` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `yarn lint:api-client` to execute the lint via [ESLint](https://eslint.org/).

