import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Rokan0-0",
    icon: Icons.gitHub,
    link: "https://github.com/Rokan0-0",
  },
  {
    name: "LinkedIn",
    username: "Porter Oluwadamilola",
    icon: Icons.linkedin,
    link: "https://linkedin.com/in/oluwadamilola-porter",
  },
  {
    name: "Twitter",
    username: "@DamilolaPorter",
    icon: Icons.twitter,
    link: "https://twitter.com/DamilolaPorter",
  },
  {
    name: "Gmail",
    username: "dporteiru",
    icon: Icons.gmail,
    link: "mailto:dporteiru@gmail.com",
  },
];
