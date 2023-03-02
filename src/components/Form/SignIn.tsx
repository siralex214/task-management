import React from "react";
import InputText from "@components/Form/FormComponent/Input/InputText";
import styled from "styled-components";
import InputSubmit from "./FormComponent/Input/InputSubmit";
import { useMutation } from "@apollo/client";
import { LOGIN } from "@query/Auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const [value, setValue] = React.useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [error, setError] = React.useState<string>("");

  const router = useRouter();

  const [handleForm, { loading }] = useMutation(LOGIN, {
    variables: {
      userInput: {
        email: value.email,
        password: value.password,
      },
    },
    onCompleted(data) {
      console.log("data", data);
      Cookies.set("token", data.login.token);
      // filter password de user
      localStorage.setItem("user", JSON.stringify(data.login.user));
      router.push("/");
    },
    onError(error) {
      console.log("error", error.message.split("error:"));
      setError(error.message.split("error:")[1]);
    },
  });

  React.useEffect(() => {
    console.log("value", value);
  }, [value]);

  return (
    <Container>
      <Title>Connexion</Title>
      <InputText
        onChange={(e) => {
          setValue({
            ...value,
            email: e.target.value,
          });
        }}
        type="text"
        value=""
        placeholder="Email : "
      />
      <InputText
        onChange={(e) => {
          setValue({
            ...value,
            password: e.target.value,
          });
        }}
        type="password"
        value=""
        placeholder="Mot de passe : "
      />

      <span>{error}</span>
      <InputSubmit
        loading={loading}
        onClick={(e) => {
          e.preventDefault();
          // verify if the form is valid
          if (value.email === "" || value.password === "") {
            setError("Veuillez remplir tous les champs");
            return;
          }
          // verify if the email is valid
          if (!value.email.includes("@")) {
            setError("Veuillez entrer un email valide");
            return;
          }
          // verify if the password is valid
          if (value.password.length < 6) {
            setError("Le mot de passe doit contenir au moins 6 caractères");
            return;
          }
          // send the form
          setError("");
          handleForm();

          console.log("click");
        }}
      />
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 10px;
`;

export default SignIn;
