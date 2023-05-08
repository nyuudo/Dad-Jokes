// Exercise 6 (random shapes)
// DOM variable (section)
const section = document.querySelector("section") as HTMLElement;
// Function to get random shape to dynamically change background
export const randomShapes = () => {
  const randomArray: string[] = [
    "assets/shape-001.svg",
    "assets/shape-002.svg",
    "assets/shape-003.svg",
    "assets/shape-004.svg",
    "assets/shape-005.svg",
  ];
  const selection: number = Math.floor(Math.random() * randomArray.length);
  console.log(randomArray[selection]);
  section.style.backgroundImage = `url(${randomArray[selection]})`;
  return randomArray[selection];
};
