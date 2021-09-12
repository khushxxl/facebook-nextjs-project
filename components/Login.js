import Image from "next/image";
import { signIn } from "next-auth/client";
function Login() {
  return (
    <div className="grid place-items-center pt-10 ">
      <Image
        src="https://links.papareact.com/5me"
        alt=""
        height={400}
        width={400}
        objectFit="contain"
      />
      <div className="pt-10">
        <h1
          onClick={signIn}
          className="p-5  bg-blue-500 rounded-full text-white text-center cursor-pointer"
        >
          Login with Facebook
        </h1>
      </div>
    </div>
  );
}

export default Login;