const navLinks = [
    {
      label: "HOME",
      to: "/",
    },
    {
      label: "ABOUT US",
      to: "/about",
    },
    {
      label: "PRODUCTS",
      to: "/products",
      hasSubmenu: true,
    },
    // {
    //   label: "EXOTIC",
    //   to: "/exotic",
    //   hasSubmenu: true,
    // },
    // {
    //   label: "MINES",
    //   to: "/mines",
    // },
    // {
    //   label: "SERVICES",
    //   to: "/services",
    //   hasSubmenu: true,
    // },
    // {
    //   label: "TESTIMONIALS",
    //   to: "/testimonials",
    // },
    {
      label: "Contact Us",
      to: "/contact",
    },
  ];

  const submenuData = {
    PRODUCTS: {
      columns: [
        {
          title: "PRODUCTS",
          items: [
            {
              label: "All Products",
              to: "/products",
            },
            {
              label: "Elevation",
              to: "/products",
            },
            {
              label: "Exotic",
              to: "/products",
            },
            {
              label: "Italian Marble",
              to: "/products/italian-marbles",
            },
            {
              label: "Quartz",
              to: "/products",
            },
          ],
        },
      ],
    },

    EXOTIC: {
      columns: [
        {
          title: "EXOTIC",
          items: [
            {
              label: "Antico Gold",
              to: "/exotic/antico-gold",
            },
            {
              label: "Alaska White",
              to: "/exotic/alaska-white",
            },
          ],
        },
      ],
    },

    SERVICES: {
      columns: [
        {
          title: "SERVICES",
          items: [
            {
              label: "Measurements Ff Floors",
              to: "/contact",
            },
            {
              label: "Repolish Of Floors",
              to: "/contact",
            },
            {
              label: "Kitchen Top Fixing",
              to: "/contact",
            },
          ],
        },
      ],
    },
  };

  export {navLinks, submenuData}