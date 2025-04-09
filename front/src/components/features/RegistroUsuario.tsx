import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { UsuarioNuevo } from "../../schemas/usuarioNuevo.schema";
import Input from "../ui/input";
import Button from "../ui/button";
import Checkbox from "../ui/checkbox";

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
  const [err, setErr] = useState<{ [key: string]: string[] }>({});

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
    if (!inputValido.success) {
      const nameInvalido = inputValido.error?.formErrors.fieldErrors;
      setErr((prev) => ({ ...prev, [name]: nameInvalido[name] || [] }));
    } else {
      setErr((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
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
      <div className="min-h-screen bg-cinco flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-uno">
            Create an Account
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Nombre"
              name="name"
              type="text"
              placeholder="nombre completo"
              required
              value={formData.name}
              onChange={(value) => handleChange(value)}
              onBlur={handleBlur}
              error={err.name}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="email"
              required
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={err.email}
            />

            <Input
              label="Contraseña"
              name="password"
              type="password"
              placeholder="contraseña"
              required
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={err.password}
            />

            <Input
              label="Confirmar contraseña"
              name="confirmo"
              type="password"
              placeholder="confirmar contraseña"
              required
              value={formData.confirmo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={err.confirmo}
            />

            <Input
              label="Fecha de Nacimiento"
              name="birthdate"
              type="date"
              placeholder="fecha de nacimiento"
              required
              value={formData.birthdate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={err.birthdate}
            />

            <Input
              label="Dni"
              type="number"
              name="nDni"
              required
              value={formData.nDni}
              onChange={handleChange}
              onBlur={handleBlur}
              error={err.nDni}
            />

            <Input
              label="Nombre de Usuario"
              name="username"
              type="text"
              required
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={err.username}
            />
            <div className="flex">
              <Checkbox
                label={`I agree to the${" "}`}
                type="checkbox"
                name="terms"
              />
              <a href="#" className="text-blue-500 hover:underline">
                terms and conditions
              </a>
            </div>
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                terms and conditions
              </a>
            </label>
            <Button type="submit" textoDelBoton="Register" />
          </form>
          <p className="mt-2 text-center text-sm text-dos max-w">
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
