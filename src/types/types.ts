export enum linkValue {
  Pushkeen = "pushkeen",
  NFT = "nft",
  PublicArt = "publicart",
  Merch = "merch",
  Projects = "projects",
  WebAR = "web ar",
}

export type Project = {
  id: number;
  imageURL: string;
  content_locales: string;
  tag_count: number;
  name: string;
};

declare global {
  interface Window {
    XRIFrame?: any;
  }
}
