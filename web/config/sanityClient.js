import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "ox2yh9q8",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skR4yHgEhpmIIhR2pQ67XmO3rG1GENbitC1aF5kB8gbqgWUrLAkRp7ugzImVGBB153PsPpPQdIYbq9rNSxzbuL0TOXUPohmIU41avWX62cmBbpOByDUcBYyqfesxQy2YftaqXHalVms2di3uBqwvWWObbekVsFyB6OnqNrnk0L29FVxJsS3v",
  useCdn: false,
});

export default client;
