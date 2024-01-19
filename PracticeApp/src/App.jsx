import { useState } from "react";
import Card from "./components/card";
function App() {
  let dataArray = [
    {
        url: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
        name: 'hello',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?"
    },
    // Add three more entries as needed
    {
        url: "Another URL",
        name: 'Another Name',
        content: "Another content"
    },
    {
        url: "Yet Another URL",
        name: 'Yet Another Name',
        content: "Yet Another content"
    },
    {
        url: "One More URL",
        name: 'One More Name',
        content: "One More content"
    }
];
  
  return (<>
    {dataArray.map((item,index) => (
        <Card {...item} />
    ))}
    </>
  );
}

export default App

