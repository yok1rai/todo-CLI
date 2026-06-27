import getConfigPath, { jsonExists } from "#core/genFile.js";
import fs from "fs";
import path from "path";

export default class Storage {
    constructor(filePath = getConfigPath()) {
        if (!filePath.endsWith(".json")) {
            throw new Error("save file must be a JSON");
        }
        this.filePath = filePath;
    }

    load() {
        return jsonExists(this.filePath) || [];
    }

    save(data) {
        const dir = path.dirname(this.filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(data, null, 2),
            "utf-8"
        );
    }
}
