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
    {
      label: "EXOTIC",
      to: "/exotic",
      hasSubmenu: true,
    },
    {
      label: "MINES",
      to: "/mines",
    },
    {
      label: "SERVICES",
      to: "/services",
      hasSubmenu: true,
    },
    {
      label: "TESTIMONIALS",
      to: "/testimonials",
    },
    {
      label: "GALLERY",
      to: "/gallery",
    },
  ];

  const submenuData = {
    PRODUCTS: {
      columns: [
        {
          title: "PRODUCTS",
          items: [
            {
              label: "Indian Marbles",
              to: "/products/indian-marbles",
            },
            {
              label: "Italian Marbles",
              to: "/products/italian-marbles",
            },
            {
              label: "Indian Granite",
              to: "/products/indian-granite",
            },
            {
              label: "Italian Granite",
              to: "/products/italian-granite",
            },
            {
              label: "Application of Italian Marble",
              to: "/application-of-italian-marble",
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