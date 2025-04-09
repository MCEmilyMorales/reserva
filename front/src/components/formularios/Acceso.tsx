import { Link } from "react-router-dom";
import Input from "../ui/input";

const navigation = [
  {
    name: "Registro",
    href: "/formularios/registro",
    current: true,
  },
];

export default function Acceso() {
  return (
    <div className="min-h-screen bg-cinco flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-uno">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-dos max-w">
          Or
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="font-medium text-cuatro hover:text-cinco"
            >
              create an account
            </Link>
          ))}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-cinco py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Ingrese su dirección de email"
              autocomplete="email"
              required
              //value
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              autoComplete="current-password"
              required
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-cinco rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-uno"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cuatro"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-cinco text-cuatro">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-cinco rounded-md shadow-sm text-sm font-medium text-uno bg-cinco hover:bg-cinco"
                >
                  <img
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-uno bg-cuatro hover:bg-cinco"
                >
                  <img
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-uno bg-cuatro hover:bg-cinco"
                >
                  <img
                    className="h-6 w-6"
                    src="https://www.svgrepo.com/show/506498/google.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
