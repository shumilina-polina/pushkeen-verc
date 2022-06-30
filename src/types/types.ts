export enum linkValue {
  Pushkeen = "pushkeen",
  NFT = "nft",
  PublicArt = "publicart",
  Projects = "projects",
}

export type Project = {
  id: number;
  imageURL: string;
  title: string;
  name: string;
};
