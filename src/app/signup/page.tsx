import styles from "@/app/page.module.scss";
import logoImg from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/services/app";
import { redirect } from "next/navigation";

export default function Signup() {
  async function handleRegister(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await api.post("/users", {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }

    redirect("/");
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt={"Logo da pizzaria"} />

        <section className={styles.login}>
          <h1>Criar conta</h1>
          <form action={handleRegister}>
            <input
              type="name"
              required
              name="name"
              placeholder="Digite seu nome"
              className={styles.input}
            />
            <input
              type="email"
              required
              name="email"
              placeholder="Digite seu email"
              className={styles.input}
            />
            <input
              type="password"
              required
              name="password"
              placeholder="Digite sua senha"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Acessar
            </button>
          </form>

          <Link href={"/"} className={styles.text}>
            Já possui uma conta? Log in
          </Link>
        </section>
      </div>
    </>
  );
}
