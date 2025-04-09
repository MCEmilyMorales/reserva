import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { UsuarioNuevo } from "../../schemas/usuarioNuevo.schema";

const navigation = {
  name: "Acceso",
  href: "/formularios/acceso",
  current: true,
};

export const RegistroUsuario = () => {
  const { postData } = useFetch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmo: "",
  });
  const [tocado, setTocado] = useState(false);
  const [err, setErr] = useState([]);

  //bindear el value de la etiqueta input con un estado
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //name es la propiedad 'name' que le puse al imput
    const { name, value } = event.target;
    //bindear el value con nuestro estado
    // Debo tomar el value del input, esto lo hago buscandolo por el name, con eso voy a tener la clave. que es lo que necesito enviarle al servidor
    const newValue = name === "nDni" ? Number(value) || "" : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  //atributo onBlur. Me ayuda a darle foco al input, y si hay algun error setea el error y lo muestra inmediatamente
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTocado(true);
    // Validar el dato del input
    const inputValido = UsuarioNuevo.safeParse({ ...formData, [name]: value });
    const nameInvalido = inputValido.error?.formErrors.fieldErrors[name];
    console.log("nameInvalido: ", nameInvalido);
//necesito hacer que el error del input se guarde segun el [name]
    setErr([name]:nameInvalido);
    console.log("ERROR: ", err);

    // Actualizar el estado de tocado para mostrar errores específicos
  };

  //agregar el evento al boton del formulario y almacenarla en una base de datos, osea enviarlo al backend
  const handleSubmit = async (event: React.FormEvent) => {
    //se dejara de recargar la pagina cada vez que ase hace un submit
    event.preventDefault();
    try {
      await postData(formData);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      throw new Error();
    }
  };

  return (
    <>
      <div className="bg-blue-50 flex items-center justify-center min-h-screen">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Create an Account
          </h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.name}
                onChange={(value) => handleChange(value)}
                onBlur={handleBlur}
              />
              {tocado && err.length > 0 && (
                <p className="text-red-500"> {err}</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {tocado && <p className="text-red-500 text-sm">{err}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {tocado && <p className="text-red-500 text-sm">{err}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="confirm_password"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirmo"
                name="confirmo"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.confirmo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {tocado && <p className="text-red-500 text-sm">{err}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="birthdate"
                className="block text-gray-700 font-medium mb-2"
              >
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.birthdate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {tocado && <p className="text-red-500 text-sm">{err}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="nDni"
                className="block text-gray-700 font-medium mb-2"
              >
                DNI
              </label>
              <input
                type="number"
                id="nDni"
                name="nDni"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.nDni}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {tocado && <p className="text-red-500 text-sm">{err}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Nombre de Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {tocado && <p className="text-red-500 text-sm">{err}</p>}
            </div>
            <div className="flex items-center mb-5">
              <input type="checkbox" id="terms" name="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              key={navigation.name}
              to={navigation.href}
              className="text-blue-500 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
