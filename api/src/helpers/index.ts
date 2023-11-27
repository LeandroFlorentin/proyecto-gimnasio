export const devolverError = (status?: number) => {
  if (status) return status;
  else return 500;
}