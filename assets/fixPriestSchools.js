const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'PriestSpells.json');

function fixPriestSchools() {
    try {
        if (!fs.existsSync(FILE_PATH)) {
            console.error("File not found!");
            return;
        }

        const fileData = fs.readFileSync(FILE_PATH, 'utf8');
        let spells = JSON.parse(fileData);

        // Create Backup before mass modification
        const timestamp = new Date().getTime();
        const backupPath = `./backup/PriestSpells_backup_${timestamp}.json`;
        fs.writeFileSync(backupPath, fileData);
        console.log(`Safety backup created: ${backupPath}`);

        let fixCount = 0;

        const updatedSpells = spells.map(spell => {
            let school = spell.schools || "";

            // Clean up: remove leading/trailing whitespace
            school = school.trim();

            if (school && (!school.startsWith('(') || !school.endsWith(')'))) {
                // Remove any existing single parentheses to avoid ((Text))
                const cleanText = school.replace(/^\(/, '').replace(/\)$/, '');
                const fixedSchool = `(${cleanText})`;

                if (spell.schools !== fixedSchool) {
                    spell.schools = fixedSchool;
                    fixCount++;
                }
            }
            return spell;
        });

        if (fixCount > 0) {
            fs.writeFileSync(FILE_PATH, JSON.stringify(updatedSpells, null, 2), 'utf8');
            console.log(`Success! Fixed parentheses for ${fixCount} spells.`);
        } else {
            console.log("No formatting issues found. Everything looks good!");
        }

    } catch (err) {
        console.error("An error occurred during the fix:", err.message);
    }
}

fixPriestSchools();