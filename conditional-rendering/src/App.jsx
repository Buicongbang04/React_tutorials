import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import Button from "./Button.jsx";
import Profile from "./Profile.jsx";

function App() {
  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "banana", calories: 45},
                  {id: 3, name: "pineapple", calories: 105},
                  {id: 4, name: "cherry", calories: 159}, 
                  {id: 5, name: "dates", calories: 277}, 
                  {id: 6, name: "elderberry", calories: 73}];
  
  const vegetables = [{id: 1, name: "apple", calories: 95}, 
                      {id: 2, name: "banana", calories: 45},
                      {id: 3, name: "pineapple", calories: 105},
                      {id: 4, name: "cherry", calories: 159}, 
                      {id: 5, name: "dates", calories: 277}, 
                      {id: 6, name: "elderberry", calories: 73}];

  return (
    // <>
    //   <UserGreeting isLoggedIn={false} username="BangBui"/>
    //   {fruits.length > 0 && <List item={fruits} category="Fruits"/>}
    //   {vegetables.length > 0 && <List item={vegetables} category="Vegetables"/>}
    // </>
    <>
      {/* <Button /> */}
      <Profile />
    </>
  );
}

export default App
