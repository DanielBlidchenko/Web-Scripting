"use client";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

export function AmplifyProvider({ children }: { children: React.ReactNode }) {
  Amplify.configure(outputs);
  return <>{children}</>;
}
