# Geetify

## New revelation of Audio Streaming Platform Being Started from Today, signed by Mr. Wayne and Mr. Solo

#### Please check the license before modifying and distributing this project. Distributing as a proprietary or paid application is prohibited. We can take any legal action if you do this. You must use provided folder structured and commit style.

## You must need to use provided VSCode settings for code styling with eslint enabled. eslint can be disabled.

# Folder Structure (Important):

1. /\_firebase/ = This folder contains firebase.cong.js configs files.
2. /assets/ = this folder contains all assets on Geetify.
   2.1 /backgrounds/ = this folder contains backgrounds images used in site.
   2.2 /css/ = this folder contains css files used in site
   2.3 /icons/ = if site have any icons it should be stored here
   2.4 /imgs/ = sites all images will be here escape svgs images
   2.5 /svg/ = like before is say this folder should contain all svg images.
3. /components/ = this folder contains components used in sites which need some times in some 2/3 pages or many more.
   3.1 /shared = if site uses a component rapidly then it should be it shared folder.

4. /contexts/ = this folder have contexts used in sites.
5. /layouts/ = container or main layout will be here.
6. /pages/ = this folder contain all pages in site.
7. /routes/ = routes and route related files will be here.

# Commit Structure (Important).

## When you added any feature/ui feature commit msg must be like this:

```sh
git commit -m "Feature: Floating navbar added with user photo and name."
```

## When you added any core feature commit msg must be like this:

```sh
git commit -m "Core: Auth provided optimized for better performance."
```

### Another example

```sh
git commit -m "Core: SignIn with google has been added."
```

## When you fixed any error in existing code or feature commit msg must be like this:

```sh
git commit -m "Fix: Auth provider error fixed while user new try register."
```

## When you made any changes in **docs** commit msg must be like this:

```sh
git commit -m "Doc: Installation method explained more detailed way."
```
