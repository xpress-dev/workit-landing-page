# Pre-development Assessment

1. ~~Make the default font as 'Manrope'.~~ : A very neat way of doing this is to change the sans and serif families (the default fonts) in the tailwind.config.js file. then the default font will be your sans font and you can add the font-serif class name based on your needs to your components.

2. ~~Figure out where does each picture belong to.~~ : bg-pattern-1.svg is the doodle that is bigger and starts from top left. bg-pattern-2.svg is the doodle that is smaller and starts from top right. bg-pattern-3.svg is the doodle that is smaller and starts from top left. Others are self-explanatory.

3. ~~Scan the page and recognize the probable components.~~ : there is the <Header /> (with a <CustomButton />), the <Jumbotron />, the <Perks /> and <PerksItem /> (<CustomCounter/> and <PerksItemText />), the <CallToAction /> component which is consisted of <CallToActionImage /> and <CallToActionMessage /> (with a <CustomButton />), lastly there is a <Footer /> component that contains the dark version of the logo along with socials.

The components can further be subclassified into /UI and /Home. /UI will contain the two <CustomButton /> and <CustomCounter /> and the rest will be in the /Home folder.

4. ~~ Scan the differences between mobile and desktop.~~ :
   4.1. <Header /> has 2 varying paddings based on the viewport. Also 2 different font-sizes
   4.2. <Jumbotron /> has 3 font sizes based on the viewport. The doodles are absent in mobile view. Two of them are added in the tablet view
   4.3. <CustomButton /> has 2 font sizes based on the viewport.
   4.4. The phone image in the <Jumbotron /> has 3 sizes based on the viewport.
   4.5. The <Perks /> component has 3 various formats based on the viewport.
   4.6. The <CallToAction /> component also has 3 various formats based on the viewport.
   4.7. Other components stay the same.

5. ~~ Recognize the colors used in the design.~~ :
   5.1. The main color is: #24053e
   5.2. The accent color is: #44ffa1
   5.3. The background color of the <Perks /> component is: #fcf8ff

6. ~~ Recognize the semantic HTML tags that should be used ~~ :
   6.1. <main> <header> <section> <section> <section> <footer>
