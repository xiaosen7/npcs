import { useEffect } from "react";

export const Add = () => {
  useEffect(() => {
    import("mf_shared/add").then(({ add }) => {
      // console.log({ add });
    });

    import("mf_shared/ui").then(({ Button }) => {
      // console.log({ Button });
    });
  }, []);

  return <>add</>;
};
