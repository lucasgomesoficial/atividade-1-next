export const formatNameField = (name: string): string => {
  const nameField = {
    name: "Nome",
    username: "Nome de Usuário",
    email: "E-mail",
  };

  return nameField[name as keyof typeof nameField];
};
