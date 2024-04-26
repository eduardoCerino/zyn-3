import React, { useState, createContext } from "react";

const DocumentContext = createContext({
  documentId: "",
  setDocumentId: () => {},
});
  
  const DocumentProvider = ({ children }) => {

    const [ documentId, setDocumentId] = useState(false);

    return (
      <DocumentContext.Provider value={{ documentId, setDocumentId }}>
        {children}
      </DocumentContext.Provider>
    );
  };
  
  export { DocumentContext, DocumentProvider };
  