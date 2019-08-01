# Asynchronous JavaScript

The aim of the exercise is to understand how Asynchronous JavaScript works. ANd learn about things like :-
  * Call Stack
  * Event Loop
  * Web API's
  * Promises
  * XMLHttpRequest

## XMLHttpRequest

```js
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => console.log(xhr.response));
  xhr.open("GET", "https://api.github.com/users/nnnkit");
  xhr.send();
```

## Getting Started

**Setup your project by following these instructions:**

* [ ] Make your own copy by forking this exercise.
* [ ] Go to the settings of the newly forked repo and add your mentor as a collaborator on the repo.
* [ ] Make a clone of your forked repo.
* [ ] Create a new branch called develop: `git checkout -b develop`.
* [ ] Work on the exercise on your `develop` branch.
* [ ] Push commits to `develop` branch ONLY. Command - `git push origin develop`.


**After you are done.**

* [ ] Submit a Pull Request to merge `develop` branch into the `master` branch of your repo. **Please don't merge your own pull request.**
* [ ] Add your mentor as a reviewer on the PR.
* [ ] The assigned mentor will review the exercise and pass feedback.
* [ ] Once the mentor merges the PR to `master` branch, you are done with this exercise. Yay!

## Goals 🎯
* [ ] Every folder has a `.md` file and a `.js` file
* [ ] Go through the instruction form `.md` file and complete the function in the `.js` file.