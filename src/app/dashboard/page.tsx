import React from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import QuestionForm from "../components/QuestionForm";

export default async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession();

  if (!isAuthenticated) {
    redirect('/');
  }

  return <QuestionForm />;
}
