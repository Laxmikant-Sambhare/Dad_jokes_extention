//import { fireEvent, getByText } from ''
require("@testing-library/jest-dom/extend-expect");
const domEvents = require("@testing-library/dom");
const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "./popup.html"), "utf8");

let dom;
let container;
const { JSDOM } = jsdom;
describe("popup.html", () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });


  it("renders a paragraph tag", () => {
    expect(container.querySelector("p")).not.toBeNull();
    expect(
      domEvents.getByText(container, "Loading...")
    ).toBeInTheDocument();
  });
  });