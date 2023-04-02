import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='question-container'>
            <h1>Question Answers</h1>
            <div>
                <h3>Props vs state</h3>
                <p>Answer: Props (short for "properties")---- passes data from a parent component to a child component. It allow a parent component to pass information to its child components.But when data is passed to the child components cannot it modify the props directly. Instead, if needed the parent component must update the props and pass the new data down to the child components.

                    State---- on the other hand, is mutable data that is managed within a component. It is used to manage data within a component itself. State is used to store data that can change over time and can trigger a re-rendering of the component when it is updated. A component can modify its own state using the setState method, which updates the state object and triggers a re-rendering of the component.
                </p>
            </div>
            <div>
                <h3>how does use state works?</h3>
                <p>Answer: use state used to define a state variable and a function to update that variable, and then using that variable in your component to display and modify data <br />
                    Here is how it works--</p>
                <ul>
                    <li>first is imports the useState hook from the react package.</li>
                    <li>Then it defines a state variable, also a function to update that variable using the useState hook.</li>
                    <li>It returns an array with two values the current state and a function to update it</li>
                    <li>After that it uses the state variable in selected components</li>
                    <li>Whenever the function is called the Hook takes an initial state value as an argument and returns an updated state value.</li>
                </ul>
            </div>
            <div>
                <h3>purpose of use effect and other fetching data</h3>
                <p>Answer: The purpose of use effect and other fetch data is to let you run some code after a component has rendered, and also to handle updates to the component's props or state. Use effect takes a function as its first argument and an array of dependencies as its second argument. If any of the dependencies have changed, the function you pass to useEffect will be called after the component has rendered for the first time, and then after every subsequent re-renders.</p>
            </div>
            <div>
                <h3>How does React works?</h3>
                <p>Answer: If someone uses a React application, like by clicking a button or filling a form, React updates the virtual DOM to reflect the new state of the UI. Then, it compares the new virtual DOM with the previous one to determine what has changed. If it finds any changes has been made, it updates the actual DOM only in the places where changes have occurred, avoiding expensive full-page refreshes.
                This process of updating the virtual DOM and comparing it to the previous one is called reconciliation, and it allows React to efficiently update the UI while minimizing the amount of work that needs to be done.</p>
            </div>
        </div>
    );
};

export default Questions;