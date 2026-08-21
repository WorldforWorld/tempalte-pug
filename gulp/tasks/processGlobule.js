import fs from "fs";
import path from "path";
import { globSync } from "glob";

export const processGlobule = (done) => {
  try {
    const mixinFiles = globSync("src/html/blocks/libs/**/_*.pug", {
      ignore: "src/html/blocks/libs/_libs.pug",
    });
    const mixins = mixinFiles
      .map((filePath) => `include ${path.basename(filePath)}\n`)
      .join("");
    const filePath = "src/html/blocks/libs/_libs.pug";
    const currentContent = fs.existsSync(filePath)
      ? fs.readFileSync(filePath, "utf8")
      : "";

    if (currentContent === mixins) {
      console.log("Mixins have not changed.");
      done();
      return;
    }

    fs.writeFileSync(filePath, mixins, "utf8");
    console.log("Mixins are generated automatically!");
    done();
  } catch (error) {
    done(error);
  }
};
