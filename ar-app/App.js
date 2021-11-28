import Navigate from './src/route/Navigate';
import React, { useState } from 'react';
import { ARContext } from './src/context'



export default function App() {
  const [idKey, setIdKey] = useState({ type: '', data: '' })

  return (
    <ARContext.Provider value={{idKey, setIdKey}}>
      <Navigate />
    </ARContext.Provider>
  );
}