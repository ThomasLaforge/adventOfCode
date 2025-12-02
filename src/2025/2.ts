export const data =
  "18623-26004,226779-293422,65855-88510,868-1423,248115026-248337139,903911-926580,97-121,67636417-67796062,24-47,6968-10197,193-242,3769-5052,5140337-5233474,2894097247-2894150301,979582-1016336,502-646,9132195-9191022,266-378,58-91,736828-868857,622792-694076,6767592127-6767717303,2920-3656,8811329-8931031,107384-147042,941220-969217,3-17,360063-562672,7979763615-7979843972,1890-2660,23170346-23308802";

export const exampleData =
  "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";

export const exoTwoPartOne = (input: string): number => {
  let sum = 0;
  const combinationsStr = input.split(",");
  const combinations = combinationsStr.map((c) => {
    return c.split("-").map((intAsStr) => parseInt(intAsStr));
  });

  combinations.forEach(([start, end]) => {
    for (let i = start; i <= end; i++) {
      const numAsStr = i.toString();
      if (numAsStr.length % 2 === 0) {
        const a = numAsStr.slice(0, numAsStr.length / 2);
        const b = numAsStr.slice(numAsStr.length / 2);
        if (a === b) {
          sum += i;
        }
      }
    }
  });

  return sum;
};

export const exoTwoPartTwo = (input: string): number => {
  const combinationsStr = input.split(",");
  const combinations = combinationsStr.map((c) => {
    return c.split("-").map((intAsStr) => parseInt(intAsStr));
  });

  const invalids: number[] = [];

  combinations.forEach(([start, end]) => {
    for (let i = start; i <= end; i++) {
      const numAsStr = i.toString();
      for (let j = 1; j <= numAsStr.length / 2; j++) {
        if (numAsStr.length % j === 0) {
          let parts: string[] = [];
          for (let k = 0; k < numAsStr.length / j; k++) {
            parts[k] = numAsStr.slice(k * j, (k + 1) * j);
          }
          if (parts.filter((p) => p === parts[0]).length === parts.length) {
            console.log("num invalid", i);
            invalids.push(i);
          }
        }
      }
    }
  });

  let uniqs = [...new Set(invalids)];

  return uniqs.reduce((v, sum) => v + sum, 0);
};
