export enum linkValue {
  Pushkeen = "pushkeen",
  NFT = "nft",
  PublicArt = "publicart",
  Projects = "projects",
}

export type Project = {
  id: number;
  imageURL: string;
  content_locales: string;
  tag_count: number;
  name: string;
};
