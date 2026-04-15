export const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    const headerHeight = 70; // Approximate header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
