const fs = require('fs');
const readline = require('readline');
const path = require('path');

// Ensure we are looking in the script's folder
const FILE_PATH = path.join(__dirname, 'WizardSpells.json');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

async function run() {
    try {
        if (!fs.existsSync(FILE_PATH)) {
            console.error("File not found! Creating a new array file.");
            fs.writeFileSync(FILE_PATH, '[]', 'utf8');
        }

        const fileData = fs.readFileSync(FILE_PATH, 'utf8').trim();
        let spells = [];

        // Parse existing data or start fresh if file is empty
        if (fileData) {
            try {
                spells = JSON.parse(fileData);
                if (!Array.isArray(spells)) {
                    throw new Error("JSON is not an array");
                }
            } catch (e) {
                console.error("JSON Error: The file is corrupted. Restoring from backup is recommended.");
                process.exit(1);
            }
        }

        // Create Safety Backup
        const backupPath = `./backup/WizardSpells_backup_${Date.now()}.json`;
        fs.writeFileSync(backupPath, fileData);

        console.log("--- Enter Spell Details ---");

        const newSpell = {
            done: true,
            name: await askQuestion('Name: '),
            lvl: parseInt(await askQuestion('Level: ')),
            schools: `(${await askQuestion('Schools: ')})`,
            range: await askQuestion('Range: '),
            componenets: await askQuestion('Components: '), // Preserving typo
            duration: await askQuestion('Duration: '),
            casting: await askQuestion('Casting Time: '),
            aoe: await askQuestion('Area of Effect: '),
            save: await askQuestion('Save: '),
            description: await askQuestion('Description: ')
        };

        // Add to the array
        spells.push(newSpell);

        // Convert the WHOLE array back to a string
        // This automatically handles all brackets [ ] and commas ,
        const updatedJson = JSON.stringify(spells, null, 2);

        // Atomic write: Write to temp file then rename
        const tempPath = FILE_PATH + '.tmp';
        fs.writeFileSync(tempPath, updatedJson, 'utf8');
        fs.renameSync(tempPath, FILE_PATH);

        console.log("\nSuccess! Spell added and closing bracket verified.");

    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        rl.close();
    }
}

run();