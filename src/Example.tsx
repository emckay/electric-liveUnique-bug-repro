import { useLiveQuery } from "electric-sql/react";
import { useElectric } from "./ElectricProvider";

import "./Example.css";

export const Example = () => {
  const { db } = useElectric()!;
  const query = useLiveQuery(
    db.categories.liveUnique({
      where: {
        slug_account_id: { slug: "asdf", account_id: "asdf" },
      },
    })
  );

  return (
    <div>
      <pre>{JSON.stringify(query, null, 2)}</pre>
    </div>
  );
};
