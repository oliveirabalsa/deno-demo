## deno-demo##

_Crud system with Deno application_

Modules use:

[abc](https://deno.land/x/abc)

[dotenv](https://deno.land/x/dotenv)

[mongo](https://deno.land/x/mongo)

[bcrypt](https://deno.land/x/bcrypt)

[djwt](https://deno.land/x/djwt)


## Endpoint Router
```
  get /users
  post /users
  get /users/:id
  put /users/:id
  delete /users/:id
```

## Post

```
{
    "name": "Luan",
    "lastName": "Silva",
    "email": 'luan@luan.com',
    "password": '12345678"
}

Has validation for Header type, if content-type is application/json
Has validation if body data this empty

```
## Update 
```
{
    "name": "Leonardo",
    "lastName": "Oliveira",
    "email": 'leo@leo.com',
    "password": '12345678"
}

Has validation for Header type, if content-type is application/json
Has validation if body data this empty
```

## .ENV
```
DATABASE_NAME=<DATABASE_NAME>
DATABASE_HOST=<URI_MONGO>
```

# Start server
```

deno run -A --unstable ./server.ts
-A => permission for --allow-all
```

# Tags

```
--allow-write write permission
--allow-read read permission
--allow-plugin access to the plugin created by the mongo
--allow-net network access permission
--allow-env permission to access .env in the root folder
--unstable for running unstable packages
--allow-all for running with full permission

```
# Semantic Commits

```
feat: (new feature for the user, not a new feature for build script)
fix: (bug fix for the user, not a fix to a build script)
docs: (changes to the documentation)
style: (formatting, missing semi colons, etc; no production code change)
refactor: (refactoring production code, eg. renaming a variable)
test: (adding missing tests, refactoring tests; no production code change)
chore: (updating grunt tasks etc; no production code change)

```
