import React from "react";
import "./Zones.css";

const zones = [
  {
    id: "boulevard-world",
    title: "Boulevard World",
    link: "/en/zones/boulevard-world",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/14DUIlTcHUbI5BXufzpwWy/36e1e391f3b2ea884fc58223c737c616/KV-Webook-Sizes_1280x1280.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/4UwVIgWmMI4JAQXP3yXPWR/3cd131fc453a2fc2f31ae8fa6c5578af/blvd_world_colors.png",
    sponsorLogoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/3rth2yenJlvYpm0TM6eXoq/ddb4f053ec4183b88a4f0a59b4f72d2e/stc.png",
    new: false,
  },
  {
    id: "boulevard-city",
    title: "Boulevard City",
    link: "/en/zones/boulevard-city",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png",
    sponsorLogoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png",
    new: false,
  },
  {
    id: "dior-museum",
    title: "Dior Museum",
    link: "/en/zones/dior-museum",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/6o10mUqReveeV2LNuoMaXb/fdad8ad178ac595c88df4d5d256d9aa4/Webook_SQUARE_THUMBNAIL_1280x1280.jpeg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/5OziW71cfEHu2ZHlpZE9r4/3cc7ce289cb04c9593c7fecfa29c026f/dior.png",
    sponsorLogoSrc: null,
    new: false,
  },
  {
    id: "the-groves",
    title: "The Groves",
    link: "/en/zones/the-groves",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/3g9mJ3niUxmQ2ILNG2gc1S/899ab054d863c9f333ac0f4da45c4204/1280_x_1280_-1.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/1rWTEO7FjOBMPvGdMdcHIv/6a131f379557983b8194e089286b534f/the_groves_3d_Gold.png",
    sponsorLogoSrc: null,
    new: false,
  },
  {
    id: "wonder-garden",
    title: "Wonder Garden",
    link: "/en/zones/wonder-garden",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/37otv842YyHOCLvwlxglds/9bbf859ab4f6e720a5cca6c9afc1674f/WG_without_logo_WG_1280x1280.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/5lYdlk9aE4Gm5BXPrBUS9u/985f3ecfb29612e70dd4b51261907e69/woncer_garden.png",
    sponsorLogoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/6jIPu3d2OOWtgYqQUTbz4z/9cf7c33522ade9cd1df7ba27006416dc/new_muraba.png",
    new: false,
  },
  {
    id: "blvd-runway",
    title: "BLVD Runway",
    link: "/en/zones/blvd-runway",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/75fr7DMO4OZVNDvmpv4cx5/5bc82c9a7880168f7cf98abf36ba6217/Square_Thumbnail.png",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/3ip6OxVwP8YhIKmTo2HF5B/1bcd099801ab242f6bd24b962f95e114/BLVD_Runway_logo__2.16.10_PM.png",
    sponsorLogoSrc: null,
    new: false,
  },
  {
    id: "souq-alawaleen",
    title: "Souq Al Awaleen",
    link: "/en/zones/souq-alawaleen",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/5haOyVGvsqtKBVmYUnG4B/f6d7ce4bf4df3d67557ab73de29d5907/1280_xc_1280_px.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/2x3IWScrpgS5qmSHdHO1ZZ/157d3b0ac07f573cb54838320cd3900a/logo_-_souq_alawaleen.png",
    sponsorLogoSrc: null,
    new: false,
  },
  {
    id: "via-riyadh-rs",
    title: "Via Riyadh",
    link: "/en/zones/via-riyadh-rs",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/4xmbVpREbeZt8GyJY0pUBC/c8326ca5ef3cded900a02fcdf9183cde/1280_wwx_1280_px.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/6z0n8tKquAhrZ1x7fGIjch/09670cb1d007288951b014e9c60b390d/via_ryiadh_logo.png",
    sponsorLogoSrc: null,
    new: false,
  },
  {
    id: "the-venue-rs",
    title: "The Venue RS",
    link: "/en/zones/the-venue-rs",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/5wuBRcLYHSZSewUgypC9j8/65a09826b0bcbafa15584d1e9a0b5dbc/1280_x_128hh0_px.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/6eDxJWXdHS88l75iyavOxy/44228eeeda81be38cad907de431d2730/Group_17.png",
    sponsorLogoSrc: null,
    new: true,
  },
  {
    id: "kingdom-arena",
    title: "Kingdom Arena",
    link: "/en/zones/kingdom-arena",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/3PFy5Mlcd0GaZO6WioJ9Rt/590b72cbf5bf63fcbd9eb3176e02a92c/1280_wx_1280_px.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/2cwkQqOfarbvwKrRArrm0q/95b7ce8c48bca3c6e62fab086a2c8431/image__6_.png",
    sponsorLogoSrc: null,
    new: false,
  },
  {
    id: "riyadh-zoo",
    title: "Riyadh Zoo",
    link: "/en/zones/riyadh-zoo",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/1zeO37ueempLwnMwo4lSvN/7184b0dfe9268add7e7e6f5bc5ee5925/Square-Thumbnail.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/5qWHe4Mz7dV7UMIm7FYBqO/542524ea5d3657532cc09ca05837a974/ZOO_LOGO_COLOR_1.png",
    sponsorLogoSrc: null,
    new: false,
  },
  {
    id: "dunes-of-arabica",
    title: "Dunes of Arabica",
    link: "/en/zones/dunes-of-arabica",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/2oAxloGPIpFLjbS7zfJniB/1291d75013dface3bc0e1242c097541f/WhatsApp_Image_2024-11-25_at_18.08.58_acb72643.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/CFFciZlqL3ZsM5ARaumIe/7460d0838b8db6972d35cd160c99cb9a/Logo-01.png",
    sponsorLogoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/4DDmYgKKIek7m9wCAiTevw/dea1c4fbd8d0c50396716bbb8c2a363d/tawinia.png",
    new: false,
  },
  {
    id: "ana-arabia-rs-24",
    title: "ANA Arabia RS 24",
    link: "/en/zones/ana-arabia-rs-24",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/56GwAx2tlRijk85k0ZPvtU/72a1405def7784caa597d641e8779972/1280x1280.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/2aqEAdMXiXz0xvhlX4iTlb/cead25f7de0ac94c46e9237eec31f359/ana_arabia.png",
    sponsorLogoSrc: null,
    new: false,
  },
  {
    id: "suwaidi-park",
    title: "Suwaidi Park",
    link: "/en/zones/suwaidi-park",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/6TcaMYEPFZpJKNfmx1ylLU/7ac2f8fea5723e6856bcba87e4198ef6/1280X1280.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/5r8tSDwbIB3S1ahKWFvFib/761ec6260acec1e690a0e2da7e7b05dc/logo.png",
    sponsorLogoSrc: null,
    new: false,
  },
  {
    id: "al-hosn-studios-riyadh-season",
    title: "Al Hosn Studios",
    link: "/en/zones/al-hosn-studios-riyadh-season",
    imgSrc:
      "https://images.ctfassets.net/vy53kjqs34an/2qOMbX4oLfqrt0JZcurgVm/1dbf0eb82e82116c1ac3f2083bcd1432/1280_x_1280_px.jpg",
    logoSrc:
      "https://images.ctfassets.net/vy53kjqs34an/29JmIZyaUXDTJZBNyRql1I/866b0fd369cfc49dfdf12e7dc01c78b5/Al_Hesn_Studios_Logo_new.png",
    sponsorLogoSrc: null,
    new: false,
  },
];
const Zones = () => (
  <section
    className="zones-section"
    id="RS24-Zones-to-Explore"
    data-testid="section_zone_grid_RS24 Zones to Explore"
  >
    <div className="zones-header">
      <h2>14 Zones to Explore</h2>
    </div>
    <ul className="zones-grid">
      {zones.map((zone) => (
        <li key={zone.id} className="zone-item">
          <a
            href={zone.link}
            className="zone-link"
            data-testid={`section_zone_grid_item_${zone.id}`}
            data-new={zone.new}
          >
            {zone.new && <span className="zone-new">New!</span>}
            <img src={zone.imgSrc} alt={zone.title} className="zone-bg" />
            <div className="zone-overlay">
              <div className="zone-logos">
                <img
                  src={zone.logoSrc}
                  alt={`${zone.title} logo`}
                  className="zone-logo"
                />
                {zone.sponsorLogoSrc && (
                  <img
                    src={zone.sponsorLogoSrc}
                    alt={`${zone.title} sponsor`}
                    className="zone-sponsor-logo"
                  />
                )}
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Zones;
