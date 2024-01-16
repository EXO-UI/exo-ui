import { levelType } from ".";

export const boxShadows: { [key in levelType]: string } = {
  "-1": "0px 0.5px 4px 0px #60617052 inset",
  0: "none",
  1: "0px 0.5px 2px 0px rgba(96, 97, 112, 0.16), 0px 0px 1px 0px rgba(40, 41, 61, 0.08)",
  2: "0px 2px 4px 0px rgba(96, 97, 112, 0.16), 0px 0px 1px 0px rgba(40, 41, 61, 0.04)",
  3: "0px 4px 8px 0px rgba(96, 97, 112, 0.16), 0px 0px 2px 0px rgba(40, 41, 61, 0.04)",
  4: "0px 8px 16px 0px rgba(96, 97, 112, 0.16), 0px 2px 4px 0px rgba(40, 41, 61, 0.04)",
  5: "0px 16px 24px 0px rgba(96, 97, 112, 0.16), 0px 2px 8px 0px rgba(40, 41, 61, 0.04)",
  6: "0px 20px 32px 0px rgba(96, 97, 112, 0.24), 0px 2px 8px 0px rgba(40, 41, 61, 0.08)",
};
