import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const navigation = {
  name: "Acceso",
  href: "/formularios/acceso",
  current: true,
};

export const RegistroUsuario = () => {
  const { postData, loading, error, data } = useFetch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmo: "",
  });

  //bindear el value de la etiqueta input con un estado
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //name es la propiedad 'name' que le puse al imput
    const { name, value } = event.target;
    //Si el campo pertenece a PasswordForm, actualizarlo correctamente
    if (name === "password" || name === "confirmo") {
      //bindear el value con nuestro estado
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: name === "nDni" ? Number(value) || "" : value,
      });
    }
  };
  //agregar el evento al boton del formulario y almacenarla en una base de datos, osea enviarlo al backend
  const handleSubmit = async (event: React.FormEvent) => {
    //se dejara de recargar la pagina cada vez que ase hace un submit
    event.preventDefault();
    try {
      await postData(formData);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
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
                value={formData.name}
                onChange={handleChange}
              />
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
                value={formData.email}
                onChange={handleChange}
              />
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
              />
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
              />
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
              />
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
              />
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
              />
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
