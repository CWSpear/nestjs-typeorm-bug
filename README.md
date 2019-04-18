# @nestjs/typeorm bug demo

This is a minimally reproducible for the following bug.

**Issue:**

You cannot inject a (custom) repo into another custom repo. It compiles, but at runtime, the thing that is injected is the `EntityManager`.

To reproduce:

```bash
npm install
npm start
#in another terminal
curl http://localhost:3000/api/agencies/1
```

You'll get a 500 error in response and if you look in the console for your app, you'll get an error that your custom method doesn't exist. When the app starts, it also logs the class name of the supposed injected repo, and it should print `UserRepository`, but it prints `EntityManager`.
