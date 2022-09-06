import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Gitlab from "next-auth/providers/gitlab";
import Discord from "next-auth/providers/discord";
import Reddit from "next-auth/providers/reddit";
import { SanityAdapter } from "next-auth-sanity";
import SanityClient from "@sanity/client";

const SANITY_TOKEN =
  "skCJw7lQT45s4QvsaixCyd6IBxB2aUnjYHZRTarDRUxajPLfk9hLOkXIyLxgpGslmswzhmOz2K1qLJcOnFRHqwlF7aA4dpU8JffNCgALxCvu95cXfDSf1yXF8235JAN9CspsFmhrJjx7jqujkdukV2hIG4TsiU4a35UzIha5Z81o2GRnLGhc";

const sanityClient = SanityClient({
  projectId: "ox2yh9q8",
  dataset: "production",
  apiVersion: "2021-03-25",
  token: SANITY_TOKEN,
  useCdn: false,
});

const options = {
  providers: [
    Google({
      clientId:
        "175208349989-iisadjme5shj27isij2tfo506eoihvpd.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GitHub({
      clientId: "fdf56899bea2f33f2afe",
      clientSecret: "201195128c9feac0d6c0c99c7839670315b7636f",
    }),
    Discord({
      clientId: "1016718745751793684",
      clientSecret: "J_x4b5w0VpsK03Cgg_shddpehZ7uG1oS",
    }),
    Reddit({
      clientId: "pZUvXppu6BstLpS2Kt2z2Q",
      clientSecret: "3UC9wZ9pgC0MO9quvX2oBTiJ1dFoWw",
    }),
    Gitlab({
      clientId:
        "1d01a507d0d24f4ce521e03f172417390039cc760516ab945d5df356264e6f17",
      clientSecret:
        "0882f33271fc6e8648ae53b70126695a03fa44ba382c113c2605cbcdb4047046",
    }),
  ],
  session: {
    strategy: "jwt",
  },

  adapter: SanityAdapter(sanityClient),

  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },

  callbacks: {
    async signIn(as) {
      console.log("signIn", as);
      return true;
    },
    async redirect(obj) {
      const { url, baseUrl } = obj;
      console.log("redirect", obj);
      return baseUrl;
    },
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
};

export default NextAuth(options);
