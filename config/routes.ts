export const featureFlags = {
  showContributions: false,
  showBlogs: false,
  showCommunity: false,
};

export const routesConfig: any = {
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    ...(featureFlags.showContributions
      ? [
          {
            title: "Contributions",
            href: "/contributions",
          },
        ]
      : []),
    {
      title: "Skills",
      href: "/skills",
    },
    ...(featureFlags.showBlogs
      ? [
          {
            title: "Blogs",
            href: "/blogs",
          },
        ]
      : []),
    ...(featureFlags.showCommunity
      ? [
          {
            title: "Community",
            href: "/community",
          },
        ]
      : []),
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
