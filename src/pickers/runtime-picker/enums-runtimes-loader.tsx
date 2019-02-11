import {DataLoader} from "../../core/data-loader/data-loader";
import React from "react";
import {RuntimeItem} from "./runtime-picker";
import {useLauncherClient} from "../../launcher-client-context";

export function runtimeMatcherByCategory(category: string) {
  return (r) => r.metadata.categories.indexOf(category) >= 0;
}

export function EnumsRuntimesLoader(props: { category: string, children: (items: RuntimeItem[]) => any }) {
  const client = useLauncherClient();
  const loader = () => client.enum('runtime.name').then(r => r.filter(runtimeMatcherByCategory(props.category)));
  return (
    <DataLoader loader={loader} default={[]}>
      { props.children }
    </DataLoader>
  );
}