"use client"
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Skeleton from './Skeleton';

function App() {
  const Gallery = [
    {
      id: "animal1",
      name: "animal1",
      thumb: "https://i.pinimg.com/236x/2c/ba/55/2cba55ddd178acd0acc62d5c7249e601.jpg"
    },
    {
      id: "animal2",
      name: "animal2",
      thumb: "https://i.pinimg.com/236x/fd/72/fd/fd72fdb97dc5dd6a5c120180ac6d4782.jpg"
    },
    {
      id: "animal3",
      name: "animal3",
      thumb: "https://i.pinimg.com/236x/97/3f/38/973f38c3d5d7a28e459a958736a095ee.jpg"
    },
    {
      id: "animal4",
      name: "animal4",
      thumb: "https://i.pinimg.com/236x/15/98/9d/15989db2ac75165336f8c2648457cdfd.jpg"
    },
    {
      id: "animal5",
      name: "animal5",
      thumb: "https://i.pinimg.com/236x/da/dc/94/dadc94f906591db6dccbd30d2c53285b.jpg"
    },
    {
      id: "animal6",
      name: "animal6",
      thumb: "https://i.pinimg.com/236x/73/6b/98/736b9858c4e3afed21086b0cc647d190.jpg"
    },
    {
      id: "animal7",
      name: "animal7",
      thumb: "https://i.pinimg.com/236x/82/ed/2f/82ed2f8e94aa76fe6373e5866279358a.jpg"
    },
    {
      id: "animal8",
      name: "animal8",
      thumb: "https://i.pinimg.com/564x/43/f2/aa/43f2aab75d67d15e97df92f4a0477829.jpg"
    },
    {
      id: "animal9",
      name: "animal9",
      thumb: "https://i.pinimg.com/236x/af/1f/a2/af1fa22d7f732586141bb88c8b67aa7f.jpg"
    },
    {
      id: "animal10",
      name: "animal10",
      thumb: "https://i.pinimg.com/736x/48/50/39/485039eb0103f4b9881a17827dfa20a0.jpg"
    },
  ];
  
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 15);
  }, []);

  const [characters, updateCharacters] = useState(Gallery);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App px-10">
    {loading ? (
      <Skeleton />
    ): (
      <header className="">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div className="characters md:grid grid-cols-4 gap-4 pb-20" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div className='p-4 border border-gray-300 rounded-xl shadow-md' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img className='aspect-auto object-contain h-48 w-full' src={thumb} />
                          </div>
                          <p className='text-center'>
                            { name }
                          </p>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    )}
  </div>
  );
}

export default App;
