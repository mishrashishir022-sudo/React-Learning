//<div class="parent">
//  <div class="child1">
//    <h1>Hello From react</h1>
//    <h2>Bye! Bye! From React</h2>
//   </div>
// <div class="child2">
//    <h1>Hello From react</h1>
//   <h2>Bye! Bye! From React</h2>
//</div>
//</div>

let main = React.createElement("div", 
    {class: "parent"},
[React.createElement('div', 
    {class: "child1"},
    [React.createElement("h1" , {}, "Hello From React"), React.createElement("h2" , {}, "Bye! Bye! From React")] 
),
React.createElement('div', 
    {class: "child2"},
    [React.createElement("h1" , {}, "Hello From React"), React.createElement("h2" , {}, "Bye! Bye! From React")] 
)])


let insert = ReactDOM.createRoot(document.querySelector(".box"))
insert.render(main)