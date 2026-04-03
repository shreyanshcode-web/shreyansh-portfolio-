const config = {
  title: "Shreyansh Singh | Data Entry Specialist & Aspiring Data Scientist",
  description: {
    long: "Explore the portfolio of Shreyansh Singh, a detail-oriented data professional with hands-on experience in data processing, cleaning, and analysis across real-world projects. Skilled in Excel, Python, SQL, and AI-driven applications for financial analysis and automation.",
    short:
      "Discover the portfolio of Shreyansh Singh, a data-focused builder working across Excel, Python, AI, and analytics.",
  },
  keywords: [
    "SHREYANSH SINGH",
    "Shreyansh Singh portfolio",
    "portfolio",
    "Data Entry",
    "Data Science",
    "Data Analysis",
    "Data Cleaning",
    "Excel",
    "Python",
    "SQL",
    "Machine Learning",
    "AI",
    "Prompt Engineering",
  ],
  author: "Shreyansh Singh",
  email: "shreyansh.singh.20.12.2005@gmail.com",
  site: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/shreyansh-singh-7-7-7-7-7-7-/",
    instagram: "",
    facebook: "",
    github: "https://github.com/shreyanshcode-web",
  },
};
export { config };
