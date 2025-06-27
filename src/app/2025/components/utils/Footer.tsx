import SocialMediaIcons from "./SocialMediaIcons";

export default async function Footer() {
  return (
    <section id="footer">
      <footer>
        <div className="flex items-center justify-around container mx-auto">
          <div>
            <p className="text-lg">Follow Us</p>
            <SocialMediaIcons iconExtraClasses={["text-xl"]} />
          </div>
          <div>
            <p className="text-lg">History</p>
            <SocialMediaIcons iconExtraClasses={["text-xl"]} />
          </div>
        </div>
      </footer>
    </section>
  );
}
