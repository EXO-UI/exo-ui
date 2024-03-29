import { PropsWithChildren } from "react";

interface TemplateNameProps {
  prop?: string;
}

export function TemplateName({ prop }: PropsWithChildren<TemplateNameProps>) {
  return <div>TEMPLATE COMPONENT {prop}</div>;
}
