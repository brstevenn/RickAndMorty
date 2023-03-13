import { useEffect, useState } from "react";
import { auth } from "src/auth";
import { User } from "firebase/auth";

export const Prueba = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  if (!user) {
    return <div>No estás autenticado</div>;
  }

  return <div>Hola, {user.displayName}</div>;
};

export default Prueba;
