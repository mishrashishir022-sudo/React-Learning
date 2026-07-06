import React from "react"
import ReactDOM from "react-dom/client"

let main = React.createElement("div", 
    {className: "parent"},
[React.createElement('div', 
    {className: "child1"},
    [React.createElement("h1" , {}, "Hello From React"), React.createElement("h2" , {}, "Bye! Bye! From React")] 
),
React.createElement('div', 
    {className: "child2"},
    [React.createElement("h1" , {}, "Hello From React"), React.createElement("h2" , {}, "Bye! Bye! From React")] 
)])

//jsx code

let hero = <div className="parent"><h1>Hey, this code has been written in JSX 🚀</h1></div>
//react Fun Component - always remember to use Upper case for the first letter for variable name
const Idiot = ()=> (
    <div className="main2">
            <h1>This is Functional Component</h1>
    </div>
)
// component composition
const Idiot2 = ()=> {
   return <div className="main">
        <Idiot/>
            <h1>This is Functional Component- component composition</h1>
    </div>
}
let insert = ReactDOM.createRoot(document.querySelector(".box"))
insert.render(<Idiot2/>) 
