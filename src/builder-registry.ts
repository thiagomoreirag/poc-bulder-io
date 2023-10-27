"use client";
import { Builder } from "@builder.io/react";
import Catalog from "./components/Catalog/Catalog";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Catalog, {
  name: "Catalogo de produtos",
});

Builder.registerComponent(Form, {
  name: "Form",
  docsLink:
    "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero",
  friendlyName: "Formulario",
  image:
    "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero",
  screenshot:
    "https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero",
  inputs: [
    {
      name: "formName",
      type: "string",
    },
    {
      name: "style",
      type: "color",
    },
  ],
});
