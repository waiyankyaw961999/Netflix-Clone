import React, { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const [login, setLogin] = React.useState(false);

  const { user, signUp, signIn } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  if (user) {
    router.push("/");
  }

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        unoptimized={true}
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt="#"
      />
      <Image
        unoptimized={true}
        src="https://rb.gy/ulxxee"
        width={150}
        height={150}
        alt="#"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign in</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className={`input ${
                errors.email && "border-b-2 border-orange-500"
              }`}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                This field is required.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className={`input ${
                errors.password && "border-b-2 border-orange-500"
              }`}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                This field is required.
              </p>
            )}
          </label>
        </div>
        <button
          onClick={() => setLogin(true)}
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{" "}
          <button className="text-white hover:underline">Sign up now</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
