import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "mt7dr254",
    dataset: "production",
    apiVersion: "2022-08-14",
    useCdn: true,
    token: "skGKZ5Eu9ohhISZ7hTapClM4GJMeXU2hhBCAzdEBeFp9y4Tpstcu2ULIG3nC7hEGTWI48WZ5NFWJ3fit010LM1MF6mqm7JShYIFm2RyIKU6ShlDz8QJLDAFIz59pShvNPp9MZDx8tiY5Ee1moNGp4PW2up8oazNSbI5jH1JEqr5bkYBoeY1H"
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)