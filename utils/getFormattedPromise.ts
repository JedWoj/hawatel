//function takes url and returns ready to use data
export const getFormattedPromise = async (http: string) => {
    const response = await fetch(http);
    const data = await response.json();
    return data;
}