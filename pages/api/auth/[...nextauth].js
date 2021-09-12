import NextAuth from "next-auth";

import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: "256966142819666",
      clientSecret: "fe37b85048740c31b79ebef59d042cc3",
    }),
  ],
});
