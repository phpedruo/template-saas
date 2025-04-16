import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { firebaseCert } from "./firebase";
import { FirestoreAdapter } from "@auth/firebase-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: FirestoreAdapter ({
    credential: firebaseCert,
  })
});