import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const itemsFromBackend = [
  {id: uuidv4(), content: 'First task'},
  {id: uuidv4(), content: 'Second task'}
]

const columnsFromBackend = [
  {
    [uuidv4()]: {
      name: 'Todo',
      items: [itemsFromBackend]
    }
  }
]


function App() {
  const [columns, setColumsn] = useState(columnsFromBackend);

  return (
    <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
      <DragDropContext onDropEnd={result => console.log(result)}>
        {Object.entries(columns).map(([id, column]) => {
          return(
            <Droppable droppableId = {id}>
              {(provided, snapshot) => {
                return (
                  <div 
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                    padding: 4,
                    width: 250,
                    minHeight: 1000
                  }}
                  >

                  </div>
                )
              }}
            </Droppable>
          )
        })}
      </DragDropContext>
    </div>
  );
}

export default App;
