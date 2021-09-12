import NextAuth from "next-auth";

import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: "2903859583197046",
      clientSecret: "717b83b40a88f5c76e16a7b88e6a3d6f",
    }),
  ],
});
