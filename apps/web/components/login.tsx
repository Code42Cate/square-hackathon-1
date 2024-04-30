import { Signin } from "@/app/actions";

export default function Login() {
  return (
    <form action={Signin}>
      <button type="submit">Signin with Square</button>
    </form>
  );
}
