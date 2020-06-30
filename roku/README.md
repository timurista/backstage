# Roku Specific Configuration

Note ENV variables are stored in .env above

The url below needs to be specified in the url

- clientSecret: process.env.AUTH_GITLAB_CLIENT_SECRET!,
- audience: process.env.GITLAB_BASE_URL! || 'https://gitlab.com',

```Example
AUTH_GITLAB_CLIENT_SECRET=abcd...
AUTH_GITLAB_CLIENT_ID=abcd..
GITLAB_BASE_URL=https://gitlab.eng.roku.com
```
