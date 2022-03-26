import React from 'react';

const Questions = () => {
    return (
        <div>
            
      <div class="container mt-3">
      <div class="card border-success  mb-3">
        
          <div class=" card-body">
            <div class="card-body text-success ">
              <h5 class="card-title text-danger">How react works?</h5>
              <p class="card-text">
              React is a JavaScript library for creating user interfaces. It was created by Facebook and is used by many other large organizations. React works by taking a component, such as a button and rendering it on the screen. React updates the component’s state accordingly when the user interacts with the component. It lets you create reusable components to make your code easy to read and maintain. It makes React app more responsive and fast.
              </p>
            </div>
          </div>
          
        </div>
        <div class="card border-success mb-3">
        
          <div class=" card-body">
            <div class="card-body text-success ">
              <h5 class="card-title text-danger">Difference between props and state?</h5>
              <p class="card-text">
              One of the most important distinctions between props and state is that props are temporary and state is permanent. For example, a button might be a prop, while a window is a state. Props can be changed or destroyed while the state cannot. Additionally, when props are used in an animation, they are typically manipulated using properties such as position, rotation, and scale. State, on the other hand, typically contains information about the scene itself, such as the position of objects and the color of the text. Props are immutable data passed from parent to child component in a React component tree. The state is mutable data used internally by a React component and is not passed down to child components.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

    
    );
};

export default Questions;