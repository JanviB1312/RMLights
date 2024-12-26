"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const mapObj = {
  services: "Our Services",
  about: "About Us",
  contact: "Contact Us",
  products: "Our Products",
  "tile-adhesives": "Tile Adhesives",
  "block-adhesives": "Block Adhesives",
  "tile-grout": "Tile Grout",
  "epoxy-grout": "Epoxy Grout",
  "epoxy-adhesive": "Epoxy Adhesive",
  waterproofing: "Waterproofing Segment",
  "tile-cleaners": "Tile Cleaners",
  "tile-fixing-accessories": "Tile Fixing Accessories",
  "f00-fixcon-eco": "F00 FIXCON ECO",
  gold: "Gold",
  silver: "Silver",
  platinum: "Platinum",
  "f01-fixcon": "F01 FIXCON",
  "f02-fixcon-plus": "F02 FIXCON PLUS",
  "f03-fixcon": "F03 FIXCON",
  "f04-fixcon-plus": "F04 FIXCON PLUS",
  b01: "B01",
  "maxbond-grout-admix": "MAXBOND - GROUT ADMIX",
  "t01-tile-grout": "T01 TILE GROUT",
  "j01-sparkle": "J01-SPARKLE",
  "t02-solpoxy-epoxy-tile-grout-2-component":
    "T02 - SOLPOXY EPOXY TILE GROUT (2 component)",
  "t02-solpoxy-epoxy-tile-grout-3-component":
    "T02 - SOLPOXY EPOXY TILE GROUT (3 component)",
  "soltite-epoxy-adhesive": "SOLTITE ( Epoxy adhesive )",
  "sb-plus-solbond": "SB+ SOLBOND",
  "sb-plus-plus-solbondplusplus": "SB++ SOLBOND++",
  "sk-plus-solkare": "SK+ SOLKARE",
  "t03-tile-power-tiles-cleaner": "T03 - TILE POWER TILES CLEANER",
  "tile-spacers": "TILE SPACERS",
  "tiles-leveling-kit": "TILES LEVELING KIT",
  trowel: "TROWEL",
  "waterproofing-segment": "Waterproofing Segment",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const currentPath = pathSegments.join("/");
  const title =
    mapObj[currentPath] ||
    (pathSegments.length > 0
      ? mapObj[pathSegments[pathSegments.length - 1]]
      : "Home");

  return (
    <>
      <div className="industify_fn_pagetitle">
        <div className="container">
          <div className="title_holder">
            <h3>{title}</h3>
            <div className="industify_fn_breadcrumbs">
              <ul>
                <li>
                  <Link href="/" title="Home">
                    Home
                  </Link>
                </li>
                {pathSegments.map((segment, index) => {
                  const href = "/" + pathSegments.slice(0, index + 1).join("/");
                  const segmentTitle = mapObj[segment] || segment;
                  return (
                    <React.Fragment key={index}>
                      <li className="separator">
                        <span></span>
                      </li>
                      {index === pathSegments.length - 1 ? (
                        <li>
                          <span className="bread-current">{segmentTitle}</span>
                        </li>
                      ) : (
                        <li>
                          <Link href={href} title={segmentTitle}>
                            {segmentTitle}
                          </Link>
                        </li>
                      )}
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
