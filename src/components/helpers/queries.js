const userAdmin = {
  email: "admin@rollingcoffee.com",
  password: "123Aa123",
};

const URIProductos = import.meta.env.VITE_API_PRODUCTOS;

export const login = (usuario) => {
  if (
    usuario.email === userAdmin.email &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem(
      "usuarioRollingCoffee",
      JSON.stringify(userAdmin.email)
    );
    return true;
  } else {
    return false;
  }
};

//GET
export const listarProductos = async () => {
  try {
    const respuesta = await fetch(URIProductos);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
//GET
export const obtenerProducto = async (id) => {
  try {
    const respuesta = await fetch(URIProductos+id);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//POST
export const crearProducto = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URIProductos,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(productoNuevo)
    });
    return respuesta
  } catch (error) {
    console.error(error);
  }
};
//DELETE
export const eliminarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URIProductos+id,{
        method: "DELETE"
    });
    return respuesta
  } catch (error) {
    console.error(error);
  }
};

//PUT, PATCH
export const editarProducto = async (productoActualizado, id) => {
  try {
    const respuesta = await fetch(URIProductos+id,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(productoActualizado)
    });
    return respuesta
  } catch (error) {
    console.error(error);
  }
};