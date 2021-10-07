import React from "react";

function TodoHeader({ children, loading }) {
  return (
    <header>
      {/* //Ayuda para que clone element entienda cuantos elementos vienen
        //Convirtiendolos en array mapeable, React.cloneElement, solo clona uno */}
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading: loading })
      )}
    </header>
  );
}

export { TodoHeader };
