export const devolverError = (status) => {
    if (status)
        return status;
    else
        return 500;
};
