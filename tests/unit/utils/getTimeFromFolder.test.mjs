import { describe, it, expect } from 'vitest'
import { getTimeFromFolder } from '../../../src/utils/getTimeFromFolder'
import path from "path";
import fsPromises from 'fs/promises'
describe("Should Test utils/getTimeFromFolder", () => {
    it("Should Get Time of Create Folder", async () => {
        const filePath = path.resolve("./tests/unit/utils/cache/file.json");
        let fileStats;
        try {
            fileStats = await fsPromises.stat(filePath);
        } catch (error) {
            await fsPromises.writeFile(filePath, { "log": "example" });
            fileStats = await fsPromises.stat(filePath);
        }
        const timeOfCreate = fileStats.birthtime.getTime();
        const currentTime = Date.now();
        const diffMs = currentTime - timeOfCreate;
        const minutes = Math.floor(diffMs / (1000 * 60));
        expect(await getTimeFromFolder(filePath)).toBe(minutes);
    });
})