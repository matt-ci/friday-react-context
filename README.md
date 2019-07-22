## react-redux
I'm sick of all the boilerplate required to used Redux in a React app.

To be able to get and set the state from a component, we end up having to connect the state and dispatch like this:

```jsx harmony
import { connect } from 'react-redux';
import PeopleList from './PeopleList';

export const mapStateToProps = ({ people }) => ({
  people: list,
  hasLoadedPeople,
});

export const mapDispatchToProps = {
  fetchPeople: getPeople.request,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleList);
```

This might not look too bad, but it get's tiresome and, worse, 
makes it a little harder to track props and events through your codebase.


## Context
We can create a nice lightweight alternative with `React.useContext` and `React.useReducer` 
which makes it easy for us to get and set the state from any functional component.
However, out-of-the-box, changes in state cause our entire tree to re-render. Using React devtools
you can see this when you switch painting on.


## react-redux@next
V 7.1.X exposes hooks, which allow you to access redux `state` and `dispatch` from withing a functional component.

```jsx harmony
const dispatch = useDispatch();
const value = useSelector(state=>state[item]);
```
So now it's just as easy to use as `React.Context` but we don't end up with unnecessary re-renders in our component tree.


## Redux ecosystem
Redux has a large and useful ecosystem.
Dev Tools are really good.
A good API for creating our own middleware.
Lots of useful middleware has already been created:
* Logging
* Crash reporting
* Analytics
* [Async actions](https://github.com/redux-saga/redux-saga)
* [Undo / Redo](https://github.com/omnidan/redux-undo)
* [Persist and rehydrate the store](https://redux.js.org/introduction/ecosystem#persistence)
