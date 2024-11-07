export const handleErrorInput = (
  error: string | undefined
): React.ReactEventHandler<HTMLInputElement> => {
  if (error) {
    console.log(error);
  }
  return () => {};
};

export const handleErrorTextArea = (
  error: string | undefined
): React.ReactEventHandler<HTMLTextAreaElement> => {
  if (error) {
    console.log(error);
  }
  return () => {};
};
