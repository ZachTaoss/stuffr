let num: number = 5;
const user: string = "test";

const add = (n1: number, n2: number): string => {
  console.log(n1 + n2);

  return `the sum is ${n1 + n2}`;
};

const addAndHandle = (
  n1: number,
  n2: number,
  cb: (something: string) => void
): void => {
  const result: number = n1 + n2;
  cb(`${result}`);
};

addAndHandle(2, 60, (result) => {
  console.log(result);
});

const concatAndHandle = (
  s1: string,
  s2: string,
  cb: (cont: string) => void
): void => {
  const result2: string = s1 + s2;
  cb(result2);
};

concatAndHandle("LOL ", "UM ", (result2) => {
  console.log(result2);
});

