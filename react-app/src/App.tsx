import { useState } from "react";
// import ListGroup from "./components/ListGroup";

import Button from "./components/Button";

import Alert from "./components/Alert";

// import DismissAlert from "./components/DismissAlert";

function App() {
  // let items = ["Bengaluru", "Mysore", "Udupi", "Mangalore", "Hassan"];

  // const handleSelectionItem = (item: string) => {
  //   console.log(item);
  // };

  const [Visibility, setVisibility] = useState(false);
  return (
    <div>
      {/* <DismissAlert /> */}
      {Visibility && (
        <Alert onClose={() => setVisibility(false)}> My Alert </Alert>
      )}
      <Button
        onClick={() => {
          setVisibility(true);
        }}
      >
        <span>hello !!</span>
      </Button>

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectionItem}
      /> */}
      {/* 
      <Alert>
        <span>Hello World</span>
      </Alert> */}
    </div>
  );
}

export default App;
