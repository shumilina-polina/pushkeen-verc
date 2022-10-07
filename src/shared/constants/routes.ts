import { AppKolpino } from './../../pages/Project/AppKolpino/AppKolpino';
import { BrodilkaKolpino } from './../../pages/Project/BrodilkaKolpino/BrodilkaKolpino';
import { BackToTheRootsNFT } from "pages/Nft/BackToTheRootsNFT/BackToTheRootsNFT";
import { DirtyDrops } from "pages/Nft/DirtyDrops/DirtyDrops";
import { Halloween } from "pages/Nft/Halloween/Halloween";
import { Interior } from "pages/Nft/Interior/Interior";
import { MetaFemHistory } from "pages/Nft/MetaFemHistory/MetaFemHistory";
import { NewCityArtist } from "pages/Nft/NewCityArtist/NewCityArtist";
import { NewEast } from "pages/Nft/NewEast/NewEast";
import { NewNames } from "pages/Nft/NewNames/NewNames";
import { BackToTheRoots } from "pages/Project/BackToTheRoots/BackToTheRoots";
import { BrodilkaKurortnyy } from "pages/Project/BrodilkaKurortnyy/BrodilkaKurortnyy";
import { BrodilkaMoscow } from "pages/Project/BrodilkaMoscow/BrodilkaMoscow";
import { BrodilkaViborg } from "pages/Project/BrodilkaViborg/BrodilkaViborg";
import { GeniusLoci } from "pages/Project/GeniusLoci/GeniusLoci";
import { GuideKur } from "pages/Project/GuideKur/GuideKur";
import { Ladoga } from "pages/Project/Ladoga/Ladoga";
import { MyMoscow } from "pages/Project/MyMoscow/MyMoscow";
import { MyViborg } from "pages/Project/MyViborg/MyViborg";
import { StreetArt } from "pages/Project/StreetArt/StreetArt";

type Routes = {
  path: string;
  locales: string;
  Component: () => JSX.Element;
};

export const nftRoutes: Routes[] = [
  {
    path: "/dirtyDrops",
    locales: "dirtydrops",
    Component: DirtyDrops,
  },
  {
    path: "/halloween",
    locales: "halloween",
    Component: Halloween,
  },
  {
    path: "/backToTheRoots",
    locales: "btrNft",
    Component: BackToTheRootsNFT,
  },
  {
    path: "/metaFemHistory",
    locales: "metafemhistory",
    Component: MetaFemHistory,
  },
  {
    path: "/newNamesInFashion",
    locales: "newnames",
    Component: NewNames,
  },
  {
    path: "/newCityDriver",
    locales: "newcity",
    Component: NewCityArtist,
  },
  {
    path: "/newEastTechAwards",
    locales: "neweast",
    Component: NewEast,
  },
  {
    path: "/nftInterior",
    locales: "interior",
    Component: Interior,
  },
];

export const projectRoutes: Routes[] = [
  {
    path: "/mymoscow",
    locales: "mymoscow",
    Component: MyMoscow,
  },
  {
    path: "/ladogaGuide",
    locales: "ladoga",
    Component: Ladoga,
  },
  {
    path: "/myViborg",
    locales: "myviborg",
    Component: MyViborg,
  },
  {
    path: "/streetArtMemo",
    locales: "streetart",
    Component: StreetArt,
  },
  {
    path: "/geniusLociMemo",
    locales: "geniusloci",
    Component: GeniusLoci,
  },
  {
    path: "/backToTheRootsLanding",
    locales: "backtotheroots",
    Component: BackToTheRoots,
  },
  {
    path: "/questViborg",
    locales: "brodilkaviborg",
    Component: BrodilkaViborg,
  },
  {
    path: "/questMoscow",
    locales: "brodilkamoscow",
    Component: BrodilkaMoscow,
  },
  {
    path: "/questKurortnyy",
    locales: "brodilkakurortnyy",
    Component: BrodilkaKurortnyy,
  },
  {
    path: "/kurortnyyGuide",
    locales: "guidekur",
    Component: GuideKur,
  },
  {
    path: "/questKolpino",
    locales: "brodilkakolpino",
    Component: BrodilkaKolpino,
  },
  {
    path: "/appKolpino",
    locales: "appkolpino",
    Component: AppKolpino,
  },
];