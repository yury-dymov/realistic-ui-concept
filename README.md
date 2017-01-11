# realistic-ui-concept
Realistic UI — the successor of the Optimistic UI

# Demo
Rather than reading boring README, you may jump right into the [demo](https://yury-dymov.github.io/realistic-ui-concept).

*Note: while demo works fine on mobile devices, it is highly recommended to test it on tablets or desktops.*

# Disclaimer

1. This project is a Proof of Concept. It illustrates the idea of Realistic UI and not supposed to be used as a starting point or a boilerplate for your next project.
2. Current implementation is based on React/Redux stack, but it can also be implemented within almost any modern JS Framework / Mobile SDK.

# Realistic UI
Realistic UI is a brand new way to represent the interaction with the backend. It can be broken down into the following components:

1. Blocking part of UI and showing loading indicator. Unlike traditional "block-everything" approach we should block only a part of UI related to the certain remote action, for example, the fields of submitted form. The user is also allowed to navigate to other pages without risk of losing inputted data in case of backend or network failure.
2. UI component, which helps to track active and finished requests. With the help of this widget, the user can always navigate back to the relevant page and/or part of the page to review input and progress.
3. UI component, which provides information regarding failed requests. The user can decide, whatever he or she would prefer to do: ignore the error, navigate back to the relevant page or replay the failing action.

# Realistic UI vs. Optimistic UI
Optimistic UI is a concept, which suggests updating the UI in a such away as we would do in case the remote operation is successfully executed.

I am currently writing an article, which explains the downsides of the Optimistic UI concept in greater details. Main concerns are following:

* You can't use Optimistic UI everywhere. Obviously, there are some critical parts of the application, where we can't trick the user and want to be 100% certain if an operation was successful or not. You can imagine buying cinema tickets scenario.
* Not only you have to maintain two different UI models of interacting with the backend "important" and "not important," but you might also mislead your user.
* Dividing scenarios into "important" and "not important" is subjective. For you lost "like" might be not an issue, but for other people, it might be very important thing, which might even ruin somebody's evening
* Imagine the offline scenario. User made five different actions, and after your application got access to the Internet, action #3 is failed. What shall we do? Rollback first two actions? Try to execute actions #4 and #5? But what if they are relying on action #3? How would you show the user these errors? There are too many questions and no simple answers. I personally try to avoid using things, which brings a lot more problems compared to the value they provide
* Tricking user, in general, is not a good idea

# Installing This App Locally
```Bash
git clone https://github.com/yury-dymov/realistic-ui-concept.git
npm install
npm run webpack-dev-server
```

Now open your browser and type [`http://localhost:8050`](http://localhost:8050).

# License
MIT (c) Yury Dymov
