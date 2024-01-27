const getAsyncData = <T>(data: T, rejected?: boolean, delay: number = 2000) =>
  new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (rejected) return reject("Data is rejected");
      resolve(data);
    }, delay);
  });

export default getAsyncData;
